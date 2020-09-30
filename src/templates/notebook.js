// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Tabs, Tab, Badge } from 'react-bootstrap';

import NotebookPreview from "@nteract/notebook-preview";

const NotebookPage = ({ data }) => {
  let { html, internal: { content = null } = {}, fields: { codemeta = null } = {} } = data.jupyterNotebook;

  let doi_id = codemeta && codemeta.identifier ? codemeta.identifier.replace("https://doi.org/","") : "" 
  let doi_link = `https://doi.org/${doi_id}`;
  return (
    <Layout>
      <hr />
      <h2>{codemeta.name}
      {
        codemeta.binderUrl &&
        <a target="_blank" href={codemeta.binderUrl} style={{float: "right"}}>
          <img src="https://camo.githubusercontent.com/483bae47a175c24dfbfc57390edd8b6982ac5fb3/68747470733a2f2f6d7962696e6465722e6f72672f62616467655f6c6f676f2e737667" alt="Binder" data-canonical-src="https://mybinder.org/badge_logo.svg" style={{maxWidth:"100%"}}></img>
        </a>
      }
      </h2>
      {
        doi_link !== "https://doi.org/" &&
        <a target="_blank" href={doi_link}>
          <Badge variant="info"><strong>DOI:</strong> {doi_id}</Badge>
        </a>
      }{' '}
      <Badge variant="secondary">Date Published: {codemeta.datePublished}</Badge>{' '}
      <Badge variant="dark">Version: {codemeta.version}</Badge>{' '}
      <Badge variant="secondary">Publisher: {codemeta.publisher}</Badge>{' '}

      <h2/>
      <br/><hr />
      <NotebookPreview notebook={JSON.parse(content)} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
        html
        internal {
          content
        }
        fields {
          codemeta {
            identifier
            binderUrl
            codeRepository
            controlledTem
            datePublished
            dateModified
            dateCreated
            description
            isAutomatedBuild
            issueTracker
            licenseId
            publisher
            name
            version
          }
        }
    }
  }
`

export default NotebookPage