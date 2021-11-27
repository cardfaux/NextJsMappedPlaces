import React, { useRef, useEffect } from 'react';

import styles from './Map.module.css';

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    // eslint-disable-next-line no-new
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return <div ref={mapRef} className={styles.map} style={props.style}></div>;
};

export default Map;
