# YouTube Clone

A modern YouTube clone built with React.js and Material-UI, featuring video playback, search functionality, and channel views.

![YouTube Clone](./Screenshot.png)

## 🚀 Features

- **Video Playback**: Seamless video streaming with React Player
- **Search Functionality**: Real-time search with YouTube Data API integration
- **Channel Pages**: Dedicated channel pages with channel details and videos
- **Responsive Design**: Mobile-first approach with Material-UI
- **Category Filtering**: Browse videos by categories
- **Related Videos**: Smart video recommendations
- **Dark Theme**: Modern dark theme UI

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.2.0
- **UI Library**: Material-UI v5
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Video Player**: React Player
- **API**: YouTube Data API v3
- **Styling**: Emotion (CSS-in-JS)
- **Environment Variables**: dotenv

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RamziHydan/youtube-clone.git
   ```

2. Install dependencies:
   ```bash
   cd youtube-clone
   npm install
   ```

3. Create a `.env` file in the root directory and add your YouTube Data API key:
   ```env
   REACT_APP_RAPID_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Global navigation
│   ├── Feed.jsx        # Homepage feed
│   ├── VideoDetail.jsx # Video page
│   ├── ChannelDetail.jsx
│   ├── SearchFeed.jsx
│   ├── SearchBar.jsx
│   ├── Videos.jsx
│   ├── VideoCard.jsx
│   └── ChannelCard.jsx
├── utils/              # Utility functions
│   ├── fetchFromAPI.js # API calls
│   └── constants.js    # Constants
├── App.js              # Main component
└── index.js           # Entry point
```

## 🔍 Key Features Explained

### Video Playback
- Smooth video streaming using React Player
- Video statistics (views, likes)
- Related videos suggestions
- Channel information display

### Search Functionality
- Real-time search results
- Search history via URL parameters
- Category-based filtering
- Loading states and error handling

### Channel Features
- Detailed channel pages
- Channel videos display
- Channel statistics
- Subscribe button (UI only)

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Flexible grid system
- Breakpoint-based styling

## 🔧 Configuration

The project uses environment variables for configuration. Create a `.env` file with the following:

```env
REACT_APP_RAPID_API_KEY=your_youtube_api_key
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktops (> 1024px)

## 🚀 Performance Optimizations

- Lazy loading of videos
- Optimized re-renders
- Error boundaries implementation
- Efficient state updates
- Loading states for better UX

## 🧪 Future Enhancements

- [ ] User authentication
- [ ] Comments section
- [ ] Video playlists
- [ ] Watch history
- [ ] Video quality selection
- [ ] Infinite scrolling
- [ ] Progressive loading
- [ ] Video sharing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the amazing UI components
- [YouTube Data API](https://developers.google.com/youtube/v3) for the data
- [React Player](https://github.com/CookPete/react-player) for video playback

## 👤 Author

Ramzi Haidan

- GitHub: [@RamziHydan](https://github.com/RamziHydan)
- LinkedIn: [Ramzi Hidan](https://www.linkedin.com/in/ramzi-haidan-441a44273/)

---
⭐️ Star this repo if you find it helpful!
