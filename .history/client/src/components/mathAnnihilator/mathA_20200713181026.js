import React, { Component } from "react";
import "./mathA.module.css";
import Spacebackground from "../../Assets/spaceship/Spacebackground.png";
import { urlencoded } from "express";

const spacepic = {
  background: `url(${Spacebackground})`,
  repeat: "no repeat",
  size: "cover",
};
function mathA() {
  return <div style={Spacebackground}></div>;
}
export default mathA;
