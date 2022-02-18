import './App.css';
import * as React from "react";

function App() {
    const [clicked, setClick] = React.useState(false);
    // const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
    // const bind = useGesture(({ down, delta, velocity }) => {
    //   velocity = clamp(velocity, 1, 8);
    //   set({
    //     xy: down ? delta : [0, 0],
    //     config: { mass: velocity, tension: 500 * velocity, friction: 50 }
    //   });
    // });


    return (
        <div className="App">
            <h1>hello from app.js</h1>
        </div>
    );
}

export default App;
