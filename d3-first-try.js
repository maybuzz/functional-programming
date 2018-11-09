d3.json('data.json').then(data => {

  const dataset = data

  const pages = data.map(book => {
    return book.pages
  })
  console.log(pages.length)

  let height = 666,
      width = 1000;

// Create yScale
  let yScale = d3.scaleLinear()
                  .domain([0, 1500])
                  .range([0, height])

// Create cScale
  let xScale = d3.scaleBand()
                  .domain(pages)
                  .paddingInner(.2)
                  .paddingOuter(.9)
                  .range([0, width])

// Setup & append SVG
  let svg = d3.select('#viz')
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .style('background', '#C9D7D6')

// Setup bar rectangles
  let bars = svg.selectAll('rect')
                .data(dataset)
                .enter()
                  .append('rect')
                  .style('fill', d => {
                    if(d.bookAuthor === 'Rowling, J.K.'){
                      console.log('rowling', d)
                      return 'peachpuff'
                    } else{
                      console.log('tolkien', d)
                      return '#0195BA'
                    }
                  })
                  .attr('width', d => {
                    return xScale.bandwidth()
                  })
                  .attr('height', d => {
                    return yScale(d.pages)
                  })
                  .attr('x', d => {
                    return xScale(d.pages)
                  })
                  .attr('y', d => {
                    return height - yScale(d.pages)
                  })

  }).catch(err =>{
    console.log(err)
  })

// // d3.select('#viz')
// //   .append('svg')
// //     .attr('width', 600)
// //     .attr('heigth', 400)
// //     .style('background', '#93A1A1')
// //   .append('rect')
// //     .attr('x', 200)
// //     .attr('y', 100)
// //     .attr('width', 200)
// //     .attr('height', 200)
// //     .style('fill', '#CB4B19');
// //
// // d3.select('#viz svg')
// //   .append('circle')
// //   .attr('cx', 200)
// //   .attr('r', 50)
// //   .style('fill', '#CCCCCC');
