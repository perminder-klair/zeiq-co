import React from 'react';
import Link from 'gatsby-link';

import AboutHero from '../components/AboutHero';
import Carousel from '../components/Carousel';
import Buttons from '../components/Buttons';
import TeamGallery from '../components/TeamGallery';
import BlockQuote from '../components/BlockQuote';
import BrandGallery from '../components/BrandGallery';
import CallToAction from '../components/CallToAction';

export default class About extends React.Component {
  render() {
    const { data } = this.props;
    const { contentfulAbout: about } = data;
    const { edges: carousel } = data.allContentfulCarouselItem;
    const { edges: team } = data.allContentfulTeamMember;
    const { edges: brand } = data.allContentfulBrand;
    console.log(brand);
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AboutHero about={about} />
              <Carousel carousel={carousel} />
              <Buttons />
              <TeamGallery team={team} />
              <BlockQuote />
              <BrandGallery brand={brand} />
              <CallToAction />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      id
      featuredImage {
        file {
          url
        }
      }
      title
      description {
        description
      }
    }
    allContentfulCarouselItem {
      edges {
        node {
          id
          title
          description {
            description
          }
        }
      }
    }
    allContentfulTeamMember {
      edges {
        node {
          id
          image {
            file {
              url
            }
          }
          name
          position
          facebookId
          instagramId
          twitterId
          linkedInId
        }
      }
    }
    allContentfulBrand {
      edges {
        node {
          id
          image {
            file {
              url
            }
          }
          name
        }
      }
    }
  }
`;