import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Button,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react"

const Header = () => {
    let width = window.innerWidth
    return (
        <div
            style={{
                backgroundColor: "#0f0f0f",
                height: "100px",
                width: width,
            }}
        >
            <Popover>
                <PopoverTrigger>
                    <Button>Buy MATIC</Button>
                </PopoverTrigger>
                <PopoverContent style={{ width: "550px" }}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>
                        <div
                            style={{
                                backgroundColor: "blue",
                                width: "500px",
                                height: "500px",
                            }}
                        ></div>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Header
