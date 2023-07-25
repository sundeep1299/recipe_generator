import React from 'react';
import Flashcard from './Flashcard';

const FlashcardsContainer = () => {
  // Assuming you have an array of flashcards data with word, translation, and audioUrl properties
  const flashcardsData = [
    { word: 'Hello', translation: 'Hola', audioUrl: 'url_to_hello_audio' },
    { word: 'Goodbye', translation: 'Adiós', audioUrl: 'url_to_goodbye_audio' },
    // Add more flashcards data here
  ];

  return (
    <div>
      {flashcardsData.map((flashcard, index) => (
        <Flashcard key={index} word={flashcard.word} translation={flashcard.translation} audioUrl={flashcard.audioUrl} />
      ))}
    </div>
  );
};

export default FlashcardsContainer;
