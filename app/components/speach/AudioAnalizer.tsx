import React, { Component, useEffect, useRef, useState } from "react";
import AudioVisualiser from "./AudioVisualizer";

const AudioAnalyser = ({audio}: {audio: MediaStream| undefined}) => {
  const [audioData, setAudioData] = useState<any>(new Uint8Array(0));

  const rafId = useRef<number>();

  let analyser = useRef<AnalyserNode>();
  let dataArray = useRef<Uint8Array>(new Uint8Array(0));

  useEffect(() => {

    const audioContext = new (window.AudioContext || window.AudioContext)();
    analyser.current = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(audio!);
    source.connect(analyser.current);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (analyser.current) {
        analyser.current.disconnect();
        source.disconnect();
      }
    };
  }, []);

  const tick = () => {
    if (analyser.current) {
      console.log("tick");
      analyser.current.getByteTimeDomainData(dataArray.current);
      setAudioData(dataArray.current);
      const rafIdlocal = requestAnimationFrame(tick);
      requestAnimationFrame(tick);
    }
  };

  return <AudioVisualiser audioData={audioData} />;
};

export default AudioAnalyser;
