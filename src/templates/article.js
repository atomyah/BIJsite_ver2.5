import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Style from './article.module.css'

import { useLocation } from "@reach/router"
//import { DiscussionEmbed } from "disqus-react";
//import { FacebookProvider, Comments } from 'react-facebook';
//import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';
//import ItemList from '../components/Comment'

const Articlearticle = props => {

 const article = props.data.microcmsArticles // ㊟allMicrocmsArticleでない
 //console.log('◆article.category[0].name ' + article.category[0].name)
 //console.log('◆article.writer.name ' + article.writer.name)

 /* コメント欄機能Disqusの設定 */
 /*
 const slug = useLocation()
 const title = article.title
 const disqusShortname = "bij-site-2";
 const disqusConfig = {
  config: { identifier: slug, title },
}
*/


 const categoryName = article.category[0].name // パンくずで使う上位ページの分類名
 let categoryString = ""
 switch (categoryName) {
     case 'patients':  
         categoryString = "患者の方へ"
         break;
     case 'doctors':  
         categoryString = "医師の方へ"
         break;
    case 'medias': 
         categoryString = "メディアの方へ"
         break;        
     default:
         categoryString = ""
 }

 return (
   <Layout>
     <Container fluid="md">
     <SEO title={article.title} 
        description={sumarrize(article.body)}
        image={article.pict.url}  
        lang="ja"
    />

        <div className={Style.banner}>
          <p>
            <FontAwesomeIcon icon={faEdit} style={{color: `darkolivegreen` }} />
            <a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="blank" rel="noreferrer noopener">
              『ベンゾジアゼピン薬の安全な離脱方法』（Kindle版）
            </a>
            発売中
          </p>
        </div>

        <Breadcrumb style={{fontSize: `0.65rem`, backgroundColor: `white`}}>
          <Breadcrumb.Item href="/">ホーム</Breadcrumb.Item>
          <Breadcrumb.Item href={`/${categoryName}`}>
            {categoryString}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{article.title}</Breadcrumb.Item>
        </Breadcrumb>
     <div>
       <h1 style={{ fontSize: `1.25rem`}}>{article.title}</h1>
       <span style={{ fontSize: `1.1rem`}}
                dangerouslySetInnerHTML={{
                  __html: `${article.title_origin}`,
                }}
       >
       </span>
      
       <Row>
         <Col md={8}>
          
         <span style={{ fontSize: `0.9rem`, color: `gray` }}
         dangerouslySetInnerHTML={{
           __html: `著者：${article.author}`,
         }}
         ></span>
         
         </Col>
         <Col md={4}>
         <span style={{ fontSize: `0.9rem`, color: `gray` }}>投稿：{article.date}</span>
         </Col>
       </Row>
       
       <br />
       <div
         dangerouslySetInnerHTML={{
           __html: `${article.body}`,
         }}
       ></div>
       <br />
       <span>著者：{article.author_rel[0].name}</span>
       <br />
       <img src={article.author_rel[0].image.url} width={200} alt={article.author_rel[0].name} />
       <div
         dangerouslySetInnerHTML={{
           __html: `${article.author_rel[0].profile}`,
         }}
       ></div>
     </div>
     <br /><br />
     {/*
     <FontAwesomeIcon icon={faEdit} /><span style={{color:`#5a818c`}}>ご自由にコメントをお書きください。管理人の承認作業はありません。</span>
     <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
     */}
     {/* <FacebookProvider appId="712789275930386" language="ja_JP">
        <Comments href="http://benzoinfojapan.org" width="100%" />
      </FacebookProvider>
        */}
      {/*<TalkyardCommentsIframe /> */}
      {/*<ItemList />*/}
     </Container>
   </Layout>
 )
}

export default Articlearticle

export const query = graphql`
 query($id: String!) {
   microcmsArticles(id: { eq: $id }) {
     title
     title_origin
     author
     date
     body
     pict {
       url
     }
     body
     category {
       name
     }
     author_rel {
       name
       profile
       image
       {
         url
       }
     }
   }
 }
`

/* <SEO description= />用に記事本文を120字以内に収める関数 */
let striptags = require('striptags');
function sumarrize(html) {
  const metaDescription = striptags(html).replace(/\r?\n/g, '').trim();
  return metaDescription.length <= 120
    ? metaDescription
    : metaDescription.slice(0, 120) + '...';
}