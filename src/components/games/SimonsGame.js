/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useState } from "react";

export const SimonsGame = () => {
  // var header = document.querySelector(".SIMON__header__h1");
  const [header, setHeader] = useState("Press any key to start");
  let [colorPatern, setColorPatern] = useState([]);
  // const [youLose, setYouLose] = useState(true)
   let [animatedCircle, setanimatedCircle] = useState("");
  // let [userList, setUserList] = useState(null)

  let [nb_good_user, setNumberGoodUser] = useState(0);
  // let level = 1;
  let [level, setLevel] = useState(1)
  let [goodButtonClickedAnimation, setGoodButtonClickedAnimation] =
    useState("");
  let [badButtonClickedAnimation, setBadButtonClickedAnimation] = useState("");

  var youLose = true;
  var userList = null;
 

  useEffect(() => {
    console.log(level)
  },[level])
  console.log(level)
  const addEventListener = () => {
    document.addEventListener("keypress", (e) => init(e));
  };

  useEffect(() => {
    addEventListener();
  }, []);

  function init(event) {
    if (youLose === true) {
      youLose = false;
      comparaisonPaterns();
    }
  }

  // fonction main
  function comparaisonPaterns() {

    youLose = false;
    setHeader(`Level ${level}`);
    randomColor();
  }

  const handleClick = (event) => {
    var buttonClass = event.currentTarget.className;
    console.log(event.currentTarget);

    var colorClickedByUser = buttonClass.split(" ")[0];

    // setUserList(colorClickedByUser)

    userList = colorClickedByUser;

    if (colorPatern[nb_good_user] !== userList) {
      // whenYouLoseBackground();
      BadColorClicked(colorClickedByUser);
    }
    //Si bonne reponse et mid sequence
    else if (
      nb_good_user < level - 1 &&
      colorPatern[nb_good_user] === userList
    ) {
      setNumberGoodUser(nb_good_user + 1);
      // nb_good_user++;
      goodButtonClicked(colorClickedByUser);
    }
    // si les deux sont pareils, call RANDOMCOLOR
    else if (
      level === nb_good_user + 1 &&
      colorPatern[nb_good_user] === userList
    ) {
      console.log("[level]", level)
      console.log("[nb_good_user]", nb_good_user +1)

      goodButtonClicked(colorClickedByUser);
      setLevel(level+1);
      setNumberGoodUser(0);
   
      setHeader(`Level ${level}`);
      setTimeout(() => {
        randomColor();
      }, 1000);
    }
  };

  function randomColor() {
    var colorList = ["red", "yellow", "green", "blue"];
    var randomNumber = Math.floor(Math.random() * 4);

    setColorPatern([...colorPatern, colorList[randomNumber]]);

    setanimatedCircle(colorList[randomNumber]);

    animation();
  }

  function animation() {
    setTimeout(() => {
      setanimatedCircle("");
    }, 400);

  }

  function goodButtonClicked(colorClickedByUser) {
    setGoodButtonClickedAnimation(colorClickedByUser);

    setTimeout(function () {
      setGoodButtonClickedAnimation("");
    }, 75);
  }

  function BadColorClicked(colorClickedByUser) {
    youLose = true;
    userList = null;
    setColorPatern([]);
    setNumberGoodUser(0);

 
    setHeader(`Game Over. Press any key to restart`);

    setBadButtonClickedAnimation(colorClickedByUser);

    setTimeout(function () {
      setBadButtonClickedAnimation("");
    }, 75);

  }


  return (
    <div className="h-full">
      <div id="headingSection" className="SIMON__header pb-3">
        <h1 className="SIMON__header__h1">{header}</h1>
      </div>
      <div className="SIMON__game-section gap-3">
        <button
          className={`red h-44 w-44 rounded-full ${
            animatedCircle === "red" && "animate-pulse-fast"
          } ${goodButtonClickedAnimation === "red" && "goodButtonAnimation"} ${
            badButtonClickedAnimation === "red" && "lose"
          }`}
          onClick={(e) => handleClick(e)}
        ></button>
        <button
          className={`yellow h-44 w-44 rounded-full ${
            animatedCircle === "yellow" && "animate-pulse-fast"
          } ${
            goodButtonClickedAnimation === "yellow" && "goodButtonAnimation"
          } ${badButtonClickedAnimation === "yellow" && "lose"}`}
          onClick={(e) => handleClick(e)}
        ></button>
        <button
          className={`blue h-44 w-44 rounded-full ${
            animatedCircle === "blue" && "animate-pulse-fast"
          } ${goodButtonClickedAnimation === "blue" && "goodButtonAnimation"} ${
            badButtonClickedAnimation === "blue" && "lose"
          }`}
          onClick={(e) => handleClick(e)}
        ></button>
        <button
          className={`green h-44 w-44 rounded-full ${
            animatedCircle === "green" && "animate-pulse-fast"
          } ${
            goodButtonClickedAnimation === "green" && "goodButtonAnimation"
          } ${badButtonClickedAnimation === "green" && "lose"}`}
          onClick={(e) => handleClick(e)}
        ></button>
      </div>
    </div>
  );
};
