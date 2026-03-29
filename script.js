let totalFiles = 1;
let neededFiles = 0;

// Musik-Funktion
function playLoadingMusic() {
    const holder = document.getElementById("music-holder");
    const audio = new Audio("loading.mp3");
    audio.volume = 0.2; // Lautstärke (0.0 bis 1.0)
    audio.loop = true;
    audio.play().catch(e => console.log("Musik wird nach dem Laden gestartet."));
}

playLoadingMusic();

function updateProgress() {
    let percent = totalFiles > 0 ? Math.min(100, (neededFiles / totalFiles) * 100) : 0;
    document.getElementById("progress").style.width = percent + "%";
}

function SetStatusChanged(status) {
    let s = status.toUpperCase();
    if (s.includes("GETTING ADDON")) s = "VERBINDE MIT HOLONETZ...";
    if (s.includes("SENDING CLIENT")) s = "AUTORISIERE ZUGRIFFSCODES...";
    document.getElementById("status").innerText = s;
}

function SetFilesTotal(total) { totalFiles = total; updateProgress(); }
function SetFilesNeeded(needed) { neededFiles = totalFiles - Math.max(0, needed); updateProgress(); }

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById("map").innerText = mapname;
    document.getElementById("gamemode").innerText = gamemode;
    document.getElementById("players").innerText = players + " / " + maxplayers;
}
