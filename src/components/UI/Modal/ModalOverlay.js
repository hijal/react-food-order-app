const ModalOverlay = (props) => {
  return (
    <div className={props.modal}>
      <div className={props.content}>{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
