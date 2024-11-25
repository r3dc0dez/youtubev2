# YouTube v2 

<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/r3dc0dez/youtubev2)
  ![GitHub stars](https://img.shields.io/github/stars/r3dc0dez/youtubev2?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/r3dc0dez/youtubev2?style=social)

  <br />
  <br />

  <h2 align="center">YouTube v2</h2>

  YouTube v2 is a fully responsive video player that lets you watch videos without ads or account requirements, <br />Responsive for all devices, build using PYTHON, HTML, CSS, and JavaScript.

  <a href="https://youtubev2-tau.vercel.app/templates/index.html" target="_blank"><strong>➥ Live Demo</strong></a>

</div>

A minimal YouTube alternative that lets you watch videos without ads or account requirements. Just paste a YouTube URL or video ID and enjoy!

Made by [@r3dc0dez](https://github.com/r3dc0dez)

## Features 

- 🚫 No ads
- 🔑 No API key required
- 📱 Responsive design
- 🔗 Shareable URLs
- 🎯 Direct video playback
- 🆓 No account needed

## Usage 

1. Open the app
2. Paste any YouTube link or video ID:
   - Full URL: `https://youtube.com/watch?v=x8nzZeXhA9o`
   - Short URL: `https://youtu.be/x8nzZeXhA9o`
   - Video ID: `x8nzZeXhA9o`
3. Press Enter to watch!

## Setup 

1. Clone the repository:
```bash
git clone https://github.com/r3dc0dez/youtubev2.git
cd youtubev2
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the app:
```bash
python main.py
```

4. Open your browser and go to `http://localhost:8000`

## Tech Stack 

- Backend: FastAPI (Python)
- Frontend: HTML, JavaScript, TailwindCSS
- Video Player: YouTube Embed API

## Project Structure 

```
youtubev2/
├── main.py              # FastAPI server
├── requirements.txt     # Python dependencies
├── static/
│   ├── app.js          # Frontend logic
│   └── styles.css      # Custom styles
└── templates/
    └── index.html      # Main page
```

## Contributing 

Feel free to open issues or submit pull requests if you have any improvements or bug fixes!
