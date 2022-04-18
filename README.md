# gatsby4_sample

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2022/04/17

 update  :

***
### Summary

Gatsby.js sample , API fetch + headless CMS 

***
### apollo-server

* apollo_cms1  (backend)

https://github.com/kuc-arc-f/apollo_cms1

***
### Setup

* gatsby-config.js : 

* GATSBY_API_URL: apollo-server URL endpoint

* GATSBY_API_SITE_ID: siteId , headless CMS

```
  siteMetadata: {
    ....
    GATSBY_API_URL: "http://localhost/graphql",
    GATSBY_API_SITE_ID: 1, 
  }
```

***
### start
```
yarn develop

# build
yarn build
```

***
### Blog :

https://zenn.dev/knaka0209/books/4ee53bad905ec2/viewer/320422

***

