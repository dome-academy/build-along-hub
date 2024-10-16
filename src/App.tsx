import { useMemo, useState } from "react";
import "./App.css";
import CountdownTimer from "./CountdownTimer";
import Navbar from "./Navbar";
import { isPast } from "./util";
import { weeklyItems } from "./weeklyItems";
import ResourcesModal from "./modals/ResourcesModal";
import SessionsModal from "./modals/SessionsModal";
import ProjectModal from "./modals/ProjectModal";

function App() {
  const currentWeek = useMemo(
    () => weeklyItems.find((w) => isPast(w.startDate) && !isPast(w.lastDate)),
    []
  );

  const [openResourcesModal, toggleResourcesModal] = useState(false);
  const [openSessions, toggleSessions] = useState(false);
  const [openProject, toggleProject] = useState(false);

  return (
    <>
      {currentWeek && currentWeek?.weekNumber > 0 && (
        <>
          <ResourcesModal
            open={openResourcesModal}
            setOpen={toggleResourcesModal}
            resources={currentWeek.resources}
          />
          <SessionsModal
            open={openSessions}
            setOpen={toggleSessions}
            liveSession={currentWeek.liveSessions}
          />
          <ProjectModal
            open={openProject}
            setOpen={toggleProject}
            projects={currentWeek.projects}
          />
        </>
      )}
      <Navbar
        weekNumber={currentWeek?.weekNumber || 0}
        deadlineDate={currentWeek?.deadlineDate || ""}
      />
      <main>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-code-xml text-primary'
          >
            <path d='m18 16 4-4-4-4' />
            <path d='m6 8-4 4 4 4' />
            <path d='m14.5 4-5 16' />
          </svg>
        </div>
        <h1 className='text-center heading'>#BuildAlong W'24</h1>
        {currentWeek ? (
          <h3 className='text-center'>
            {currentWeek.weekNumber === 0 ? (
              <>Orientation starts in </>
            ) : (
              <>W{currentWeek.weekNumber} deadline: </>
            )}

            <CountdownTimer deadline={currentWeek.deadlineDate} />
          </h3>
        ) : null}
        {currentWeek?.weekNumber ? (
          <ul className='action-items' style={{ marginTop: "24px" }}>
            <li>
              <button
                onClick={() => toggleSessions(true)}
                className='action-button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-play'
                >
                  <polygon points='6 3 20 12 6 21 6 3' />
                </svg>
                Live sessions
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleResourcesModal(true)}
                className='action-button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-folder'
                >
                  <path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' />
                </svg>
                Resources
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleProject(true)}
                className='action-button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-list-checks'
                >
                  <path d='m3 17 2 2 4-4' />
                  <path d='m3 7 2 2 4-4' />
                  <path d='M13 6h8' />
                  <path d='M13 12h8' />
                  <path d='M13 18h8' />
                </svg>
                Weekly projects
              </button>
            </li>
          </ul>
        ) : null}
      </main>
    </>
  );
}

export default App;
