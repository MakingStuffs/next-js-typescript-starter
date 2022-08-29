import React from "react";
import type { NextPage } from "next";
import pages from "config/data/page.data";
import Meta from "components/Meta/Meta.component";

const Home: NextPage = () => {
  return (
    <div>
      <Meta
        title={pages.homePage.title}
        description={pages.homePage.description}
        favicon={pages.homePage.favicon}
        url={pages.homePage.slug}
      />
      <main />
      <footer />
    </div>
  );
};

export default Home;
