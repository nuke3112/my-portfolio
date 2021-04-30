import { useSpring } from "react-spring";
import ReactFullpage from "@fullpage/react-fullpage";

import Background from "./containers/Background/Background";
import FullPage from "./containers/FullPage/FullPage";

import "./App.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

function App() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 550, friction: 140 }
  }));

  return (
    <div
      className="App"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        navigation
        easingcss3="cubic-bezier(.58,0,.25,1)"
        scrollingSpeed={1500}
        render={({ state, fullpageApi }) => <FullPage />}
      />
      <Background mouse={props.xy} />
    </div>
  );
}

export default App;
