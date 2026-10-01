import React from "react";

function WorkSection({
  eyebrow = "Selected work · 2024–25",
  title = (
    <>
      Twelve frames
      <br />
      from a working year.
    </>
  ),
  description = "We chose these because each one taught us something new.",
  projects = [],
  buttonText = "All projects · 142",
}) {
  return (
    <section>
      <div className="container container--wide">

        <div className="section-head">
          <div>
            <span className="eyebrow">
              <span className="dot" aria-hidden="true"></span>
              {eyebrow}
            </span>

            <h2>{title}</h2>
          </div>

          <p className="lede">
            {description}
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              className={`work-item work-item--${project.size} reveal`}
              href={project.link || "/work"}
            >
              <div className="wm">

                <img
                  src={project.image}
                  alt={project.alt || project.title}
                />

                <span className="wm-pill">
                  {project.type}
                </span>

                <span className="wm-arrow" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

              </div>

              <div className="work-meta">
                <div>
                  <div className="wm-title">
                    {project.title}
                  </div>

                  <div className="wm-cap">
                    {project.meta}
                  </div>
                </div>

                <div className="wm-cap">
                  {project.number}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          className="center-row"
          style={{
            marginTop: "var(--space-7)",
            justifyContent: "center",
          }}
        >
          <a
            className="btn btn--ghost btn--lg"
            href="/work"
          >
            {buttonText}

            <svg
              className="arrow"
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
            >
              <path
                d="M1 5h12m0 0L9 1m4 4L9 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>

      <div className="container container--narrow">
    <div className="chapter-grid">
      <div>
        <span className="label">Chapter 01</span>

        <h2>
          A studio that
          <br />
          treats each
          <br />
          frame as work.
        </h2>
      </div>

      <div className="chapter-body">
        <p>
          Brivon was founded in 2014 by two photographers and a producer who
          had spent four years freelancing across Paris, Stockholm and Brooklyn,
          and who were tired of how often a great brief was reduced to
          whichever frame the agency could approve fastest. The studio is
          small on purpose — a working group of seven people, one in-house
          retoucher, two long-time producers, and a roster of fifteen freelance
          assistants we trust enough to recommend without flinching.
        </p>

        <blockquote className="pull-quote">
          We work slower than the rate card. The output looks faster than the
          rate card.
          <cite>— Mira Halden, founder</cite>
        </blockquote>

        <p>
          What that means in practice: we do fewer projects per quarter than
          most studios our size, we keep the same producer on a brand from the
          first call to the final delivery, and we ship a colour-managed
          gallery the day after the shoot — not the week after. Clients have
          called this "expensive when you book it, cheap when you ship it."
          That is, on reflection, exactly the right description.
        </p>
      </div>
    </div>
  </div>
    </section>
  );
}

export default WorkSection;
