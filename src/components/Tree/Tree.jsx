import tree from "../../assets/tree.png";
import "./Tree.css";

const Tree = ({ style }) => {
   return <img className="tree" src={tree} style={style}></img>
};

export default Tree;