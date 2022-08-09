import React from "react";
import ThemeSwitch from "../components/ThemeSwitch.jsx";
import Header from "../components/Header.jsx";
import {Container, Title, Text, Anchor, Alert} from "@mantine/core";
import Check from "../components/Check.jsx";
import FAQ from "../components/FAQ.jsx";
import NotFound from "../components/NotFound.jsx";
import Success from "../components/Success.jsx";
import {IconAlertCircle} from "@tabler/icons";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div>
            <Header/>
            <Container size="md" px="md" py={"lg"}>
                <Title my={"md"}>💶 Jetzt überprüfen</Title>

                <Alert icon={<IconAlertCircle size={16} />} title="Achtung!" color="yellow" mb={"md"}>
                    Beim erstmaligen Aufrufen der Webseite kann die Überprüfung per Kamera einige Sekunden in Anspruch nehmen.
                </Alert>

                <Check />
                <Title my={"md"}>🧐 Was ist das hier?</Title>
                <Text mb={"sm"}>
                    Der YouTuber <Anchor href="https://www.youtube.com/c/SeoxYT">Seox</Anchor> hat am 8. August 2022 ein <b>Video veröffentlicht</b>, in dem er <b>50 mal einen 5€ Geldschein</b> in Berlin verteilt, um danach herauszufinden, welchen Weg diese Geldscheine gehen.
                </Text>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZznpOPjFPr8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <Text mt={"sm"}>
                    Diese Website wurde daraufhin entwickelt um einfacher zu <b>überprüfen, ob du einen dieser Geldscheine gefunden hast.</b> Dafür musst du oben nur ein <b>Foto des Prüfcodes des Geldscheines</b> machen und schon wird sie mit den 50 ausgeteilten Scheinen abgeglichen. Alternativ kannst du auch über die manuelle Eingabe nach einem Schein suchen.
                </Text>

                <Title my={"md"}>❓ FAQ</Title>
                <FAQ />




                <Footer />
            </Container>

        </div>
    );
}

export default Home;