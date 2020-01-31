var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var margin = { top: 10, left: 100, bottom: 150, right: 10 }
var width = 750 - margin.left - margin.right
var height = 400 - margin.top - margin.bottom

var month = 1
var interval
var flag = true
var toggle = true

var t = d3.transition().duration(500)

var g = d3.select('#chart-area').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g').attr('transform', `translate(${ margin.left }, ${ margin.top })`)

var tip = d3.tip().attr('class', 'd3-tip').html(d => {
	var text = `<strong>Profit Rate : </strong><span style='color: #0984e3; text-transform: capitalize'>${(d.totalProfit/d.totalBilled*100).toFixed(2) + '%'}</span></br></br>`
	text += `<strong>Total Profit : </strong><span style='color: #2ecc71; text-transform: capitalize'>${d3.format('$,.0f')(d.totalProfit)}</span></br></br>`
	text += `<strong>Total Cost : </strong><span style='color: #e74c3c; text-transform: capitalize'>${d3.format('$,.0f')(d.totalCost)}</span></br>`;
	text += `<strong>Total Billed : </strong><span style='color: #e74c3c'>${d3.format('$,.0f')(d.totalBilled)}</span></br>`;

	text += `</br><strong>Total No of Shipments : </strong><span style='color: #e74c3c'>${(d.totalShipments)}</span></br>`;
	if(d.air > 0)
		text += `<strong>Air Shipments : </strong><span style='color: #f1c40f; text-transform: capitalize'>${d.air}</span></br>`;
	if(d.fcl > 0)
		text += `<strong>FCL Shipments : </strong><span style='color: #f1c40f; text-transform: capitalize'>${d.fcl}</span></br>`;
	if(d.lcl > 0)
		text += `<strong>LCL Shipments : </strong><span style='color: #f1c40f; text-transform: capitalize'>${d.lcl}</span></br>`;
	if(d.noc > 0)
		text += `</br><strong>No of containers : </strong><span style='color: #1abc9c; text-transform: capitalize'>${parseInt(d.noc)}</span></br>`;
	return text;
});
g.call(tip);

var x = d3.scaleBand().range([0, width]).paddingInner(.3).paddingOuter(.5)
var y = d3.scaleLinear().range([height, 0])

var colors = d3.scaleLinear().range(['#3498db', '#2ecc71'])
					
var xAxisGroup = g.append('g').attr('class', 'x-axis').attr('transform', `translate(0, ${height} )`)
var yAxisGroup = g.append('g').attr('class', 'y-axis')

var xLabel = g.append('text')
					.attr('class', 'x axis-label')
					.attr('x', width / 2)
					.attr('y', height + 110)
					.attr('text-anchor', 'middle')
					.attr('font-size', '20px')
					.text(`Export - ${months[month - 1]} 2019`)

var yLabel = g.append('text')
					.attr('class', 'y axis-label')
					.attr('x', - (height / 2))
					.attr('y', -75)
					.attr('text-anchor', 'middle')
					.attr("transform", `rotate(-90)`)
					.attr('font-size', '20px')
					.text('Profit')


d3.select('#play-button')
	.on('click', function() {
		var button = d3.select(this);
		if(button.text() == 'Play') {
			d3.select('#month-select').style('display', 'none')
			button.text('Pause');
			interval = setInterval(step, 1000);
		} else {
			button.text('Play');
			d3.select('#month-select').style('display', 'block')
			clearInterval(interval);
		}
	});

d3.select('#toggle-button')
	.on('click', function() {
		var button = d3.select(this);
		if(button.text() == 'Showing Agents') {
			button.text('Showing Shippers');
			flag = false
			update(formatData(1, flag))
			updateMonth(1)
		} else {
			button.text('Showing Agents');
			flag = true
			update(formatData(1, flag))
			updateMonth(1)
		}
	});

$('#reset-button')
	.on('click', () => {
		month = 1;
		update(formatData(month, flag))
		updateMonth(month)
	});

function step() {
	month = (month < 12) ? month + 1 : month = 1
	update(formatData(month, flag))
	updateMonth(month)
}

// update(formatData(month, flag))
update(overallAgentsData)


$('#month-select')
	.on('change', () => {
		console.log(parseInt($('#month-select').val()))
		updateMonth(parseInt($('#month-select').val()))
		if(d3.select('#play-button').text() == 'Play'){
			update(formatData(parseInt($('#month-select').val()), flag))
		}
	});

function update(data) {

	var t = d3.transition(t).duration(500);

	let value = flag ? 'agent' : 'agent'
	// console.log(value)

	x.domain(data.map(d => d[value]))
	y.domain([0, d3.max(data, d => {
		if(!toggle){
			if(d.totalProfit < 38000)
				return d.totalProfit
		} else {
			return d.totalProfit
		}
	})])
	colors.domain([0, d3.max(data, d => d.totalProfit)])

	var xAxisCall = d3.axisBottom(x)
	xAxisGroup.transition(t).call(xAxisCall)
			.selectAll('text')
				.attr('y', '10')
				.attr('x', '-10')
				.attr('text-anchor', 'end')
				.attr('transform', 'rotate(-40)')

	var yAxisCall = d3.axisLeft(y).tickFormat(d => '$' + d)
	yAxisGroup.transition(t).call(yAxisCall)

	var rects = g.selectAll('rect').data(data, d => d[value])

	rects.exit()
			.attr('fill', '#34495e')
		.transition(t)
			.attr('y', y(0))
			.attr('height', 0)
		.remove()

	rects.enter()
		.append('rect')
			.attr('y', y(0))
			.attr('height', 0)
			.attr('x', d => x(d[value]))
			.attr('width', x.bandwidth)
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide)
		.merge(rects).transition(t)
			.attr('fill', d => colors(d.totalProfit))
			.attr('x', d => x(d[value]))
			.attr('width', x.bandwidth)
			.attr('y', d => y(d.totalProfit))
			.attr('height', d => height - y(d.totalProfit))

	flag ? yLabel.text('Profit - Agents') : yLabel.text('Profit - Shippers')

}


function updateMonth(month) {
	xLabel.text(`Export - ${months[month - 1]} 2019`)
}

var overallProfitExport = 0
var overallProfit = rawData.map(d => {
	overallProfitExport += d.PROFIT
})
// console.log(overallProfitExport.toFixed(2))

d3.select('#export-profit').text(`${(d3.format("$,.0f"))(overallProfitExport.toFixed(2))}`)
d3.select('#export-addon').text(` for ${rawData.length} exports`)

function showAll(){
	location.reload();
}

function toggler(){
	toggle = !toggle
	update(overallAgentsData)
}
