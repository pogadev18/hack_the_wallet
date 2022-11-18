import GameBoardTest2 from "./GameBoardTest2"

const Main = () => {
    let height = window.innerHeight
    let width = window.innerWidth
    return (
        <div
            style={{
                width: width,
                backgroundColor: "red",
                height: height - 100,
                display: "flex",
            }}
        >
            <GameBoardTest2 />
        </div>
    )
}

export default Main
