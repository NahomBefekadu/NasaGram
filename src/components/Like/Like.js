import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import "./Like.css";

function Like() {
  const [likes, setLikes] = useState(false);

  //toggle state of likes
  const toggleLike = (e) => {
    e.preventDefault();
    setLikes(!likes);
  };
  //styles for different state of likes
  const iconStyle1 = { color: "white", size: "3em" };
  const iconStyle2 = { color: "red", size: "3em" };
  return (
    <div className="like">
      <button
        href="#"
        className={likes ? "like__heart active" : "like__heart"}
        onClick={toggleLike}
        aria-describedby="This is a like button"
      >
        <BsHeart
          className={likes ? "like__iconLive" : "like__icons"}
          style={likes ? iconStyle1 : iconStyle2}
        />
      </button>
    </div>
  );
}
export default Like;
