"use client"

import Image from "next/image";
import styles from "./page.module.css";
import React, { useRef } from 'react'

export default function Home() {

  const canvas = useRef(null);
  const ctx = canvas.getContext("2d");
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  
  
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 200;
  var zodiacSymbols = ["Pisces", "Aquarius", "Capricorn", "Sagittarius", "Scorpio", "Libra", "Virgo", "Leo", "Cancer", "Gemini", "Taurus", "Aries"];
  var zodiacColors = ["#6b8e23", "#556b2f", "#8b4513", "#8b0000", "#a52a2a", "#ee82ee", "#4b0082", "#0000ff", "#00ff00", "#ffff00", "#ffa500", "#ff0000"];
  
      
      ctx.translate(centerX, centerY)
      ctx.rotate(aries * Math.PI / 180)
  
      // Draw the outer circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.stroke();
  
      // Draw the inner circle
      ctx.beginPath();
      ctx.arc(0, 0, radius - 20, 0, 2 * Math.PI);
      ctx.stroke();
  
      // Draw the lines dividing the charinto 12 equal parts
      for (var i = 0; i < 12; i++) {
          ctx.save();
          //ctx.translate(centerX, centerY);
          ctx.rotate((i * 30) * Math.PI / 180);
          console.log(planetData, aries)
          ctx.beginPath();
          ctx.moveTo(0, -radius);
          ctx.lineTo(0, -radius + 20);
          ctx.stroke();
          //ctx.rotate(aries * Math.PI / 180);
          //console.log(aries)
          ctx.restore();
      }
  
      // Draw the zodiac symbols
      for (var i = 0; i < 12; i++) {
          ctx.save();
          //ctx.translate(centerX, centerY);
          ctx.rotate((i * 30 + 15 + 180) * Math.PI / 180);
          ctx.fillStyle = zodiacColors[i];
          ctx.fillText(zodiacSymbols[i], 0, -radius + 12);
          ctx.restore();
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
  
  
  
  
  
  
  
  
  
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI, false);
  
  
  for (const planet of planetData) {
    ctx.save();
    const radians = (90 + planet.skyPos) * Math.PI / 180;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(radians);
    ctx.fillStyle = planet.color;
    ctx.fillRect(150, -10, 20, 20);
    ctx.fillText(planet.bodyName, 100, 0)
    ctx.restore();
    //console.log(planetDataPre)
  }

  return (
    <main className={styles.main}>
      <canvas ref={canvas} width="500" height="400"></canvas>
    </main>
  );
}
