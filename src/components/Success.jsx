import React from "react";
import {Box, Text, Button, Group, Title} from "@mantine/core";
import {Player} from "@lottiefiles/react-lottie-player";

const Success = ({code}) => {
    return (
        <Box mb={"md"}>
            <Player
                autoplay
                src="https://assets2.lottiefiles.com/packages/lf20_tiviyc3p.json"
                keepLastFrame
                loop
                speed={1.5}
                style={{ height: '200px', width: '500px' }}
            />

            <Title align={"center"}>{code}</Title>

            <Text size={"lg"} weight={800} align={"center"} mt={"md"}>
                Du hast einen der Scheine gefunden! Mit den Links unten kannst du dich bei Seox melden.



            </Text>
           <Group position={"center"} mt={"md"}>
               <Button component={"a"} href={"https://twitter.com/SeoxTweets"}>
                    Twitter
               </Button>
               <Button component={"a"} href={"https://www.instagram.com/SeoxYT"}>
                   Instagram
               </Button>

           </Group>
        </Box>
    )
}

export default Success;