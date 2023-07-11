import React from "react";

const Page404 = React.memo(() => {
  return (
    <div>
      <p>抱歉，您访问的页面不存在！</p>
    </div>
  );
});
Page404.displayName = "Page404";
export default Page404;
