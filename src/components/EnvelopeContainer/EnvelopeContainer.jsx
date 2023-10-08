import Envelope from "../Envelope/Envelope";
import "./EnvelopeContainer.css";
import { useState } from 'react';
import x_mark from '../../assets/x-mark.png';

const EnvelopeContainer = () => {

   const [is_revealed, setIsRevealed] = useState(false);
   const [is_torn, setIsTorn] = useState(false);

   const onClick = () => {
      if (is_revealed) {
         setIsTorn(true);
      } else {
         setIsRevealed(true);
      }
   }

   return <>
      <div className={`concealment ${is_revealed? "reveal" : ""} ${is_torn? "tear" : ""}`}>
         <svg viewBox="0 0 150 150"
            onClick={onClick}>
            <polygon points="0,0 0,150 20,130 50,140 70,125 100,140 150,90 140,80 150,75 140,60 150,50 100,10 75,10 55,0 25,10"/>
         </svg>
         <img id='x-mark' src={x_mark}/>
      </div>
      <Envelope top="200px" left="885px"/>
   </>

};

export default EnvelopeContainer;