import React, {useEffect} from "react";
import {Box, Container, createStyles, Text, Card, Button} from "@mantine/core";
import {showNotification} from "@mantine/notifications";
import {IconCamera} from "@tabler/icons";
import Tesseract from 'tesseract.js';
import Failed from "./Failed.jsx";
import Result from "./Result.jsx";



const useStyles = createStyles((theme) => ({
    videoPlayback: {
        borderRadius: theme.radius.md,
    }
}));

const Check = () => {

    const playbackRef = React.createRef();
    const canvasRef = React.createRef();
    const {classes} = useStyles();

    const [videoActive, setVideoActive] = React.useState(false);
    const [tookImage, setTookImage] = React.useState(false);
    const [stream, setStream] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    const [text, setText] = React.useState(null);


    const enableVideo = async () => {
        let stream = await navigator.mediaDevices.getUserMedia({
            video: {width: 400, height: 300,facingMode: 'environment'},
            audio: false
        }).catch(err => {
            console.error(err);
            setVideoActive(false);
            showNotification({
                title: '😧 Whoops..',
                message: 'Beim Aktivieren der Kamera ist ein Fehler aufgetreten. Hast du den Zugriff erlaubt?',
                color: "red"
            })
            return;
        });
        setVideoActive(true);
        setStream(stream);
    }

    const takePicture = async () => {
        canvasRef.current.getContext('2d').drawImage(playbackRef.current, 0, 0, 400, 300);
        let image_data_url = canvasRef.current.toDataURL('image/jpeg');

        // data url of the image
        console.log(image_data_url);
        setTookImage(true);
        await recognizeImage(image_data_url);
    }

    useEffect(() => {
        if (playbackRef.current) {
            playbackRef.current.srcObject = stream;
            playbackRef.current.onloadedmetadata = () => {
                playbackRef.current.play();
            };
        }

    }, [stream, videoActive])

    const updateProgress = (packet) => {
        console.log(packet)
        if(packet.status === "recognizing text") {
            setProgress(Math.round(packet.progress * 100));
        }
    }

    const recognizeImage = async (img) => {
        console.log("go")
        Tesseract.recognize(
            img,
            'eng',
            { logger: updateProgress }
        ).then(({ data: { text } }) => {
            console.log(text)
            if(text === "") {
                setText("none");
            } else {
                setText(text);
            }

        })
    }

    const reset = () => {
        setText(null);
        setTookImage(false);
        setProgress(0)
        enableVideo();
    }


    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>

            {!videoActive ? <Box sx={(theme) => ({
                border: "3px dashed " + theme.colors.gray[3],
                borderRadius: theme.radius.md,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "300px",
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            })}>
                <Button variant={"filled"} onClick={() => enableVideo()}>Kamera aktivieren</Button>
            </Box> : (
                !tookImage && <Box sx={(theme) => ({
                    border: "3px dashed " + theme.colors.gray[3],
                    borderRadius: theme.radius.md,
                    height: "300px",
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    position: "relative"
                })}>
                    <video ref={playbackRef} width="100%" height="300" autoPlay style={{objectFit: "cover"}}
                           className={classes.videoPlayback}></video>
                    <Box sx={(theme) => ({
                        position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%, 0%)",
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[8],
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        marginBottom: theme.spacing.sm,
                    })} onClick={() => takePicture()}><IconCamera size={30}/></Box>

                </Box>
            )}


            <Box sx={(theme) => ({
                border: "3px dashed " + theme.colors.gray[3],
                borderRadius: theme.radius.md,
                display: tookImage && !text ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                height: "300px",
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                overflow: "hidden",
                position: "relative"
            })}>
                <Box sx={{
                    background: "linear-gradient(to right, #3a7bd5, #3a6073)",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: progress + "%",
                    height: "300px",
                    opacity: 0.8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text weight={700} color={"white"}>{progress}%</Text>
                </Box>
                <canvas ref={canvasRef} width={"400"} height="300" style={{width: "100%"}}></canvas>
            </Box>

            {
                text && <Box>
                    <Result code={text} />

                <Button variant={"light"} color={"red"} fullWidth onClick={reset}>
                    Erneut versuchen
                </Button>
                </Box>
            }
        </Card>
    );
}

export default Check;