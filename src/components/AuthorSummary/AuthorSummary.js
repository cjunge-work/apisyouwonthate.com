import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';
import { GitHubIcon, InstagramIcon, TwitterIcon } from '../icons';
import { Image } from '..';

import classes from './AuthorSummary.module.css';

const AuthorSummary = ({ author }) => {
  console.log('with author', author);
  const {
    name,
    photo,
    twitter,
    instagram,
    github,
    shortBio,
  } = author.frontmatter;

  return (
    <div className={classes.container}>
      <Row noGutters>
        <Col xs={2} sm={1}>
          {photo && (
            <div className={classes.headshotContainer}>
              <Image src={photo} />
            </div>
          )}
        </Col>
        <Col xs={10} sm={11}>
          <div>
            <Link to={`/authors/${slugify(name)}`}>
              <h2>{name}</h2>
            </Link>
            <ul className={classes.socialLinks}>
              <li>
                {github && (
                  <OutboundLink
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon /> @{github}
                  </OutboundLink>
                )}
              </li>
              <li>
                {twitter && (
                  <OutboundLink
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon /> @{twitter}
                  </OutboundLink>
                )}
              </li>
              <li>
                {instagram && (
                  <OutboundLink
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon /> @{instagram}
                  </OutboundLink>
                )}
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={1} />
        <Col xs={10} sm={11}>
          <article>{shortBio && <p>{shortBio}</p>}</article>
        </Col>
      </Row>
    </div>
  );
};

export default AuthorSummary;
