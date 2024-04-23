"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";
import cn from "classnames";`
`
type MoodSelectorProps = {
    emotions: { emoji: string; name: string }[];
    currentMood?: string;
}


export default function MoodSelector({ emotions, currentMood }: MoodSelectorProps) {
    const today = new Date();
    const [selectedMood, setSelectedMood] = React.useState(currentMood);
    const onAddMood = async (mood: string) => {
        console.log('Mood selected: ', mood);
    };

    return (
        <>
            {emotions.map((emotion, i) => (
                <Stack
                    key={i}
                    sx={{ width: 75 }}
                    className={cn("scale-on-hover pt-2 rounded-md", {
                        'bg-green-200': selectedMood === emotion.name,
                    })}
                    onClick={() => onAddMood(emotion.name)}
                >
                    <Typography
                        variant="h3"
                        color="initial"
                        className="text-center hover:cursor-pointer"
                    >
                        {emotion.emoji}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="initial"
                        className="text-center"
                    >
                        {emotion.name}
                    </Typography>
                </Stack>
            ))}
        </>
    );
}
