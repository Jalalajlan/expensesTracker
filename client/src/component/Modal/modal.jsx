import CloseIcon from "../../images/close.svg";
import SuccessIcon from "../../images/checked.png";
import "./modal.scss";

const Modal = ({ message, closeModal }) => {
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div className="modal-container">
        <img src={SuccessIcon} alt="success message" className="success-icon" />
        <p>{message}</p>
        <img
          src={CloseIcon}
          alt="modal close icon"
          className="close-icon"
          onClick={() => closeModal()}
        />
      </div>
    </div>
  );
};

export default Modal;
