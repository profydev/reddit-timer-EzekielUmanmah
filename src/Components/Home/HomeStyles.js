import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const styles = css`
  text-align: center;
  text-decoration: none;
`;

export const Title = styled.h1`
  ${styles};
  margin-bottom: 0;
`;

export const Subtitle = styled.h2`
  ${styles};
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.text};
  letter-spacing: 1.5px;
`;

export const StyledLink = styled(Link)`
  ${styles};
  margin-top: 30px;
  background-color: #f5bf42;
  border-radius: 5px;
  padding: .8em;
  color: ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.font.size.small};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1114px;
  padding: 10px;
`;

export const Para = styled(Subtitle)`
  margin: 30px 0;
`;

export const Article = styled.article`
  max-width: 738px;
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  >* { text-align: left; }
`;

export const ArticleHeadline = styled.h2`
  font-size: ${(props) => props.theme.font.size.default};
  font-family: ${(props) => props.theme.font.title};
  letter-spacing: 1.5px;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.text};
  letter-spacing: 1px;
  line-height: ${(props) => props.theme.font.lineHeight};
`;

export const A = styled.a`
  text-decoration: none;
  color: blue;
`;

export const Item = styled.li`
  margin-left: 2px;
  list-style: inside; 
  line-height: ${(props) => props.theme.font.lineHeight};
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.text};
`;
