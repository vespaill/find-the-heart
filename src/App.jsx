import "./App.css";
import map from "./assets/map.png";
import EnvelopeContainer from "./components/EnvelopeContainer/EnvelopeContainer";
import Icon from "./components/Icon";
import IconGroup from "./components/IconGroup";

import palm from "./assets/palm-tree.png";
import pine from "./assets/pine-tree.png";
import mountains from "./assets/mountains.png";
import volcano from "./assets/volcano.png";
import cloud from "./assets/cloud.png";

import house from "./assets/house-2.png";
import castle from "./assets/castle.png";
import lighthouse from "./assets/lighthouse.png";

import sea_wave from "./assets/sea-wave.png";
import shipwreck from "./assets/shipwreck.png";
import shipwreck_2 from "./assets/shipwreck-2.png";
import sailing_ship from "./assets/sailing-ship.png";
import kraken from "./assets/kraken.png";

import skull_and_crossbones from "./assets/skull-and-crossbones.png";
import treasure_chest from "./assets/treasure-chest-2.png";
import tombstone from "./assets/tombstone.png";

import compass from "./assets/compass.png";

const App = () => (
   <div className="canvas">
   <div className="map-container">
      <img className="map" src={map}></img>
      <EnvelopeContainer/>

      <Icon src={house} width={20} top='65px' left='797px'/>
      <Icon src={volcano} width={85} top='200px' left='750px'/>
      <Icon src={treasure_chest} width={25} top='160px' left='715px'/>

      {/* skull-and-crossbones.pngs */}
      <Icon src={skull_and_crossbones} width={100} top='-20px' left='520px' style={{transform: 'rotate(10deg)'}}/>
      <div className="text" style={{ top: '80px', left: '495px', transform: 'rotate(10deg)'}}>Pirate Bay</div>
      <Icon src={shipwreck} top='175px' left='560px' style={{transform: 'scaleX(-100%)'}}/>
      <Icon src={shipwreck_2} top='135px' left='450px'/>

      <IconGroup src={tombstone} quantity={3} width={15} distance_apart={10} top='225px' left='460px'/>

      <IconGroup src={house} quantity={2} width={20} distance_apart={12} top='625px' left='460px'/>
      <IconGroup src={house} flip={true} quantity={2} width={20} distance_apart={12} top='650px' left='325px'/>
      <Icon src={house}width={20} top='555px' left='230px'/>
      <IconGroup src={house} quantity={3} width={20} distance_apart={12} top='400px' left='550px'/>

      {/* Clouds */}
      <IconGroup src={cloud} quantity={2} distance_apart={20} top='250px' left='10px'/>
      <Icon src={cloud} top='255px' left='45px'/>
      <IconGroup src={cloud} quantity={2} flip={true} distance_apart={20} top='350px' left='1000px'/>
      <IconGroup src={cloud} quantity={2} distance_apart={20} top='5px' left='410px'/>

      {/* Upper left Island */}
      <IconGroup src={palm} quantity={3}  top='85px' left='0'/>
      <IconGroup src={palm} quantity={2} flip={true} top='12px' left='160px'/>
      <Icon src={lighthouse} width={50} top='40px' left='80px'/>
      <Icon src={sailing_ship} top='100px' left='200px'/>
      <Icon src={sailing_ship} top='475px' left='600px'/>
      <Icon src={sailing_ship} top='425px' left='1010px' style={{transform: 'scaleX(-1)'}}/>

      {/* Upper left waves */}
      <Icon src={sea_wave} top='50px' left='305px'/>
      <Icon src={sea_wave} top='60px' left='300px'/>
      <Icon src={sea_wave} top='690px' left='5px'/>
      <Icon src={sea_wave} top='700px' left='0px'/>

      {/* Upper left mountains */}
      <IconGroup src={mountains} quantity={2} distance_apart={34} width={60} top='275px' left='200px'/>
      <Icon src={mountains} width={60} top='310px' left='225px'/>
      <Icon src={castle} width={80} top='275px' left='260px' />
      <IconGroup src={pine} quantity={2} top='315px' left='325px'/>
      <IconGroup src={pine} quantity={2} top='335px' left='335px'/>
      <IconGroup src={pine} quantity={3} top='355px' left='310px'/>
      <IconGroup src={pine} flip={true} quantity={2} top='335px' left='280px'/>
      <IconGroup src={pine} flip={true} quantity={2} top='335px' left='180px'/>

      {/* Upper right palm trees */}
      <Icon src={palm} top='-5px' left='810px'/>
      <Icon src={palm} top='35px' left='930px'/>
      <Icon src={palm} top='110px' left='1005px'/>

      <IconGroup src={pine} quantity={3} top='200px' left='250px'/>
      {/* Middle left waves */}
      <Icon src={sea_wave} top='350px' left='50px'/>
      <Icon src={sea_wave} top='360px' left='55px'/>
      <Icon src={sea_wave} top='370px' left='45px'/>

      {/* Lower left Island */}
      <Icon src={mountains} top='450px' left='65px' width={60}/>
      <IconGroup src={palm} quantity={2} flip={true} top='568px' left='143px'/>
      <Icon src={palm} top='540px' left='15px'/>

      {/* Bottom left trees */}
      <IconGroup src={pine} quantity={2} top='550px' left='300px'/>
      <IconGroup src={pine} quantity={2} flip={true} top='450px' left='400px'/>
      <IconGroup src={pine} quantity={3} top='500px' left='450px'/>

      {/* Forest */}
      <div style={{position: 'absolute', top: '50px', left: '-50px'}}>
         <Icon src={pine} top='275px' left='725px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='750px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='775px'/>
         <IconGroup src={pine} quantity={3} top='320px' left='725px'/>
      </div>
      <div style={{position: 'absolute', top: '50px', left: '20px'}}>
         <Icon src={pine} top='275px' left='725px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='750px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='775px'/>
         <IconGroup src={pine} quantity={3} top='320px' left='725px'/>
      </div>
      <div style={{position: 'absolute', top: '100px', left: '0px'}}>
         <Icon src={pine} top='275px' left='725px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='750px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='775px'/>
         <IconGroup src={pine} quantity={3} top='320px' left='725px'/>
      </div>
      <div style={{position: 'absolute', top: '125px', left: '100px'}}>
         <IconGroup src={pine} quantity={2} top='300px' left='750px'/>
         <IconGroup src={pine} quantity={2} top='300px' left='775px'/>
         <IconGroup src={pine} quantity={3} top='320px' left='725px'/>
      </div>
      <IconGroup src={house} quantity={3} width={20} distance_apart={12} top='400px' left='825px'/>
      <IconGroup src={house} quantity={2} width={20} distance_apart={12} top='440px' left='810px'/>
      <Icon src={house} width={20} top='430px' left='795px'/>

      <IconGroup src={mountains} flip={true} quantity={2} distance_apart={34} width={60} top='290px' left='820px'/>

      {/* Bottom right island palms */}
      <Icon src={palm} top='630px' left='975px'/>
      <Icon src={palm} top='595px' left='1010px'/>

      {/* Compass */}
      <Icon src={compass} top='550px' left='575px' width={200}/>

      {/* Waves bottom right */}
      <Icon src={sea_wave} top='550px' left='905px'/>
      <Icon src={sea_wave} top='560px' left='895px'/>
      <Icon src={sea_wave} top='570px' left='900px'/>

      <Icon src={sea_wave} top='600px' left='800px'/>
      <Icon src={sea_wave} top='610px' left='810px'/>
      <Icon src={sea_wave} top='620px' left='805px'/>

      <Icon src={sea_wave} top='650px' left='875px'/>
      <Icon src={sea_wave} top='660px' left='885px'/>
      <Icon src={sea_wave} top='670px' left='880px'/>

      <Icon src={kraken} top='-30px' left='1050px' width={80}/>

   </div>
   </div>
);

export default App;