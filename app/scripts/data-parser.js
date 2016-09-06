function prepareNodes(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    node.x = 0;
    node.y = 0;
    node.parents = [];
  }
  return nodes;
}

// itemsList1 contains itemsList2
function contains(itemsList1, itemsList2) {
  if (itemsList1.length ==0 || itemsList2.length == 0) {
    return false;
  }
  for (var j = 0; j < itemsList2.length; j++) {
    var item2 = itemsList2[j];
    var found = false;
    for (var i =0; i < itemsList1.length; i++) {
      var item1 = itemsList1[i];
      if(item2 === item1) {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}

function findChildNodes(node, nodes) {
  var childNodes = [];
  var outputContexts = node.responses[0].affectedContexts.map(function(context){
    return context.name;
  });
  if (outputContexts.length == 0) {
    return childNodes;
  }
  for (var i = 0; i < nodes.length; i++) {
    var childNode = nodes[i];
    if (contains(outputContexts, childNode.contexts)) {
      childNodes.push(childNode);
    }
  }
  return childNodes;
}

function connectParentWithChildren(parentNode, childNodes) {
  for (var i = 0; i < childNodes.length; i++) {
    childNodes[i].parents.push(parentNode);
  }
}

function buildNodes(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    var childNodes = findChildNodes(node, nodes);
    if (node.responses[0].resetContexts) {
      childNodes = [];
    }
    console.log('parent: ', node.name);
    console.log('children: ', childNodes.reduce(function(a,b) {
        return a + b.name + ', ';
      }, '[') + ']');
    connectParentWithChildren(node, childNodes);
  }
  return nodes;
}

function assignLocations(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    node.x = Math.random();
    node.y = Math.random();
  }
  return nodes;
}

function buildEdges(nodes) {
  var edges = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.parents.length > 0) {
      for (var j = 0; j < node.parents.length; j++) {
        var edge = {
          id: 'e-' + i + '-' + j,
          source: node.parents[j].name,
          target: node.name
        };
        edges.push(edge);
      }
    }
  }
  return edges;
}

function buildGraph(nodes) {
  var nodes = prepareNodes(nodes);
  nodes = buildNodes(nodes);
  nodes = assignLocations(nodes);
  var edges = buildEdges(nodes);
  return {nodes: nodes, edges: edges};
}

var graphData2 = buildGraph(originalNodes);
