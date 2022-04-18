import React from "react";
import Btn from "./btns";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instegram from "../images/instegram.png";
import github from "../images/github.png";

const links = () => {
  return (
    <div className="links">
      <div className="center link__div">
        <Btn class="link__btn" img={twitter} imgClass="ling__btn__img" />
        <Btn class="link__btn" img={facebook} imgClass="ling__btn__img" />
        <Btn class="link__btn" img={instegram} imgClass="ling__btn__img" />
        <Btn class="link__btn" img={github} imgClass="ling__btn__img" />
      </div>
    </div>
  );
};

export default links;
