import React from "react";

interface NextStepProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  buttons?: String[];
}

const NextStep: React.FC<NextStepProps> = ({
  title,
  description,
  imageUrl,
  buttons,
}) => {
  return (
    <section
      data-track-area="004|web-section-newsletter-signup"
      className="style-552"
    >
      <div className="style-553">
        <div className="style-554">
          <div className="style-555">
            <div className="style-556">
              <div className="style-557">
                <h2
                  aria-label="Be the first Know about Polestar's next steps"
                  data-testid="label-heading"
                  className="style-558"
                >
                  <span aria-hidden="true" className="style-559">
                    {title}
                  </span>
                  <br className="style-560" />
                  <span aria-hidden="true" className="style-561">
                    {" "}
                    {description}
                  </span>
                </h2>
                <div className="style-562" />
                {buttons?.map((btn: any) => {
                  return (
                    <a
                      data-testid="not-gatsby-link"
                      role="link"
                      className="style-563"
                      href="/us/sign-up-newsletter/"
                    >
                      <span className="style-564">
                        <span className="style-565">{btn?.label}</span>
                        <span
                          aria-hidden="true"
                          data-type="icon"
                          className="style-566"
                        >
                          <div className="style-567">
                            <div className="style-568">
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                height="1em"
                                role="img"
                                className="style-569"
                              >
                                <path
                                  d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                  fill="currentColor"
                                  className="style-570"
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
            <div className="style-571">
              <div className="style-572">
                <div className="style-573">
                  <picture className="style-574">
                    <source
                      srcSet="https://www.polestar.com/dato-assets/11286/1699869926-newsletter-sign-up-image_d.png?q=60&dpr=1&w=1920 1x, https://www.polestar.com/dato-assets/11286/1699869926-newsletter-sign-up-image_d.png?q=35&dpr=2&w=1920 2x"
                      media="(min-width: 1248px)"
                      className="style-575"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/11286/1699869926-newsletter-sign-up-image_d.png?q=60&dpr=1&w=1248 1x, https://www.polestar.com/dato-assets/11286/1699869926-newsletter-sign-up-image_d.png?q=35&dpr=2&w=1248 2x"
                      media="(min-width: 960px)"
                      className="style-576"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/11286/1699869926-newsletter-sign-up-image_d.png?q=60&dpr=1&w=1024 1x, https://www.polestar.com/dato-assets/11286/1699869926-newsletter-sign-up-image_d.png?q=35&dpr=2&w=1024 2x"
                      media="(min-width: 768px)"
                      className="style-577"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/11286/1700034830-newsletter-sign-up-image_m.png?q=60&dpr=1&h=900 1x, https://www.polestar.com/dato-assets/11286/1700034830-newsletter-sign-up-image_m.png?q=35&dpr=2&h=900 2x"
                      media="(min-width: 0px)"
                      className="style-578"
                    />
                    <img
                      draggable="false"
                      className="style-579"
                      src="https://www.polestar.com/dato-assets/11286/1700034830-newsletter-sign-up-image_m.png?h=900"
                      alt="Polestar 4 covered"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
