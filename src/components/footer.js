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
    }
    /* ------------------------------------------------ */
    /* 7.フッターナビゲーション
    /* ------------------------------------------------ */
  
    /* メニューを縦並びにする */
    #fNav ul {
      display: block;
      width: 90%;
    }
  
    /* 各メニュー要素の装飾 */
    #fNav li {
      background-color: #ffffff;
      margin-bottom: 1px;
      border-right: none;
      position: relative;
      padding: 0;
    }
  
    /* 各メニューのリンク領域を枠いっぱいに広げて上下中央寄せ */
    #fNav a {
      color: #2AA8E5;
      display: block;
      padding: 10px;
    }
    `}
    </style>
  <footer className="bg-snow">
    <Container style={{ paddingTop: `1.2rem`, paddingBottom: `0rem` }}>
      <Navbar expand="md" id="fNav">
        <ul>
          <li>
              <a href="https://twitter.com/benzoinfojapan" target="_blank" rel="noreferrer noopener">Twitter</a>
          </li>
          <li>      
              <a href="https://www.facebook.com/benzoinfo" target="_blank" rel="noreferrer noopener">facebook</a>
          </li>
          <li><Link to="/contact">お問い合わせフォーム（Cotact Form）</Link></li>
          <li><Link to="/privacypolicy">プライバシーポリシー</Link></li>
          <li><Link to="/profile">管理人プロフィール</Link></li>
          © {new Date().getFullYear()}, ベンゾジアゼピン情報センター
        </ul>
      </Navbar>
    </Container>
  </footer>
  </>
)


export default Footer
