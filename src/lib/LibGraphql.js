const gatsbyConfig = require("../../gatsby-config")

const LibGraphql = {
  query :async function(queryString){
    try {
      let ret = null;
      const item = {
        query: queryString,
      }
      const res = await fetch(gatsbyConfig.siteMetadata.GATSBY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      }); 
// console.log(res);
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
  },
//
  /* 改行等を、タグ変換する */
  replaceMutaionString: function(value){
    try{
      let contentValue = value;
      contentValue = contentValue.replace(/\r?\n/g, '<br />');  //win
      contentValue = contentValue.replace(/\n/g, '<br />');
      contentValue = contentValue.replace(/\"/g, '<doubleQuarts>');
      return contentValue;
    } catch (e) {
      console.log(e);
      throw new Error('error, replaceMutaionString');
    }
  },
  /* タグから、改行コード等に変換 */
  getTagString: function(contentValue){
    try{
      let content = contentValue.replace(/<br \/>/gi, '\n');
      content = content.replace(/<doubleQuarts>/gi, '"');
      return content;
    } catch (e) {
      console.log(e);
      throw new Error('error, getTagString');
    }
  },

}
export default LibGraphql;