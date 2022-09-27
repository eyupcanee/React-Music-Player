export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPorimise = audioRef.current.play();
    if (playPorimise !== undefined) {
      playPorimise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
