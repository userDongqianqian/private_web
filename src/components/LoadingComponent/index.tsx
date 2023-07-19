import classes from "./index.module.less";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loadingCubeContainer}>
        <div className={`${classes.loadingCube} ${classes.loadingCube1}`}></div>
        <div className={`${classes.loadingCube} ${classes.loadingCube2}`}></div>
        <div className={`${classes.loadingCube} ${classes.loadingCube3}`}></div>
        <div className={`${classes.loadingCube} ${classes.loadingCube4}`}></div>
        <div className={`${classes.loadingCube} ${classes.loadingCube5}`}></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
