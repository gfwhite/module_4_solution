var hellospeakWord = "Hello";

//var helloSpeaker = function {
//  function speak(name) {
//  console.log(speakWord + " " + name);
//     }
//   }

(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(hellospeakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
  })(window);

