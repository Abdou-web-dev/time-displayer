import { useEffect, useState } from "react";
// send to hamza.elguaoussi@digimind.com

export const Draft = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  //how to improve the code below ???
  //   add some styles

  useEffect(() => {
    setTimeout(() => {
      const currentTime = new Date();
      setHour(currentTime.getHours());
      setMinute(currentTime.getMinutes());
      setSecond(currentTime.getSeconds());
    }, 1000);
  }, [second]);

  return (
    <>
      <span>{hour}:</span>
      <span>{minute}:</span>
      <span>{second}</span>
    </>
  );
};

// There are two methods for it: setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.3 oct. 2022
