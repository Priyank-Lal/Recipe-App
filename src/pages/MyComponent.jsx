import React, { memo } from "react";

const MyComponent = () => {
  console.log("Rendered");
  return <div>My Component,Your Component</div>;
};
// New Comment-1
// New Comment-2
// New Commnet-3
// New Commnet-4
// New Commnet-5
// New Commnet-6
// New Commnet-7
// New Commnet-8
// New Comment-9
// New Comment-10
// Doesn't re-render if parent re-renders, unless nothing inside it changes
export default memo(MyComponent);





