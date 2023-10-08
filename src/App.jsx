import "./App.css";
import Envelope from "./components/Envelope/Envelope";
import Tree from "./components/Tree/Tree";
import PalmTree from "./components/PalmTree/PalmTree";

function App() {
   return (
      <div className="canvas">
         <div className="map">
            <Envelope/>

            <Tree style={{ top: '100px', left: '500px' }}/>
            <Tree style={{ top: '110px', left: '490px' }}/>
            <Tree style={{ top: '110px', left: '510px' }}/>

            <PalmTree style={{ left: '200px' }}/>
            <PalmTree style={{ top: '50px', left: '210px' }}/>
         </div>
      </div>
   );
}

export default App;