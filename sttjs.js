let recognition = null;
function checkCompatibility () {
   recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
   recognition.lang = 'ko'
   recognition.maxAlternatives = 1;

   if(!recognition) {
    alert('크롬이나 엣지에서 사용해주세요.')
   };
}

function start() {
  console.log('Start');

  recognition.addEventListener("speechstart", () => {
    console.log('speech start');
  });

  recognition.addEventListener("speechend", () => {
    console.log('speech end');
  });

  recognition.addEventListener("result", (event) => {
    console.log('speech result', event.results);
    const text = event.results[0][0].transcript;
    document.getElementById("speech-result").value = text;
  });

  recognition.start();
}

function end() {
  recognition.stop();
}

window.addEventListener('load', checkCompatibility);