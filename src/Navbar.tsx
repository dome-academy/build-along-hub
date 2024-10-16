import { formatDateString } from "./util";

const Navbar = ({
  weekNumber,
  deadlineDate,
}: {
  weekNumber: number;
  deadlineDate: string;
}) => {
  return (
    <nav className='top-nav flex'>
      <h1>Week {weekNumber}</h1>
      <p className='text-yellow'>
        {weekNumber === 0 ? "Orientation date" : "Project deadline"}:{" "}
        {formatDateString(deadlineDate)}
      </p>
    </nav>
  );
};

export default Navbar;
