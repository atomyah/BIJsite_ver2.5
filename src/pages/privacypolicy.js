import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import { Container } from 'react-bootstrap'

const PrivacyPolicy = () => (

    <Layout>
      <SEO title="プライバシーポリシー" />
      <Container fluid="md">
      <h1 style={{fontSize: `1.25rem`}}>プライバシーポリシー</h1>
        <p>
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
        この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。
        </p>
      </Container>
</Layout>
)

export default PrivacyPolicy


