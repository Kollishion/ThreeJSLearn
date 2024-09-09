import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="navbar flex gap-10 absolute pt-10 pb-3 top-0 left-1/2 -translate-x-1/2 capitalize">
        {["iPhone", "iPad", "services", "ios", "mac", "products"].map((e) => (
          <a key={e} href="#" className="text-white font-[500] text-sm">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center top-24 left-1/2 -translate-x-1/2 text-white">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh so pro !</h5>
        <p className="text-center w-3/4">
          Experience unparalleled performance with the MacBook Pro 15-inch.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={"../public/studio_small_09_4k.exr"} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
