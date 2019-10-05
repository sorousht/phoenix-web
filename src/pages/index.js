import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TagContainer from "../components/Tag/TagContainer";
import SocialList from "../components/Social/SocialList";
import socials from "../content/socials";

function Index() {

  return (
    <Layout headerClass="relative bg-white">
      <SEO title="Home" />
      <h1 className="font-serif text-3xl">
        Soroush Torkzadeh
      </h1>
      <TagContainer tags={[
        "JavaScript",
        "CSS",
        "HTML",
      ]} />
      <SocialList
        socials={socials}
      />
    </Layout>
  );
}

export default Index;
