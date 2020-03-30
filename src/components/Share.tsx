import React from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share"

import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    margin-left: 8px;
  }
`

const TITLE = "Mon Confinement"

const QUOTE =
  "Quelques ressources personnalisées, bien utiles pour tenir bon face au confinement !"

const URL = "https://www.mon-confinement.com"

export default function Share() {
  return (
    <Container>
      Partager :
      <FacebookShareButton url={URL} quote={QUOTE}>
        <FacebookIcon />
      </FacebookShareButton>
      <LinkedinShareButton
        url={URL}
        title={TITLE}
        summary={QUOTE}
        source={TITLE}
      >
        <LinkedinIcon />
      </LinkedinShareButton>
      <TwitterShareButton url={URL} title={QUOTE}>
        <TwitterIcon />
      </TwitterShareButton>
      <WhatsappShareButton url={URL} title={TITLE}>
        <WhatsappIcon />
      </WhatsappShareButton>
    </Container>
  )
}
