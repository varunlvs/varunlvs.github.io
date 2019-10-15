var margin = { top: 10, left: 100, bottom: 100, right: 10 }
var width = 600 - margin.left - margin.right
var height = 400 - margin.top - margin.bottom

var flag = true

var t = d3.transition().duration(750)

var g = d3.select('#chart-area').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g').attr('transform', `translate(${ margin.left }, ${ margin.top })`)

var x = d3.scaleBand().range([0, width]).paddingInner(.3).paddingOuter(.5)
var y = d3.scaleLinear().range([height, 0])

var xAxisGroup = g.append('g').attr('class', 'x-axis').attr('transform', `translate(0, ${height} )`)
var yAxisGroup = g.append('g').attr('class', 'y-axis')

var xLabel = g.append('text')
					.attr('class', 'x axis-label')
					.attr('x', width / 2)
					.attr('y', height + 75)
					.attr('text-anchor', 'middle')
					.attr('font-size', '20px')
					.text('Month')

var yLabel = g.append('text')
					.attr('class', 'y axis-label')
					.attr('x', - (height / 2))
					.attr('y', -75)
					.attr('text-anchor', 'middle')
					.attr("transform", `rotate(-90)`)
					.attr('font-size', '20px')
					.text('Revenue')

d3.json('data/revenues.json').then(data => {
	data.forEach(d => {
		d.revenue = +d.revenue
		d.profit = +d.profit
	})

	d3.interval(() => {
		var newData = flag ? data : data.slice(1)

		update(newData)
		flag = !flag
	}, 1000)

	update(data)

})

function update(data) {

	var value = flag ? 'revenue' : 'profit'

	x.domain(data.map(d => d.month))
	y.domain([0, d3.max(data, d => d[value])])

	var xAxisCall = d3.axisBottom(x)
	xAxisGroup.transition(t).call(xAxisCall)

	var yAxisCall = d3.axisLeft(y).tickFormat(d => '$' + d)
	yAxisGroup.transition(t).call(yAxisCall)

	var rects = g.selectAll('rect').data(data, d => d.month)

	rects.exit()
			.attr('fill', '#34495e')
		.transition(t)
			.attr('y', y(0))
			.attr('height', 0)
		.remove()

	rects.enter()
		.append('rect')
			.attr('fill', '#e74c3c')
			.attr('y', y(0))
			.attr('height', 0)
			.attr('x', d => x(d.month))
			.attr('width', x.bandwidth)
		.merge(rects).transition(t)
			.attr('x', d => x(d.month))
			.attr('width', x.bandwidth)
			.attr('y', d => y(d[value]))
			.attr('height', d => height - y(d[value]))

	var label = flag ? 'Revenue' : 'Profit'
	yLabel.text(label)
}