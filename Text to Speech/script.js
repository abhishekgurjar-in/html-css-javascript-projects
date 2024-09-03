document.addEventListener('DOMContentLoaded', function() {
  const textEl = document.querySelector(".text");
  const speakEl = document.querySelector(".speak-btn");
  const stopEl = document.querySelector(".stop-btn");

  speakEl.addEventListener('click', function() {
    speakText(textEl.value);
  });

  stopEl.addEventListener('click', function() {
    stopSpeaking();
  });

  function speakText(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    window.speechSynthesis.cancel();
  }
});
