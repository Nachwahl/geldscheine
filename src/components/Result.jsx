import React from "react";
import {Box, Text} from "@mantine/core";
import Failed from "./Failed.jsx";
import NotFound from "./NotFound.jsx";
import Success from "./Success.jsx";


const Result = ({code}) => {
    let regex = /[DEFMNPRSTUVWXY]{1}.{1}\d{10}/gm

    let listOfCodes = ["EC0190628657", "EC0452356505", "MA0214905089", "MA3838843415", "MA4916773379", "MA6719690756", "MA8231609081", "NC3819591206", "NC4331661947", "NC4412091779", "SE5015983447", "TC2750407328", "TC3096540641", "UA7026416022", "UA8036609916", "UC2030982616", "VA5519287019", "VA7197311999", "VA7197311999", "VA8959935053", "VA9439260257", "VB0609841891", "VB2021889961", "VB2144805202", "VB2300989501", "VB2666450701", "VB4763869021", "VB6898269178", "VB7279436701", "VB7865731927", "VB7906554235", "VB8166593512", "VB8166593512", "VB8191498663", "VB8191845235", "WA0981046918", "WA3203503804", "WA3251293462", "YA2643646625", "ZB0981038004", "ZB4054777879", "ZD0322599118", "ZD0520641085", "ZD0811790077", "ZD2321484781", "ZD3615259603", "ZD4114549201", "ZD4529518069", "ZD4809815788", "ZD5726389531"];

    let numbers = code.slice(2);

    numbers.replace("D", "0");
    numbers.replace("O", "0");

    code = code.slice(0, 2) + numbers;

    if(!regex.test(code)) {
        alert(code);
        return <Failed />
    }

    let c = code.match(regex)[0]

    if(!listOfCodes.includes(c)) {
        return <NotFound code={c} />
    }

    return <Success code={c} />
}

export default Result;