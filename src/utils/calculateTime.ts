export const formatDuration = (durationInSecs: number, passedSecs?: number) => {
  const minutes = Math.floor(durationInSecs / 60);
  const seconds = Math.floor(durationInSecs % 60);
  const currentSeconds = seconds < 10 ? `0${seconds}` : seconds;

  if (passedSecs) {
    const timeLeft = durationInSecs - passedSecs;
    const secondsLeft = Math.floor(timeLeft % 60);
    const minutesLeft = Math.floor((timeLeft / 60) % 60);

    if (secondsLeft < 10) {
      return `${minutesLeft}:0${secondsLeft}`;
    }

    return `${minutesLeft}:${secondsLeft}`;
  }
  
  return `${minutes}:${currentSeconds}`;
}