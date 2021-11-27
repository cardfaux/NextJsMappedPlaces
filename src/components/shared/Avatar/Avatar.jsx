import React from 'react';
import Image from 'next/image';

const Avatar = (props) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <Image
        src={props.image}
        alt={props.alt}
        width={props.width}
        height={props.width}
        // layout='responsive'
        // style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
