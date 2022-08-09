import React from "react";
import {Box, Text} from "@mantine/core";
import {Player} from "@lottiefiles/react-lottie-player";
import "flag-icons/css/flag-icons.min.css";

const NotFound = ({code}) => {

    const printerList = [
        {
            "letter": "D",
            "name": "Polska Wytwórnia Papierów Wartosciowych",
            "country": "pl"
        },
        {
            "letter": "E",
            "name": "Oberthur Technologies",
            "country": "fr"
        },
        {
            "letter": "F",
            "name": " Oberthur Technologies",
            "country": "bg"
        },
        {
            "letter": "M",
            "name": " Valora SA",
            "country": "pt"
        },
        {
            "letter": "N",
            "name": "Oesterreichische Banknoten- und Sicherheitsdruck GmbH",
            "country": "at"
        },
        {
            "letter": "P",
            "name": "Joh. Enschede Security Printing BV",
            "country": "nl"
        },
        {
            "letter": "R",
            "name": "Bundesdruckerei GmbH",
            "country": "de"
        },
        {
            "letter": "S",
            "name": "Banca d’Italia",
            "country": "it"
        },
        {
            "letter": "T",
            "name": "Central Bank of Ireland",
            "country": "ie"
        },
        {
            "letter": "U",
            "name": "Banque de France",
            "country": "fr"
        },
        {
            "letter": "V",
            "name": "Fábrica Nacional de Moneda y Timbre",
            "country": "es"
        },
        {
            "letter": "W",
            "name": "Giesecke+Devrient GmbH (Leipzig)",
            "country": "de"
        },
        {
            "letter": "X",
            "name": "Giesecke+Devrient GmbH (München)",
            "country": "de"
        },
        {
            "letter": "Y",
            "name": "Bank von Griechenland",
            "country": "gr"
        },
        {
            "letter": "Z",
            "name": "Belgische Nationalbank",
            "country": "be"
        }
    ]

    const getCountryName = (code) => {
        switch (code) {
            case "pl":
                return "Polen"
            case "fr":
                return "Frankreich"
            case "bg":
                return "Bulgarien"
            case "pt":
                return "Portugal"
            case "at":
                return "Österreich"
            case "nl":
                return "Niederlande"
            case "de":
                return "Deutschland"
            case "it":
                return "Italien"
            case "ie":
                return "Irland"
            case "es":
                return "Spanien"
            default:
                return "N/A"
        }
    }

    let printerCode = code.charAt(0);

    let printer = printerList.find((p) => p.letter === printerCode);

    return (
        <Box mb={"md"}>
            <Player
                autoplay
                src="https://assets8.lottiefiles.com/packages/lf20_ed9D2z.json"
                keepLastFrame
                style={{ height: '200px', width: '300px' }}
            />
            <Text size={"lg"} weight={500}>
                Der Geldschein wurde erkannt, der Prüfcode <b>{code}</b> ist aber nicht einer der Gesuchten. Trotzdem ein kurzer Fun Fact zu deinem Schein: Der Schein wurde von <i>{printer?.name}</i> in <span
                className={`fi fi-${printer?.country}`}></span> {getCountryName(printer?.country)} gedruckt.
            </Text>
        </Box>
    )
}

export default NotFound;