import { useEffect, useState } from "react";
import Header from "./Header";
import Words from "./Words";
import Defeat from "./Defeat";
import NewGame from "./NewGame";

function App()
{
    const [data, setdata] = useState({
        isLoading: true,
        randomWords: []
    });
    const [game, setgame] = useState({
        startNewGame: false,
        gameOver: false
    });

    useEffect(() => {
        game.startNewGame && getData();
        async function getData() {
            let temp = [];
            try {
               
                //fetch(`https://random-words-api.vercel.app/word`);
                
                let data = await fetch("/data");
                temp = await data.json();
                // console.log(temp);
            } catch (err) {
                console.error(err.message);
            }
            let dataUpdate = {isLoading: false, randomWords: temp};
            dataUpdate.randomWords && setdata(dataUpdate);
        }

    }, [game.startNewGame]);

    function newGame() {
        setgame({
            startNewGame: true , gameOver: false
        });
        setdata({isLoading: true, randomWords: []});
    }

    function endGame() {
        setgame({
            startNewGame: false, gameOver: true
        });
    }

    if(!game.startNewGame && !game.gameOver)
        return (<NewGame newGame={newGame} />);

    if(data.isLoading)
        return (<div className="flex-center flex-column"><h1>Loading...</h1></div>);

    return game.gameOver === false ? (
        <div>
            <Header title="Type!" />
            <Words wordList={data.randomWords} endGame={endGame} />
        </div>
    ) : <Defeat newGame={newGame} />;
}

export default App;