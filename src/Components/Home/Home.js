import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './HomeStyles';
import heatmap from './table.png';

const Hero = () => (
  <S.Container>
    <S.Title>No reactions to your reddit posts?</S.Title>
    <S.Subtitle>
      Great timing, great results! Find the best time to post on your subreddit.
    </S.Subtitle>
    <S.StyledLink to="/search/javascript">Show me the best time</S.StyledLink>
    <S.Para>r/javascript</S.Para>
    <Link to="/search/javascript"><S.Image src={heatmap} alt="heatmap" /></Link>
    <S.Article>
      <S.ArticleHeadline id="how-it-works">How it works</S.ArticleHeadline>
      <S.Item>We find the 500 top posts from the past year for a subreddit.</S.Item>
      <S.Item>The data is visualized in a heatmap grouped by weekday and hour of day.</S.Item>
      <S.Item>See immediately when to submit your reddit post.</S.Item>
    </S.Article>
    <S.Article>
      <S.ArticleHeadline id="about">About</S.ArticleHeadline>
      <S.Paragraph>
        This app was created during a course on
        {' '}
        <S.A href="https://profy.dev" target="_blank" rel="noreferrer nofollow">profy.dev</S.A>
        {' '}
        with the goal to implement
        a real-world application with professional workflows and tools like Kanban, Asana,
        Zeplin, GitHub, pull requests and code reviews.
        {' '}
        <S.A href="https://profy.dev/employers" target="_blank" rel="noreferrer nofollow">Click here for more information.</S.A>
      </S.Paragraph>
    </S.Article>
  </S.Container>
);

export default Hero;
