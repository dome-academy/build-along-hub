import { Dispatch, FC, SetStateAction } from "react";
import Modal from "./Modal";

type classType = {
  date: string;
  time: string;
  link: string;
};

interface SessionsModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  liveSession: {
    monday: classType;
    wednesday: classType;
    friday: classType;
  };
}

const SessionsModal: FC<SessionsModalProps> = ({
  open,
  setOpen,
  liveSession,
}) => {
  return (
    <Modal title='Live sessions' open={open} setOpen={setOpen}>
      <ul className='modal-links'>
        <li>
          <a
            target='_blank'
            className='modal-link'
            href={liveSession.monday.link}
          >
            Join Monday session
          </a>{" "}
          {liveSession.monday.date} - {liveSession.monday.time}{" "}
        </li>
        <li>
          <a
            target='_blank'
            className='modal-link'
            href={liveSession.wednesday.link}
          >
            Join #BuildWednesday session
          </a>{" "}
          {liveSession.wednesday.date} - {liveSession.wednesday.time}{" "}
        </li>
        <li>
          <a
            target='_blank'
            className='modal-link'
            href={liveSession.friday.link}
          >
            Join #BuildFriday session
          </a>{" "}
          {liveSession.friday.date} - {liveSession.friday.time}{" "}
        </li>
      </ul>
    </Modal>
  );
};

export default SessionsModal;
