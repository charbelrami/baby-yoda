import React from "react";

export function Grogu({ children, duration = 300, easing = "ease" }) {
  const ref = React.useRef();
  const theChild = React.useRef();
  const boundingClientRectSnapshot = React.useRef();

  React.useEffect(() => {
    theChild.current = ref.current.children[0];
    if (theChild.current) theChild.current.style.transformOrigin = "left top";
  }, []);

  React.useLayoutEffect(() => {
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
      } = theChild.current.getBoundingClientRect();

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

      let animation1;

      animation0.addEventListener("finish", () => {
        animation1 = theChild.current.animate(
          {
            transform: [
              `translate3D(${dx}px, ${dy}px, 0) scale(${dw}, ${dh})`,
              "none",
            ],
          },
          { duration, easing }
        );
      });

      return () => animation1.cancel();
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

class GetSnapshotBeforeUpdate extends React.Component {
  getSnapshotBeforeUpdate() {
    this.props.callback();
    return null;
  }

  componentDidUpdate() {}

  render() {
    return null;
  }
}
