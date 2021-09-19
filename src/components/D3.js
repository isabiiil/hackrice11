// import d3 from 'd3';

// export default function Node() {
//   var node = document.createElement('div');

//   var n = 100;
//   random = d3.randomNormal(0,.3)
//   data = d3.range(n).map(random); // create x and y dataset
//   document.getElementById("demo").innerHTML = data
//   console.log(data)

//   //select and format the svg 
//   var svg = d3.select("svg"),
//   margin = {top: 20, right: 30, bottom: 40, left: 40},
//   width = +svg.attr("width") - margin.left - margin.right,
//   height = +svg.attr("height") - margin.top - margin.bottom,
//   g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   //X axis
//   //d3.scaleTime().domain(d3.extent(data, function(d) {return d.date; })) 
//   var x = d3.scaleTime().domain([0, n -1]).range([0, width]);
//   var y = d3.scaleLinear().domain([-1, 1]).range([height, 0]);

//   var line = d3.line()
//   .x(function(d, i) {return x(i); })
//   .y(function(d, i) {return y(d); });
//   g.append("defs").append("clipPath")
//   .attr("id", "clip").append("rect").attr("width", width).attr("height", height);

//   g.append("g").attr("class", "xaxis")
//   .attr("transform", "translate(0, " + y(0) + ")").call(d3.axisBottom(x));

//   g.append("g").attr("class", "yaxis")
//   .call(d3.axisLeft(y));
//   g.append("g").attr("clip-path", "url(#clip)")
//   .append("path").datum(data).attr("class", "line")
//   .transition()
//   .duration(500)
//   .ease(d3.easeLinear)
//   .on("start", animate);

//   function animate() {
//     //push new data point onto end
//     data.push(random());

//     //redraw the line
//     d3.select(this)
//     .attr("d", line).attr("transform", null);

//     d3.active(this)
//     .attr("transform", "translate(" + x(-1) + ",0)")
//     .transition().on("start", animate);

//     ///pop old data off front.
//     data.shift();
//   }
// }