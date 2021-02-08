import { useState } from "react";
import Score from "./Score";

function Type({ word, setStatus, isDone, })
{
    const [typedWord, settypedWord] = useState("");
    const [score, setScore] = useState(0);

    function storeInput(event)
    {
        settypedWord(event.target.value);
        if(typedWord === word) {
            isDone();
            setStatus();
            setScore(score + 1);
            settypedWord("");
        }
    }

    return (
        <div>
            <input type="text" value={typedWord} onChange={storeInput} />
            <Score score={score} />
        </div>
    )
}

export default Type;