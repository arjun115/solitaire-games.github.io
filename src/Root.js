import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import KlondikePage from './page/KlondikePage'
import SpiderPage from './page/SpiderPage'
import SpiderHowToPage from './page/SpiderHowToPage'
import FreecellPage from './page/FreecellPage'
import PyramidPage from './page/PyramidPage'
import FreecellHowToPage from './page/FreeCellHowToPage'
import HowToPage from './page/HowToPage'
import BlogPage from './page/BlogPage'
import history from './utils/history'
import AboutPage from './page/AboutPage'
import CookiesPolicyPage from './page/CookiesPolicyPage'
import PrivacyPolicyPage from './page/PrivacyPolicyPage'
import TermsPage from './page/TermsPage'
import NotFoundPage from './page/NotFoundPage'
import './global.css'

export default () => {
  return (
  <Router history={history.api}>
    <Switch>
      <Route exact path="/" component={KlondikePage} />
      <Route exact path="/game/classic" component={KlondikePage} />
      <Route exact path="/game/spider" component={SpiderPage} />
      <Route exact path="/game/freecell" component={FreecellPage} />
      <Route exact path="/game/pyramid" component={PyramidPage} />
      <Route exact path="/game/spider/tutorial" component={SpiderHowToPage} />
      <Route exact path="/game/freecell/tutorial" component={FreecellHowToPage} />
      <Route exact path="/game/classic/tutorial" component={HowToPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/cookies" component={CookiesPolicyPage} />
      <Route exact path="/privacy" component={PrivacyPolicyPage} />
      <Route exact path="/terms" component={TermsPage} />
      <Route exact component={NotFoundPage} />
    </Switch>
  </Router>
  ) 
}
