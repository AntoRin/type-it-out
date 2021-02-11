import { useEffect, useState } from "react";

function Timer({ speed, completed, changeCompletedStatus }) {
    const [time, setTime] = useState(speed / 1000);

    useEffect(() => {
        let timeFunction;
        if(completed) {
            changeCompletedStatus();
            setTime(speed / 1000);
            return (() => clearTimeout(timeFunction));
        }   

        beginTimer();

        function beginTimer() {
            timeFunction = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
       
        return (() => clearTimeout(timeFunction));
    }, [time]);

    return (
        <p className="timer">{time}</p>
    )
}

export default Timer;