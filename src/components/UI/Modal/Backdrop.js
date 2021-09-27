const Backdrop = (props) => {
  return <div className={props.backdrop} onClick={props.onCartClose}></div>;
};

export default Backdrop;
