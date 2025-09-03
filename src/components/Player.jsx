import { useState, useRef } from "react";

export default function Player() {
    const playerName = useRef();
    const [playerNameValue, setPlayerNameValue] = useState(null);

    function handleClick() {
        setPlayerNameValue(playerName.current.value);
        playerName.current.blur();
    }
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            handleClick();
        }
    }
    return (
        <section id="player">
            <h2>Welcome {playerNameValue ?? " to you"}!</h2>
            <p>
                <input ref={playerName} onKeyDown={handleKeyDown} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
