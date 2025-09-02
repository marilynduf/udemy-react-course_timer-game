import { useState } from "react";
import { useRef } from "react";

export default function Player() {
    const playerName = useRef();
    const [playerNameValue, setInputValue] = useState(null);

    function handleClick() {
        if (playerName.current.value) {
            setInputValue(playerName.current.value);
        }
    }

    return (
        <section id="player">
            <h2>Welcome {playerNameValue ?? "to you"}!</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
