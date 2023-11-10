"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import styles from "./editor.module.scss";

import GridLayout, {
  Layout,
  Responsive,
  WidthProvider,
} from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";

import { ReactNode, useContext, useState } from "react";
import { WindowContext } from "../common/WindowContextProvider";
import Clock from "../components/widgets/clock/Clock";
import { randomUUID } from "crypto";

const initialLayout = {
  i: "editor",
  x: 0,
  y: 0,
  w: 12,
  h: 12,
  static: true,
} as Layout;

export default function Editor() {
  const { clientHeight, clientWidth } = useContext(WindowContext);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const [layout, setLayout] = useState([initialLayout]);

  const onDrop = (
    layout: GridLayout.Layout[],
    item: GridLayout.Layout,
    e: Event
  ) => {
    e.preventDefault()
    const dragEvent = e as DragEvent
    console.log("onDrop", layout, item, e)

    setLayout([...layout.filter(el => el.i !== '__dropping-elem__'), { ...item, i: `${uuidv4()}}`,  }]);
  };
  return (
    <>
          <>{layout.map(item => JSON.stringify(item))}</>

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

      <ResponsiveGridLayout
      
        onDrop={onDrop}
        isDroppable={true}
        className={`layout ${styles.editor}`}
        layouts={{ lg: layout }}
        cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
        maxRows={12}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 768, xxs: 768 }}
        rowHeight={40}
        autoSize={false}
        allowOverlap={true}
        // measureBeforeMount={false}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        // useCSSTransforms={false}
        onLayoutChange={(layout) => console.log('change',layout)}
        // onDropDragOver={(e) => {
        //   return {w: 4, h: 2}
        // }}
      >
        {layout.map((item: Layout, i: number) => (
          <div style={{ overflow: 'hidden',background: i === 0 ? "grey" : "white" }} key={item.i}>
            {item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
      </div>

    </>
  );
}

export const ActionPanel = ({ children }: { children: ReactNode }) => {
  return <div className={styles.actionPanel}>{children}</div>;
};
