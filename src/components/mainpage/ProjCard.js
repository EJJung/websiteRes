import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Hidden, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, withWidth } from '@material-ui/core';

import { useStyles } from '../../style/designScheme';
import YerbbaIcon from '../../images/portfolios/Yerbba.svg';
import BrainIcon from '../../images/portfolios/2ndBrain.svg';
import CorrIcon from '../../images/portfolios/correlation.svg';
import UpliftIcon from '../../images/portfolios/upLift.svg';
import EyeGuideIcon from '../../images/portfolios/eyeGuide.svg';
import BeamsIcon from '../../images/portfolios/beams.svg';
import HealthhubIcon from '../../images/portfolios/healthHub.svg';
import MaIcon from '../../images/portfolios/ma.svg';
import ShahidIcon from '../../images/portfolios/shahid.svg';
import BxrIcon from '../../images/portfolios/bxr.svg';
import CrowdSourcingIcon from '../../images/portfolios/crowdSourcing.svg';
import LdaIcon from '../../images/portfolios/lda.svg';
import CykIcon from '../../images/portfolios/cykParser.svg';
import WordembeddingIcon from '../../images/portfolios/wordembedding.svg';
import ClassifierIcon from '../../images/portfolios/classifier.svg';

export const CardContents = [
  {
    id: 1,
    type: ['UX', 'UI', 'Dev', 'Data'],
    icon: YerbbaIcon,
    name: 'Yerbba',
    url: '/yerbba',
    desc: 'A patient medical information platform that provides personalized report based on own medical records'
  },
  {
    id:2,
    type: ['UX','UI'],
    icon: BrainIcon,
    name: '2nd Brain',
    url: '/second-brain',
    desc: 'A medical reminder system that reminds teens with chronic illnesses to stay on medication schedule'
  },
  {
    id: 3,
    type: ['Data'],
    icon: CorrIcon,
    url: '/sentiment-analysis',
    name: 'Correlation between Sentimant Analysis in Notes of Health Practitioners and Medical Prescription',
    desc: 'Apply NLP methods to healthcare data'
  },
  {
    id: 4,
    type: ['UX','UI'],
    icon: UpliftIcon,
    url: '/uplift',
    name: 'UpLift',
    desc: 'A commuter-to-commuter ridesharing service for low-income population'
  },
  {
    id: 5,
    type: ['UI'],
    icon: EyeGuideIcon,
    url: '/eye-guide',
    name: 'eyeGuide',
    desc: 'A platform that help patients change their behavior over their glaucoma and remember to take glaucoma medication'
  },
  {
    id: 6,
    type: ['UX'],
    icon: BeamsIcon,
    url: '/beams',
    name: 'Beams consulting',
    desc: 'A consulting for a platform of participant recruitment program to increase retension rate'
  },
  {
    id: 7,
    type: ['UX','UI'],
    icon: HealthhubIcon,
    url: '/radnet',
    name: 'Radnet.kr',
    desc: 'A health information exchange service that shares medical images and meta data through cloud based sharing and real-time image reading'
  },
  {
    id: 8,
    type: ['UX','UI'],
    icon: MaIcon,
    url: '/humax-mobile-app',
    name: 'TV - Mobile App 2.0',
    desc: 'Applications to seamlessly enjoy TV contents with multiscreen'
  },
  {
    id: 9,
    type: ['UI'],
    icon: ShahidIcon,
    url: '/tv-app-shahid',
    name: 'Shahid TV App',
    desc: 'A live and VOD contents streaming application built in Set top box'
  },
  {
    id: 10,
    type: ['UI'],
    icon: BxrIcon,
    url: '/bxr',
    name: 'Boxer HD+2 Default UI',
    desc: 'UI specification for Set top box'
  },
  {
    id: 11,
    type: ['Data'],
    icon: CrowdSourcingIcon,
    url: '/crowdsourcing',
    name: 'Crowdsourcing and Annotation',
    desc: 'Practice of using crowdsourcing: enhance public discourse with crowdsourcing by learning civility in online platform'
  },
  {
    id: 12,
    type: ['Data'],
    icon: LdaIcon,
    url: '/lda',
    name: 'Latent Dirchlet Allocation',
    desc: 'Practice of topic modeling: LDA - algorithm to assign words to related topic in unsupervised learning'
  },
  {
    id: 13,
    type: ['Data'],
    icon: CykIcon,
    url: '/nlp-grammer',
    name: 'Parse and Write Grammatical Texts',
    desc: 'Practice of building parser: CYK Parser - parse probabilistic context-free grammars and write sentences that grammatically correct'
  },
  {
    id: 14,
    type: ['Data'],
    icon: WordembeddingIcon,
    url: '/nlp-word-embeddings',
    name: 'Word Embeddings',
    desc: 'Practice of building vocabularies with contextual representations: Word2vec - to find patterns between words that has mutations'
  },
  {
    id: 15,
    type: ['Data'],
    icon: ClassifierIcon,
    url: '/word-classification',
    name: 'Classification',
    desc: 'Practice of building a simple classification tool of words: Naive Bayes and Logistic Regression'
  },
]

function ProjCard(props) {
  const classes = useStyles();
  const { content, width } = props;
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover(!hover)
  }

  function handleMouseOut() {
    setHover(false)
  }

  return (
    <Card style={{maxWidth:345,background:'none'}} elevation={0} >
      <CardActionArea
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        href={content.url}
      >
        <CardMedia
          component='img'
          alt={content.name}
          height='140'
          image={content.icon}
          title={content.name}
          style={{objectFit:'fill', paddingTop:'2em'}}
          className={hover=== true || width === "xs" ? classes.projOverImg:classes.projOutImg}
        />
        <CardContent
          className={hover=== true || width === "xs" ? classes.projOverTxt:classes.projOutTxt}
        >
          <Typography gutterBottom variant='subtitle1' component='h3'>
            {content.name}
          </Typography>
          <Typography variant='body2' component='p'>
            {content.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

ProjCard.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ProjCard);