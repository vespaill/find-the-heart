import Envelope from "../Envelope/Envelope";
import "./EnvelopeContainer.css";
import { useState } from 'react';
import x_mark from '../../assets/x-mark.png';

const EnvelopeContainer = () => {

   const [is_revealed, setIsRevealed] = useState(false);

   return <>
      <button className={`concealment ${is_revealed? "reveal" : ""}`}
              onClick={() => setIsRevealed(true)}>
         <img src={x_mark}/>
      </button>
      <Envelope top="200px" left="885px"/>
   </>

};

export default EnvelopeContainer;