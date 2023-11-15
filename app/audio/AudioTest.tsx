"use client";

import React, { use, useEffect, useRef } from "react";
import AudioAnalyser from "../components/speach/AudioAnalizer";

function AudioTest({audio}: {audio: MediaStream| undefined}) {



  return (
    <>{audio ? <AudioAnalyser audio={audio} /> : "no audio"}</>
  );
}

export default AudioTest;
