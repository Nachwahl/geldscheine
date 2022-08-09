import React from "react";
import {Box, Text} from "@mantine/core";
import {Player} from "@lottiefiles/react-lottie-player";

const Failed = () => {
    return (
        <Box mb={"md"}>
            <Player
                autoplay
                src="https://assets8.lottiefiles.com/packages/lf20_ed9D2z.json"
                keepLastFrame
                style={{ height: '200px', width: '300px' }}
            />
            <Text size={"lg"} weight={500} align={"center"}>
                Es wurde kein Text im Bild erkannt. Bitte versuche es erneut.
            </Text>
        </Box>
    )
}

export default Failed;