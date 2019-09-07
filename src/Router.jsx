import React from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Story from './Pages/Story/Story'
import Way from './Pages/Way/Way'
import Community from './Pages/Community/Community'
import Events from './Pages/Events/Events'
import Credits from './Pages/Credits/Credits'
import Contact from './Pages/Contact/Contact'
import Careers from './Pages/Careers/Careers'
import Blog from './Pages/Blog/Blog'
import Tlog from './Pages/Tlog/Tlog'
import Join from './Pages/Join/Join'
import Call from './Pages/Call/Call'
import Apps from './Pages/Apps/Apps'
import News from './Pages/News/News'
import Hacks from './Pages/Hacks/Hacks'
import FAQs from './Pages/Faqs/FAQs'
import Privacy from './Pages/Privacy/Privacy'
import Cancel from './Pages/Cancel/Cancel'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Profile from './Pages/Profile/Profile'
import Bengaluru from './Pages/Bengaluru/Bengaluru'
import Gurugram from './Pages/Gurugram/Gurugram'
import Kota from './Pages/Kota/Kota'
import Mumbai from './Pages/Mumbai/Mumbai'
import Noida from './Pages/Noida/Noida'


import Error from './Pages/Error/Error'

const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/bengaluru" component={Bengaluru}/>
      <Route path="/gurugram" component={Gurugram}/>
      <Route path="/kota" component={Kota}/>
      <Route path="/mumbai" component={Mumbai}/>
      <Route path="/noida" component={Noida}/>

      <Route path="/story" component={Story}/>
      <Route path="/way" component={Way}/>
      <Route path="/community" component={Community}/>
      <Route path="/events" component={Events}/>
      <Route path="/credits" component={Credits}/>

      <Route path="/contact" component={Contact}/>
      <Route path="/careers" component={Careers}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/tlog" component={Tlog}/>

      <Route path="/join" component={Join}/>
      <Route path="/call" component={Call}/>

      <Route path="/apps" component={Apps}/>
      <Route path="/news" component={News}/>
      <Route path="/hacks" component={Hacks}/>
      <Route path="/faqs" component={FAQs}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/cancel" component={Cancel}/>

      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/profile" component={Profile}/>

      <Route path="/404" component={Error}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  </Router>
)


export default AppRouter
