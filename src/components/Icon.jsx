const Icon = ({ src, width, top, left, style }) => {
   if (width == null) {
      width = '40px';
   }
   const icon_style = {
      position: 'absolute',
      width, top, left, ...style
   };
   return <img src={src} style={icon_style}></img>

};

export default Icon;