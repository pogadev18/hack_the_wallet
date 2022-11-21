import { useState, useRef, useEffect, useCallback } from "react"
import { FaBomb, FaSmile, FaSkull } from "react-icons/fa"
import lettersLevel1 from "../stastic_data/lettersLevel1"
import lettersLevel2 from "../stastic_data/lettersLevel2"
import ModalArangeLetters from "../components/ModalArangeLetters"
import { useDisclosure } from "@chakra-ui/react"
let dl = 0
const GameBoardTest2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const lettersEl = useRef(new Array())
    const word = "AGGRESSIVENESS"
    let [lettersDescovered, setLettersDescovered] = useState(0)
    let [stop, setStop] = useState(true)
    let [numberOfLetters, setNumbersOfLetters] = useState(5)
    let [counter, setCounter] = useState(0)
    const [selectedLetters, setSelectedLetters] = useState([])
    let [mixedLetters, setMixedLetters] = useState([])
    let [wordSelected, setWordSelected] = useState([])
    // let [duplicatedLetters, setDuplicatedLetters] = useState(new Map())
    let [multiple, setMultiple] = useState([])
    let [wasSelected, setWasSelected] = useState(false)

    const checkDuplicateLetters = () => {
        let NO_OF_CHARS = 256
        let ddLetters = new Map()
        let ddLettersArray = []
        let count = new Array(NO_OF_CHARS)
        count.fill(0)

        for (let i = 0; i < word.length; i++) {
            count[word[i].charCodeAt()]++
        }

        for (let i = 0; i < NO_OF_CHARS; i++) {
            if (count[i] > 1) {
                ddLetters.set(String.fromCharCode(i), count[i])
            }
        }

        ddLetters.forEach((key, value) => {
            for (let i = 0; i < key - 1; i++) {
                ddLettersArray.push(value)
                dl++
            }
        })

        console.log(ddLettersArray)
        console.log(`duplicate letters ${dl}`)
        // console.log(ddLetters)
        // setMultiple(ddLettersArray)
        setMultiple(ddLettersArray)
        // setLettersDescovered()
        console.log(multiple)
    }

    const mixLetters = useCallback(() => {
        // mixedLetters.push(...[...array].sort(() => Math.random() - 0.5))
        setMixedLetters(lettersLevel1.sort(() => Math.random() - 0.5))
    }, [])

    const setNewSelectedLetters = (letter) => {
        setSelectedLetters([...selectedLetters, letter])

        // console.log(letter)
        // console.log(selectedLetters)
    }

    useEffect(() => {
        // mixLetters()
        // console.log(numberOfLetters)
        if (counter == numberOfLetters) {
            setStop(false)
            console.log(`Cumpara litere`)
        }

        // console.log("ceva")
    }, [counter])

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    margin: "10px",
                }}
            >
                <button
                    style={{
                        backgroundColor: "blue",
                        width: "200px",
                        height: "60px",
                        color: "white",
                    }}
                    onClick={() => {
                        mixLetters()
                        console.log(mixedLetters)
                        checkDuplicateLetters()
                    }}
                >
                    START GAME
                </button>
                <button
                    style={{
                        backgroundColor: "blue",
                        width: "200px",
                        height: "60px",
                        color: "white",
                    }}
                    onClick={() => {
                        setNumbersOfLetters(numberOfLetters + 5)
                        console.log(numberOfLetters)

                        setStop(true)
                    }}
                >
                    BUY A ROUND
                </button>
                <button
                    style={{
                        backgroundColor: "blue",
                        width: "200px",
                        height: "60px",
                        color: "white",
                    }}
                    onClick={() => {
                        checkDuplicateLetters()
                        // setLettersDescovered((n) => n + 6)
                        // setMultiple(ddLettersArray)
                        // showDuplicated()
                        // console.log(chackIfWordHaveDoubleLetters())
                        // console.log(checkDuplicateLetters())
                        // console.log(doubleLetters())
                        // var2duplicate()
                        // console.log(`litere din map - ${showDuplicated()}`)
                    }}
                >
                    SHOW DUPLICATES
                </button>
            </div>
            <div
                style={{
                    width: "400px",
                    height: "max-content",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "4px",
                }}
            >
                {mixedLetters.map((letter, index) => {
                    return (
                        <div
                            ref={(letter) =>
                                (lettersEl.current[index] = letter)
                            }
                            key={index}
                            onClick={(event) => {
                                if (stop) {
                                    if (!event.currentTarget.id) {
                                        event.currentTarget.id = counter
                                    } else {
                                        return
                                    }

                                    if (event.currentTarget.id) {
                                        setCounter(counter + 1)
                                        //   console.log(index)
                                        console.log(counter)
                                        // console.log(numberOfLetters)
                                        //   console.log(counter)
                                        //   compareLetters()
                                        setNewSelectedLetters(letter)
                                        let x = word.includes(letter)
                                        if (x) {
                                            setLettersDescovered(
                                                lettersDescovered + 1
                                            )

                                            event.currentTarget.style.backgroundColor =
                                                "salmon"
                                            setWordSelected([
                                                ...wordSelected,
                                                letter,
                                            ])

                                            //   console.log(lettersDescovered + 1)
                                            //   console.log(dl)
                                            //   console.log(word.length)

                                            if (
                                                lettersDescovered + 1 + dl ==
                                                word.length
                                            ) {
                                                onOpen()
                                                console.log("openModal")
                                            }
                                        }

                                        //   console.log("litera exista " + x)
                                        lettersEl.current[index].innerHTML =
                                            letter
                                    } else {
                                        return
                                    }
                                }
                            }}
                            style={{
                                fontSize: "35px",
                                backgroundColor: "green",
                                width: "70px",
                                height: "70px",
                            }}
                        ></div>
                    )
                })}
            </div>

            <div
                style={{
                    width: "500px",
                    height: "max-content",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "4px",
                    fontSize: "40px",
                }}
            >
                {wordSelected} {""}
                {multiple.map((el) => {
                    return el
                })}
                <br />
                {/* <div>{`total letters - ${word.length}`}</div> */}
                <br />
                <div>{`you found - ${lettersDescovered} - from - ${word.length}`}</div>
            </div>

            <ModalArangeLetters isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default GameBoardTest2
