var goodbyespeakWord = "Good Bye";

//( byeSpeaker = function {
//  function speak(name) {
//  console.log(speakWord + " " + name);
//  }
//  })()

(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(goodbyespeakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
  })(window);

