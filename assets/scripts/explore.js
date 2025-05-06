// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.getElementById('button');
  const synthesis = window.speechSynthesis;

  function populateVoiceList() {
    const voices = synthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (synthesis.onvoiceschanged !== undefined) {
    synthesis.onvoiceschanged = populateVoiceList;
  }
  speakButton.addEventListener('click', () => {
    const userInput = textInput.value;
    const message = new SpeechSynthesisUtterance(userInput);
    const selectedOptionValue = voiceSelect.selectedOptions[0].getAttribute('value');

    const selectedOption = synthesis.getVoices().find(
      (voice) => voice.name === selectedOptionValue
    );
    if (selectedOption) {
      message.voice = selectedOption;
    }
    synthesis.speak(message);
  });
}