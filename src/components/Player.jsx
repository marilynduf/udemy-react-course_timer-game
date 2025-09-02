import { useState } from "react";

export default function Player() {
    const [name, setName] = useState("");
    const [inputValue, setInputValue] = useState("");

    function handleOnChange(e) {
        setInputValue(e.target.value);
    }

    function handleOnClick() {
        setName(inputValue);
    }

    return (
        <section id="player">
            <h2>Welcome {name ? `${name}!` : "to you!"}</h2>
            <p>
                <input
                    onChange={handleOnChange}
                    value={inputValue}
                    type="text"
                />
                <button onClick={() => handleOnClick()}>Set Name</button>
            </p>
        </section>
    );
}
