import classes from "./index.module.less";
import React from "react";
import { Button } from "antd";
const MyHeader: React.FC = () => {
  const handleDownload = () => {
    const fileUrl = "/file/jianli.pdf"; // 替换为实际的文件路径
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "简历.pdf"; // 替换为实际的文件名
    link.click();
  };
  return (
    <div className={classes.headerWrap}>
      <div className={classes.headerImg}></div>
      <Button onClick={handleDownload} className={classes.dlBen}>
        下载简历
      </Button>
    </div>
  );
};
export default MyHeader;
