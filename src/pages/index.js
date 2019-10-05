import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Index({ data }) {

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
    </Layout>
  );
}

export default Index;
