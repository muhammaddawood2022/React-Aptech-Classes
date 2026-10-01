import React from "react";
import Banner from "../components/Banner";
import WorkSection from "../components/WorkSection";

function Work() {
  return (
    <>
      <Banner
        title={
          <>
            Every frame
            <br />
            we kept,
            <br />
            <span className="lime">
              sorted by year and brief.
            </span>
          </>
        }
        description="The full Brivon archive is not online — clients keep what is delivered. What follows is a tight working selection: twelve featured projects, then a paginated archive of every campaign we have shipped since the studio opened in October 2014."
        image="/assets/img/hero-archive.jpg"
        imageAlt="Brivon selected work"
      />
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

export default Work;
