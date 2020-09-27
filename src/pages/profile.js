import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import ProfileImg00 from "../images/profile_2018-01.png"
import ProfileImg01 from "../images/profile_200x170.png"
import ProfileImg02 from "../images/profile_02.png"

import { Container, Image, ListGroup, Figure } from 'react-bootstrap'
import Style from './profile.module.css'

const ProfilePage = () => (

    <Layout>
      <SEO title="ベンゾジアゼピン情報センター" />
      <Container fluid="md">
      <h1 style={{fontSize: `1.25rem`}}>管理人プロフィール</h1>
        <p>
        非ベンゾのアモバン（ゾピクロン）ユーザーであった。
        2015年後半体調悪化。総合診療科などの診察やさまざまな検査でまったく異常なしであったため、
        食事内容を立て直し上咽頭やお酒などリスク因子について調査しひとつひとつ排除していく。
        断酒によってある程度体調改善。

        また、その過程でベンゾの危険性と、
        非ベンゾもベンゾファミリーのひとつであることを知り減薬を決意。
        減薬過程で中途半端な知識から最強ベンゾのひとつフルニトラゼパム（サイレース・ロヒプノール）に自己判断で置換（最大の失敗）。
        フルニトラゼパムを主治医の指示のもと1か月で減薬、
        生き地獄のような離脱症状を経験する。 
        その後再服薬および増薬（ジアゼパム10mg）が功を奏し”ある程度”安定化。
        同じ主治医の協力のもとマイクロテーパリングにて減薬を始める（2017年2月）。
        フルニトラゼパムの減薬は終了（2020年1月）。
        現在ジアゼパムを減薬中（2020年9月現在0.8mg残）。
        </p>
        <div>
        <ListGroup horizontal>
            <Link to="/patients-article/8"><ListGroup.Item>管理人のベンゾ減薬記録</ListGroup.Item></Link>
            <Link to="/medias-article/11"><ListGroup.Item>管理人の離脱症状詳細</ListGroup.Item></Link>
        </ListGroup>
        </div>
        <p></p>
        <Figure style={{margin:`auto`, padding:`10px`}}>
            <Figure.Image
            width={200}
            src={ProfileImg00} roundedCircle 
            /> 
            <Figure.Caption>
                2018年1月2日撮影。まだジアゼパム加薬前の不安定な状態、脳鳴りが激しい頃
                （「<Link to="/medias-article/11">管理人の経験したベンゾ離脱症状</Link>」の脳鳴り参照）。
                見た目にはただのやつれたオジサンだが脳内はまだ地獄。この3日後ジアゼパム10mg追加し
                2日～1週間程度である程度症状安定。
            </Figure.Caption>
        </Figure>
        <Figure style={{margin:`auto`, padding:`10px`}}>
            <Figure.Image
            width={200}
            src={ProfileImg01} roundedCircle 
            /> 
            <Figure.Caption>
                2020年5月10日撮影。フルニトラゼパム断薬後3か月。5月の初夏の暑さがこたえる。まだまだ倦怠感あり。
                週に1日～2日程度は一日中横にならざるをえない。
            </Figure.Caption>
        </Figure>
        <Figure style={{margin:`auto`, padding:`10px`}}>
            <Figure.Image
            width={200}
            src={ProfileImg02} roundedCircle 
            /> 
            <Figure.Caption>
                2020年7月16日撮影。1日横になる日はなくなった。
                睡眠補助剤としてのミルタザピンを3~4mgから2mg~3mgに減らしても寝れてくる。
            </Figure.Caption>
        </Figure>
        
      </Container>
</Layout>
)

export default ProfilePage


