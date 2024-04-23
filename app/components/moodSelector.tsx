"use client";
import { Typography } from "@mui/material";
import React from "react";
import cn from "classnames";
import { saveMoodSA } from "../services/firestore.service";

type MoodSelectorProps = {
    emotions: { emoji: string; name: string }[];
    currentMood?: string;
}


export default function MoodSelector({ emotions, currentMood }: MoodSelectorProps) {
    const today = new Date();
    const formRef = React.useRef<HTMLFormElement>(null);
    const [selectedMood, setSelectedMood] = React.useState<string | undefined>(currentMood);

    return (
        <>
            <form
                action={saveMoodSA}
                ref={formRef}
                className="flex justify-center align-center gap-7"
            >
                <input type="hidden" name="date" value={today.toISOString()} />
                {emotions.map((emotion, i) => (
                    <button
                        key={i}
                        type='submit'
                        name="mood"
                        value={emotion.name}
                        style={{ width: 75 }}
                        className={cn("scale-on-hover pt-2 rounded-md", {
                            "bg-green-200": selectedMood === emotion.name,
                        })}
                        onClick={() => setSelectedMood(emotion.name)}
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
                    </button>
                ))}
            </form>
        </>
    );
}
