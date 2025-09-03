import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { CHALLENGES_DATA } from "./challenges-data.js";

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                {CHALLENGES_DATA.map((challenge) => {
                    return (
                        <TimerChallenge
                            title={challenge.title}
                            targetTime={challenge.targetTime}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
