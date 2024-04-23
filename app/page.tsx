import { Box, Container, Stack, Typography } from "@mui/material";
import MoodSelector from './components/moodSelector';
import { getMood } from "./services/firestore.service";

export default async function Home() {
    const emotions = [
        {
            emoji: "😊",
            name: "Happy",
        },
        {
            emoji: "😠",
            name: "Angry",
        },
        {
            emoji: "🤔",
            name: "Confused",
        },
        {
            emoji: "🥳",
            name: "Excited",
        },
    ];
    const today = new Date();
    const todayMood = await getMood(today);

    return (
        <Container className="h-screen">
            <Box className="w-full h-full flex justify-center">
                <Stack className="h-3/4 flex justify-center align-center gap-6">
                    <Stack>
                        <Typography variant="body1" className="text-gray-500">
                            {today.toDateString()}
                        </Typography>
                        <Typography
                            variant="h4"
                            color="initial"
                            className="text-center"
                        >
                            How are you feeling today?
                        </Typography>
                    </Stack>
                    <MoodSelector
                        emotions={emotions}
                        currentMood={todayMood?.mood}
                    />
                </Stack>
            </Box>
        </Container>
    );
}
