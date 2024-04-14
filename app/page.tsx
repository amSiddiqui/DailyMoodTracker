import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  const emotions = [{
    emoji: "😊",
    name: "Happy"
  }, {
    emoji: "😠",
    name: "Angry"
  }, {
    emoji: "🤔",
    name: "Confused"
  }, {
    emoji: "🥳",
    name: "Excited"
  }];
  const today = new Date();
  return (
      <Container className="h-screen">
          <Box className="w-full h-full flex justify-center">
              <Stack className="h-3/4 flex justify-center align-center gap-6">
                  <Stack>
                      <Typography variant="body1" color="initial">
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
                  <Box className="flex justify-center align-center gap-7">
                      {emotions.map((emotion, i) => (
                          <Stack key={i} sx={{ width: 75 }}>
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
                  </Box>
              </Stack>
          </Box>
      </Container>
  );
}
