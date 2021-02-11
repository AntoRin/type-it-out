import { useState } from "react";
import Score from "./Score";
import Timer from "./Timer";

function Type({ word, setStatus, isDone, speed })
{
    const [typedWord, settypedWord] = useState("");
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    function changeCompletedStatus() {
        setCompleted(false);
    }

    function storeInput(event)
    {
        settypedWord(event.target.value);
        if(typedWord === word) {
            isDone();
            setStatus();
            setScore(score + 1);
            settypedWord("");
            setCompleted(true);
        }
    }

    return (
        <div className="hud">
            <div className="hud-contents">
                <input type="text" value={typedWord} onChange={storeInput} />
                <Score score={score} />
                <Timer speed={speed} completed={completed} changeCompletedStatus={changeCompletedStatus} />
            </div>
        </div>
    )
}

export default Type;