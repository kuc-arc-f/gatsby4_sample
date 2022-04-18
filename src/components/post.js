import React from "react"
import { marked } from 'marked';
//import "../styles/post.css"
import Layout from './Layout';
import LibGraphql from '../lib/LibGraphql';

export default function Post({ pageContext }) {
  const { title, createdAt} = pageContext.post;
  const body = pageContext.post.content;
  let content = LibGraphql.getTagString(body)
  content = marked.parse(content);

  return (
  <Layout>
    <title>{title}</title>
    <div className="post-header">
      <h1>{title}</h1>
      {/*
      <p className="post-date">Date : {createdAt}</p>
      */}
    </div>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: content }} className="post-body" />
  </Layout>
  )
}
