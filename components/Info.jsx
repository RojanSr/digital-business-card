import React from "react";
import ProfileImg from "../image/unnamed.png";
export default function Info() {
  return (
    <>
      <img src={ProfileImg} alt="profile-img" className="profile-pic" />
      <div className="info container">
        <p className="info--name">Rojan Rai</p>
        <p className="info--post">Junior Front End Developer</p>
        <a
          href="https://github.com/RojanSr"
          target={"_blank"}
          className="info--website"
        >
          github.com/RojanSr
        </a>

        <button
          className="btn info--email-btn"
          onClick={() => {
            window.open("mailto:rairojan1116@gmail.com");
          }}
        >
          <i className="fa-solid fa-envelope info--icon"></i>
          Email
        </button>

        <button
          className="btn info--lkdn-btn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/rojan-rai-460879268/");
          }}
        >
          <i className="fa-brands fa-linkedin info--icon"></i>
          LinkedIn
        </button>
      </div>
    </>
  );
}
