import React from 'react';
import { graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';

import { AuthorSummary, Layout, SEO } from '../../components';
import classes from './AuthorsPage.module.css';

const AuthorsPage = ({ data }) => {
  const { authors } = data;

  return (
    <Layout>
      <SEO
        title="Authors"
        keywords={['apis', 'api', 'rest', 'rpc', 'graphql']}
      />
      <div className={classes.background}>
        <Container className={classes.container}>
          <Row>
            <Col>
              <h1>Authors</h1>
              <p>
                {
                  "These are the lovely people that make APIs You Won't Hate tick"
                }
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {authors.nodes.map((author, i) => {
                return (
                  <React.Fragment key={author.id}>
                    <AuthorSummary author={author} />
                    {i < authors.nodes.length - 1 && (
                      <div className={classes.bookSpacer} />
                    )}
                  </React.Fragment>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    authors: allMdx(filter: { frontmatter: { type: { eq: "author" } } }) {
      nodes {
        id
        frontmatter {
          name
          shortName
          shortBio
          photo
          twitter
          instagram
          github
        }
      }
    }
  }
`;

export default AuthorsPage;
