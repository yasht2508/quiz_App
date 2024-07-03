import "../App.css";
import { useContext} from "react";
import { GameStateContext } from "../helpers/Contexts";
import toast from 'react-hot-toast';


function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );



    const checkInputName = () => {
        if (userName === '') {
            toast.error('Enter a valid name.')
        }
        else
        {
            setGameState("playing");  
        }


    }

    return (
        <div className="Menu">
            <label>Enter Your Name:</label>
            <input
                type="text"
                placeholder="Ex. Yash"
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    checkInputName();
                }}
            >
                Start Quiz
            </button>
        </div>
    );
}

export default Menu;
