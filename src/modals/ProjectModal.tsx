import { Dispatch, FC, SetStateAction } from "react";
import Modal from "./Modal";

interface ProjectModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  projects: {
    capStoneUpdate: string;
    weekProject: string;
  };
}

const ProjectModal: FC<ProjectModalProps> = ({ open, setOpen, projects }) => {
  return (
    <Modal open={open} setOpen={setOpen} title='Weekly project update'>
      <ul className='modal-links'>
        <li>
          <a target='_blank' className='modal-link' href={projects.weekProject}>
            Submit weekly project
          </a>
        </li>
        <li>
          <a
            target='_blank'
            className='modal-link'
            href={projects.capStoneUpdate}
          >
            Submit capstone project update
          </a>
        </li>
      </ul>
    </Modal>
  );
};

export default ProjectModal;
