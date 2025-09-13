import React, { memo } from "react";

const MyComponent = () => {
  console.log("Rendered");
  return <div>My Component,Your Component</div>;
};
// New Comment
// New Comment-2
// New Commnet-3
// New Commnet-4
// Doesn't re-render if parent re-renders, unless nothing inside it changes
export default memo(MyComponent);





