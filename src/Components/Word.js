function Word({ word })
{
    let distFromLeft = Math.floor(Math.random() * 80);
    let distFromTop = Math.floor(Math.random() * 80);
    let position = {
        left: `${distFromLeft}%`,
        top: `${distFromTop}%`,
        position: "absolute"
    };
    return (
        <div className="word" style={position}>
            <h3>{word}</h3>
        </div>
    )
}

export default Word;