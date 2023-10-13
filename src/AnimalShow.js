import React from "react";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";
import heart from "./images/heart.svg";
import "./AnimalShow.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

export default function AnimalShow({ type }) {
  const [clicks, setClicks] = React.useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }
  return (
    <div className="animal-show" onClick={handleClick}>
      <img alt="animal" className="animal" src={svgMap[type]} />
      <img alt="heart" className="heart" src={heart} style={{ width: 10 + 7 * clicks + "px" }} />
    </div>
  );
}
