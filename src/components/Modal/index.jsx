import { createPortal } from "react-dom";
import { memo } from "react";
import ModalContent from "./ModalContent";

const modalContainer = document.getElementById("modal");

const Modal = memo(({ isShowing, hide }) =>
  isShowing ? createPortal(<ModalContent hide={hide} />, modalContainer) : null
);

export default Modal;
