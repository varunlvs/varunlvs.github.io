var margin = { top: 10, left: 100, bottom: 100, right: 10 };
var width = 600 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var g = d3.select('#chart-area').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g').attr("transform", `translate(${margin.left}, ${margin.top})`);

var xLabel = g.append('text')
				.attr('x', width / 2)
				.attr('y', height + 75)
				.attr('class', 'x axis-label')
				.attr('text-anchor', 'middle')
				.attr('font-size', '20px')
				.text('Month');

var yLabel = g.append('text')
				.attr('x', - (height / 2))
				.attr('y', -75)
				.attr('class', 'x axis-label')
				.attr('text-anchor', 'middle')
				.attr('transform', 'rotate(-90)')
				.attr('font-size', '20px')
				.text('Revenue');

var flag = true;

var t = d3.transition().duration(750);

var x = d3.scaleBand().range([0, width]).paddingInner(.3).paddingOuter(.5);
var y = d3.scaleLinear().range([height, 0]);

var xAxisGroup = g.append('g').attr('class', 'x-axis').attr('transform', `translate(0, ${height})`);
var yAxisGroup = g.append('g').attr('class', 'y-axis');


d3.json('data/revenues.json').then(data => {
	data.forEach(d => {d.revenue = +d.revenue; d.profit = +d.profit;})

	d3.interval(() => {
		var newData = flag ? data : data.slice(1);
		update(newData);
		flag = !flag;
	}, 1000)

	update(data);
});

function update(data){

	var value = flag ? 'revenue' : 'profit';

	x.domain(data.map(d => d.month));
	y.domain([0, d3.max(data, d => d[value])]);

	var xAxisCall = d3.axisBottom(x);
	xAxisGroup.transition(t).call(xAxisCall);

	var yAxisCall = d3.axisLeft(y).tickFormat(d => `$${d}`);
	yAxisGroup.transition(t).call(yAxisCall);

	var rects = g.selectAll('circle').data(data, d => d.month);

	rects.exit()
			.attr('fill', 'grey')
		.transition(t)
			.attr('cy', y(0))
		.remove();

	rects.enter()
		 .append('circle')
			 .attr('cx', d => x(d.month) + x.bandwidth() / 2)
			 .attr('cy', d => y(0))
			 .attr('r', 5)
			 .attr('fill', 'tomato')
		 .merge(rects).transition(t)
			 .attr('cx', d => x(d.month) + x.bandwidth() / 2)
			 .attr('cy', d => y(d[value]));

	var label = flag ? 'Revenue' : 'Profit';
	yLabel.text(label);
}