import React, { useState } from 'react';
import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

import logo from './logo.svg';
import './App.css';

function App() {
  const [clicked, setClick] = useState(false);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 }
    });
  });

  const _onClick = _ => setClick(!clicked);

  return (
    <div className="App">
      <header className="App-header">
        <div className="overlay" />
        <div className="sticker">
          <animated.div
            {...bind()}
            style={{
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              )
            }}>
            <span onClick={_onClick}>
              {!clicked ? 'React-Tauri' : 'Hellö!'}
            </span>
          </animated.div>
        </div>
        <div className="container">
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
          <svg
            className="shape"
            viewBox="0 0 100 115"
            preserveAspectRatio="xMidYMin slice">
            <polygon
              points=""
              fill="none"
              stroke="hsl(320,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="0s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(240,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="1s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(160,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="2s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
            <polygon
              points=""
              fill="none"
              stroke="hsl(80,100%,70%)"
              stroke-width="5">
              <animate
                attributeName="points"
                repeatCount="indefinite"
                dur="4s"
                begin="3s"
                from="50 57.5, 50 57.5, 50 57.5"
                to="50 -75, 175 126, -75 126"
              />
            </polygon>
          </svg>
        </div>
      </header>
    </div>
  );
}

export default App;
