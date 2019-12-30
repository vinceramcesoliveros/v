import React from "react";
import { Layout } from "../components/index";

export default class Project extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <h1>Projects</h1>
        <p></p>
      </Layout>
    );
  }
}
