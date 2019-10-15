var margin = { top: 10, right: 10, bottom: 100, left: 100};
var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

var g = d3.select('#chart-area').append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

var xAxisLabel = g.append('text')
					.attr('class', 'x axis-label')
					.attr('x', width / 2)
					.attr('y', height + 80)
					.attr('font-size', '20px')
					.attr('text-anchor', 'middle')
					.text('Month');

var yAxisLabel = g.append('text')
					.attr('class', 'y axis-label')
					.attr('x', - (height / 2))
					.attr('y', -80)
					.attr('font-size', '20px')
					.attr('text-anchor', 'middle')
					.attr('transform', 'rotate(-90)')
					.text('Revenue');

d3.json('data/revenues.json').then(data => {
	data.forEach(d => { d.revenue = +d.revenue; d.profit = +d.profit; } );
	console.log(data);

	var x = d3.scaleBand().domain(data.map(d => d.month)).range([0, width]).paddingOuter(.5).paddingInner(.3);
	var y = d3.scaleLinear().domain([0, d3.max(data, d => d.revenue)]).range([height, 0]);

	var xAxisCall = d3.axisBottom(x);
	g.append('g').attr('transform', `translate(0, ${height})`).call(xAxisCall);

	var yAxisCall = d3.axisLeft(y).tickFormat(d => `$${d}`);
	g.append('g').call(yAxisCall);

	var rects = g.selectAll('rect').data(data);
	rects.enter()
		 .append('rect')
		 	.attr('x', d => x(d.month))
		 	.attr('y', d => y(d.revenue))
		 	.attr('width', 40)
		 	.attr('height', d => height - y(d.revenue))
		 	.attr('fill', 'slateblue');
})