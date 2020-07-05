import { Link } from "gatsby"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'

import Twitter_Logo_Blue from '../images/Twitter_Logo_Blue.svg'
import Facebook_Logo from '../images/icons8-facebook.svg'

const Footer = () => (
    <>
    <style type="text/css">
    {`
    .bg-snow {
      background-color: #eeeeee;
      color: black;
      padding: 20;
    }
    .box img {
      _vertical-align: middle; /* 画像を垂直に */
    `}
    </style>
  <footer className="bg-snow">
    <Container style={{ paddingTop: `1.2rem`, paddingBottom: `0rem` }}>
      <Navbar expand="md">
          <Nav className="ml-auto">
            {/* ロードが遅くなるのでフォローボタンの埋め込みはやめた
            <div className="twitter">
　              <a href="https://twitter.com/benzoinfojapan?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="true" data-lang="ja"></a>
                {<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>}
            </div>
            */}
              <div className="box">
            　<img src={Twitter_Logo_Blue} width={28} alt={'Twitter'} />
              <a href="https://twitter.com/benzoinfojapan" target="_blank" rel="noreferrer noopener">@Twitter</a>
              　
              <img src={Facebook_Logo} width={22} alt={'Facebook'} />
              <a href="https://www.facebook.com/benzoinfo" target="_blank" rel="noreferrer noopener">facebook</a>
              </div>
          </Nav>
      </Navbar>
      <Navbar>
        <Nav className="ml-auto">
          <div className="box">
            <Link to="/contact">お問い合わせフォーム（Cotact Form）</Link>
          </div>
        </Nav>
      </Navbar>
      <Navbar>
        <Nav className="ml-auto">
          <div className="box">
            <Link to="/privacypolicy">プライバシーポリシー</Link>
          </div>
        </Nav>
      </Navbar>
      <Navbar>      
          <Nav className="ml-auto">
                © {new Date().getFullYear()}, ベンゾジアゼピン情報センター 
          </Nav>
      </Navbar>
    </Container>
  </footer>
  </>
)


export default Footer
