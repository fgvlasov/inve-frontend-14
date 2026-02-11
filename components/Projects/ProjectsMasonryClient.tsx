"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  gutter?: string;
  columnsCountBreakPoints?: Record<number, number>;
};

export default function ProjectsMasonryClient({
  children,
  className,
  gutter = "30px",
  columnsCountBreakPoints = { 350: 1, 750: 1, 1024: 2 },
}: Props) {
  return (
    <ResponsiveMasonry className={className} columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>{children}</Masonry>
    </ResponsiveMasonry>
  );
}
