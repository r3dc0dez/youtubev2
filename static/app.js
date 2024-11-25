let player;
let currentVideoId = null;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        playerVars: {
            'playsinline': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
}

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const videoPlayer = document.getElementById('videoPlayer');

searchInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const input = searchInput.value.trim();
        if (input) {
            const videoId = extractVideoId(input);
            if (videoId) {
                loadVideo(videoId);
            } else {
                alert('Please enter a valid YouTube URL or video ID');
            }
        }
    }
});

function extractVideoId(input) {
    // handels url youtube
    const urlRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const urlMatch = input.match(urlRegex);
    
    if (urlMatch) {
        return urlMatch[1];
    }
    
    // handels id youtube
    if (input.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(input)) {
        return input;
    }
    
    return null;
}

function loadVideo(videoId) {
    if (currentVideoId === videoId) return;
    currentVideoId = videoId;
    
    videoPlayer.classList.remove('hidden');
    player.loadVideoById(videoId);
    videoPlayer.scrollIntoView({ behavior: 'smooth' });
    
    window.history.pushState({}, '', `?v=${videoId}`);
}

// load video from url
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');
    if (videoId) {
        loadVideo(videoId);
    }
});
