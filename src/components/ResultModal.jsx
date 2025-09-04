export default function ResultModal({ result, targetTime, timerExpired }) {
    return (
        <dialog className="result-modal">
            <h2>You {result}</h2>
            <p>
                <strong>{targetTime}</strong>
            </p>
            <p>
                Tou stop the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}
