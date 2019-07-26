import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import AppRouter from './components/AppRouter.js';

export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    <CharacterList />
  </main>
}