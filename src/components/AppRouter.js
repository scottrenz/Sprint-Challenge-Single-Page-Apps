import React from 'react'
import { Switch, Route } from 'react-router-dom';
import EpisodesList from './EpisodesList'
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationList from './LocationList';

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/episodes' component={EpisodesList} />
      <Route path='/locations' component={LocationList} />
      <Route path='/characters' component={CharacterList} />
      <Route component={WelcomePage} />
    </Switch>
  </div>

}
