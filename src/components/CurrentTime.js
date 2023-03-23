import { useEffect, useState } from "react";
import { CustomSpinner } from "./CustomSpinner";
import "./styles.scss";

export const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const myInterval = setInterval(() => {
      let CurrentTime = new Date().toLocaleTimeString();
      setTime(CurrentTime);
    }, 1000);

    // Clear side-effect when component unmount (componentWillUnmount)
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  if (time) {
    return (
      <>
        <div className="current-time">
          <span>{time}</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <CustomSpinner></CustomSpinner>
      </>
    );
  }
};
