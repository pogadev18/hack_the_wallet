import { useState, useRef, useEffect, useCallback } from "react"
import { FaBomb, FaSmile, FaSkull } from "react-icons/fa"
import lettersLevel1 from "../stastic_data/lettersLevel1"
import lettersLevel2 from "../stastic_data/lettersLevel2"
import ModalArangeLetters from "../components/ModalArangeLetters"
import {
    Button,
    useDisclosure,
    Flex,
    Grid,
    GridItem,
    Box,
    Center,
    VStack,
    useToast,
} from "@chakra-ui/react"
let dl = 0
const GameBoardTest2 = () => {
    const toastIdRef = useRef()
    const toast = useToast()
    const wh = window.innerHeight
    const { isOpen, onOpen, onClose } = useDisclosure()
    const lettersEl = useRef(new Array())
    const word = "HOUSE"
    let [lettersDescovered, setLettersDescovered] = useState(0)
    let [stop, setStop] = useState(true)
    let [numberOfLetters, setNumbersOfLetters] = useState(5)
    let [counter, setCounter] = useState(0)
    const [selectedLetters, setSelectedLetters] = useState([])
    let [mixedLetters, setMixedLetters] = useState([])
    let [wordSelected, setWordSelected] = useState([])
    // let [duplicatedLetters, setDuplicatedLetters] = useState(new Map())
    let [multiple, setMultiple] = useState([])

    function close() {
        if (toastIdRef.current) {
            toast.close(toastIdRef.current)
        }
    }

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
            toastIdRef.current = toast({
                // title: "Account created.",
                // description: "We've created your account for you.",
                // status: "success",
                duration: null,
                // isClosable: true,
                render: () => (
                    <Box color="white" p={3} bg="#141414" w="500px">
                        <Button
                            onClick={() => {
                                setNumbersOfLetters(numberOfLetters + 5)
                                console.log(numberOfLetters)

                                setStop(true)
                                close()
                            }}
                            variant="primary"
                        >
                            Buy 1 Round
                        </Button>
                        <Button onClick={close} type="button" variant="outline">
                            Close last toast
                        </Button>
                    </Box>
                ),
            })
        }

        // console.log("ceva")
    }, [counter])

    return (
        <>
            <Grid templateColumns="repeat(4, 1fr)">
                <GridItem colSpan={1} bg="#141414">
                    <Box m="auto" mt="50px">
                        <VStack>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    mixLetters()
                                    console.log(mixedLetters)
                                    checkDuplicateLetters()
                                }}
                            >
                                START GAME
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setNumbersOfLetters(numberOfLetters + 5)
                                    console.log(numberOfLetters)

                                    setStop(true)
                                }}
                            >
                                BUY A ROUND
                            </Button>
                            <Button
                                variant="primary"
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
                            </Button>
                        </VStack>
                    </Box>
                </GridItem>

                <GridItem colSpan={2} h={wh - 100} bg="black">
                    <Box w="625px" m="auto" mt="50px">
                        <Flex wrap="wrap" gap="5px">
                            {mixedLetters.map((letter, index) => {
                                return (
                                    <Center
                                        w="100px"
                                        h="100px"
                                        bg="#212121"
                                        color="white"
                                        fontSize="34px"
                                        ref={(letter) =>
                                            (lettersEl.current[index] = letter)
                                        }
                                        key={index}
                                        onClick={(event) => {
                                            if (stop) {
                                                if (!event.currentTarget.id) {
                                                    event.currentTarget.id =
                                                        counter
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
                                                    setNewSelectedLetters(
                                                        letter
                                                    )
                                                    let x =
                                                        word.includes(letter)
                                                    if (x) {
                                                        setLettersDescovered(
                                                            lettersDescovered +
                                                                1
                                                        )

                                                        event.currentTarget.style.backgroundColor =
                                                            "#3FD8BE"
                                                        event.currentTarget.style.color =
                                                            "#121212"
                                                        setWordSelected([
                                                            ...wordSelected,
                                                            letter,
                                                        ])

                                                        //   console.log(lettersDescovered + 1)
                                                        //   console.log(dl)
                                                        //   console.log(word.length)

                                                        if (
                                                            lettersDescovered +
                                                                1 +
                                                                dl ==
                                                            word.length
                                                        ) {
                                                            onOpen()
                                                            console.log(
                                                                "openModal"
                                                            )
                                                        }
                                                    }

                                                    //   console.log("litera exista " + x)
                                                    lettersEl.current[
                                                        index
                                                    ].innerHTML = letter
                                                } else {
                                                    return
                                                }
                                            }
                                        }}
                                    ></Center>
                                )
                            })}
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem colSpan={1} bg="#141414">
                    <VStack>
                        <Box mt="50px">
                            <Box bg="#212121" w="200px" color="white">
                                {wordSelected} {""}
                                {multiple.map((el) => {
                                    return el
                                })}
                            </Box>
                            <Box bg="#212121" w="200px" color="white">
                                {`you found - ${lettersDescovered} - from - ${word.length}`}
                            </Box>
                        </Box>
                    </VStack>
                </GridItem>
            </Grid>
            <ModalArangeLetters isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default GameBoardTest2
