import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useRoutes,
  Location,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
const BeforeEnter = ({ routers }: { routers: RouteObject[] }) => {
  const navigate = useNavigate();
  const route = useRoutes(routers);

  const handleNotFound = () => {
    navigate("/404"); // 跳转到404页面
  };
  useEffect(() => {
    if (!route) {
      handleNotFound();
    }
  }, [location.pathname]);

  return route;
};

export default BeforeEnter;
