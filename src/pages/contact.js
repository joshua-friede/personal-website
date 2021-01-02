import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
        <div>
        <h1>Email me at the address below</h1>
        <p>
            <a href="mailto:me@example.com">me@example.com</a>
        </p>
        </div>
    </Layout>
  )
}