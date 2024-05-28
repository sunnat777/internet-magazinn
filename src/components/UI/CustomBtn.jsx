import React from "react";
import s from "./CustomBtn.module.scss";

const CustomBtn = ({ text, icon, width, height, mt, url }) => {
  return (
    <button
      className={s.btn}
      style={{ width: width, height: height, marginTop: mt }}
    >
      <a href={url}></a>
      <img src={icon} alt="" />
      <span>{text}</span>
    </button>
  );
};

export default CustomBtn;
