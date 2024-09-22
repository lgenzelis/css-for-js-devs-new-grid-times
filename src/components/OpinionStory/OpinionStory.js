import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionStoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </OpinionStoryLink>
  );
};

const OpinionStoryLink = styled.a`
  border-bottom: 1px solid var(--color-gray-300);
  padding-block: 16px;

  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media ${QUERIES.tabletOnly} {
    border-bottom: none;
    padding: 0;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  
  float: right;
  margin: 4px 0 0 4px;
  
  @media ${QUERIES.tabletOnly} {
    margin: 0;
    float: none;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
