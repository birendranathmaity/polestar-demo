import React from "react";

interface DataTrackAreaProps {
  trackArea?: string; // Value for the data-track-area attribute
  className?: string; // Optional className for styling
  children?: React.ReactNode; // Content to render inside the component
}

const DataTrackArea: React.FC<DataTrackAreaProps> = ({
  trackArea,
  className,
  children,
}) => {
  return (
    <section data-track-area="001|web-section-list" className="style-356">
    <div className="style-357">
      <div className="style-358">
        <div className="style-359">
          <div className="style-360">
            <div className="style-361" />
            <div className="style-362" />
            <div className="style-363">
              <a className="style-364" href="/us/spaces/">
                <span className="style-365">
                  <div className="style-366">
                    <div className="style-367">
                      <div className="style-368">
                        <h3
                          aria-label=" Visit a Polestar location"
                          data-testid="label-heading"
                          className="style-369"
                        >
                          <span aria-hidden="true" className="style-370">
                            {" "}
                            Visit a Polestar location
                          </span>
                        </h3>
                        <div className="style-371">
                          <div className="style-372" />
                          <div className="style-373">
                            <span data-focus-spacing={4} className="style-374">
                              <span className="style-375">
                                <span className="style-376">
                                  See all locations in the United States
                                </span>
                                <span
                                  aria-hidden="true"
                                  data-type="icon"
                                  className="style-377"
                                >
                                  <div className="style-378">
                                    <div className="style-379">
                                      <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        height="1em"
                                        role="img"
                                        className="style-380"
                                      >
                                        <path
                                          d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                          fill="currentColor"
                                          className="style-381"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </a>
            </div>
          </div>
          <div className="style-382">
            <div className="style-383" />
            <div className="style-384" />
            <div className="style-385">
              <a
                href="/us/preowned-cars/search-result/polestar-2/"
                className="style-386"
              >
                <div className="style-387">
                  <div className="style-388">
                    <div className="style-389">
                      <h3
                        aria-label=" Explore Certified by Polestar vehicles"
                        data-testid="label-heading"
                        className="style-390"
                      >
                        <span aria-hidden="true" className="style-391">
                          {" "}
                          Explore Certified by Polestar vehicles
                        </span>
                      </h3>
                      <div className="style-392">
                        <div className="style-393" />
                        <div className="style-394">
                          <span data-focus-spacing={4} className="style-395">
                            <span className="style-396">
                              <span className="style-397">View inventory</span>
                              <span
                                aria-hidden="true"
                                data-type="icon"
                                className="style-398"
                              >
                                <div className="style-399">
                                  <div className="style-400">
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      height="1em"
                                      role="img"
                                      className="style-401"
                                    >
                                      <path
                                        d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                        fill="currentColor"
                                        className="style-402"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="style-403">
            <div className="style-404" />
            <div className="style-405" />
            <div className="style-406">
              <a href="/us/fleet/" className="style-407">
                <div className="style-408">
                  <div className="style-409">
                    <div className="style-410">
                      <h3
                        aria-label=" The benefits of an all-electric fleet"
                        data-testid="label-heading"
                        className="style-411"
                      >
                        <span aria-hidden="true" className="style-412">
                          {" "}
                          The benefits of an all-electric fleet
                        </span>
                      </h3>
                      <div className="style-413">
                        <div className="style-414" />
                        <div className="style-415">
                          <span data-focus-spacing={4} className="style-416">
                            <span className="style-417">
                              <span className="style-418">
                                Explore Fleet and business
                              </span>
                              <span
                                aria-hidden="true"
                                data-type="icon"
                                className="style-419"
                              >
                                <div className="style-420">
                                  <div className="style-421">
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      height="1em"
                                      role="img"
                                      className="style-422"
                                    >
                                      <path
                                        d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                        fill="currentColor"
                                        className="style-423"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default DataTrackArea;
