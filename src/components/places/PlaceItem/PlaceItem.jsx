import React, { useState, useContext } from 'react';

import Card from '../../shared/Card/Card';
import Button from '../../shared/FormElements/Button/Button';
import Modal from '../../shared/Modal/Modal';
import Map from '../../shared/Map/Map';
import AuthContext from '../../../context/auth-context';
import styles from './PlaceItem.module.css';

const PlaceItem = (props) => {
  const authCtx = useContext(AuthContext);

  const [showMap, setShowmap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowmap(true);
  const closeMapHandler = () => setShowmap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETING...');
  };

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
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header='Are you sure?'
        footerClass='place-item__modal-actions'
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it cant be
          undone thereafter.
        </p>
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
            {authCtx.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>}
            {authCtx.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
