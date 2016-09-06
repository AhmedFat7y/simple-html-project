var accessToken = "604129dd62c24c36aa2bbdf396e07833",
  baseUrl = "https://api.api.ai/v1/",
  $speechInput,
  $recBtn,
  $spinner,
  recognition,
  messageRecording = "Recording...",
  messageCouldntHear = "I couldn't hear you, could you say that again?",
  messageInternalError = "Oh no, there has been an internal server error",
  messageSorry = "I'm sorry, I don't have the answer to that yet.",
  sessionId = 0,
  d3jsSupport = false,
  sigmaSupport = true,
  lastResponse = 0;

$(document).ready(function () {
  $speechInput = $("#speech");
  $recBtn = $("#rec");
  $spinner = $("#spinner");
  $speechInput.keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      var text = $speechInput.val();
      if(!lastResponse || (lastResponse && lastResponse.result.action === "ask_for_nationa_id" && text === "1234567890") || (lastResponse && lastResponse.result.action !== "ask_for_nationa_id")) {
        send();
      } else {
        alert("You have to enter 1234567890")
      }
    }
  });

  $recBtn.on("click", function (event) {
    switchRecognition();
  });

  $(".debug__btn").on("click", function () {
    $(this).next().toggleClass("is-active");
    return false;
  });
  $("#reset").on("click", function () {
    resetConversation();
  });
});

function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function (event) {
    respond(messageRecording);
    updateRec();
  };
  recognition.onresult = function (event) {
    recognition.onend = null;

    var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
  };
  recognition.onend = function () {
    respond(messageCouldntHear);
    stopRecognition();
  };
  recognition.lang = "en-US";
  recognition.start();
}

function stopRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
  updateRec();
}

function switchRecognition() {
  if (recognition) {
    stopRecognition();
  } else {
    startRecognition();
  }
}

function setInput(text) {
  $speechInput.val(text);
  send();
}

function updateRec() {
  $recBtn.text(recognition ? "Stop" : "Speak");
}

function send() {
  var text = $speechInput.val();
  showSpinner();
  $.ajax({
    type: "POST",
    url: baseUrl + "query/",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken
      // "ocp-apim-subscription-key": subscriptionKey
    },
    data: JSON.stringify({q: text, lang: "en"}),

    success: function (data) {
      if(data.result.score !== 0) {
        lastResponse = data;
      }
      prepareResponse(data);
      sessionId = data.sessionId;
    },
    error: function () {
      respond(messageInternalError);
    },
    complete: function () {
      hideSpinner();
    }
  });
}

function prepareResponse(val) {
  var debugJSON = JSON.stringify(val, undefined, 2),
    spokenResponse = val.result.speech;

  respond(spokenResponse);
  debugRespond(debugJSON);
}

function debugRespond(val) {
  $("#response").text(val);
}

function respond(val) {
  $speechInput.val('');
  if (val == "") {
    val = messageSorry + (lastResponse? '<br />' + lastResponse.result.speech : '');
  }
  //
  // if (val !== messageRecording) {
  //   var msg = new SpeechSynthesisUtterance();
  //   msg.voiceURI = "native";
  //   msg.text = val;
  //   msg.lang = "en-US";
  //   window.speechSynthesis.speak(msg);
  // }

  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
}

function resetConversation() {
  showSpinner();
  $.ajax({
    type: "POST",
    url: baseUrl + "query/",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken
      // "ocp-apim-subscription-key": subscriptionKey
    },
    data: JSON.stringify({q: 'nothing much', lang: "en", resetContexts: true}),
    success: function (data) {
      data.result = {speech: "Conversation is reset successfully"};
      prepareResponse(data);
      sessionId = data.sessionId;
    },
    error: function () {
      respond(messageInternalError);
    },
    complete: function () {
      hideSpinner();
    }
  });
}

function showSpinner() {
  $spinner.addClass("active");
}

function hideSpinner() {
  $spinner.removeClass("active");
}
// swapping data
graphData = graphData2;

var x0 = 40;
var y0 = 20;
var xStart = x0;
var yStart = y0;
var previousGroup = "-1";
for(var i = 0; i < graphData.nodes.length; i ++) {
  var node = graphData.nodes[i];
  var name = node.name;
  node.name = node.id;
  node.id = name;
  node.text = name;
  node.size = 1;
  node.label = name;
  node.color = '#01001b';
  if(d3jsSupport) {
    for (var j =0; j < graphData.edges.length; j++) {
      var edge = graphData.edges[j];
      if (edge.source === node.id) {
        edge.source = node;
      }
      if (edge.target === node.id) {
        edge.target = node;
      }
    }
  }
}

for(var i = 0; i < graphData.edges.length; i ++) {
  var edge = graphData.edges[i];
  edge.right = true;
  edge.left = false;
  edge.size = 1;
  edge.color = '#01001b';
}

if ($("#container").length > 0 && sigmaSupport) {
  var s = new sigma({
    graph: graphData,
    container: 'container'
  });
}

if ($('#container').length > 0 && d3jsSupport) {

// set up SVG for D3
  var width  = 960,
    height = 500,
    colors = d3.scale.category10();

  var svg = d3.select('#container')
    .append('svg')
    .attr('oncontextmenu', 'return false;')
    .attr('width', width)
    .attr('height', height);

// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.
  var nodes = graphData.nodes,
    links = graphData.edges;

// init D3 force layout
  var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    .linkDistance(150)
    .charge(-500)
    .on('tick', tick);

// define arrow markers for graph links
  svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#fff');

  svg.append('svg:defs').append('svg:marker')
    .attr('id', 'start-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#fff');

// line displayed when dragging new nodes
  var drag_line = svg.append('svg:path')
    .attr('class', 'link dragline hidden')
    .attr('d', 'M0,0L0,0');

// handles to link and node element groups
  var path = svg.append('svg:g').selectAll('path'),
    circle = svg.append('svg:g').selectAll('g');

// mouse event vars
  var selected_node = null,
    selected_link = null,
    mousedown_link = null,
    mousedown_node = null,
    mouseup_node = null;

  function resetMouseVars() {
    mousedown_node = null;
    mouseup_node = null;
    mousedown_link = null;
  }

// update force layout (called automatically each iteration)
  function tick() {
    // draw directed edges with proper padding from node centers
    path.attr('d', function(d) {
      var deltaX = d.target.x - d.source.x,
        deltaY = d.target.y - d.source.y,
        dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        normX = deltaX / dist,
        normY = deltaY / dist,
        sourcePadding = d.left ? 17 : 12,
        targetPadding = d.right ? 17 : 12,
        sourceX = d.source.x + (sourcePadding * normX),
        sourceY = d.source.y + (sourcePadding * normY),
        targetX = d.target.x - (targetPadding * normX),
        targetY = d.target.y - (targetPadding * normY);
      return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;
    });

    circle.attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  }

// update graph (called when needed)
  function restart() {
    // path (link) group
    path = path.data(links);

    // update existing links
    path.classed('selected', function(d) { return d === selected_link; })
      .style('marker-start', function(d) { return d.left ? 'url(#start-arrow)' : ''; })
      .style('marker-end', function(d) { return d.right ? 'url(#end-arrow)' : ''; });


    // add new links
    path.enter().append('svg:path')
      .attr('class', 'link')
      .classed('selected', function(d) { return d === selected_link; })
      .style('marker-start', function(d) { return d.left ? 'url(#start-arrow)' : ''; })
      .style('marker-end', function(d) { return d.right ? 'url(#end-arrow)' : ''; })
      .on('mousedown', function(d) {
        if(d3.event.ctrlKey) return;

        // select link
        mousedown_link = d;
        if(mousedown_link === selected_link) selected_link = null;
        else selected_link = mousedown_link;
        selected_node = null;
        restart();
      });

    // remove old links
    path.exit().remove();


    // circle (node) group
    // NB: the function arg is crucial here! nodes are known by id, not by index!
    circle = circle.data(nodes, function(d) { return d.id; });

    // update existing nodes (reflexive & selected visual states)
    circle.selectAll('circle')
      .style('fill', function(d) { return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id); })
      .classed('reflexive', function(d) { return d.reflexive; });

    // add new nodes
    var g = circle.enter().append('svg:g');

    g.append('svg:circle')
      .attr('class', 'node')
      .attr('r', 12)
      .style('fill', function(d) { return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id); })
      .style('stroke', function(d) { return d3.rgb(colors(d.id)).darker().toString(); })
      .classed('reflexive', function(d) { return d.reflexive; })
      .on('mouseover', function(d) {
        if(!mousedown_node || d === mousedown_node) return;
        // enlarge target node
        d3.select(this).attr('transform', 'scale(1.1)');
      })
      .on('mouseout', function(d) {
        if(!mousedown_node || d === mousedown_node) return;
        // unenlarge target node
        d3.select(this).attr('transform', '');
      })
      .on('mousedown', function(d) {
        if(d3.event.ctrlKey) return;

        // select node
        mousedown_node = d;
        if(mousedown_node === selected_node) selected_node = null;
        else selected_node = mousedown_node;
        selected_link = null;

        // reposition drag line
        drag_line
          .style('marker-end', 'url(#end-arrow)')
          .classed('hidden', false)
          .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mousedown_node.x + ',' + mousedown_node.y);

        restart();
      })
      .on('mouseup', function(d) {
        if(!mousedown_node) return;

        // needed by FF
        drag_line
          .classed('hidden', true)
          .style('marker-end', '');

        // check for drag-to-self
        mouseup_node = d;
        if(mouseup_node === mousedown_node) { resetMouseVars(); return; }

        // unenlarge target node
        d3.select(this).attr('transform', '');

        // add link to graph (update if exists)
        // NB: links are strictly source < target; arrows separately specified by booleans
        var source, target, direction;
        if(mousedown_node.id < mouseup_node.id) {
          source = mousedown_node;
          target = mouseup_node;
          direction = 'right';
        } else {
          source = mouseup_node;
          target = mousedown_node;
          direction = 'left';
        }

        var link;
        link = links.filter(function(l) {
          return (l.source === source && l.target === target);
        })[0];

        if(link) {
          link[direction] = true;
        } else {
          link = {source: source, target: target, left: false, right: false};
          link[direction] = true;
          links.push(link);
        }

        // select new link
        selected_link = link;
        selected_node = null;
        restart();
      });

    // show node IDs
    g.append('svg:text')
      .attr('x', 0)
      .attr('y', 4)
      .attr('class', 'id')
      .text(function(d) { return d.text; });

    // remove old nodes
    circle.exit().remove();

    // set the graph in motion
    force.start();
  }

  function mousedown() {
    // prevent I-bar on drag
    //d3.event.preventDefault();

    // because :active only works in WebKit?
    svg.classed('active', true);

    if(d3.event.ctrlKey || mousedown_node || mousedown_link) return;

    // insert new node at point
    var point = d3.mouse(this),
      node = {id: ++lastNodeId, reflexive: false};
    node.x = point[0];
    node.y = point[1];
    nodes.push(node);

    restart();
  }

  function mousemove() {
    if(!mousedown_node) return;

    // update drag line
    drag_line.attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + d3.mouse(this)[0] + ',' + d3.mouse(this)[1]);

    restart();
  }

  function mouseup() {
    if(mousedown_node) {
      // hide drag line
      drag_line
        .classed('hidden', true)
        .style('marker-end', '');
    }

    // because :active only works in WebKit?
    svg.classed('active', false);

    // clear mouse event vars
    resetMouseVars();
  }

  function spliceLinksForNode(node) {
    var toSplice = links.filter(function(l) {
      return (l.source === node || l.target === node);
    });
    toSplice.map(function(l) {
      links.splice(links.indexOf(l), 1);
    });
  }

// only respond once per keydown
  var lastKeyDown = -1;

  function keydown() {
    d3.event.preventDefault();

    if(lastKeyDown !== -1) return;
    lastKeyDown = d3.event.keyCode;

    // ctrl
    if(d3.event.keyCode === 17) {
      circle.call(force.drag);
      svg.classed('ctrl', true);
    }

    if(!selected_node && !selected_link) return;
    switch(d3.event.keyCode) {
      case 8: // backspace
      case 46: // delete
        if(selected_node) {
          nodes.splice(nodes.indexOf(selected_node), 1);
          spliceLinksForNode(selected_node);
        } else if(selected_link) {
          links.splice(links.indexOf(selected_link), 1);
        }
        selected_link = null;
        selected_node = null;
        restart();
        break;
      case 66: // B
        if(selected_link) {
          // set link direction to both left and right
          selected_link.left = true;
          selected_link.right = true;
        }
        restart();
        break;
      case 76: // L
        if(selected_link) {
          // set link direction to left only
          selected_link.left = true;
          selected_link.right = false;
        }
        restart();
        break;
      case 82: // R
        if(selected_node) {
          // toggle node reflexivity
          selected_node.reflexive = !selected_node.reflexive;
        } else if(selected_link) {
          // set link direction to right only
          selected_link.left = false;
          selected_link.right = true;
        }
        restart();
        break;
    }
  }

  function keyup() {
    lastKeyDown = -1;

    // ctrl
    if(d3.event.keyCode === 17) {
      circle
        .on('mousedown.drag', null)
        .on('touchstart.drag', null);
      svg.classed('ctrl', false);
    }
  }

// app starts here
  svg.on('mousedown', mousedown)
    .on('mousemove', mousemove)
    .on('mouseup', mouseup);
  d3.select(window)
    .on('keydown', keydown)
    .on('keyup', keyup);
  restart();

}
