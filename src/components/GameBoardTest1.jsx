import { useState } from "react"
import { FaBomb, FaSmile, FaSkull } from "react-icons/fa"

const GameBoardTest1 = () => {
    // const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W",
    // "Z","X","Y","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","Z","X","Y",<FaBomb />,<FaSmile/>,<FaSkull/>,<FaSkull/>,<FaSkull/>,<FaSkull/>]
    const letters = ["A", "B", "C"]
    const [todos, setTodos] = useState([])

    function handleClick() {
        setTodos((todos) => [
            ...todos,
            letters.map((leter) => {
                todos.push(leter)
            }),
        ])
    }

    return (
        <div>
            <div>
                <span>Todos: </span>
                <hr />
                {todos.length
                    ? todos.map((todo, index) => <div key={index}>{todo}</div>)
                    : "Nothing to show..."}
            </div>
            <button className="add" onClick={handleClick}>
                <i className="fas fa-plus"></i>
                Add a Todo
            </button>
        </div>
    )
}

export default GameBoardTest1
