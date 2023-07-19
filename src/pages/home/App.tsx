import classes from "./App.module.less";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MyBg from "../../components/bg";
import MyHeader from "../../components/header";
import LoadingComponent from "../../components/LoadingComponent";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  //   const location = useLocation();
  //   const selectKey = location.pathname.substring(1);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const MainContent = () => {
    return (
      <div className={classes["home-container"]}>
        <MyHeader />
        <Outlet />
        <MyBg />
      </div>
    );
  };
  return <div>{isLoading ? <LoadingComponent /> : <MainContent />}</div>;
};

export default App;
