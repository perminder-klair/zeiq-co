/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Seo from './Seo';
import PageLayout from './PageLayout';

export default function NewsLayout({ data: { mdx } }) {
  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <div className="page-content">
        {mdx.frontmatter.featuredImage && (
          <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        )}
        <h1 className="title is-1 has-text-centered has-text-weight-bold">
          {mdx.frontmatter.title}
        </h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query NewsPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
