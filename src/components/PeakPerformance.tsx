import React from "react";
interface PeakPerformanceProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  linkText?: string;
  linkUrl?: string;
}

const PeakPerformance: React.FC<PeakPerformanceProps> = ({
  title,
  description,
  imageUrl,
  linkText,
  linkUrl,
}) => {
  return (
    <section
                  data-track-area="001|web-section-one-image"
                  className="style-338"
                >
                  <div className="style-339">
                    <div className="style-340">
                      <div className="style-341">
                        <div className="style-342">
                          <div className="style-343">
                            <div className="style-344">
                              <div className="style-345">
                                <div className="style-346" />
                              </div>
                              <picture>
                                <img
                                className="style-img"
                                  src="https://www.polestar.com/dato-assets/11286/1738579260-polestar-home-fat-pt2-2025.jpg?w=620"
                                  alt=""
                                  style={{ opacity: 1 }}
                                />
                              </picture>
                              <div className="style-347" />
                            </div>
                          </div>
                        </div>
                        <div className="style-348" />
                        <div className="style-349">
                          <h2
                            aria-label=" Peak performance at the FAT Ice race"
                            data-testid="label-heading"
                            className="style-350"
                          >
                            <span aria-hidden="true" className="style-351">
                              {" "}
                              Peak performance at the FAT Ice race
                            </span>
                          </h2>
                          <div className="style-352" />
                          <p className="style-353">
                            Atop a frozen airfield, some 800 meters above sea
                            level, a special collection of one-off Polestars
                            displayed their motorsport credentials and
                            celebrated car culture on the snow and ice.
                          </p>
                          <a
                            data-testid="not-gatsby-link"
                            role="link"
                            className="style-354"
                            href="/global/news/fat-ice-race-2025/"
                          >
                            <span className="style-355">
                              <span className="style-356">Read more</span>
                              <span
                                aria-hidden="true"
                                data-type="icon"
                                className="style-357"
                              >
                                <div className="style-358">
                                  <div className="style-359">
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      height="1em"
                                      role="img"
                                      className="style-360"
                                    >
                                      <path
                                        d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                        fill="currentColor"
                                        className="style-361"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
  );
};

export default PeakPerformance;
