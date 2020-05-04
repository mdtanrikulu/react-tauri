import React, { useState } from 'react';
import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

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
        </div>
      </header>
    </div>
  );
}

export default App;
