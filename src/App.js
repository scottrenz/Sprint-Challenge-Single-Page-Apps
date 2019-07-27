import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationList';
import EpisodesList from './components/EpisodesList';
import AppRouter from './components/AppRouter.js';
import WelcomePage from './components/WelcomePage';

export default function App() {
    
  return <main>
<Header />
<TabNav />
<AppRouter>
   <Router>
    <Route path='/home' component={WelcomePage} />
    <Route path='/episodes' component={EpisodesList} />
    <Route path='/locations' component={LocationList} />
    <Route path='/characters' component={CharacterList} />
  </Router>
</AppRouter>
</main>
}