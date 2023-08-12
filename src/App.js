import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureArea from './components/FeatureArea';
import Area from './components/Area';
import BuyArea from './components/BuyArea';
import TokenArea from './components/TokenArea';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import StageArea from './components/StageArea';
import QuestionArea from './components/QuestionArea';
import ChooseArea from './components/ChooseArea';
import ShareArea from './components/ShareArea';
import FootArea from './components/FootArea';

import './App.css';
import './Normalise.css';
import './Responsive.css';

const App = () => {
  return (
    <>
     
      <Header />
      <Hero />
     
      <FeatureArea />
      <Area />
      <BuyArea />
      <TokenArea />
      <Roadmap />
      <Tokenomics />
      <StageArea />
      <QuestionArea />
      <ChooseArea />
      <ShareArea />
      <FootArea />
    </>
  );
};

export default App;
