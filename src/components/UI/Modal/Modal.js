import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          backdrop={classes.backdrop}
          onCartClose={props.onCartClose}
        />,
        document.getElementById('backdrop'),
      )}

      {ReactDOM.createPortal(
        <ModalOverlay modal={classes.modal} content={classes.content}>
          {props.children}
        </ModalOverlay>,
        document.getElementById('overlay'),
      )}
    </Fragment>
  );
};

export default Modal;
