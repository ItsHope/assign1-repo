var customData = [
	{name: "Social Media Manager", value: "30"},
	{name: "Online Tutor", value: "18"},
	{name: "Online Beauty Advisor", value: "8"},
	{name: "Online Recruiter", value: "15"},
	{name: "Website Designer", value: "12"},
	{name: "Instagram Influencer", value: "10.2"},
	{name: "Graphic Designer", value: "13.9"}
];

var colors = ["#0c91e9", "#ff4971", "#80fc46", "#8a8afe",  "red", "#edf73a", "#e7e9ed"];

function plot() {

	var parElemWidth = document.querySelector("#chart")
	.parentElement.offsetWidth;
	
	parElemWidth = parElemWidth > 350 ? 350 : parElemWidth;
	
	var width = parElemWidth;

	var height = width;

	var radius = width / 2;

	var colorScale = d3.scaleOrdinal()
	.range(colors);
	
	var tooltip = d3.select(".myTooltip");

	var arc = d3.arc()
	.innerRadius(0)
	.outerRadius(radius - 10);

	var pie = d3.pie()
	.sort(null)
	.value(function(d) { return d.value;});
	var svg = d3.select("#chart").append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("filter", "url('#filter')")
	.append("g")
	.attr("class", "group")

	.attr("transform", "translate(" + width/2  + "," + (height / 2 ) + ")");
	
	var g = svg.selectAll(".arc")
										
	.data(pie(customData))
	.enter().append("g")
	.attr("class", "arc");

	g.append("path")
										
	.attr("d", arc)
	.style("fill", function(d){ return colorScale(d.data.value)})
    .on("mouseover", function(d){
	tooltip.html("<span class='tooltipContent'>" + d.data.value + "%</span>");
	return tooltip.style("visibility", "visible").style("opacity", "1");
	})
	.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-35)+"px").style("left",(d3.event.pageX)-60 + "px");})
	.on("mouseout", function(){return tooltip.style("visibility", "hidden").style("opacity", "0");});
}

document.addEventListener("DOMContentLoaded", function(event) { 
  plot();
  // for ie 9
  if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
    });
  }
  else if(window.addEventListener) {
    window.addEventListener('resize', function() {
      document.querySelector("#chart").innerHTML = "";
      plot();
    }, true);
  }
});

