import Icon from "./Icon";

const IconGroup = ({ src, flip, quantity, width, top, left, distance_apart }) => {

   if (distance_apart == null) {
      distance_apart = 10;
   }

   const tree_group_style = {
      position: 'absolute',
      width: '100px',
      top,
      left
   };
   return <div style={tree_group_style}>
      {Array.from({ length: quantity }).map((_item, index) => {
         const top = (index % 2 == 0)? 0 : distance_apart*(flip? 1 : -1);
         return <Icon width={width} src={src} top={`${top}px`} left={`${index*distance_apart}px`}/>
      })}
   </div>

};

export default IconGroup;