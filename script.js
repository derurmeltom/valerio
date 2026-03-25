let totalFiles = 1;
let neededFiles = 0;

// MUSIK EINSTELLUNGEN
const musicPath = "loading_music.mp3"; // Name deiner Musikdatei im selben Ordner
const volume = 0.3; // Lautstärke von 0.0 bis 1.0

function startMusic() {
    const container = document.getElementById("music-container");
    const audio = document.createElement("audio");
    audio.src = musicPath;
    audio.volume = volume;
    audio.loop = true;
    audio.autoplay = true;
    
    // Kleiner Fix für Browser-Blockaden
    audio.play().catch(() => {
        console.log("Autoplay blockiert. Warte auf GMod-Initialisierung...");
    });
    
    container.appendChild(audio);
}

// Musik beim Starten aufrufen
startMusic();

function updateProgress() {
    let percent = 0;
    if (totalFiles > 0) {
        percent = Math.min(100, (neededFiles / totalFiles) * 100);
    }
    document.getElementById("progress").style.width = percent + "%";
}

function SetStatusChanged(status) {
    let displayStatus = status;
    if (status.includes("Getting Addon Info")) displayStatus = "STELLE VERBINDUNG ZUM HOLONETZ HER...";
    if (status.includes("Mounting Addons")) displayStatus = "SYNCHRONISIERE DATENKRISTALLE...";
    if (status.includes("Workshop")) displayStatus = "DOWNLOADE SEKTOR-INFORMATIONEN...";
    if (status.includes("Sending client info")) displayStatus = "AUTORISIERE ZUGRIFFSCODES...";

    document.getElementById("status").innerText = displayStatus.toUpperCase();
}

function SetFilesTotal(total) {
    totalFiles = total;
    updateProgress();
}

function SetFilesNeeded(needed) {
    neededFiles = totalFiles - Math.max(0, needed);
    updateProgress();
}

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById("map").innerText = mapname;
    document.getElementById("gamemode").innerText = gamemode;
    document.getElementById("players").innerText = "? / " + maxplayers;
}
