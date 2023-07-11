import classes from "./App.module.less";
import { Outlet } from "react-router-dom";
import React from "react";
import MyBg from "../../components/bg";
import MyHeader from "../../components/header";

const App: React.FC = () => {
  //   const location = useLocation();
  //   const selectKey = location.pathname.substring(1);
  return (
    <div className={classes["home-container"]}>
      <MyHeader />
      <Outlet />
      <MyBg />
    </div>
  );
};

export default App;
