import React from 'react';

import * as S from './HeroStyles';
import heatmap from './table.png';

const Hero = () => (
  <S.Container>
    <S.Title>No reactions to your reddit posts?</S.Title>
    <S.Subtitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.Subtitle>
    <S.StyledLink to="/search/javascript">Show me the best time</S.StyledLink>
    <S.Para>r/javascript</S.Para>
    <S.ImgLink to="/search/javascript"><img src={heatmap} alt="heatmap" width="90%" /></S.ImgLink>
  </S.Container>
);

export default Hero;
