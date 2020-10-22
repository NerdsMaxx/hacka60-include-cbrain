

import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";



function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const gestoLetraB = new fp.GestureDescription('Letra B');

  //Polegar

    gestoLetraB.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl,1.0);
    gestoLetraB.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 0.3);
    gestoLetraB.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUpRight, 1.0);
    gestoLetraB.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUpLeft, 1.0);

    //Outros Dedos

    for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
      gestoLetraB.addCurl(fp.finger, fp.FingerCurl.NoCurl, 1.0);
      gestoLetraB.addDirection(fp.finger, fp.FingerDirection.VerticalUp, 1.0);
      gestoLetraB.addDirection(fp.finger, fp.FingerDirection.VerticalRight, 0.7);
      gestoLetraB.addDirection(fp.finger, fp.FingerDirection.VerticalLeft, 0.7);
    }

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };


  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);


      if(hand.length >0){
        const GE = new fp.GestureEstimator([
            fp.Gestures.ThumbsUpGesture,
            fp.Gestures.VictoryGesture,   
   
               
        ])

          const gesture = await GE.estimate(hand[0].landmarks, 8);
          console.log(gesture);

       
        }
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
