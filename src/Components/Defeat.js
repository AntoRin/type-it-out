function Defeat({ newGame }) {
    return (
        <div className="flex-center flex-column">
            <h1>
                You lose!
            </h1>
            <div>
                <button className="btn-std" onClick={newGame}>
                    New Game
                </button>
            </div>
        </div>
    )
}

export default Defeat;