import React from "react";

export interface GroguProps {
  children: React.ReactNode;
  duration: number;
  easing: string;
}

export declare function Grogu({
  children,
  duration,
  easing,
}: GroguProps): JSX.Element;
