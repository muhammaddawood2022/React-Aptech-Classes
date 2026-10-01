import React from "react";
import Banner from "../components/Banner";
import WorkSection from "../components/WorkSection";
function Home() {
  return (
    <>
      <Banner
        title="Eight people,
two rooms,
one rule we keep."
        description="Brivon is a small commercial photography studio — eight people on staff, two rooms (Brooklyn and Berlin), one in-house retoucher who has worked the entire archive since 2017. We work slower than the average rate card and we keep the same producer on a brand from first call to final delivery."
        image="/assets/img/journal-colour.jpg"
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
