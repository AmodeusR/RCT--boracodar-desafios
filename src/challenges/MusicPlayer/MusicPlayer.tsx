import "./music-player.scss";
import { Play, ChevronsLeft, ChevronsRight, Pause } from "react-feather";
import { OTerno, EsdrasGondim, EzoshikaGourmet } from "../../assets/images";
import {
  VolteEMeia,
  NaoTeAbandono,
  BeautifulDreamer,
} from "../../assets/songs";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import { formatDuration } from "../../utils/calculateTime";

const songs = [
  {
    name: "Atrás/Além",
    band: "O Terno",
    cover: OTerno,
    mp3: VolteEMeia,
  },
  {
    name: "Não te abandono",
    band: "Esdras Gondim",
    cover: EsdrasGondim,
    mp3: NaoTeAbandono,
  },
  {
    name: "Beautiful Dreamer",
    band: "Ezoshika Gourmet Club",
    cover: EzoshikaGourmet,
    mp3: BeautifulDreamer,
  },
];
const MusicPlayer = () => {
  const [songQuery, setSongQuery] = useState(0);
  const [song, setSong] = useState(songs[songQuery]);
  const [audio, setAudio] = useState(new Audio(songs[songQuery].mp3));
  const [isPlaying, setIsPlaying] = useState<boolean>(!audio.paused);
  const [duration, setDuration] = useState(audio.duration);
  const [currentTime, setCurrentTime] = useState(0);
  const [songIntervalId, setSongIntervalId] = useState(0);
  const actionButtonsSize = 36;
  
  useEffect(() => {
    return audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);      
    });
  }, [audio.duration]);

  useEffect(() => {
    setSong(songs[songQuery]);
    setAudio(new Audio(songs[songQuery].mp3));
    setCurrentTime(0);
  }, [songQuery]);

  const previousSong = () => {
    setSongQuery((songQuery) => songQuery - 1);
    audio.pause();
    setIsPlaying(false);
    clearInterval(songIntervalId);
  };
  
  const nextSong = () => {
    setSongQuery((songQuery) => songQuery + 1);
    audio.pause();
    setIsPlaying(false);
    clearInterval(songIntervalId);
  };

  
  const playPauseSong = () => {
    setIsPlaying(!isPlaying);
    
    if (isPlaying) {
      audio.pause();
      console.log(songIntervalId);
      clearInterval(songIntervalId);
      return;
    } else {
      const sourceSongIntervalId = setInterval(() => {
        setCurrentTime(audio.currentTime);
        console.log("a");
      }, 1000);
      setSongIntervalId(sourceSongIntervalId);
    }


    audio.play();
  };

  return (
    <main className="music-player">
      <div className="player">
        <div className="music-info">
          <img
            className="music-info__cover"
            src={song.cover}
            alt="music cover"
          />
          <div>
            <h2 className="music-info__name">{song.name}</h2>
            <span className="music-info__band">{song.band}</span>
          </div>
        </div>
        <div className="player__actions">
          <button className="player__action-button">
            <ChevronsLeft
              size={actionButtonsSize}
              className={songQuery <= 0 ? "disabled" : ""}
              onClick={previousSong}
            />
          </button>
          <button className="player__action-button">
            {isPlaying ? (
              <Pause size={actionButtonsSize - 10} onClick={playPauseSong} />
            ) : (
              <Play size={actionButtonsSize - 10} onClick={playPauseSong} />
            )}
          </button>
          <button className="player__action-button">
            <ChevronsRight
              size={actionButtonsSize}
              className={songQuery >= 2 ? "disabled" : ""}
              onClick={nextSong}
            />
          </button>
        </div>
        <div className="player__progress">
          <ProgressBar
            completed={currentTime}
            maxCompleted={duration}
            height="7px"
            isLabelVisible={false}
            baseBgColor="hsla(0 0% 85% / .3)"
            bgColor="hsla(0 0% 85% / .8)"
          />
          <div className="player__times">
            <span className="player__time">{formatDuration(currentTime)}</span>
            <span className="player__time">
              {!!duration &&
                !isNaN(duration) &&
                formatDuration(duration, currentTime)}
            </span>
            <audio src={song.mp3} preload="metadata"></audio>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MusicPlayer;
