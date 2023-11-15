"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import styles from "./editor.module.scss";

import GridLayout, { Layout } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";

import GoogleMap from "@/app/components/GoogleMaps/GoogleMap";
import Dictaphone from "@/app/components/speach/Dictaphone";
import { ReactNode, useRef, useState } from "react";
import ReactGridLayout from "react-grid-layout";
import useSpeechRecognition from "@/app/components/speach/useSpeechRecognition";
import useVoiceStore from "@/app/common/hooks/useVoiceStore";
import React from "react";


const initialLayout = {
  i: "editor",
  x: 0,
  y: 0,
  w: 12,
  h: 12,
  static: true,
} as Layout;

export default function Editor() {
  const {startListening, isRecognitionSupported} = useSpeechRecognition()




  const {isAwake, text} = useVoiceStore()

  const show = useRef(isAwake)

  const unsub1 = useVoiceStore.subscribe((s, p) => {
    console.log('useVoiceStore.subscribe', s, p)
    show.current = s.isAwake
  } )



  
  console.log('render Dictaphone', isAwake)

  
  const [layout, setLayout] = useState([initialLayout]);
  const [isVisible, setIsVisible] = React.useState(false);

  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);


  const onDrop = (
    layout: GridLayout.Layout[],
    item: GridLayout.Layout,
    e: Event
  ) => {
    e.preventDefault();
    const dragEvent = e as DragEvent;
    console.log("onDrop", layout, item, e);

    setLayout([
      ...layout.filter((el) => el.i !== "__dropping-elem__"),
      { ...item, i: `${uuidv4()}}` },
    ]);
  };

  if (!isRecognitionSupported) {
    return <span>{`Browser doesn't support speech recognition.`}</span>;
  }

  return (
    <>


  
    <Dictaphone show={show.current}/>


    <button onClick={startListening}>Start</button>
    <div>{text}</div>
      <GoogleMap />
      <>{layout.map((item) => JSON.stringify(item))}</>

      <ActionPanel>
        <div
          className={styles.actionPanelItem}
          draggable={true}
          unselectable="on"
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          clock
        </div>
        <div
          className={styles.actionPanelItem}
          draggable={true}
          unselectable="on"
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          fun
        </div>
        <div
          className={styles.actionPanelItem}
          draggable={true}
          unselectable="on"
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          bed
        </div>
      </ActionPanel>
      <div>
        <ReactGridLayout
          onDrop={onDrop}
          isDroppable={true}
          className={`layout ${styles.editor}`}
          layout={layout}
          cols={12}
          maxRows={12}
          width={800}
          rowHeight={40}
          autoSize={false}
          allowOverlap={true}
          // measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          // useCSSTransforms={false}
          onLayoutChange={(layout) => console.log("change", layout)}
          // onDropDragOver={(e) => {
          //   return {w: 4, h: 2}
          // }}
        >
          {layout.map((item: Layout, i: number) => (
            <div
              style={{
                overflow: "hidden",
                background: i === 0 ? "grey" : "white",
              }}
              key={item.i}
            >
              {item.i}
            </div>
          ))}
        </ReactGridLayout>
      </div>
    </>
  );
}

export const ActionPanel = ({ children }: { children: ReactNode }) => {
  return <div className={styles.actionPanel}>{children}</div>;
};
