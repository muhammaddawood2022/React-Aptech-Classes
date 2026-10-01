import React from "react";
import Banner from "../components/Banner";
import WorkSection from "../components/WorkSection";
function Home() {
  return (
    <>
      <Banner
        title="Welcome to Brivon"
        description="We create meaningful digital experiences."
        image="/assets/img/hero-portrait.jpg"
      />

      {/* Home ka baqi content */}
      <WorkSection
  eyebrow="Selected work · 2024–25"
  title={
    <>
      Twelve frames
      <br />
      from a working year.
    </>
  }
  description="We chose these because each one taught us something new."
  projects={[
    {
      image: "/assets/img/work-atrium.jpg",
      type: "Editorial",
      title: "Atrium · SS25 Lookbook",
      meta: "36 frames · 4 days · Lisbon",
      number: "No. 142",
      size: "xl",
    },
    {
      image: "/assets/img/work-still-1.jpg",
      type: "Still",
      title: "Maison Stól",
      meta: "Catalogue · 18 frames",
      number: "No. 139",
      size: "sm",
    },
  ]}
/>

    </>
  );
}

export default Home;
