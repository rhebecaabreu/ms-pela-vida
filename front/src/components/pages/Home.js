import Hero from "components/molecules/Hero";
import React from "react";
import Banner from "../../assets/campaign_banner.png";
import FooterBanner from "../../assets/footer_banner.png";
import Section from "components/organisms/Section";
import BannerArea from "components/molecules/BannerArea";

const Home = () => {
  return (
    <>
      <Hero image={Banner} />
      <Section>
        <p>noticias</p>
      </Section>
      <Section>
        <p>noticias</p>
      </Section>
      <Section>
        <BannerArea image={FooterBanner} />
      </Section>
    </>
  );
};

export default Home;
