import React, { useEffect, useRef, useState } from "react";
import { GET_CARDS, graphqlRequest } from "../service";
interface CardProps {
  title?: string;
  imageUrl?: string;
  description?: string;
  color?: string; // Optional background color for the card
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, color }) => {
  const isMounted = useRef(false);
  const [cards, setCards] = useState<any>([]);
  const fetchCards = async () => {
    try {
      const data = await graphqlRequest(GET_CARDS);
      const { sections = [] } = data?.data?.page;
      let items: any = [];
      sections.map((item: any) => {
        if (item?.title)
          items.push({
            title: item?.title,
            label: item?.label,
            imageUrl: item?.image?.url,
            description: item?.subtitle,
            color: "#FFF",
          });
      });
      setCards(items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchCards();
    }
  }, []);
  return (
    <section data-track-area="003|web-section-image-card" className="style-486">
      <div className="style-487">
        <div className="style-488">
          <div className="style-489">
            {cards.map((card: any, index: React.Key | null | undefined) => (
              <div className="style-490" key={index}>
                <div className="style-491">
                  <a href="#" className="style-492">
                    <div className="style-493">
                      <div className="style-494">
                        <div className="style-495">
                          <div className="style-496">
                            <div className="style-497">
                              <picture className="style-498">
                                <img
                                  draggable="false"
                                  className="style-503"
                                  src={card?.imageUrl}
                                  alt=""
                                />
                              </picture>
                            </div>
                          </div>
                        </div>
                        <div className="style-504">
                          <div className="style-505">
                            <h2
                              aria-label="Polestar 3: Assembled in the USA "
                              data-testid="label-heading"
                              className="style-506"
                            >
                              <span aria-hidden="true" className="style-507">
                                {card.title}
                              </span>
                              <br className="style-508" />
                              <span
                                aria-hidden="true"
                                className="style-509"
                              ></span>
                            </h2>
                            <div className="style-510" />
                            <p className="style-511">{card?.description}</p>
                          {  card?.description && <div className="style-512" />}
                            <button
                              data-focus-spacing={4}
                              className="style-513"
                            >
                              <span className="style-514">
                                <span className="style-515">{card?.label}</span>
                                <span
                                  aria-hidden="true"
                                  data-type="icon"
                                  className="style-516"
                                >
                                  <div className="style-517">
                                    <div className="style-518">
                                      <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        height="1em"
                                        role="img"
                                        className="style-519"
                                      >
                                        <path
                                          d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                          fill="currentColor"
                                          className="style-520"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
            {/* <div className="style-521">
              <div className="style-522">
                <a
                  href="https://additionals.polestar.com/us/"
                  className="style-523"
                >
                  <div className="style-524">
                    <div className="style-525">
                      <div className="style-526">
                        <div className="style-527">
                          <div className="style-528">
                            <picture className="style-529">
                              <source
                                srcSet="https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=60&dpr=1&w=784 1x, https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=35&dpr=2&w=784 2x"
                                media="(min-width: 1248px)"
                                className="style-530"
                              />
                              <source
                                srcSet="https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=60&dpr=1&w=542 1x, https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=35&dpr=2&w=542 2x"
                                media="(min-width: 960px)"
                                className="style-531"
                              />
                              <source
                                srcSet="https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=60&dpr=1&w=861 1x, https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=35&dpr=2&w=861 2x"
                                media="(min-width: 768px)"
                                className="style-532"
                              />
                              <source
                                srcSet="https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=60&dpr=1&w=640 1x, https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?q=35&dpr=2&w=640 2x"
                                media="(min-width: 0px)"
                                className="style-533"
                              />
                              <img
                                draggable="false"
                                className="style-534"
                                src="https://www.polestar.com/dato-assets/11286/1734699516-home-additionals-dec2024-d-2.png?w=640"
                                alt=""
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                      <div className="style-535">
                        <div className="style-536">
                          <h2
                            aria-label="Additionals shop "
                            data-testid="label-heading"
                            className="style-537"
                          >
                            <span aria-hidden="true" className="style-538">
                              Additionals shop
                            </span>
                            <br className="style-539" />
                            <span aria-hidden="true" className="style-540">
                              {" "}
                            </span>
                          </h2>
                          <div className="style-541" />
                          <p className="style-542">
                            Clothes, books, experiences, and more.
                          </p>
                          <div className="style-543" />
                          <button data-focus-spacing={4} className="style-544">
                            <span className="style-545">
                              <span className="style-546">Go to shop</span>
                              <span
                                aria-hidden="true"
                                data-type="icon"
                                className="style-547"
                              >
                                <div className="style-548">
                                  <div className="style-549">
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      height="1em"
                                      role="img"
                                      className="style-550"
                                    >
                                      <path
                                        d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                        fill="currentColor"
                                        className="style-551"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
