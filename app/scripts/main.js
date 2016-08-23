var accessToken = "dc41e6c002a443e58c47beb571f618c6",
  // subscriptionKey = "4c62f0fa-adf8-4ec0-ba8b-098271ca3361",
  baseUrl = "https://api.api.ai/v1/",
  $speechInput,
  $recBtn,
  $spinner,
  recognition,
  messageRecording = "Recording...",
  messageCouldntHear = "I couldn't hear you, could you say that again?",
  messageInternalError = "Oh no, there has been an internal server error",
  messageSorry = "I'm sorry, I don't have the answer to that yet.",
  sessionId = 0;

$(document).ready(function() {
  $speechInput = $("#speech");
  $recBtn = $("#rec");
  $spinner = $("#spinner");
  $speechInput.keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      send();
    }
  });
  $recBtn.on("click", function(event) {
    switchRecognition();
  });

  $(".debug__btn").on("click", function() {
    $(this).next().toggleClass("is-active");
    return false;
  });
  $("#reset").on("click", function() {
    resetConversation();
  });
});

function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function(event) {
    respond(messageRecording);
    updateRec();
  };
  recognition.onresult = function(event) {
    recognition.onend = null;

    var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
  };
  recognition.onend = function() {
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

    success: function(data) {
      prepareResponse(data);
      sessionId = data.sessionId;
    },
    error: function() {
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
    val = messageSorry;
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
    success: function(data) {
      data.result = {speech: "Conversation is reset successfully"};
      prepareResponse(data);
      sessionId = data.sessionId;
    },
    error: function() {
      respond(messageInternalError);
    },
    complete: function() {
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
