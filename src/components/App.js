import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { theme } from '../style/designScheme';
import history from './history';
import Header from './utils/Header';
import MainpageSum from './mainpage/mainpageSum';
import { AboutSum } from './About/AboutSum';
import { WorkSum } from './worksPage/WorkSum';
import { YerbbaSum } from './projectPages/yerbba/YerbbaSum';
import { SecondBrainSum } from './projectPages/secondBrain/secondBrainSum';

import { SentimentAnalysisSum } from './projectPages/sentimentAnalysis/sentimentAnalysisSum';
import { UpLiftSum } from './projectPages/upLift/upLiftSum';
import { EyeGuideSum } from './projectPages/eyeGuide/eyeGuideSum';
import { BeamsSum } from './projectPages/beams/beamsSum';
import { RadnetSum } from './projectPages/radnet/radnetSum';
import { MobileAppSum } from './projectPages/mobileApp2/mobileAppSum';
import { ShahidSum } from './projectPages/shahid/shahidSum';
import { BxrSum } from './projectPages/bxr/bxrSum';
import { CrowdSourcingSum } from './projectPages/crowdSourcing/crowdSourcingSum';
import { LDASum } from './projectPages/lda/ldaSum';
import { CYKParserSum } from './projectPages/cykParser/cykParserSum';
import { WordEmbeddingSum } from './projectPages/wordEmbedding/wordEmbeddingSum';
import { NaiveBayesSum } from './projectPages/naiveBayes/naiveBayesSum';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/' component={MainpageSum}/>
          <Route path='/works' component={WorkSum} />
          <Route path='/about' component={AboutSum} />
          <Route path='/yerbba' component={YerbbaSum} />
          <Route path='/second-brain' component={SecondBrainSum} />
          <Route path='/sentiment-analysis' component={SentimentAnalysisSum} />
          <Route path='/uplift' component={UpLiftSum} />
          <Route path='/eye-guide' component={EyeGuideSum} />
          <Route path='/beams' component={BeamsSum} />
          <Route path='/radnet' component={RadnetSum} />
          <Route path='/humax-mobile-app' component={MobileAppSum} />
          <Route path='/tv-app-shahid' component={ShahidSum} />
          <Route path='/bxr' component={BxrSum} />
          <Route path='/crowdsourcing' component={CrowdSourcingSum} />
          <Route path='/lda' component={LDASum} />
          <Route path='/nlp-grammer' component={CYKParserSum} />
          <Route path='/nlp-word-embeddings' component={WordEmbeddingSum} />
          <Route path='/word-classification' component={NaiveBayesSum} />
        </Switch>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;