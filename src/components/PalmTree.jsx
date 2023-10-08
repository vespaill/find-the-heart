import palm_tree from "../assets/palm-tree.png";

const PalmTree = props => {

   const style = {
      position: 'absolute',
      width: '50px',
      ...props.style
   };
   return <img src={palm_tree} style={style}></img>

};

export default PalmTree;