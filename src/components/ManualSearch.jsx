import React, {useEffect} from "react";
import {Box, Button, Group, Table, Text, TextInput} from "@mantine/core";
import {Player} from "@lottiefiles/react-lottie-player";
import "flag-icons/css/flag-icons.min.css";

const ManualSearch = () => {
    let listOfCodes = ["EC0190628657", "EC0452356505", "MA0214905089", "MA3838843415", "MA4916773379", "MA6719690756", "MA8231609081", "NC3819591206", "NC4331661947", "NC4412091779", "SE5015983447", "TC2750407328", "TC3096540641", "UA7026416022", "UA8036609916", "UC2030982616", "VA5519287019", "VA7197311999", "VA7197311999", "VA8959935053", "VA9439260257", "VB0609841891", "VB2021889961", "VB2144805202", "VB2300989501", "VB2666450701", "VB4763869021", "VB6898269178", "VB7279436701", "VB7865731927", "VB7906554235", "VB8166593512", "VB8166593512", "VB8191498663", "VB8191845235", "WA0981046918", "WA3203503804", "WA3251293462", "YA2643646625", "ZB0981038004", "ZB4054777879", "ZD0322599118", "ZD0520641085", "ZD0811790077", "ZD2321484781", "ZD3615259603", "ZD4114549201", "ZD4529518069", "ZD4809815788", "ZD5726389531"];

    const [search, setSearch] = React.useState("");
    const [results, setResults] = React.useState(listOfCodes);

    const searchCode = () => {
        if(search.length > 0) {
            let matches = listOfCodes.filter(s => s.includes(search));
            console.log(matches)
            setResults(matches);
        } else {
            setResults(listOfCodes);
        }
    }

    useEffect(() => {
        searchCode();
    }, [search])

    return (
        <Box mb={"md"}>
            <TextInput
                placeholder="AB1234567890"
                label="Prüfcode deines Scheins"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Text weight={500} my={"md"}>Ergebnisse</Text>

            {results.length > 0 ? (
            <Table>
                <tbody>
                {
                    results.map((res) => {
                        return (
                            <tr key={res}>
                                <td>{res}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>) : <Text>Keine Ergebnisse gefunden 😕</Text>}

            {results.length > 0 && <div>
                <Text size={"lg"} weight={500} align={"center"} mt={"md"}>
                    Solltest du einen der Scheine gefunden haben, kannst du dich über die Links unten bei Seox melden.



                </Text>
                <Group position={"center"} mt={"md"}>
                    <Button component={"a"} href={"https://twitter.com/SeoxTweets"}>
                        Twitter
                    </Button>
                    <Button component={"a"} href={"https://www.instagram.com/SeoxYT"}>
                        Instagram
                    </Button>

                </Group>
            </div>}
        </Box>
    )
}

export default ManualSearch;