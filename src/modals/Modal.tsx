import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import "./Modal.css";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  open,
  title,
  setOpen,
}) => {
  return open ? (
    <div className='fill modal-space'>
      <div onClick={() => setOpen(false)} className='backdrop'></div>
      <section className='modal'>
        <header>
          <h2 className='text-yellow'>{title}</h2>
        </header>
        {children}
      </section>
    </div>
  ) : null;
};

export default Modal;
