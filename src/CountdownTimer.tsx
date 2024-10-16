"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ deadline: string }> = ({ deadline }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(deadline).getTime(); // Set the target date
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={timeLeft.days > 0 ? "text-yellow" : "text-red"}>
      {`${timeLeft.days}d:${timeLeft.hours}h:${timeLeft.minutes}m:${timeLeft.seconds}s`}
    </span>
  );
};

export default CountdownTimer;
