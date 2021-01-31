import React, { Component, useEffect, useLayoutEffect, useRef } from "react";

export function Grogu({ children, duration = 300, easing = "ease" }) {
  const ref = useRef();
  const theChild = useRef();
  const boundingClientRectSnapshot = useRef();

  useEffect(() => {
    theChild.current = ref.current.children[0];
    theChild.current.style.transformOrigin = "left top";
  }, []);

  useLayoutEffect(() => {
    if (boundingClientRectSnapshot.current) {
      const {
        x: x0,
        y: y0,
        width: w0,
        height: h0,
      } = boundingClientRectSnapshot.current;
      const {
        x,
        y,
        width: w,
        height: h,
      } = theChild.current?.getBoundingClientRect();

      const dy = y0 - y;
      const dx = x0 - x;
      const dw = w0 / w;
      const dh = h0 / h;

      const animation0 = theChild.current.animate(
        {
          transform: [
            "none",
            `translate3D(${dx}px, ${dy}px, 0) scale(${dw}, ${dh})`,
          ],
        },
        { duration: 0 }
      );
      animation0.addEventListener("finish", () => {
        theChild.current.animate(
          {
            transform: [
              `translate3D(${dx}px, ${dy}px, 0) scale(${dw}, ${dh})`,
              "none",
            ],
          },
          { duration, easing }
        );
      });
    }
  });

  return (
    <div ref={ref}>
      <GetSnapshotBeforeUpdate
        callback={() => {
          boundingClientRectSnapshot.current = theChild.current?.getBoundingClientRect();
        }}
      />
      {children}
    </div>
  );
}

class GetSnapshotBeforeUpdate extends Component {
  getSnapshotBeforeUpdate() {
    this.props.callback?.();
  }
  render() {
    return null;
  }
}
