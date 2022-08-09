import React from "react";
import {Box, Container, createStyles, Text} from "@mantine/core";
import ThemeSwitch from "./ThemeSwitch.jsx";


const useStyles = createStyles((theme) => ({
    header: {
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,

    },
    logo: {
        display: "flex",
        alignItems: "center",
        '& > img': {
            marginRight: theme.spacing.md
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}));


const Header = () => {

    const {classes} = useStyles();

    return (
        <Box className={classes.header} py={"sm"}>
            <Container size="md" px="md" className={classes.container}>
               <Box className={classes.logo}>
                   <img src="/logo.png" alt="" width={40}/>
                   <Text size={"lg"} weight={"600"}>Geldscheine finden</Text>
               </Box>
                <ThemeSwitch />
            </Container>
        </Box>
    );
}

export default Header;