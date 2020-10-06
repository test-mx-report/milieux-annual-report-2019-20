import * as d3 from 'd3'

// some colour variables
var tcBlack = '#130C0E'

// rest of vars
var ventana = window
var w = ventana.innerWidth
var h = ventana.innerHeight
var maxNodeSize = 30
var x_browser = 20
var y_browser = 20
var root

var vis
var force = d3.layout.force()

const imgDir = '/_annual-reports/2019/assets/img/highlights/'

vis = d3.select('#vis').append('svg').attr('width', w).attr('height', h)

d3.json('/_annual-reports/2019/assets/data/cerc.json', function (json) {
  root = json
  root.fixed = true
  root.x = w / 2
  root.y = h / 2

  // Build the path
  var defs = vis.insert('svg:defs')
    .data(['end'])

  defs.enter().append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')

  update()
})

/**
 *
 */
function update () {
  var nodes = flatten(root)
  var links = d3.layout.tree().links(nodes)

  // Restart the force layout.
  force.nodes(nodes).links(links)
    .gravity(0.05)
    .charge(-1800)
    .linkDistance(70)
    .friction(0.45)
    .linkStrength(function (l, i) { return 1 })
    .size([w, h])
    .on('tick', tick)
    .start()

  var path = vis.selectAll('path.link')
    .data(links, function (d) { return d.target.id })

  path.enter().insert('svg:path')
    .attr('class', 'link')
  // .attr("marker-end", "url(#end)")
    .style('stroke', '#AAE5EE')

  // Exit any old paths.
  path.exit().remove()

  // Update the nodes…
  var node = vis.selectAll('g.node')
    .data(nodes, function (d) { return d.id })

  // Enter any new nodes.
  var nodeEnter = node.enter().append('svg:g')
    .attr('class', 'node')
    .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')' })
    .on('click', click)
    .call(force.drag)

  // Append a circle
  nodeEnter.append('svg:circle')
    .attr('r', function (d) { return Math.sqrt(d.size) / 21 || 4.5 })
    .style('fill', '#AAE5EE')

  // Append images
  var images = nodeEnter.append('svg:image')
    .attr('xlink:href', function (d) { return imgDir + d.img })
    .attr('x', function (d) { return -25 })
    .attr('y', function (d) { return -25 })
    .attr('height', 50)
    .attr('width', 50)

  // make the image grow a little on mouse over and add the text details on click
  // var setEvents = images
  images
  // Append member text
    .on('click', function (d) {
      d3.select('#highlights-member').html(d.member)
      d3.select('#highlights-name').html(d.name)
      d3.select('#highlights-link').html('Take me to ' + "<a href='" + d.link + "' >" + d.member + ' web page ⇢' + '</a>')
    })

    .on('mouseenter', function () {
      // select element in current context
      d3.select(this)
        .transition()
        .attr('x', function (d) { return -60 })
        .attr('y', function (d) { return -60 })
        .attr('height', 100)
        .attr('width', 100)
    })
  // set back
    .on('mouseleave', function () {
      d3.select(this)
        .transition()
        .attr('x', function (d) { return -25 })
        .attr('y', function (d) { return -25 })
        .attr('height', 50)
        .attr('width', 50)
    })

  // Append member name on roll over next to the node as well
  nodeEnter.append('text')
    .attr('class', 'nodetext')
    .attr('x', x_browser)
    .attr('y', y_browser + 15)
    .attr('fill', tcBlack)
    .text(function (d) { return d.member })

  // Exit any old nodes.
  node.exit().remove()

  // Re-select for update.
  path = vis.selectAll('path.link')
  node = vis.selectAll('g.node')

  function tick () {
    path.attr('d', function (d) {
      var dx = d.target.x - d.source.x
      var dy = d.target.y - d.source.y
      var dr = Math.sqrt(dx * dx + dy * dy)
      return 'M' + d.source.x + ',' +
            d.source.y +
            'A' + dr + ',' +
            dr + ' 0 0,1 ' +
            d.target.x + ',' +
            d.target.y
    })
    node.attr('transform', nodeTransform)
  }
}

/**
 * Gives the coordinates of the border for keeping the nodes inside a frame
 * http://bl.ocks.org/mbostock/1129492
 */
function nodeTransform (d) {
  d.x = Math.max(maxNodeSize, Math.min(w - (d.imgwidth / 2 || 16), d.x))
  d.y = Math.max(maxNodeSize, Math.min(h - (d.imgheight / 2 || 16), d.y))
  return 'translate(' + d.x + ',' + d.y + ')'
}

/**
 * Toggle children on click.
 */
function click (d) {
  if (d.children) {
    d._children = d.children
    d.children = null
  } else {
    d.children = d._children
    d._children = null
  }

  update()
}

/**
 * Returns a list of all nodes under the root.
 */
function flatten (root) {
  var nodes = []
  var i = 0

  function recurse (node) {
    if (node.children) { node.children.forEach(recurse) }
    if (!node.id) { node.id = ++i }
    nodes.push(node)
  }

  recurse(root)
  return nodes
}
