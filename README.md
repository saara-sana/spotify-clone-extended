# spotify-clone-extended
# 🎵 Spotify Clone (Extended)

A modern music streaming web application inspired by Spotify's interface, built with HTML, CSS, and JavaScript.

## 📌 About This Project

This project started with the frontend UI from [CodeWithHarry's Sigma Web Development Course](https://github.com/CodeWithHarry/Sigma-Web-Dev-Course) and has been extended and customized by me.

**What I've done:**
- Adapted and modified the frontend UI
- Improved responsiveness and user experience
- Added custom features and functionality
- Deployed the application for live access

## ✨ Features

### 🎧 Core Features
- 🎨 Clean, modern Spotify-inspired UI
- 🎵 Music player controls (play, pause, next, previous)
- 📱 Responsive design for mobile and desktop
- ⏱️ Real-time progress tracking
- 🔊 Volume control

### ⭐ Favorites System (Coming Soon)
A dedicated favorites/liked songs feature that allows users to:
- ❤️ **Like/Unlike songs** - Heart icon on each track
- 📋 **Favorites playlist** - Dedicated section showing all liked songs
- 💾 **Persistent storage** - Favorites saved using localStorage
- 🔢 **Count display** - Shows total number of favorite songs
- 🎯 **Quick access** - Toggle between all songs and favorites view

**Technical Implementation:**
```javascript
// Features to be implemented:
- localStorage API for data persistence
- Dynamic DOM manipulation for favorites list
- Event listeners for like/unlike actions
- Filter functionality to show/hide favorites
```

### 🎼 Playlist Management
- Custom playlist creation
- Add/remove songs from playlists
- Playlist organization and sorting

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactive functionality
- **localStorage API** - Client-side data persistence
- **Git & GitHub** - Version control
- **Netlify** - Deployment *(coming soon)*

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, etc.)
- VS Code (optional, for editing)
- Live Server extension (optional, for local development)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/saara-sana/spotify-clone-extended.git
```

2. Open the project folder:
```bash
cd spotify-clone-extended
```

3. Open `index.html` in your browser or use Live Server in VS Code

## 📂 Project Structure

```
spotify-clone-extended/
├── css/
│   └── style.css      # Main styles + favorites UI
├── js/
│   ├── script.js      # Core player functionality
│   └── favorites.js   # Favorites system (coming soon)
├── songs/             # Audio files
├── img/               # Images and icons
├── index.html         # Main HTML file
└── README.md          # Project documentation
```

## 🎯 Roadmap

### Phase 1: Frontend Enhancement ✅
- [x] Base UI implementation
- [x] Music player controls
- [ ] Favorites system

### Phase 2: Advanced Features 🚧
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts
- [ ] Recently played section

### Phase 3: Backend Integration 📋
- [ ] User authentication
- [ ] Database for playlists
- [ ] API integration
- [ ] Cloud music storage

## 💻 Code Highlights

### Favorites Feature Architecture
```javascript
// Data structure for favorites
const favorites = {
  songs: [],
  add: function(songId) { /* ... */ },
  remove: function(songId) { /* ... */ },
  toggle: function(songId) { /* ... */ },
  getAll: function() { /* ... */ }
}

// localStorage integration
localStorage.setItem('favoriteSongs', JSON.stringify(favorites.songs))
```

## 📸 Screenshots

*(Add screenshots of your project here)*

## 🌐 Live Demo

🔗 [View Live Demo](#) *(Add your Netlify link here once deployed)*

## 🙏 Acknowledgments

- UI base adapted from [CodeWithHarry's Sigma Web Development Course](https://github.com/CodeWithHarry/Sigma-Web-Dev-Course) (public repository)
- Extended and modified by **Saara Kauser Shaik**
- Thanks to the open-source community for inspiration

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Saara Kauser Shaik**

- GitHub: [@saara-sana](https://github.com/saara-sana)
- LinkedIn: [Your LinkedIn](#https://www.linkedin.com/in/saara-kauser-shaik-21b6b7355/) *(optional)*

---

⭐ If you found this project helpful, please consider giving it a star!

## 📊 Project Status

🟢 **Active Development** - Curre
