import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePageTask from './users/pages/HomePageTask';
import NewTask from './places/pages/NewTask';
import CreatorTasks from './places/pages/CreatorTasks';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdateTask from './places/pages/UpdateTask';

const App = () => {

  let routes;

  routes = (
    <Switch>
       <Route path="/" exact>
        <HomePageTask/>
      </Route> 
      <Route path="/tasks/:taskId" exact>
        <CreatorTasks/>
      </Route> 
      <Route path="/tasks/" exact>
        <NewTask/>
      </Route>
      <Route path="/tasks/update/:taskId/:creator/:taskDesc" exact>
        <UpdateTask/>
      </Route> 
      <Redirect to="/"></Redirect>
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
        <main>
          {routes}
        </main>
    </Router>
  );
};

export default App;
