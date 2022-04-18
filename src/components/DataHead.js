import React from "react";
import BtnMail from "./btnMail";
import BtnLinkIn from "./btnLinkIn";

const DataHead = () => (
  <div>
    <span className="title--name center">jon smit</span>
    <span className="title--job center">fronend developer</span>
    <span className="website center">Iwish.com</span>
    <div className="center">
      <BtnMail />
      <BtnLinkIn />
    </div>
  </div>
);
export default DataHead;
