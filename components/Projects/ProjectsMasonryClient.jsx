"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ProjectsMasonryClient({ children }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }}>
      <Masonry gutter='30px'>{children}</Masonry>
    </ResponsiveMasonry>
  );
}
