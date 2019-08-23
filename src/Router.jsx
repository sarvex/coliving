import React from 'react';import { createBrowserHistory } from 'history';import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import Home from './pages/home/Home';import Story from './pages/story/Story';// import Way from './pages/way/Way';// import Community from './pages/community/Community';// import Events from './pages/events/Events';// import Credits from './pages/credits/Credits';// import Contact from './pages/contact/Contact';// import Careers from './pages/careers/Careers';// import Blog from './pages/blog/Blog';// import Tlog from './pages/tlog/Tlog';// import Join from './pages/join/Join';// import Call from './pages/call/Call';// import Apps from './pages/apps/Apps';// import News from './pages/news/News';// import Hacks from './pages/hacks/Hacks';// import FAQs from './pages/faqs/FAQs';// import Privacy from './pages/privacy/Privacy';// import Cancel from './pages/cancel/Cancel';// import Login from './pages/login/Login';// import Signup from './pages/signup/Signup';// import Profile from './pages/profile/Profile';// import Error from './pages/error/Error';const history = createBrowserHistory();const AppRouter = () => (  <Router history={history}>    <Switch>      <Route path="/" component={Home}/>      {/*<Route path="/bengaluru" component={Bengaluru}/>*/}      {/*<Route path="/gurugram" component={Gurugram}/>*/}      {/*<Route path="/kota" component={Kota}/>*/}      {/*<Route path="/mumbai" component={Mumbai}/>*/}      {/*<Route path="/noida" component={Noida}/>*/}      <Route path="/story" component={Story}/>      <Route path="/way" component={Story}/>      <Route path="/community" component={Story}/>      <Route path="/events" component={Story}/>      <Route path="/credits" component={Story}/>      <Route path="/contact" component={Story}/>      <Route path="/careers" component={Story}/>      <Route path="/blog" component={Story}/>      <Route path="/tlog" component={Story}/>      <Route path="/join" component={Story}/>      <Route path="/call" component={Story}/>      <Route path="/apps" component={Story}/>      <Route path="/news" component={Story}/>      <Route path="/hacks" component={Story}/>      <Route path="/faqs" component={Story}/>      <Route path="/privacy" component={Story}/>      <Route path="/cancel" component={Story}/>      <Route path="/login" component={Story}/>      <Route path="/signup" component={Story}/>      <Route path="/profile" component={Story}/>      <Route path="/404" component={Error}/>    </Switch>  </Router>);export default AppRouter;