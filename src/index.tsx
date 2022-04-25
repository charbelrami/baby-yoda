import React from "react";

export interface GroguProps {
  children: React.ReactNode;
  duration?: EffectTiming["duration"];
  easing?: EffectTiming["easing"];
}

export function Grogu({
  children,
  duration = 300,
  easing = "ease",
}: GroguProps) {
  const theChild = React.useRef<HTMLElement>();
  const rectBeforeUpdate = React.useRef<DOMRect>();

  React.useLayoutEffect(() => {
    const el = theChild.current;
    const prevRect = rectBeforeUpdate.current;
    if (!el || !prevRect) return;
    const rect = el.getBoundingClientRect();
    const animation = el.animate(
      [
        {
          transform: `translate(${prevRect.x - rect.x}px, ${
            prevRect.y - rect.y
          }px) scale(${prevRect.width / rect.width}, ${
            prevRect.height / rect.height
          })`,
        },
        { transform: `translate(0, 0) scale(1, 1)` },
      ],
      { duration, easing }
    );
    return () => animation.cancel();
  });

  return (
    <>
      <GetSnapshotBeforeUpdate
        callback={() => {
          rectBeforeUpdate.current = theChild.current?.getBoundingClientRect();
          return null;
        }}
      />
      {(() => {
        const child = React.Children.only(children);
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, {
          ref: (node: HTMLElement) => {
            if (!node) return;
            theChild.current = node;
            const { ref } = child as any;
            if (typeof ref === "function") ref(node);
          },
        });
      })()}
    </>
  );
}

class GetSnapshotBeforeUpdate extends React.Component<{
  callback: () => void;
}> {
  getSnapshotBeforeUpdate = () => this.props.callback();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidUpdate = () => {};
  render = () => null;
}
