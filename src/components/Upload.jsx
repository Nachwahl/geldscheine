import React, {useEffect} from "react";
import {Box, Button, FileButton, Group, Progress, Table, Text, TextInput} from "@mantine/core";
import {Player} from "@lottiefiles/react-lottie-player";
import "flag-icons/css/flag-icons.min.css";
import Tesseract, {createWorker} from "tesseract.js";
import {showNotification} from "@mantine/notifications";
import Result from "./Result.jsx";
import {compress, compressAccurately, filetoDataURL} from 'image-conversion';


const Upload = () => {

    const [file, setFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [text, setText] = React.useState(null);


    const updateProgress = (packet) => {
        //console.log(packet)
        if (packet.status === "recognizing text") {
            setProgress(Math.round(packet.progress * 100));
        }
    }

    const recognizeImage = async (img) => {
        console.log("go")
        const worker = createWorker()

        await worker.load()
        await worker.loadLanguage("eng")
        await worker.initialize("eng")
        const {
            data: {text},
        } = await worker.recognize(img)
        console.log(text)
        setLoading(false)
        if (text === "") {
            setText("none");
        } else {
            setText(text);
        }
    }

    const reset = () => {
        setLoading(false);
        setFile(null);
        setProgress(0);
        setText(null);
    }

    useEffect(() => {
        console.log(file)
        if (file) {
            setLoading(true);
            compressAccurately(file, {
                size: 50,
                width: 500
            }).then((compressedFile) => {
                filetoDataURL(compressedFile).then((dataURL) => {
                    recognizeImage(dataURL);
                });
            })
        }
    }, [file]);


    return (
        <Box>
            {text == null && (<>
                <FileButton accept="image/png,image/jpeg" onChange={setFile}>
                    {(props) => <Button fullWidth {...props} loading={loading}>Bild hochladen</Button>}
                </FileButton>
                {loading && <Progress my="md" value={progress} animate/>}
            </>)}

            {text != null && <Result code={text}/>}

            {(file !== null && !loading) && <Button variant={"light"} color={"red"} fullWidth onClick={reset}>
                Erneut versuchen
            </Button>}

        </Box>
    )
}

export default Upload;