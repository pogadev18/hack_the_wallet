import GameBoardTest2 from "./GameBoardTest2"

const Main = () => {
    let height = window.innerHeight
    let width = window.innerWidth
    return (
        <div
            style={{
                padding: "30px",
                width: width,
                backgroundColor: "gray",
                height: height - 100,
                display: "flex",
            }}
        >
            <GameBoardTest2 />
        </div>
    )
}

export default Main
