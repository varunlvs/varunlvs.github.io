var input = d3.select("input");
var preview = d3.select(".preview");
var added = d3.select(".added");

d3.select(".notes-adder")
    .on("submit", function() {
        d3.event.preventDefault();

        d3.select(".notes-list")
            .append("p")
            .classed("note", true)
            .classed("added", true)
            .text(input.property("value"));

        input.property("value", "");
        setPreview("");
    })

d3.select(".remove")
    .on("click", function() {
        d3.selectAll(".note")
            .remove();
    })

input.on('input', function(){
	var note = d3.event.target.value;
	setPreview(note);
})

function setPreview(val){
	preview.text(val)
		.classed("hide", val === "");
}

// d3.selectAll(".note")
//     .on("click", function() {
//         var isDone = d3.select(this)
//             .classed("done");
//         d3.select(this)
//             .classed("done", !isDone);
//     })