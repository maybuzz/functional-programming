d3.json('data3.json').then( data => {

  var writers = d3.nest()
    .key(book => {
      return book.values[0].bookAuthor})
    .entries(data)

  var allRowling = writers[0].values
  var allTolkien = writers[1].values
  console.log(allRowling, allTolkien);

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 1000
    height = 500 - margin.top - margin.bottom;

var x0 = d3.scaleBand()
            .range([0, width])
            .padding(.1)


var x1 = d3.scaleBand()

var y = d3.scaleLinear()
          .range([height, 0])

var xAxis = d3.axisBottom()
              .scale(x0)
              .tickSize(0)

var yAxis = d3.axisLeft()
              .scale(y)

var color = d3.scaleOrdinal()
              .range(['tomato','peachpuff'])

var svg = d3.select('#vis').append('svg')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom)
              .style('overflow', 'visible')
            .append('g')
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


  var bookNames = data.map(d => { return d.book; })
  var authorName = data[0].values.map(d => { return d.bookAuthor; })

  x0.domain(bookNames)
  x1.domain(authorName).range([0, x0.bandwidth()])
  y.domain([0, d3.max(data, book => { return d3.max(book.values, d => { return d.pages; }); })]);

  svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
    d3.selectAll('text')
      .style('text-anchor', 'start')
      .attr('transform', 'rotate(45 -10 10)');

  svg.append('g')
      .attr('class', 'y axis')
      .style('opacity','0')
      .call(yAxis)
  .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -8)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .style('font-weight','bold')
      .text('Value');

  svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');

  var canvas = svg.selectAll('.slice')
      .data(writers)
      .enter().append('g')
  var authorGroup = canvas.selectAll('g')
        .data(writer => writer.values)
        .enter().append('g')
        .attr('class', 'g')
        .attr('transform',function(d) {
          return 'translate(' + x0(d.book) + ',0)'; })

  var book = authorGroup.selectAll('rect')
    .data(function(d) {
      return d.values
    })
    .enter().append('rect')
      .attr('width', x1.bandwidth())
      .attr('x', function(d) { return x1(d.bookAuthor); })
      .style('fill', function(d) { return color(d.bookAuthor) })
      .transition()
      .delay(function (d) {return Math.random()*1000;})
      .duration(1000)
      .attr('y', function(d) { return y(d.pages); })
      .attr('height', function(d) { return height - y(d.pages); })

  authorGroup.selectAll('rect')
    .on('mouseover', function(d) {
        d3.select(this).style('fill', d3.rgb(color(d.bookAuthor)).darker(2));
    })
    .on('mouseout', function(d) {
        d3.select(this).style('fill', color(d.bookAuthor));
    })

  //Legend
  // var legend = svg.selectAll('.legend')
  //     .data(data[0].values.map(d => { return d.bookAuthor; }))
  // .enter().append('g')
  //     .attr('class', 'legend')
  //     .attr('transform', function(d,i) { return 'translate(0,' + i * 20 + ')'; })
  //     .style('opacity','0');
  //
  // legend.append('rect')
  //     .attr('x', width - 18)
  //     .attr('width', 18)
  //     .attr('height', 18)
  //     .style('fill', function(d) { return color(d); });
  //
  // legend.append('text')
  //     .attr('x', width - 24)
  //     .attr('y', 9)
  //     .attr('dy', '.35em')
  //     .style('text-anchor', 'end')
  //     .text(function(d) {return d; });
  //
  // legend.transition().duration(500).delay(function(d,i){ return 1300 + 100 * i; }).style('opacity','1');

});
