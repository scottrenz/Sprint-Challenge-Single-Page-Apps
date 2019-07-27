import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationList';
import EpisodesList from './components/EpisodesList';
import WelcomePage from './components/WelcomePage';

export default function App() {
    
  return <main>
<Header />
<TabNav />
<AppRouter>
   <Router>
   <Route path='/episodes' component={EpisodesList} />
   <Route path='/locations' component={LocationList} />
   <Route path='/characters' component={CharacterList} />
    <Route path='/home' component={WelcomePage} />
  </Router>
</AppRouter>
</main>
}