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
                <Row>
                  <Col>
                    <Badge variant="danger">新</Badge>
                    <a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="blank" rel="noreferrer noopener">
                      『ベンゾジアゼピン薬の安全な離脱方法』（Kindle電子書籍）
                    </a>
                    <span className={Style.fontSmall}>を上梓しました。</span>
                    <br />
                    <span className={Style.fontSmall}>
                    患者のみなさま、ご家族、そして医師や薬剤師など医療専門家の方々も読者対象にしております。
                    </span>
                  </Col>
                  <Col>
                    <a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="blank" rel="noreferrer noopener">
                      <img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B0925VD9W1&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=kokkahasan-22" />
                    </a>
                  </Col> 
                </Row>
                <br />
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
              <div>
                <FontAwesomeIcon icon={faVideo} />
                <a href="https://youtu.be/7rNMaxJDRqM" alt="リサ・リンのこれが人生－ベンゾクライシス" target="_blank" rel="noreferrer noopener">リサ・リンのこれが人生－ベンゾクライシス
                <br />
                クリシーの場合 vol.01 ~ 04</a><span className={Style.fontBlue}> (クリシーは液体タイトレーションによりリボトリールから離脱完了しています)</span>
                <br />
                <a href="https://youtu.be/7rNMaxJDRqM" alt="リサ・リンのこれが人生－ベンゾクライシス" target="_blank" rel="noreferrer noopener"><Image filename="home_02.png" alt="臨床薬理学者ジム・ライト博士インタビュー" /></a>
                <span className={Style.fontSmall}>出典：<a href="https://edition.cnn.com/profiles/lisa-ling-profile" target="_blank" rel="noreferrer noopener">CNN, A Warner Media Company</a>   
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
            ベンゾジゼアピン薬とは主に不眠や不安に処方される睡眠薬・抗不安薬のことです。<span className={Style.fontCrimson}>日本では約700万人が服用</span>し続けており、
            処方用量を守って飲み続けても重篤な依存性を引き起こす場合があります。
            その状態で一気中止／急減薬すると離脱症状が拷問と言っていいほどの苦痛になり、<a href="https://youtu.be/CHv7xnhbSyg" alt="ベンゾ被害者の声" target="_blank" rel="noreferrer noopener">最悪自死に至る</a>こともあります。
            何年服薬していても離脱症状がまったく無いか、あるいは軽度で簡単にやめられる方はたくさんいます。
            しかし<span className={Style.fontCrimson}>重度依存状態かそうでないかを前もって知る方法はありません</span>。
            したがって、<br />
            <br />１．まず、服薬中でも不安になる必要はまったくありません。<strong>いきなりやめないように！</strong>必要ならそのまま飲み続けて下さい
            <br />２．離脱症状を発症した場合は、減薬を一時停止するかベンゾジアゼピンを以前の投与量に上げ、容態が安定してから徐々に減薬してください
            （<Link to="/doctors-article/23">『米FDA ー ベンゾジアゼピン薬のブラックボックス警告更新要請』</Link>）
            <br /> 
            <h2 className={Style.h2Size}>ベンゾジアゼピン依存について</h2>
            ベンゾ依存はアルコール依存症や薬物依存症と異なり<span className={Style.fontCrimson}>「薬物性神経機能傷害」</span>と言えます。
            英語ですと<strong>addiction</strong>（アディクション・精神依存）ではなく<strong>physical dependence</strong>（身体依存）であり、米FDAは<strong>injury</strong>（傷害）としています
            （<a href="https://www.benzoinfo.com/wp-content/uploads/2020/11/Benzodiazepine-Information-Coalition-FOIA-FDA-.pdf" target="_blank" rel="noreferrer noopener">『ベンゾジアゼピン長期使用に関する疫学研究レビュー』</a>）。
            <br />
            しかしベンゾジアゼピン系薬剤はそのオールマイティな効能もあり、半世紀にわたり<Link to="introduction">不眠や不安だけでなく
            肩こりや胃痛など様々な身体症状に対して気軽に処方され</Link>つづけ、医療界ではその安全な離脱方法について無知であり続けました。つまり、精神医療に限った話ではありません。
            <br />
            <br />このサイトの記事について引用・転載フリーです。必ず「出典：<a href="https://benzoinfojapan.org">ベンゾ情報センター</a>」を追記してください。

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
