console.log("Lets write JavaScript");

let currentSong = new Audio();
let currFolder = "songs/ncs";   // your mp3 folder
let songs = ["s1.mp3", "s2.mp3", "s3.mp3"]; // filenames present in songs/ncs

// ---------- Time formatter ----------

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) return "00:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

// ---------- Player ----------

async function playMusic(track = "s1.mp3", pause = false) {
  const url = `/songs/ncs/${track}`;
  console.log("PLAY URL =", url);

  currentSong.src = url;

  if (!pause) {
    try {
      await currentSong.play();
      play.src = "img/pause.svg";
    } catch (e) {
      console.error("Audio play error:", e);
    }
  }

  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

// ---------- Static Your Library (left) ----------

function fillStaticLibrary() {
  const ul = document.querySelector(".songList ul");
  if (!ul) return;

  ul.innerHTML = `
    <li>
      <img class="invert" width="34" src="img/music.svg" alt="">
      <div class="info">
        <div>s1.mp3</div>
        <div>Harry</div>
      </div>
      <div class="playnow">
        <span>Play Now</span>
        <img class="invert" src="img/play.svg" alt="">
      </div>
    </li>
    <li>
      <img class="invert" width="34" src="img/music.svg" alt="">
      <div class="info">
        <div>s2.mp3</div>
        <div>Harry</div>
      </div>
      <div class="playnow">
        <span>Play Now</span>
        <img class="invert" src="img/play.svg" alt="">
      </div>
    </li>
    <li>
      <img class="invert" width="34" src="img/music.svg" alt="">
      <div class="info">
        <div>s3.mp3</div>
        <div>Harry</div>
      </div>
      <div class="playnow">
        <span>Play Now</span>
        <img class="invert" src="img/play.svg" alt="">
      </div>
    </li>
  `;

  // click on library items plays corresponding song
  Array.from(ul.getElementsByTagName("li")).forEach((li, idx) => {
    li.addEventListener("click", () => {
      playMusic(songs[idx]);
    });
  });
}

// ---------- Static playlist cards (center) ----------

function fillStaticCards() {
  const cardContainer = document.querySelector(".cardContainer");
  if (!cardContainer) return;

  cardContainer.innerHTML = `
    <div class="card">
      <img src="/songs/Angry_(mood)/cover.jpg" alt="">
      <h2>Angry Mood</h2>
      <p>Calm your Anger</p>
    </div>
    <div class="card">
      <img src="/songs/Bright_(mood)/cover.jpg" alt="">
      <h2>Bright Songs</h2>
      <p>Bright songs for you</p>
    </div>
    <div class="card">
      <img src="/songs/Chill_(mood)/cover.jpg" alt="">
      <h2>Just Chill</h2>
      <p>Yes, Just Chill</p>
    </div>
    <div class="card">
      <img src="/songs/Funky_(mood)/cover.jpg" alt="">
      <h2>Copyright Songs</h2>
      <p>Cover Songs for you</p>
    </div>
    <div class="card">
      <img src="/songs/Dark_(mood)/cover.jpg" alt="">
      <h2>Dark Horse</h2>
      <p>Dark Songs for you</p>
    </div>
    <div class="card">
      <img src="/songs/Love_(mood)/cover.jpg" alt="">
      <h2>Love Songs</h2>
      <p>Love Songs collection</p>
    </div>
    <div class="card">
      <img src="/songs/Uplifting_(mood)/cover.jpg" alt="">
      <h2>Happy Hits</h2>
      <p>Happy songs playlist</p>
    </div>
    <div class="card">
      <img src="/songs/ncs/cover.jpg" alt="">
      <h2>NCS Releases</h2>
      <p>No Copyright Sounds</p>
    </div>
  `;

  // clicking NCS card plays first song
  const cards = document.getElementsByClassName("card");
  if (cards.length > 0) {
    const ncsCard = cards[cards.length - 1]; // last one is NCS in this html
    ncsCard.addEventListener("click", () => playMusic("s1.mp3"));
  }
}

// ---------- Main ----------

async function main() {
  // fill UI skeleton
  fillStaticLibrary();
  fillStaticCards();

  // default text in playbar
  document.querySelector(".songinfo").innerHTML = "s1.mp3";
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

  // play/pause button
  play.addEventListener("click", async () => {
    if (currentSong.paused || currentSong.src === "") {
      await playMusic("s1.mp3");
    } else {
      currentSong.pause();
      play.src = "img/play.svg";
    }
  });

  // time update
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML =
      `${secondsToMinutesSeconds(currentSong.currentTime)} / ` +
      `${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // seekbar
  document.querySelector(".seekbar").addEventListener("click", e => {
    if (!currentSong.duration) return;
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  // volume slider
  document
    .querySelector(".range input")
    .addEventListener("change", e => {
      currentSong.volume = parseInt(e.target.value) / 100;
    });
}

main();

window.addEventListener("DOMContentLoaded", () => {
  // ensure cards are present immediately
  fillStaticCards();
});
