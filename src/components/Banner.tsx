import React from "react";
interface BannerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  color?: string;
  buttons?: String[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  description,
  imageUrl,
  color = "#000",
  buttons = [],
}) => {
  return (
    <section className="style-314" data-track-area="web-www-hero-home-primary">
      <div className="style-315">
        <picture className="style-316">
          <img
            draggable="false"
            loading="eager"
            className="style-321"
            src={imageUrl}
            alt="White Polestar 3 driving on a bridge dark misty skies above"
          />
        </picture>
      </div>
      <div className="style-322">
        <div className="style-323">
          <div className="style-324">
            <div className="style-325">
              <div className="style-326">
                <div className="style-327">
                  <div className="style-328" />
                  <h1 className="style-329">{title}</h1>
                  {/* <h2 className="style-330">
                    Lease with $15,000 Polestar Clean Vehicle Incentive
                  </h2> */}
                  <div className="style-331" />
                  <p className="style-332">{description}</p>
                  <div className="style-333" />
                </div>
              </div>
              <div className="style-334">
                <div className="style-335">
                  <div className="style-336">
                    <div className="style-337">
                      {buttons.map((btn: any,key) => {
                        return (
                          <a
                            data-testid="not-gatsby-link"
                            role="link"
                            className="style-347"
                            href={btn?.url}
                            key={key}
                          >
                            <span className="style-348">
                              <span className="style-349">{btn?.label}</span>
                              <span
                                aria-hidden="true"
                                data-type="icon"
                                className="style-350"
                              >
                                <div className="style-351">
                                  <div className="style-352">
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      height="1em"
                                      role="img"
                                      className="style-353"
                                    >
                                      <path
                                        d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                        fill="currentColor"
                                        className="style-354"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="style-355" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
