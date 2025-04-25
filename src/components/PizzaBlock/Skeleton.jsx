import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
    <rect x="-1" y="307" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="405" rx="10" ry="10" width="90" height="45" />
    <rect x="128" y="405" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
