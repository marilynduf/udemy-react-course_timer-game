import { useState } from "react";
export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    console.log(timerExpired);
    function handleStart() {
        setTimerStarted(true);
        setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
        }, targetTime * 1000);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? "Stop" : "Start"}
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Timer is running" : ""}
            </p>
        </section>
    );
}
