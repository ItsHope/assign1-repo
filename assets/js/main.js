let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active")
}

svg.selectAll("rect")
.data(fruits)
.enter()
.append('rect')
.attrs({
    'x':(d) => scaleX(0),
    'y':(d) => scaleY(d.name),
    'width':(d) => 0,
    'height':(d) => scaleY.bandwidth(),
    'fill':(d) => color(d.count)
})
.transition().duration(1000).attr('width', (d) => scaleX(d.count) - scaleX(0))



