import React, { useState, useEffect } from 'react';

const EmojiSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const emojis = {
    smile: '😊',
    heart: '❤️',
    'thumbs up': '👍',
    'thumbs down': '👎',
    laugh: '😂',
    cry: '😢',
    angry: '😡',
    star: '⭐',
    flower: '🌸',
    rocket: '🚀'
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchEmoji = (keyword) => {
    const results = [];
    for (const [name, emoji] of Object.entries(emojis)) {
      if (name.toLowerCase().includes(keyword.toLowerCase())) {
        results.push({ name, emoji });
      }
    }
    return results;
  };

  const searchResults = searchEmoji(searchTerm);

  useEffect(() => {
      document.body.classList.toggle('dark-mode', darkMode);
      }, [darkMode]);

      const toggleDarkMode = () => {
             setDarkMode(!darkMode);
          };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <h1>Emoji Search App</h1>
      <div className="dark-mode-toggle">
       <lebel>
       <input
        type='checkbox'
        checked={darkMode}
        onChange={toggleDarkMode}
        />
        Dark Mode
        </lebel>
        <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        />
        {searchResults.map((result, index) => (
          <div key={index} onClick={() => handleEmojiClick(result.emoji)}>
            <span>{result.name}: </span>
            <span>{result.emoji}</span>
          </div>
        ))}
        </div>
      </div>
      <div>
        <h2>Selected Emoji:</h2>
        <span>{selectedEmoji}</span>
      </div>
    </div>
  );
};

export default EmojiSearchApp;
