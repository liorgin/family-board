import useVoiceStore from "@/app/common/hooks/useVoiceStore";
import { useEffect } from "react";

let recognition: SpeechRecognition;
let speechSynthesis: SpeechSynthesis;

let beat = new Audio("/awake.wav");

const grammar = "#JSGF V1.0; grammar colors; public <weak> = 'hello board';";

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  // recognition.continuous = true;
  speechSynthesis = window.speechSynthesis;

  // recognition.lang = "he";
}

const useSpeechRecognition = () => {

  const {isAwake, isRecording, text, startRecording, stopRecording} = useVoiceStore()

  console.log("useSpeechRecognition", {isAwake, isRecording})

  useEffect(() => {
    if (!recognition) return;

    const speechGrammarList = new webkitSpeechGrammarList();
    speechGrammarList.addFromString(grammar, 1);

    recognition.grammars = speechGrammarList;

    recognition.onend = () => {
      startListening();
    };
    recognition.onspeechend = function () {};

    recognition.onerror = function (event) {};

    recognition.onaudiostart = function (event) {
      //Fired when the user agent has started to capture audio.
    };

    recognition.onaudioend = function (event) {
      //Fired when the user agent has finished capturing audio.
    };

    recognition.onnomatch = function (event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
    };

    recognition.onsoundstart = function (event) {
      //Fired when any sound — recognisable speech or not — has been detected.
    };

    recognition.onsoundend = function (event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
    };

    recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
    };
    recognition.onstart = function (event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log("SpeechRecognition.onstart");
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      recognition.stop();
      console.log(event.results[0][0].transcript.toLowerCase());
      const text = event.results[0][0].transcript.toLowerCase();

      if (text.includes("hey you")) {
        useVoiceStore.setState({ isAwake: true })
        beat.play()
        return;
      }
      if (isAwake) {
        if (/\d+ [*]+ \d+/.test(text)) {
          const arr = text.match(/(\d+).+(\d+)/);
          const [long, lat] = arr!;
          // const beatNumber = parseInt(long)
          // const byNumber = parseInt(lat)
          useVoiceStore.setState({text})

          speechSynthesis.speak(
            new SpeechSynthesisUtterance(`showing ${text} on the map`)
          )
        } else {
          speechSynthesis.speak(
            new SpeechSynthesisUtterance(`OK, ${text}`)
          )
        }
        useVoiceStore.setState({isAwake: false})

      }
    };
    // return () => {
    //   recognition.onresult = null;
    //   // recognition.stop();
    // };
  }, []);

  const startListening = () => {
    recognition.start();
  };

  // const stopListening = () => {
  //   // recognition.stop();
  //   // setIsListening(false);
  // };

  return {
    text,
    startListening,
    // stopListening,
    isRecognitionSupported: !!recognition,
  };
};

export default useSpeechRecognition;
