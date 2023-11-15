import React, { Component, useEffect, useRef } from 'react';

const  AudioVisualiser = (props: {audioData: any}) => {

    const canvasRef = useRef<any>(null);

    useEffect(() => {
        draw()
    });


  const draw = () => {
    const { audioData } = props;
    console.log(audioData)
    const height = canvasRef.current.height;
    const width = canvasRef.current.width;
    const context = canvasRef.current.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 1.0) / audioData.length;

    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0, height / 2);
    for (const item of audioData) {
      const y = (item / 255.0) * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }
    context.lineTo(x, height / 2);
    context.stroke();
  }

  
return <canvas width="300" height="300" ref={canvasRef} />;
  
}

export default AudioVisualiser;