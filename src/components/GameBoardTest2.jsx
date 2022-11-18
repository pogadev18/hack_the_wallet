import { useState, useRef } from "react"

const GameBoardTest2 = () => {
    const gameLetters = ["A", "B", "C"]

    const lettersEl = useRef(new Array())
    //     {items.map(item => (
    //     <p key={item} ref={(element) => itemEls.current.push(element)}>{item}</p>
    // ))

    // const selectLetters = (index) => {
    //     setLetter(letters[index])
    //     console.log(letters[index])
    // }
    console.log(lettersEl)

    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {gameLetters.map((letter, index) => {
                return (
                    <div
                        ref={(el) => (lettersEl.current[index] = el)}
                        key={index}
                        onClick={() => {
                            console.log(letter)
                            lettersEl.current[index].textContent = letter
                        }}
                        style={{
                            backgroundColor: "green",
                            width: "50px",
                            height: "50px",
                        }}
                    >
                        {""}
                    </div>
                )
            })}
        </div>
    )
}

export default GameBoardTest2
