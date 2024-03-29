/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from "react";

export const SimonsGame = () => {
  const [header, setHeader] = useState("Simon's Game");
  let [colorPatern, setColorPatern] = useState([]);
  let [animatedCircle, setanimatedCircle] = useState("");

  let [nb_good_user, setNumberGoodUser] = useState(0);
  let [level, setLevel] = useState(1);
  let [goodButtonClickedAnimation, setGoodButtonClickedAnimation] =
    useState("");
  let [badButtonClickedAnimation, setBadButtonClickedAnimation] = useState("");

  let [startGame, setStartGame] = useState(false)


  var youLose = true;
  var userList = null;

  

  function init(event) {
    if (youLose === true) {
      youLose = false;
      setStartGame(true)
      comparaisonPaterns();
    }
  }

  // fonction main
  function comparaisonPaterns() {
    youLose = false;
    setHeader(`Level ${level}`);
    setTimeout(() => {
      randomColor();
    }, 1000);
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
      console.log("[level]", level);
      console.log("[nb_good_user]", nb_good_user + 1);

      goodButtonClicked(colorClickedByUser);
      setLevel(level + 1);
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
    setStartGame(false)
    userList = null;
    setColorPatern([]);
    setNumberGoodUser(0);
    setLevel(1);

    setHeader(`Game Over.`);

    setBadButtonClickedAnimation(colorClickedByUser);

    setTimeout(function () {
      setBadButtonClickedAnimation("");
    }, 75);
  }

  return (
    <div className="flex h-full flex-col items-center gap-5">
      <div id="headingSection" className="">
        <h2 className="p-2 text-center">{header}</h2>
      </div>
      <div className="SIMON__game-section gap-3 mb-3">
        <button
          className={`red h-24 w-24 rounded-full ${
            animatedCircle === "red" && "animate-pulse-fast"
          } ${goodButtonClickedAnimation === "red" && "goodButtonAnimation"} ${
            badButtonClickedAnimation === "red" && "lose"
          }`}
          onClick={(e) => handleClick(e)}
        ></button>
        <button
          className={`yellow h-24 w-24 rounded-full ${
            animatedCircle === "yellow" && "animate-pulse-fast"
          } ${
            goodButtonClickedAnimation === "yellow" && "goodButtonAnimation"
          } ${badButtonClickedAnimation === "yellow" && "lose"}`}
          onClick={(e) => handleClick(e)}
        ></button>
        <button
          className={`blue h-24 w-24 rounded-full ${
            animatedCircle === "blue" && "animate-pulse-fast"
          } ${goodButtonClickedAnimation === "blue" && "goodButtonAnimation"} ${
            badButtonClickedAnimation === "blue" && "lose"
          }`}
          onClick={(e) => handleClick(e)}
        ></button>
        <button
          className={`green h-24 w-24 rounded-full ${
            animatedCircle === "green" && "animate-pulse-fast"
          } ${
            goodButtonClickedAnimation === "green" && "goodButtonAnimation"
          } ${badButtonClickedAnimation === "green" && "lose"}`}
          onClick={(e) => handleClick(e)}
        ></button>
      </div>
      <button className=" btn btn-primary btn-sm mb-3" disabled={startGame} onClick={init}>
        Play!
      </button>
    </div>
  );
};
