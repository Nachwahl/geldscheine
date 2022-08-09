import React from "react";
import {Box, Text, Anchor, Group, useMantineTheme} from "@mantine/core";
import {IconHeart} from "@tabler/icons";

const Footer = () => {

    const theme = useMantineTheme();

    return (
        <Box my={"md"} sx={{textAlign: "center"}}>
            <Text color={"dimmed"} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>Made
                with <IconHeart color={theme.colors.red[5]} style={{margin: "0 5"}}/> by <Anchor color={"dimmed"}
                                                                                                 href={"https://github.com/Nachwahl"}
                                                                                                 ml={5}>Nachwahl</Anchor></Text>
            <Text inline color={"dimmed"}> <Anchor color={"dimmed"}
                                                   href={"https://robinferch.me/legal"}>Impressum</Anchor>
                {' '}  & {' '}
                <Anchor href={"https://robinferch.me/privacy"} color={"dimmed"}>Datenschutzerklärung</Anchor>
            </Text>

        </Box>
    )
}

export default Footer;