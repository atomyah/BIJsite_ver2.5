import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Container, Row, Col, Badge, Accordion, Card, Button } from 'react-bootstrap'
import Style from './index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="ベンゾジアゼピン情報センター トップページ"
        description="睡眠薬、抗不安薬であるベンゾジアゼピンは決められた処方用量を守っていてもベンゾジアゼピン離脱の際に重篤な離脱症状を発生する場合があります" 
        image="/twitterimg/icon-144x144.png" 
        lang="ja"
    />
    <Container fluid="md">
    <h1 className={Style.h1Size}>ベンゾジアゼピン（睡眠薬・抗不安薬）情報センター</h1> 
      <Row>
        <Col md={6}>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>新着情報</h2>
              {data.allMicrocmsArticles.edges.map(edge => {
                const articles = edge.node
                const category = edge.node.category[0].name

                  return (
                    <React.Fragment key={articles.id}>
                      <div>
                        <Link to={`/${category}-article/${articles.num}`} alt={articles.title}>
                          {articles.title}
                        </Link>
                          を作成しました
                        <Badge variant="danger">新</Badge>
                      </div>
                      <div>
                        {/* <Badge variant="info">更</Badge> */}
                      </div>
                    </React.Fragment>
                    )
                  }
                )
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>更新情報</h2>
                  <div>
                    <Link to="/patients-article/8" alt="管理人のベンゾ減薬記録">
                    管理人のベンゾ減薬記録
                    </Link>
                      を更新しました
                    <Badge variant="info">更</Badge>
                  </div>
                  <div>
                    <Link to="/patients-article/10" alt="My taper log and history">
                    My taper log and history
                    </Link>
                    {` `}is updated
                    <Badge variant="info">更</Badge>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>ニュースリンク</h2>
              <a href="https://medical.jiji.com/topics/1495" alt="睡眠薬の中止で離脱症状" target="_blank" rel="noreferrer noopener">「睡眠薬や抗不安薬の中止で離脱症状」（メディカルトリビューン＝時事）</a>
              <br /><span className={Style.fontSmallCrimson}>週刊誌等でベンゾの危険性についての記事が多くなっています。それらを読んで<u>けしてすぐに止めたり減薬を急がないでください</u>。充分に学べば不安になることはありません。</span>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>動画紹介</h2>
              {/* 
              <div>
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/nHDjjwMKRCY" alt="ベンゾクライシス" target="_blank" rel="noreferrer noopener">リサ・リンのこれが人生ーベンゾクライシス （前半）22分</a>
                <br />
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/X4VwnA3qsas" alt="ベンゾクライシス" target="_blank" rel="noreferrer noopener">リサ・リンのこれが人生ーベンゾクライシス （後半）19分</a>
                <br />
                <span className={Style.fontSmall}>2019年10月6日CNNにて放映</span>
                
                <a href="https://youtu.be/nHDjjwMKRCY" alt="ベンゾクライシス" target="_blank" rel="noreferrer noopener"><Image filename="home_02.jpg" alt="ドキュメンタリー番組―ベンゾクライシス" /></a>
                <br />
                <span className={Style.fontSmall}>出典：<a href="https://edition.cnn.com/shows/this-is-life-with-lisa-ling" target="_blank" rel="noreferrer noopener">CNN, This Is Life with Lisa Ling</a>   
                <br />
                字幕・翻訳：<a href="https://benzoinfojapan.org/profile/" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター</a></span>
                
              </div>
              <br />
              */}
              <div>
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/Xk06U78svGI" alt="臨床薬理学者ジム・ライト博士インタビュー" target="_blank" rel="noreferrer noopener">臨床薬理学者ジム・ライト博士インタビュー 32分</a>
                {` `}<Badge variant="danger">新</Badge>
                <br />
                <a href="https://youtu.be/Xk06U78svGI" alt="臨床薬理学者ジム・ライト博士インタビュー" target="_blank" rel="noreferrer noopener"><Image filename="home_03.jpg" alt="臨床薬理学者ジム・ライト博士インタビュー" /></a>
                <span className={Style.fontSmall}>出典：<a href="https://youtu.be/mjRaoplOwUc" target="_blank" rel="noreferrer noopener">Dr. Jim Wright Interview for W-BAD 2020</a>   
                <br />
                字幕・翻訳：<a href="https://benzoinfojapan.org/profile/" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン情報センター</a></span>
              </div>
              <br />
              <div>
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/0lsbiczKfJY" alt="ベンゾジアゼピン『医療災害』" target="_blank" rel="noreferrer noopener">ベンゾジアゼピン『医療災害』</a>
                <br />
                <span className={Style.fontSmall}>2017年1月アイルランド国営放送にて放映</span>
                <a href="https://youtu.be/0lsbiczKfJY" alt="ベンゾジアゼピン『医療災害』" target="_blank" rel="noreferrer noopener"><Image filename="home_04.jpg" alt="ベンゾジアゼピン『医療災害』" /></a>
                <span className={Style.fontSmall}>
                出典：アイルランド放送協会 RTE 1 TV
                <br />
                字幕制作：健康生活研究会有志　監修協力：ベンゾジアゼピン情報センター
                </span>             
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className={Style.h2Size}>その他の動画紹介</h2>
              <div>
              <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/7ul9kCDTUCw" alt="ジョーダン・ピーターソン" target="_blank" rel="noreferrer noopener">臨床心理学者ジョーダン・ピーターソン：自身のベンゾジアゼピン離脱体験を語る 8分</a>
              </div>
              <div>
                  <FontAwesomeIcon icon={faVideo} />
                  <a href="https://youtu.be/c9W_3Qud8Ds" alt="ベンゾジアゼピン離脱の困難性" target="_blank" rel="noreferrer noopener">"スタンフォード大学精神科医 アナ・ランプキー教授インタビュー" 4分</a>
              </div>
              <div>
                  <FontAwesomeIcon icon={faVideo} />
                  <a href="https://youtu.be/JZN5n4HBrcc" alt="ベンゾ被害者の声" target="_blank" rel="noreferrer noopener">"ベンゾ被害者の声" 9分</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className={Style.divLineSpace}></div>

            <h2 className={Style.h2Size}>はじめに</h2>
              睡眠薬、抗不安薬のほとんどはベンゾジゼアピン系薬剤に分類されます。ベンゾジアゼピンは決められた処方用量を守って飲み続けても重篤な傷害を引き起こすことがあります。日本だけでなく世界中で蔓延処方され約10人にひとりが服用し
            <Link to="/doctors-article/11" alt="Treatment of Benzodiazepine Dependence" target="_blank" rel="noreferrer noopener">1ヶ月連用で約半数が身体依存形成されます</Link>。短期間の減薬では離脱症状が拷問と言っていいほどの苦痛で
            最悪自死に至ります。何年服薬していても離脱症状がまったく無い、もしくは軽度で簡単にやめられる方はたくさんいます。しかしそれを前もって知る方法はありません。
            運悪くご自分がそうでない場合は必ず、<br />
            <br />１．<Link to="/patients-article/8">減薬は数年</Link>かけてください！
            <br />２．服薬中でも不安になる必要はまったくありません。いきなりやめないように！<br /> 
            <br /> アルコール依存症や薬物依存とは同じ“依存”という言葉を使用するもののそれらとは異質なものです。
            ベンゾ依存は<span className={Style.fontCrimson}>依存症ではなく「薬物性神経機能傷害」</span>と言えます。
            英語ですと<strong>addiction</strong>（アディクション・精神依存・嗜癖）ではなく<strong>dependency</strong>（身体依存）, <strong>injury</strong>（傷害）です。
            <span className={Style.fontGray}>(<a href="http://www.stuartshipko.com/" target="_blank" rel="noreferrer noopener">スチュアート・シプコ博士</a>による提言：『医療界は遷延性離脱症状のような事態を想定しておらず、
            通常は離脱(Withdrawal)というと数週間で消えていくものと思われてしまう。私は<span className={Style.fontCrimson}>薬物神経毒性症状＜drug neurotoxicity＞</span>と呼んでいる』）</span>
            <br />
            しかしベンゾジアゼピン系薬剤は半世紀前から様々な症状に対して気軽に処方されつづけ、医療界ではその安全な離脱方法について無知であり続けました。
            より詳しくは<Link to="introduction">ベンゾジアゼピン概略</Link>のページをご覧ください。
            <br />
            <br />このサイトはわたしの実体験と米国NPO団体<a href="https://www.benzoinfo.com">Benzodiazepine Information Coallition</a>の記事および<a href="http://www.benzobuddies.org/forum/index.php">ベンゾバディ</a>という世界最大の
              ベンゾ情報フォーラムの投稿を中心に情報提供を目的に作成しました。引用・転載フリーです。必ず「出典：<a href="https://benzoinfojapan.org">ベンゾ情報センター</a>」を追記してください（BICの記事には著作権があります。許可をいただいて翻訳しています）。

      <div className={Style.divLineSpace}></div>

          <Accordion defaultActiveKey="0">
          
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                利用規約
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              当サイトは、ベンゾジアゼピン系薬に関する情報を必要とされている方々（以下「利用者」）が使用することを目的とします。
                <br />当サイトは、特定の有志（以下「サイト管理者」）によって設立・運営されております。特定の団体が運営するものではありません。
                <br />利用者の利便性のためにリンクされた他のサイトにアクセスする場合、それらのサイトは本サイトとは全く独立したものであり、本サイトはそれらのサイトの内容についていかなる権限ももちません。
                <br />当サイトの情報を利用しようとする利用者は、サイト内のいかなる記載内容を参考にする場合においても、それらに依存することなく、行動を起こす前に、記載内容に関連する国や自治体、医療機関、サービス提供者、製造者、等に確認を取った上で、自己責任で行ってください。
                <br />当サイトは、質問に対して必ずしも回答を保証しません。
                <span className={Style.fontCrimson}>当サイトの情報について情報の正確性、完全性について明示的か黙示的かを問わず、サイト管理者はいかなる責任も負いません。
                当サイトを利用される方は、自己の責任において利用することに同意されたものとし、当サイトの情報の利用により生じる損害についてサイト管理者はあらゆる責任を放棄します。</span>                               
              </Card.Body>
            </Accordion.Collapse>
          
          </Accordion>
          <Accordion>
          
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                医療免責事項
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              当サイトは、ベンゾ離脱症状の病状と減薬についての一般的な情報を発信しています。あくまで情報であってアドバイスではありません。
              <br />当サイトの医療情報は明示または黙示を問わずいかなる保証もいたしません。「現状のまま」提供するものます。
              <br />当サイトは、以下のことを保証しません。<br />
                ・当サイトの医療情報が常に入手可能である<br />
                ・当サイトの医療情報が完全に正確である。または最新である。<br />
              <br />利用者は、主治医または他の専門医療提供者からの医療アドバイスに代わるものとして当サイト上の情報に頼ることはできません。医学的事項について具体的な質問がある場合は、医師または他の専門医療提供者に相談してください。
              <br />何らかの症状に苦しんでいる場合は、直ちに医師の診察を受けてください。
              <br />当サイトの医療情報をもって医学的助言を求めることを遅らせたり、医学的助言を無視したり、あるいは治療を中止しないようにしてください。 
              </Card.Body>
            </Accordion.Collapse>
          
          </Accordion>
          
        <span className={Style.fontCrimson}>※ 当サイトは精神医療や薬物療法を否定するいかなる団体・個人とも関係を持ちません。</span>
        
    </Container>

    <div className={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)


export const query = graphql`
 {
    allMicrocmsArticles(
      limit: 4, sort: {order: DESC, fields: createdAt}
   ) {
     edges {
       node {
         createdAt
         id
         num
         title
         category {
          id
          name
        }
       }
     }
   }
 }
`

export default IndexPage
