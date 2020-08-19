import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
// import "./services.scss"
import { Link } from "gatsby"
const Contentful = require("contentful")
const Service = () => {
  const [post, setPost] = useState({})
  const id = "53qqQa6oxJhqdhmd1A2shx"
  useEffect(() => {
    const client = Contentful.createClient({
      space: "xxnh1wfwedpb",
      accessToken: "2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E",
    })
    client.getEntry(id).then(res => {
      console.log(res)
      setPost({
        ...res.fields,
        date: new Date(res.sys.createdAt).toDateString(),
      })
      const htmlString = documentToHtmlString(res.fields.content)
      if (typeof document !== "undefined") {
        document.querySelector(".html-content").innerHTML = htmlString
      }
    })
  }, [])
  return (
    <Layout>
      <Container className="service-container">
        <h1>运营贷款</h1>
        <div className="html-content"></div>
        <Row className="nav-links">
          <Col md="6" sm="6" xs="6" style={{ fontSize: 32 }}>
            <Link to="/loan/business">◀ 商业贷款 </Link>
          </Col>
          <Col
            md="6"
            sm="6"
            xs="6"
            style={{ textAlign: "right", fontSize: 32 }}
          >
            <a href={post.url ? post.url : "#"}>博客 ▶</a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Service
