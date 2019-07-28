import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationList';
import EpisodesList from './components/EpisodesList';
import WelcomePage from './components/WelcomePage';

const Nav = styled.nav`
width: 10%;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
padding: 1.0rem;
height: 5.8rem;
`
const Button = styled.button`
color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid dodgerblue;
  border-radius: 3px;
  display: block;

  `;
  

export default function App() {
    
  return <main>
<Header />
<Nav>
<Button>
<Link to={`/home`}>Home</Link>
</Button>
<Button>
<Link to={`/characters`}>Characters</Link>
</Button>
<Button>
<Link to={`/locations`}>Locations</Link>
</Button>
<Button>
<Link to={`/episodes`}>Episodes</Link>
</Button>
</Nav>
 {/* <TabNav /> */}
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