"use client";

import React from "react";
import AudioTest from "./AudioTest";

function Page() {

    const [audio, setAudio] = React.useState<MediaStream>()

    const click = () => {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
        }).then((stream) => {
            setAudio(stream)
        });
    }

  return <><button onClick={click}>Start</button><AudioTest audio={audio}/></>
}

export default Page;
