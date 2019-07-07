import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Post from './components/pages/Post/PostPage';
import NewPost from './components/pages/NewPost/NewPost';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={Post} />

          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

};


export default App;
