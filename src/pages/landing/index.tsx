import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import classes from "./index.module.less";
import {
  DingdingOutlined,
  QqOutlined,
  WechatOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row, Tooltip } from "antd";
import Parallax from "parallax-js";
// swiper@5.4.5
import Swiper from "swiper/js/swiper.js"; // 引入js
import "swiper/css/swiper.min.css"; // 引入样式
const MailIcon = () => (
  <svg
    t="1688974060469"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2349"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
  >
    <path
      d="M690.944 628.352c52.821333 40.277333 88.32 48.682667 110.805333 38.613333 14.762667-6.656 25.386667-22.229333 31.573334-39.466666a341.461333 341.461333 0 0 0-150.613334-411.050667 341.333333 341.333333 0 1 0-170.026666 637.013333l0.256 85.333334a424.874667 424.874667 0 0 1-214.186667-57.216C94.677333 763.733333 24.746667 502.784 142.592 298.752c117.76-204.074667 378.752-274.005333 582.826667-156.16a426.752 426.752 0 0 1 188.202666 513.877333 172.202667 172.202667 0 0 1-20.096 39.466667c-14.378667 21.077333-33.066667 38.186667-56.832 48.853333-56.618667 25.429333-125.653333 8.106667-206.08-55.338666a213.333333 213.333333 0 1 1 60.330667-61.098667z m-178.858667 11.733333a128 128 0 1 0 0-256 128 128 0 0 0 0 256z"
      fill="currentColor"
      p-id="2350"
    ></path>
  </svg>
);
const PhoneIcon = () => (
  <svg
    t="1688974133750"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4422"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
  >
    <path
      d="M256 70.4A57.9072 57.9072 0 0 0 198.4 128v768A57.9072 57.9072 0 0 0 256 953.6h512A57.9328 57.9328 0 0 0 825.6 896V128A57.9072 57.9072 0 0 0 768 70.4zM256 0h512a128 128 0 0 1 128 128v768a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128z m166.4 768h179.2a38.4 38.4 0 0 1 0 76.8h-179.2a38.4 38.4 0 0 1 0-76.8z m0 0"
      p-id="4423"
      fill="currentColor"
    ></path>
  </svg>
);
const Landing: React.FC = () => {
  const targetRef = useRef<any>([]); //动画
  const parallaxContainerRef = useRef<any>(null); //视差实例
  const goToNextSlide = () => {
    const mySwiper = document.querySelector(".swiper-container").swiper;
    mySwiper.slideNext();
  };
  useEffect(() => {
    const elements = targetRef.current;
    const animations = [
      {
        targets: elements[0],
        opacity: [0, 1],
        translateY: ["20px", "0px"],
        duration: 500,
        easing: "easeOutSine",
      },
      {
        targets: elements[1],
        opacity: [0, 1],
        translateY: ["20px", "0px"],
        duration: 500,
        easing: "easeOutSine",
      },
      {
        targets: elements[2],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutSine",
      },
      {
        targets: ".ant-row .ant-col",
        opacity: [0, 1],
        translateY: ["-20px", "0px"],
        duration: 1000,
        easing: "easeOutSine",
        delay: anime.stagger(200, { start: 500 }),
      },
      {
        targets: elements[3],
        rotate: ["15deg", "-15deg", "15deg"],
        duration: 1000,
        easing: "easeInOutSine",
        complete: () => {
          anime.remove(elements[3]);
        },
      },
    ];
    animations.forEach((animation, index) => {
      if (!animation.delay) {
        anime({ ...animation, delay: (index + 1) * 400 });
      } else {
        anime(animation);
      }
    });
    /////////
    const parallaxInstance = new Parallax(parallaxContainerRef.current);

    ////////
    // 配置swiper播放 配置项都写这里面
    const mySwiper = new Swiper(".swiper-container", {
      speed: 500,
      mousewheel: {
        sensitivity: 0.4,
        forceToAxis: true,
      },
      autoHeight: true,
      direction: "vertical",
      freeMode: true,
      noSwiping: true,
    });
    return () => {
      parallaxInstance.destroy(); // 在组件卸载时销毁 Parallax 实例
    };
  }, []);
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper" style={{ color: "#fff" }}>
        <div className="swiper-slide swiper-no-swiping">
          <div className={classes.landingWrap}>
            <div className={classes.leftWrap}>
              <h1 ref={(el) => (targetRef.current[0] = el)}>
                你好
                <div
                  style={{ display: "inline-block" }}
                  ref={(el) => (targetRef.current[3] = el)}
                >
                  👋
                </div>
              </h1>
              <div
                ref={(el) => (targetRef.current[1] = el)}
                className={classes.introduce}
              >
                我是詹文慧
                <span></span>
              </div>
              <div ref={(el) => (targetRef.current[2] = el)}>
                <div className={classes.introduce2}>
                  A CLIMBERIN THEWORLDOF PRODUCTDESIGN
                </div>
                <div className={classes.introduce3}>
                  一个设计界的攀登者<br></br>
                  拥有一颗毫无边界的好奇心和一股心无旁骛的探索力
                </div>
              </div>

              <Row
                gutter={10}
                className={classes.rowWrap}
                ref={(el) => (targetRef.current[4] = el)}
              >
                <Col className="gutter-row" span={4}>
                  <div className={classes.iconWrap}>
                    <DingdingOutlined />
                  </div>
                </Col>

                <Col className="gutter-row" span={4}>
                  <div className={classes.iconWrap}>
                    <TwitterOutlined />
                  </div>
                </Col>

                <Col className="gutter-row" span={4}>
                  <div className={classes.iconWrap}>
                    <QqOutlined />
                  </div>
                </Col>

                <Col className="gutter-row" span={4}>
                  <Tooltip
                    overlayClassName={`${classes.tipWrap} ${classes.wechatCodeWrap}`}
                    title={<div className={classes.wechatCode}></div>}
                    color={"rgb(217,141,143)"}
                  >
                    <div className={classes.iconWrap}>
                      <WechatOutlined />
                    </div>
                  </Tooltip>
                </Col>

                <Col className="gutter-row" span={4}>
                  <Tooltip
                    overlayClassName={classes.tipWrap}
                    title="2578503280@qq.com"
                    color={"linear-gradient(to right, #6809e7,  #1522db)"}
                  >
                    <div className={classes.iconWrap}>
                      <MailIcon />
                    </div>
                  </Tooltip>
                </Col>

                <Col className="gutter-row" span={4}>
                  <Tooltip
                    overlayClassName={classes.tipWrap}
                    title="13567047293"
                    color={"linear-gradient(to right, #28a70b,  #1522db)"}
                  >
                    <div className={classes.iconWrap}>
                      <PhoneIcon />
                    </div>
                  </Tooltip>
                </Col>
              </Row>
            </div>
            <div className={classes.rightWrap}>
              <div className={classes.ren} ref={parallaxContainerRef}>
                <div className={classes.renImg} data-depth="0.2"></div>
                {/* <div className={classes.cover}></div> */}
              </div>
            </div>
            <div className={classes.next} onClick={goToNextSlide}>
              向下继续
            </div>
          </div>
        </div>
        <div
          className="swiper-slide swiper-no-swiping"
          style={{ backgroundColor: "red" }}
        >
          Slide 2
        </div>
        <div
          className="swiper-slide swiper-no-swiping"
          style={{ backgroundColor: "yellow", color: "#333" }}
        >
          Slide 3
        </div>
      </div>
    </div>
  );
};
export default Landing;
