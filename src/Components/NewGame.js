function NewGame({ newGame }) {
    return (
        <div className="flex-center flex-column">
            <button onClick={newGame} className="btn-std" type="button">Start</button>
        </div>
    );
}

export default NewGame;