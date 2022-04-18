import React from "react";
import image from "./images/image.png";

import MainData from "./components/TextTitle";
import Links from "./components/links";

const Img = () => <img src={image} alt="selfy" className="img-man" />;

const AppFrame = () => (
  <div className="app__frame">
    <Img />
    <MainData />
    <br className="pre--links" />
    <Links />
  </div>
);

const App = () => (
  <div className="body">
    <AppFrame />
  </div>
);

export default App;
