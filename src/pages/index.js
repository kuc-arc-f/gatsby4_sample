import * as React from "react"
//import { useState, useEffect } from "react"

//import LibGraphql from '../lib/LibGraphql';
import Layout from '../components/Layout';
//const gatsbyConfig = require("../../gatsby-config")
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
/*
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}
*/

// markup
export default function Home({ data }) {
console.log(data);
  return (
  <Layout>
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Top
      </h1>
      {/*
      <h3>Posts : </h3>
      <hr />
      */}
    </main>
  </Layout>
  )
}
