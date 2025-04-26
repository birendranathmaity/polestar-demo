import React from "react";
interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  color?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, imageUrl,color='#000' }) => {
  return (
    <div className="style-273">
      <section
        className="style-274"
        data-track-area="web-www-hero-home-primary"
      >
        <div className="style-275">
          <picture className="style-276">
           
            <img
              draggable="false"
              loading="eager"
              className="style-281"
              src={imageUrl}
              alt={title}
            />
          </picture>
        </div>
        <div className="style-282">
          <div className="style-283">
            <div className="style-284">
              <div className="style-285">
                <div className="style-286">
                  <div className="style-287">
                    <div className="style-288" />
                    <h2 className="style-289" style={{color}}>{title}</h2>
                    <h2 className="style-290"  style={{color}}>{description}</h2>
                    <div className="style-291" />
                  </div>
                </div>
                <div className="style-292">
                  <div className="style-293">
                    <div className="style-294">
                      <div className="style-295">
                        <a
                          data-testid="not-gatsby-link"
                          role="link"
                          className="style-296"
                          href="/global/polestar-2/"
                          style={{border:`1px solid ${color}`}}
                        >
                          <span className="style-297">
                            <span className="style-298" style={{color}}>Learn more</span>
                            <span
                              aria-hidden="true"
                              data-type="icon"
                              className="style-299"
                            >
                              <div className="style-300">
                                <div className="style-301">
                                  <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    height="1em"
                                    role="img"
                                    className="style-302"
                                  >
                                    <path
                                      d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                      fill="currentColor"
                                      className="style-303"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="style-304" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
