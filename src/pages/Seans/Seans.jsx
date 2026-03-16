import React from "react";
import "./Seans.css";

import { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Seans() {
  const [blocks, setBlocks] = useState([
    // левая часть с тремя сиденьями
    {
      id: 1,
      x: 1.9,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 4.6,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 7.2,
      y: 64,
      width: 2,
      height: 3,
    },
    // правая часть с тремя сиденьями
    {
      id: 4,
      x: 86,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 91.2,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 88.6,
      y: 64,
      width: 2,
      height: 3,
    },
    // центральная часть первый ряд
    {
      id: 1,
      x: 31,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 33.5,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 36,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 38.5,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 41,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 43.5,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 50,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 52.5,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 55,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 57.5,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 60,
      y: 28,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 62.5,
      y: 28,
      width: 2,
      height: 3,
    },
    // центральная часть второй ряд
    {
      id: 1,
      x: 26,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 32.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 32.5,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 3
    {
      id: 1,
      x: 26,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 37,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 4
    {
      id: 1,
      x: 26,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 5
    {
      id: 1,
      x: 26,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 46,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 6
    {
      id: 1,
      x: 26,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 7
    {
      id: 1,
      x: 26,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 55,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 8
    {
      id: 1,
      x: 26,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 59.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 59.5,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 9
    {
      id: 1,
      x: 26,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 64,
      width: 2,
      height: 3,
    },
    // центральная чать ряд 10
    {
      id: 1,
      x: 26,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    // центральная чать диваны
    {
      id: 1,
      x: 26,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 28.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 31,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 33.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 5,
      x: 36,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 6,
      x: 38.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 7,
      x: 41,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 8,
      x: 43.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 9,
      x: 50,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 10,
      x: 52.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 11,
      x: 55,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 12,
      x: 57.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 13,
      x: 60,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 14,
      x: 62.5,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 65,
      y: 78,
      width: 2,
      height: 3,
    },
    {
      id: 15,
      x: 67.5,
      y: 78,
      width: 2,
      height: 3,
    },
    // правая часть ряд 1
    {
      id: 1,
      x: 75,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 37,
      width: 2,
      height: 3,
    },
    // правая часть ряд 2
    {
      id: 2,
      x: 75,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    // правая часть ряд 3
    {
      id: 2,
      x: 75,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 80,
      y: 46,
      width: 2,
      height: 3,
    },
    // правая часть ряд 4
    {
      id: 2,
      x: 75,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 80,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 82.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    // правая часть ряд 5
    {
      id: 2,
      x: 75,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 80,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 82.5,
      y: 55,
      width: 2,
      height: 3,
    },
    // правая часть ряд 6
    {
      id: 1,
      x: 75,
      y: 59.5,
      width: 2,
      height: 3,
    },
    // правая часть ряд 7
    {
      id: 2,
      x: 75,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 64,
      width: 2,
      height: 3,
    },
    // правая часть ряд 8
    {
      id: 2,
      x: 75,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 80,
      y: 68.5,
      width: 2,
      height: 3,
    },
    // правая часть ряд 9
    {
      id: 2,
      x: 75,
      y: 73,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 77.5,
      y: 73,
      width: 2,
      height: 3,
    },
    {
      id: 3,
      x: 80,
      y: 73,
      width: 2,
      height: 3,
    },
    // левая часть ряд 1
    {
      id: 1,
      x: 18,
      y: 37,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 37,
      width: 2,
      height: 3,
    },
    // левая часть ряд 2
    {
      id: 1,
      x: 18,
      y: 41.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 41.5,
      width: 2,
      height: 3,
    },
    // левая часть ряд 3
    {
      id: 1,
      x: 18,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 46,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 13,
      y: 46,
      width: 2,
      height: 3,
    },
    // левая часть ряд 4
    {
      id: 1,
      x: 18,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 13,
      y: 50.5,
      width: 2,
      height: 3,
    },
    {
      id: 4,
      x: 10.5,
      y: 50.5,
      width: 2,
      height: 3,
    },
    // левая часть ряд 5
    {
      id: 1,
      x: 18,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 13,
      y: 55,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 10.5,
      y: 55,
      width: 2,
      height: 3,
    },
    // левая часть ряд 6
    {
      id: 1,
      x: 18,
      y: 59.5,
      width: 2,
      height: 3,
    },
    // левая часть ряд 7
    {
      id: 1,
      x: 18,
      y: 64,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 64,
      width: 2,
      height: 3,
    },
    // левая часть ряд 8
    {
      id: 1,
      x: 18,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 68.5,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 13,
      y: 68.5,
      width: 2,
      height: 3,
    },
    // левая часть ряд 9
    {
      id: 1,
      x: 18,
      y: 73,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 15.5,
      y: 73,
      width: 2,
      height: 3,
    },
    {
      id: 2,
      x: 13,
      y: 73,
      width: 2,
      height: 3,
    },
  ]);

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const updateImageSize = () => {
      if (imageRef.current) {
        setImageSize({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight,
        });
      }
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  // Функция для пересчета координат в пиксели
  const getBlockStyle = (block) => {
    if (!imageSize.width || !imageSize.height) return {};

    return {
      left: `${(block.x / 100) * imageSize.width}px`,
      top: `${(block.y / 100) * imageSize.height}px`,
      width: `${(block.width / 100) * imageSize.width}px`,
      height: `${(block.height / 100) * imageSize.height}px`,
      // Красный цвет по умолчанию
      position: "absolute",
      border: "1px solid black", // Черная граница

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      cursor: "move",
    };
  };

  const [minScale, setMinScale] = useState(1); // По умолчанию 1 (оригинал)

  useEffect(() => {
    // Рассчитываем минимальный масштаб после загрузки картинки
    if (imageRef.current) {
      const img = imageRef.current;

      // Функция для обновления minScale
      const updateMinScale = () => {
        const containerWidth = img.parentElement.offsetWidth;
        const containerHeight = img.parentElement.offsetHeight;
        const imageWidth = img.naturalWidth;
        const imageHeight = img.naturalHeight;

        // Если картинка больше контейнера - считаем масштаб, иначе оставляем 1
        if (imageHeight > containerHeight || imageWidth > containerWidth) {
          const scaleX = containerWidth / imageWidth;
          const scaleY = containerHeight / imageHeight;
          // Берем минимальный масштаб, чтобы картинка поместилась по высоте/ширине
          const fitScale = Math.min(scaleX, scaleY, 1); // Не меньше 1 (оригинал)
          setMinScale(fitScale);
        } else {
          setMinScale(1); // Картинка уже помещается - не отдаляем
        }
      };

      // Ждем загрузки картинки, если ещё не загружена
      if (img.complete) {
        updateMinScale();
      } else {
        img.onload = updateMinScale;
      }

      // Обновляем при изменении размера окна
      window.addEventListener("resize", updateMinScale);
      return () => window.removeEventListener("resize", updateMinScale);
    }
  }, []);
  return (
    <div className="App">
      <div className="header__seans">
        <button className="button">Продажа</button>
        <button className="button">Редактировать</button>
        <button className="button">Билетный комплект</button>
        <button className="button">Квоты</button>
        <button className="button">Отчеты</button>
        <button className="button">Заказы</button>
        <button className="button">Места</button>
        <button className="button">Виджет</button>
        <button className="button">Перевод</button>
        <button className="button">Штрихкоды</button>
      </div>
      <div className="seans__info">
        <div className="seans__title">
          <p className="seans__text">Наименование сеанса</p>
        </div>
        <div className="seans__date">
          <p className="seans__time">19.03.2026</p>
          <p className="seans__time">7:00</p>
          <p className="seans__name">Театр Crave</p>
        </div>
      </div>
      <div className="shema">
        <p className="title__shema">Схема зала</p>
        <div className="shema__input">
          <select className="filter-select shema__select">
            <option>Все доступные</option>
            <option>Агенты</option>
            <option>Билетный стол</option>
            <option>Открытая продажа</option>
          </select>
          <label className="checkbox-item shema__checkbox">
            <input type="checkbox" /> Только выбранные
          </label>
        </div>
      </div>
      <div className="image__container">
        <div className="price__container">
          <p className="price__text">Цена билетов: </p>
          <p className="price1">10000</p>
          <p className="price2">15000</p>
          <p className="price3">20000</p>
          <p className="price4">25000</p>
        </div>
        <div
          className="img__container"
          style={{ position: "relative", display: "inline-block" }}
        >
          <TransformWrapper
            initialScale={1}
            minScale={minScale} // Динамический минимальный масштаб
            maxScale={3}
            wheel={{ step: 0.1 }}
            doubleClick={{ disabled: true }}
            panning={{ disabled: false }}
            limitToBounds={true} // Не даёт выходить за границы
          >
            <TransformComponent>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  ref={imageRef}
                  src="/cravePlan123.svg"
                  alt="Plan"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    height: "auto",
                    userSelect: "none",
                  }}
                />
                {/* Блоки будут масштабироваться вместе с картинкой */}
                {blocks.map((block) => (
                  <div
                    key={block.id}
                    className="block"
                    style={getBlockStyle(block)}
                  >
                    {block.id}
                  </div>
                ))}
              </div>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}

export default Seans;
