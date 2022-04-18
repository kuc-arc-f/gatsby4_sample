// gatsby-node.js
const path = require("path")
const fetch = require("node-fetch")
const gatsbyConfig = require("./gatsby-config")

//console.log(gatsbyConfig);

const postQuery = async function(queryString){
  try {
    let ret = null;
//console.log("URL=", gatsbyConfig.siteMetadata.GATSBY_API_URL);
    const item = {
      query: queryString,
    }
    const res = await fetch(gatsbyConfig.siteMetadata.GATSBY_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(item),
    }); 
    if (res.status === 200) {
      const json = await res.json();
      ret = json;
      //console.log(json)
    } else {
      throw new Error(await res.text());
    }
    return ret;     
  } catch (err) {
    console.error(err);
    throw new Error('Error , query');
  }          
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const siteId = gatsbyConfig.siteMetadata.GATSBY_API_SITE_ID;
    const result = await postQuery(`
      query {
        posts(siteId: ${siteId}) {
          id
          title
          content
          categoryId
          createdAt    
        }
      }
    `);
    const edges = result.data.posts;
    // post/id
    edges.forEach(edge => {
        createPage({
            path: `/post/${edge.id}/`,
            component: path.resolve("./src/components/post.js"),
            context: { post: edge }
        })
    });
    // home
    createPage({
      path: `/home/`,
      component: path.resolve("./src/components/home.js"),
      context: { posts: edges }
  })

}