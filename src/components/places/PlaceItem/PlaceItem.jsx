import React, { useState } from 'react';

import Card from '../../shared/Card/Card';
import Button from '../../shared/FormElements/Button/Button';
import Modal from '../../shared/Modal/Modal';
import Map from '../../shared/Map/Map';
import styles from './PlaceItem.module.css';

const PlaceItem = (props) => {
  const [showMap, setShowmap] = useState(false);

  const openMapHandler = () => setShowmap(true);
  const closeMapHandler = () => setShowmap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className={styles.map_container}>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className={styles.place_item}>
        <Card className={styles.place_item__content}>
          <div className={styles.place_item__image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={styles.place_item__info}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className={styles.place_item__actions}>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
