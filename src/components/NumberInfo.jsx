import React from "react";
import {Accordion, createStyles, Group, Box, Anchor} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderRadius: theme.radius.sm,
    },

    item: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        border: '1px solid transparent',
        position: 'relative',
        zIndex: 0,
        transition: 'transform 150ms ease',

        '&[data-active]': {
            transform: 'scale(1.03)',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            boxShadow: theme.shadows.md,
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            borderRadius: theme.radius.md,
            zIndex: 1,
        },
    },

    chevron: {
        '&[data-rotate]': {
            transform: 'rotate(-90deg)',
        },
    },
}));

const NumberInfo = () => {
    const { classes } = useStyles();
    return (
        <Accordion
            mx="auto"
            variant="filled"
            defaultValue="customization"
            classNames={classes}
            className={classes.root}
            my={"md"}
        >
            <Accordion.Item value="numberInfo">
                <Accordion.Control>Wo finde ich den Prüfcode?</Accordion.Control>
                <Accordion.Panel>
                    <Box sx={(theme) => ({display: "flex", gap: theme.spacing.md})}>
                        <img src="/money.png" alt="" width={"30%"}/>
                        Den Prüfcode findest du in der oberen rechten Ecke auf der Rückseite des 5€-Scheins.
                    </Box>

                </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="privacy">
            <Accordion.Control>Wie werden die Bilder verarbeitet?</Accordion.Control>
            <Accordion.Panel>
                <Box >
                    Das aufgenommene Bild wird <b>ausschließlich</b> auf deinem lokalen Gerät verarbeitet und nicht an einen Server weitergeleitet.
                    Um das zu überprüfen, kann der gesammte Sourcecode dieser Webseite <Anchor href={"https://github.com/Nachwahl/geldscheine"}>in diesem GitHub Repository</Anchor> eingesehen werden.
                </Box>

            </Accordion.Panel>
        </Accordion.Item>

        </Accordion>
    )
}

export default NumberInfo;