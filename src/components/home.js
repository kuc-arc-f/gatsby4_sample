import React from "react"
import Layout from './Layout';

export default function Home({ pageContext }) {
  const postItems = pageContext.posts;
console.log(postItems);
  return (
  <Layout>
    <title>Home</title>
    <div className="post-header">
      <h1>Home</h1>
    </div>
    <hr />
    {postItems.map((item, index) => {
// console.log(item.id)
      return (
        <div key={index}id={item.id} title={item.title}>
          <a href={`/post/${item.id}/`}>
            <h3>{item.title}</h3>
          </a>            
          ID : {item.id}
          <hr />
        </div>      
      )
    })}    
  </Layout>
  )
}
