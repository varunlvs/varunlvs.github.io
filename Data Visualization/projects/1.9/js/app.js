var margin = { top:10, bottom: 100, left: 100, right: 10 };
var width = 800 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var g = d3.select('#chart-area').append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g').attr("transform", `translate(${margin.left}, ${margin.top})`);

var time = 0;
var interval;
var formattedData;
var t = d3.transition().duration(150);

var tip = d3.tip().attr('class', 'd3-tip').html(d => {
	var text = `<strong>Continent : </strong><span style='color: #e74c3c; text-transform: capitalize'>${d.continent}</span></br></br>`
	text += `<strong>Country : </strong><span style='color: #e74c3c; text-transform: capitalize'>${d.country}</span></br>`;
	text += `<strong>Life Expectancy : </strong><span style='color: #e74c3c'>${d3.format('.2f')(d.life_exp)}</span></br>`;
	text += `<strong>Income : </strong><span style='color: #e74c3c'>${d3.format('$,.0f')(d.income)}</span></br>`;
	text += `<strong>Population : </strong><span style='color: #e74c3c'>${d3.format(',.0f')(d.population)}</span></br>`;

	return text;
});
g.call(tip);

var x = d3.scaleLog().base(10).range([0, width]).domain([300, 150000]);
var y = d3.scaleLinear().range([height, 0]).domain([0, 90]);
var area = d3.scaleLinear().range([25 * Math.PI, 1500 * Math.PI]).domain([2000, 1400000000]);
var continentColor = d3.scaleOrdinal(d3.schemeDark2);

var xLabel = g.append('text')
	.attr('class', 'x axis-label')
	.attr('font-size', '20px')
	.attr('x', width / 2)
	.attr('y', height + 75)
	.attr('text-anchor', 'middle')
	.text('GDP Per Capita ($)');

var yLabel = g.append('text')
	.attr('class', 'y axis-label')
	.attr('font-size', '20px')
	.attr('x', - (height / 2))
	.attr('y', -75)
	.attr('transform', 'rotate(-90)')
	.attr('text-anchor', 'middle')
	.text('Life Expectancy');

var timeLabel = g.append('text')
	.attr('font-size', '40px')
	.attr('opacity', '.4')
	.attr('x', width - 40)
	.attr('y', height - 10)
	.attr('text-anchor', 'middle')
	.text('1800');

var xAxisCall = d3.axisBottom(x).tickValues([400, 4000, 40000]).tickFormat(d3.format('$'));
var xAxis = g.append('g').attr('class', 'x-axis').attr("transform", `translate(0, ${height})`);
xAxis.transition(t).call(xAxisCall);

var yAxisCall = d3.axisLeft(y).tickFormat(d => +d);
var yAxis = g.append('g').attr('class', 'y-axis');
yAxis.transition(t).call(yAxisCall);

var continents = ['americas', 'europe', 'asia', 'africa'];

var legend = g.append('g')
	.attr("transform", `translate(${width - 10}, ${height - 125})`)

continents.forEach((continent, i) => {
	var legendRow = legend.append('g')
		.attr("transform", `translate(-10, ${i * 20})`);

	legendRow.append('rect')
		.attr('width', 20)
		.attr('height', 10)
		.attr('fill', continentColor(continent));

	legendRow.append('text')
		.attr('x', -10)
		.attr('y', 10)
		.attr('text-anchor', 'end')
		.text(continent)
		.style('text-transform', 'capitalize');
})

d3.json('data/data.json').then(data => {

	formattedData = data.map(year => year['countries']
								.filter(country => country.income && country.life_exp)
								.map(country => {
									country.income = +country.income;
									country.life_exp = +country.life_exp;
									return country;
								})
								);

	console.log(formattedData);

	update(formattedData[0]);
})

d3.select('#play-button')
	.on('click', function() {
		var button = d3.select(this);
		if(button.text() == 'Play') {
			button.text('Pause');
			interval = setInterval(step, 100);
		} else {
			button.text('Play');
			clearInterval(interval);
		}
	});

$('#reset-button')
	.on('click', () => {
		time = 0;
		update(formattedData[0]);
	});

$('#continent-select')
	.on('change', () => update(formattedData[time]));

$('#date-slider').slider({
	max: 2014,
	min: 1800,
	step: 1,
	slide: function(event, ui) {
		time = ui.value - 1800;
		update(formattedData[time]);
		console.log('Hello')
	}
})

function step () {
	time = time < 214 ? time + 1: 0;
	update(formattedData[time]);
}

function update(data) {

	var t = d3.transition(t).duration(150);

	var continent = $('#continent-select').val();

	var data = data.filter(d => {
		if(continent == 'all') return true;
		else return d.continent == continent;
	})

	var circles = g.selectAll('circle').data(data, d => d.country);

	circles.exit()
		.attr('class', 'exit')
		.attr('fill', 'grey')
	.remove();

	circles.enter()
		.append('circle')
			.attr('class', 'enter')
			.attr('fill', d => continentColor(d.continent))
			.on('mouseover', tip.show)
			.on('mouseout', tip.hide)
		.merge(circles).transition(t)
			.attr('cx', d => x(d.income))
			.attr('cy', d => y(d.life_exp))
			.attr('r', d => Math.sqrt(area(d.population) / Math.PI))

	timeLabel.text(1800 + time);
	$('#year')[0].innerHTML = +(1800 + time);
	$('#date-slider').slider('value', +(1800 + time));
}