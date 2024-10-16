import { Dispatch, FC, SetStateAction } from "react";
import Modal from "./Modal";

interface ResourcesModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  resources: { title: string; link: string }[];
}

const ResourcesModal: FC<ResourcesModalProps> = ({
  open,
  resources,
  setOpen,
}) => {
  return (
    <Modal open={open} setOpen={setOpen} title='Resources'>
      <ul className='modal-links'>
        {resources.map((r, index) => (
          <li key={index}>
            <a target='_blank' className='modal-link' href={r.link}>
              {r.title}
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ResourcesModal;
