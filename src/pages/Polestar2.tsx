import React, { useEffect, useRef, useState } from "react";

import "./../styles/polestar2.css"; // Importing CSS styles
import { GET_P2, graphqlRequest } from "../service";
const Polestar2: React.FC = () => {
  const isMounted = useRef(false);
  const [banners, setBanners] = useState<any>([]);
  const [contents, setContent] = useState<any>([]);
  const fetch = async () => {
    try {
      const data = await graphqlRequest(GET_P2);
      const { sections = [] } = data?.data?.product;
      let items: any = [];
      let items1: any = [];
      sections.map((item: any, index: any) => {
        if (item?.heroTitle) {
          items.push({
            title: item.heroTitle,
            imageUrl: item.heroImage.url,
            description: item.heroSubtitle,
            color: "#FFF",
            buttons: item?.buttons || [],
          });
        } else if (item?.videolink) {
          items1.push(item);
        }
      });

      setBanners(items);
      setContent(items1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetch();
    }
  }, []);
  return (
    <>
      {banners.map(
        (
          banner: {
            title: string;
            imageUrl: string;
            description: string;
            buttons: any[];
          },
          index: React.Key | null | undefined
        ) => (
          <section key={index} data-testid="hero" className="polestar2-347">
            <picture className="polestar2-348">
              <img
                draggable="false"
                className="polestar2-353"
                src={banner?.imageUrl}
                alt="A frontal view of Polestar 2 in Space colour against a white background."
              />
            </picture>
            <div className="polestar2-354">
              <div className="polestar2-355">
                <div className="polestar2-356">
                  <h1 className="polestar2-357">{banner?.title}</h1>
                  <div className="polestar2-358">
                    <dl className="polestar2-359" />
                  </div>
                </div>
                <div className="polestar2-360" />
              </div>
            </div>
          </section>
        )
      )}
      {contents.map((content: any, index: React.Key | null | undefined) => (
        <section
          data-testid="fullscreen-media-with-text-overlay-intro"
          className="polestar2-361"
          key={index}
        >
          <div className="polestar2-362">
            <video
              muted
              playsInline
              data-testid="video-autoplay-video"
              width="100%"
              height="100%"
              loop
              preload="metadata"
              className="polestar2-363"
              autoPlay
            >
              <source
                src={content?.videolink}
                media="(min-width: 0px)"
                className="polestar2-367"
              />
            </video>
            <div
              aria-hidden="true"
              data-testid="video-autoplay-first-frame"
              className="polestar2-368"
            >
              <picture className="polestar2-369">
                <img
                  draggable="false"
                  loading="lazy"
                  className="polestar2-374"
                  src="https://www.polestar.com/dato-assets/94392/1736777301-02-polestar-2-26-overview-intro-d.png?q=60&dpr=1&w=1120"
                  alt="Polestar 2 driving through narrow streets and on a motorway by the side of a mountain."
                />
              </picture>
            </div>
            {/* <button
      data-testid="video-autoplay-play-pause-button"
      className="polestar2-375"
      type="button"
      aria-label="Play"
      data-focus-radius="50%"
    >
      <span aria-hidden="true" className="polestar2-376">
        <svg
          viewBox="0 0 16 32"
          height="100%"
          role="presentation"
          className="polestar2-377"
        >
          <path
            d="M3 24V8l13 8z"
            fill="currentColor"
            className="polestar2-378"
          />
        </svg>
      </span>
      <svg
        width={320}
        height={320}
        viewBox="0 0 320 320"
        className="polestar2-379"
      >
        <circle
          shapeRendering="geometricPrecision"
          fill="none"
          strokeWidth={20}
          strokeLinecap="butt"
          cx={160}
          cy={160}
          r={150}
          className="polestar2-380"
        />
      </svg>
    </button> */}
          </div>
          <div className="polestar2-381">
            <div className="polestar2-382" />
            <div className="polestar2-383">
              <div className="polestar2-384">
                <div
                  data-testid="in-view-motion-transition"
                  className="polestar2-385"
                >
                  <h2 className="polestar2-386">{content?.videoHeader}</h2>
                </div>
                <div className="polestar2-387" />
                <div
                  data-testid="in-view-motion-transition"
                  className="polestar2-388"
                >
                  <div className="polestar2-389" />
                  <a
                    data-focus-theme="dark"
                    target="_self"
                    href={content?.link}
                    className="polestar2-390"
                  >
                    <span className="polestar2-391">
                      <span className="polestar2-392">
                        {content?.linklabel}
                      </span>
                      <span
                        aria-hidden="true"
                        data-type="icon"
                        className="polestar2-393"
                      >
                        <div className="polestar2-394">
                          <div className="polestar2-395">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              height="1em"
                              role="img"
                              className="polestar2-396"
                            >
                              <path
                                d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                fill="currentColor"
                                className="polestar2-397"
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
      ))}
      <section data-testid="mini-configurator" className="polestar2-398">
        <div className="polestar2-399">
          <div className="polestar2-400">
            <div className="polestar2-401">
              <div
                data-testid="mini-configurator-vertical-wrapper"
                className="polestar2-402"
              >
                <button aria-expanded="true" className="polestar2-403">
                  <span className="polestar2-404">Body</span>
                  <div className="polestar2-405" />
                </button>
                <div className="polestar2-406">
                  <ul role="list" className="polestar2-407">
                    <li className="polestar2-408">
                      <button
                        data-testid="thumbnail-button"
                        className="polestar2-409"
                      >
                        <img
                          draggable="false"
                          className="polestar2-410"
                          src="https://www.polestar.com/dato-assets/94392/1742562518-10-1-polestar-2-26-26-overview-config-body-thumb-snow.svg"
                          alt="Snow"
                        />
                      </button>
                    </li>
                    <li className="polestar2-411">
                      <button
                        data-testid="thumbnail-button"
                        className="polestar2-412"
                      >
                        <img
                          draggable="false"
                          className="polestar2-413"
                          src="https://www.polestar.com/dato-assets/94392/1742562372-10-1-polestar-2-26-overview-config-body-thumb-vapour.svg"
                          alt="Vapor"
                        />
                      </button>
                    </li>
                    <li className="polestar2-414">
                      <button
                        data-testid="thumbnail-button"
                        className="polestar2-415"
                      >
                        <img
                          draggable="false"
                          className="polestar2-416"
                          src="https://www.polestar.com/dato-assets/94392/1742562501-10-1-polestar-2-26-overview-config-body-thumb-midnight.svg"
                          alt="Midnight"
                        />
                      </button>
                    </li>
                    <li className="polestar2-417">
                      <button
                        data-testid="thumbnail-button"
                        className="polestar2-418"
                      >
                        <img
                          draggable="false"
                          className="polestar2-419"
                          src="https://www.polestar.com/dato-assets/94392/1742562402-10-1-polestar-2-26-overview-config-body-thumb-storm.svg"
                          alt="Storm"
                        />
                      </button>
                    </li>
                    <li className="polestar2-420">
                      <button
                        data-testid="thumbnail-button"
                        className="polestar2-421"
                      >
                        <img
                          draggable="false"
                          className="polestar2-422"
                          src="https://www.polestar.com/dato-assets/94392/1742562473-10-1-polestar-2-26-overview-config-body-thumb-space.svg"
                          alt="Space"
                        />
                      </button>
                    </li>
                  </ul>
                  <div className="polestar2-423">
                    <span className="polestar2-424">Midnight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="polestar2-425">
            <div className="polestar2-426">
              <div className="polestar2-427">
                <div className="polestar2-428">
                  <div
                    role="tablist"
                    aria-owns="tabs-:R3aj9bklb5:-0"
                    className="polestar2-429"
                  >
                    <button
                      aria-selected="true"
                      role="tab"
                      name="color"
                      aria-controls="tabpanel-Body"
                      tabIndex={0}
                      type="button"
                      className="polestar2-430"
                    >
                      <span className="polestar2-431">Body</span>
                      <div className="polestar2-432" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="polestar2-433">
                <div className="polestar2-434" />
                <ul role="list" className="polestar2-435">
                  <li className="polestar2-436">
                    <button className="polestar2-437">
                      <img
                        draggable="false"
                        className="polestar2-438"
                        src="https://www.polestar.com/dato-assets/94392/1742562518-10-1-polestar-2-26-26-overview-config-body-thumb-snow.svg"
                        alt="Snow"
                      />
                      <svg
                        width={48}
                        height={48}
                        xmlns="http://www.w3.org/2000/svg"
                        className="polestar2-439"
                      />
                    </button>
                  </li>
                  <li className="polestar2-440">
                    <button className="polestar2-441">
                      <img
                        draggable="false"
                        className="polestar2-442"
                        src="https://www.polestar.com/dato-assets/94392/1742562372-10-1-polestar-2-26-overview-config-body-thumb-vapour.svg"
                        alt="Vapor"
                      />
                      <svg
                        width={48}
                        height={48}
                        xmlns="http://www.w3.org/2000/svg"
                        className="polestar2-443"
                      />
                    </button>
                  </li>
                  <li className="polestar2-444">
                    <button className="polestar2-445">
                      <img
                        draggable="false"
                        className="polestar2-446"
                        src="https://www.polestar.com/dato-assets/94392/1742562501-10-1-polestar-2-26-overview-config-body-thumb-midnight.svg"
                        alt="Midnight"
                      />
                      <svg
                        width={48}
                        height={48}
                        xmlns="http://www.w3.org/2000/svg"
                        className="polestar2-447"
                      />
                    </button>
                  </li>
                  <li className="polestar2-448">
                    <button className="polestar2-449">
                      <img
                        draggable="false"
                        className="polestar2-450"
                        src="https://www.polestar.com/dato-assets/94392/1742562402-10-1-polestar-2-26-overview-config-body-thumb-storm.svg"
                        alt="Storm"
                      />
                      <svg
                        width={48}
                        height={48}
                        xmlns="http://www.w3.org/2000/svg"
                        className="polestar2-451"
                      />
                    </button>
                  </li>
                  <li className="polestar2-452">
                    <button className="polestar2-453">
                      <img
                        draggable="false"
                        className="polestar2-454"
                        src="https://www.polestar.com/dato-assets/94392/1742562473-10-1-polestar-2-26-overview-config-body-thumb-space.svg"
                        alt="Space"
                      />
                      <svg
                        width={48}
                        height={48}
                        xmlns="http://www.w3.org/2000/svg"
                        className="polestar2-455"
                      />
                    </button>
                  </li>
                </ul>
                <div className="polestar2-456" />
                <span className="polestar2-457">Midnight</span>
              </div>
            </div>
          </div>
          <div
            data-testid="mini-configurator-gallery-wrapper"
            className="polestar2-458"
          >
            <div className="polestar2-459">
              <div data-testid="custom-cursor-area" className="polestar2-460">
                <div className="polestar2-461">
                  <div className="polestar2-462">
                    <div className="polestar2-463" />
                  </div>
                  <div
                    data-testid="mini-configurator-gallery"
                    className="polestar2-464"
                    aria-live="polite"
                  >
                    <div className="polestar2-465" />
                    <div className="polestar2-466">
                      <div className="polestar2-467">
                        <div className="polestar2-468" />
                        <div className="polestar2-469">
                          <figure className="polestar2-470" aria-hidden="false">
                            <picture className="polestar2-471">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=35&dpr=2&w=1920 2x"
                                className="polestar2-472"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=35&dpr=2&w=1248 2x"
                                className="polestar2-473"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=35&dpr=2&w=1024 2x"
                                className="polestar2-474"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=35&dpr=2&h=900 2x"
                                className="polestar2-475"
                              />
                              <img
                                draggable="false"
                                className="polestar2-476"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-477" aria-hidden="true">
                            <picture className="polestar2-478">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=35&dpr=2&w=1920 2x"
                                className="polestar2-479"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=35&dpr=2&w=1248 2x"
                                className="polestar2-480"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=35&dpr=2&w=1024 2x"
                                className="polestar2-481"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=35&dpr=2&h=900 2x"
                                className="polestar2-482"
                              />
                              <img
                                draggable="false"
                                className="polestar2-483"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-484" aria-hidden="true">
                            <picture className="polestar2-485">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1920 2x"
                                className="polestar2-486"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1248 2x"
                                className="polestar2-487"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=35&dpr=2&w=1024 2x"
                                className="polestar2-488"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=35&dpr=2&h=900 2x"
                                className="polestar2-489"
                              />
                              <img
                                draggable="false"
                                className="polestar2-490"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-491" aria-hidden="true">
                            <picture className="polestar2-492">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1920 2x"
                                className="polestar2-493"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1248 2x"
                                className="polestar2-494"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=35&dpr=2&w=1024 2x"
                                className="polestar2-495"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=35&dpr=2&h=900 2x"
                                className="polestar2-496"
                              />
                              <img
                                draggable="false"
                                className="polestar2-497"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-498" aria-hidden="true">
                            <picture className="polestar2-499">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=35&dpr=2&w=1920 2x"
                                className="polestar2-500"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=35&dpr=2&w=1248 2x"
                                className="polestar2-501"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=35&dpr=2&w=1024 2x"
                                className="polestar2-502"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=35&dpr=2&h=900 2x"
                                className="polestar2-503"
                              />
                              <img
                                draggable="false"
                                className="polestar2-504"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-505" aria-hidden="true">
                            <picture className="polestar2-506">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=35&dpr=2&w=1920 2x"
                                className="polestar2-507"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=35&dpr=2&w=1248 2x"
                                className="polestar2-508"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=35&dpr=2&w=1024 2x"
                                className="polestar2-509"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=35&dpr=2&h=900 2x"
                                className="polestar2-510"
                              />
                              <img
                                draggable="false"
                                className="polestar2-511"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-512" aria-hidden="true">
                            <picture className="polestar2-513">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=35&dpr=2&w=1920 2x"
                                className="polestar2-514"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=754%3B2596%3B590%3B1653&q=35&dpr=2&w=1248 2x"
                                className="polestar2-515"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=35&dpr=2&w=1024 2x"
                                className="polestar2-516"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/pdp-exterior-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/0.png?trim=472%3B3481%3B471%3B3715&q=35&dpr=2&h=900 2x"
                                className="polestar2-517"
                              />
                              <img
                                draggable="false"
                                className="polestar2-518"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-519" aria-hidden="true">
                            <picture className="polestar2-520">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=35&dpr=2&w=1920 2x"
                                className="polestar2-521"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=522%3B2262%3B437%3B1474&q=35&dpr=2&w=1248 2x"
                                className="polestar2-522"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=35&dpr=2&w=1024 2x"
                                className="polestar2-523"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/1.png?trim=326%3B3089%3B137%3B3835&q=35&dpr=2&h=900 2x"
                                className="polestar2-524"
                              />
                              <img
                                draggable="false"
                                className="polestar2-525"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-526" aria-hidden="true">
                            <picture className="polestar2-527">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1920 2x"
                                className="polestar2-528"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1248 2x"
                                className="polestar2-529"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=35&dpr=2&w=1024 2x"
                                className="polestar2-530"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/4.png?trim=490%3B3469%3B0%3B3469&q=35&dpr=2&h=900 2x"
                                className="polestar2-531"
                              />
                              <img
                                draggable="false"
                                className="polestar2-532"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-533" aria-hidden="true">
                            <picture className="polestar2-534">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1920 2x"
                                className="polestar2-535"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=572%3B2281%3B571%3B1701&q=35&dpr=2&w=1248 2x"
                                className="polestar2-536"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=35&dpr=2&w=1024 2x"
                                className="polestar2-537"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/2.png?trim=0%3B3329%3B0%3B3329&q=35&dpr=2&h=900 2x"
                                className="polestar2-538"
                              />
                              <img
                                draggable="false"
                                className="polestar2-539"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-540" aria-hidden="true">
                            <picture className="polestar2-541">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=35&dpr=2&w=1920 2x"
                                className="polestar2-542"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=506%3B1943%3B217%3B1479&q=35&dpr=2&w=1248 2x"
                                className="polestar2-543"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=35&dpr=2&w=1024 2x"
                                className="polestar2-544"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/3.png?trim=0%3B3200%3B0%3B3463&q=35&dpr=2&h=900 2x"
                                className="polestar2-545"
                              />
                              <img
                                draggable="false"
                                className="polestar2-546"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                          <figure className="polestar2-547" aria-hidden="true">
                            <picture className="polestar2-548">
                              <source
                                media="(min-width: 1248px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=60&dpr=1&w=1920 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=35&dpr=2&w=1920 2x"
                                className="polestar2-549"
                              />
                              <source
                                media="(min-width: 960px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=60&dpr=1&w=1248 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=732%3B2583%3B625%3B1683&q=35&dpr=2&w=1248 2x"
                                className="polestar2-550"
                              />
                              <source
                                media="(min-width: 768px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=60&dpr=1&w=1024 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=35&dpr=2&w=1024 2x"
                                className="polestar2-551"
                              />
                              <source
                                media="(min-width: 0px)"
                                srcSet="https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=60&dpr=1&h=900 1x, https://car-images.polestar.com/534/2026/summary-uncrop/EU/72300/_/RM8000/15/001336/XPLUSS/XPRWHE/000553/2/_/default/5.png?trim=1052%3B1090%3B1052%3B2718&rotate=90&q=35&dpr=2&h=900 2x"
                                className="polestar2-552"
                              />
                              <img
                                draggable="false"
                                className="polestar2-553"
                                src=" "
                                alt=""
                              />
                            </picture>
                          </figure>
                        </div>
                        <div className="polestar2-554" />
                      </div>
                      <div className="polestar2-555">
                        <div
                          data-type="control-button"
                          className="polestar2-556"
                        >
                          <button type="button" className="polestar2-557">
                            <div className="polestar2-558">
                              <span
                                aria-hidden="true"
                                className="polestar2-559"
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  height="1em"
                                  role="presentation"
                                  className="polestar2-560"
                                >
                                  <path
                                    d="m10.25 14 1.05-1.05L6.35 8l4.95-4.95L10.25 2l-6 6 6 6Z"
                                    fill="currentColor"
                                    className="polestar2-561"
                                  />
                                </svg>
                              </span>
                            </div>
                          </button>
                        </div>
                        <div
                          data-type="control-button"
                          className="polestar2-562"
                        >
                          <button type="button" className="polestar2-563">
                            <div className="polestar2-564">
                              <span
                                aria-hidden="true"
                                className="polestar2-565"
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  height="1em"
                                  role="presentation"
                                  className="polestar2-566"
                                >
                                  <path
                                    d="m5.675 2-1.05 1.05L9.575 8l-4.95 4.95L5.675 14l6-6-6-6Z"
                                    fill="currentColor"
                                    className="polestar2-567"
                                  />
                                </svg>
                              </span>
                            </div>
                          </button>
                        </div>
                        <div className="polestar2-568">
                          <div
                            role="tablist"
                            aria-owns="gallery-indicator-:R1rlad5lajl9bklb5:-0 gallery-indicator-:R1rlad5lajl9bklb5:-1 gallery-indicator-:R1rlad5lajl9bklb5:-2 gallery-indicator-:R1rlad5lajl9bklb5:-3 gallery-indicator-:R1rlad5lajl9bklb5:-4 gallery-indicator-:R1rlad5lajl9bklb5:-5"
                            className="polestar2-569"
                          >
                            <div className="polestar2-570">
                              <button
                                type="button"
                                aria-label="Indicator 1"
                                aria-selected="true"
                                role="tab"
                                data-index={0}
                                tabIndex={0}
                                data-group="cw-:R1rlad5lajl9bklb5H1:"
                                className="polestar2-571"
                              >
                                <div className="polestar2-572" />
                              </button>
                              <button
                                type="button"
                                aria-label="Indicator 2"
                                aria-selected="false"
                                role="tab"
                                data-index={1}
                                tabIndex={-1}
                                data-group="cw-:R1rlad5lajl9bklb5H1:"
                                className="polestar2-573"
                              >
                                <div className="polestar2-574" />
                              </button>
                              <button
                                type="button"
                                aria-label="Indicator 3"
                                aria-selected="false"
                                role="tab"
                                data-index={2}
                                tabIndex={-1}
                                data-group="cw-:R1rlad5lajl9bklb5H1:"
                                className="polestar2-575"
                              >
                                <div className="polestar2-576" />
                              </button>
                              <button
                                type="button"
                                aria-label="Indicator 4"
                                aria-selected="false"
                                role="tab"
                                data-index={3}
                                tabIndex={-1}
                                data-group="cw-:R1rlad5lajl9bklb5H1:"
                                className="polestar2-577"
                              >
                                <div className="polestar2-578" />
                              </button>
                              <button
                                type="button"
                                aria-label="Indicator 5"
                                aria-selected="false"
                                role="tab"
                                data-index={4}
                                tabIndex={-1}
                                data-group="cw-:R1rlad5lajl9bklb5H1:"
                                className="polestar2-579"
                              >
                                <div className="polestar2-580" />
                              </button>
                              <button
                                type="button"
                                aria-label="Indicator 6"
                                aria-selected="false"
                                role="tab"
                                data-index={5}
                                tabIndex={-1}
                                data-group="cw-:R1rlad5lajl9bklb5H1:"
                                className="polestar2-581"
                              >
                                <div className="polestar2-582" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="polestar2-583" />
                </div>
              </div>
            </div>
            <div className="polestar2-584">
              <div
                data-testid="mini-configurator-gallery-switch-wrapper"
                className="polestar2-585"
              >
                <button className="polestar2-586">
                  <span className="polestar2-587">Gallery</span>
                </button>
                <button className="polestar2-588">
                  <span className="polestar2-589">360Â°</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-testid="feature-grid" className="polestar2-635">
        <div className="polestar2-636" />
        <div className="polestar2-637">
          <div className="polestar2-638">
            <h2 className="polestar2-639">
              It's the materials that make the interior. Responsibly sourced,
              minimalistic, and modern, the interior of the Polestar 2 is where
              form and function combine.
            </h2>
          </div>
        </div>
        <div className="polestar2-640" />
        <ul role="list" className="polestar2-641">
          <li className="polestar2-642">
            <div data-testid="staggered-motion" className="polestar2-643">
              <div className="polestar2-644">
                <div className="polestar2-645">
                  <picture className="polestar2-646">
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=1920 1x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=1920 2x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=1920 3x"
                      media="(min-width: 1248px)"
                      className="polestar2-647"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=1440 3x"
                      media="(min-width: 960px)"
                      className="polestar2-648"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=900 1x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=900 2x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=900 3x"
                      media="(min-width: 768px)"
                      className="polestar2-649"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=600 1x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=600 2x, https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=600 3x"
                      media="(min-width: 0px)"
                      className="polestar2-650"
                    />
                    <img
                      draggable="false"
                      loading="lazy"
                      className="polestar2-651"
                      src="https://www.polestar.com/dato-assets/94392/1736779391-05-1-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=1440"
                      alt="A close up view of Polestar 2â€™s dashboard with Light Ash deco"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </li>
          <li className="polestar2-652">
            <div data-testid="staggered-motion" className="polestar2-653">
              <div className="polestar2-654">
                <div className="polestar2-655">
                  <picture className="polestar2-656">
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=1920 1x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=1920 2x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=1920 3x"
                      media="(min-width: 1248px)"
                      className="polestar2-657"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=1440 3x"
                      media="(min-width: 960px)"
                      className="polestar2-658"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=900 1x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=900 2x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=900 3x"
                      media="(min-width: 768px)"
                      className="polestar2-659"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=600 1x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=35&dpr=2&w=600 2x, https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=25&dpr=3&w=600 3x"
                      media="(min-width: 0px)"
                      className="polestar2-660"
                    />
                    <img
                      draggable="false"
                      loading="lazy"
                      className="polestar2-661"
                      src="https://www.polestar.com/dato-assets/94392/1736779397-05-2-polestar-2-26-overview-interior-detail.png?q=60&dpr=1&w=1440"
                      alt="A close up of Polestar 2â€™s volume control knob with surrounding hazard and ventilation lights."
                    />
                  </picture>
                </div>
              </div>
            </div>
          </li>
          <li className="polestar2-662">
            <div data-testid="staggered-motion" className="polestar2-663">
              <div className="polestar2-664">
                <div className="polestar2-665">
                  <picture className="polestar2-666">
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=60&dpr=1&w=1920 1x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=35&dpr=2&w=1920 2x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=25&dpr=3&w=1920 3x"
                      media="(min-width: 1248px)"
                      className="polestar2-667"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=25&dpr=3&w=1440 3x"
                      media="(min-width: 960px)"
                      className="polestar2-668"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=60&dpr=1&w=900 1x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=35&dpr=2&w=900 2x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=25&dpr=3&w=900 3x"
                      media="(min-width: 768px)"
                      className="polestar2-669"
                    />
                    <source
                      srcSet="https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=60&dpr=1&w=600 1x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=35&dpr=2&w=600 2x, https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=25&dpr=3&w=600 3x"
                      media="(min-width: 0px)"
                      className="polestar2-670"
                    />
                    <img
                      draggable="false"
                      loading="lazy"
                      className="polestar2-671"
                      src="https://www.polestar.com/dato-assets/94392/1736779401-05-3-polestar-2-26-overview-detail.png?q=60&dpr=1&w=1440"
                      alt="A close up of Polestar 2â€™s front passenger seat with the Bridge of Weir upholstery in Zinc."
                    />
                  </picture>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="polestar2-672" />
      </section>
      <section data-testid="infotainment" className="polestar2-673">
        <picture className="polestar2-674">
          <source
            srcSet="https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=25&dpr=3&w=1440 3x"
            media="(min-width: 1248px)"
            className="polestar2-675"
          />
          <source
            srcSet="https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=25&dpr=3&w=1120 3x"
            media="(min-width: 960px)"
            className="polestar2-676"
          />
          <source
            srcSet="https://www.polestar.com/dato-assets/94392/1742898541-08-polestar-2-26-overview-infotainment-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1742898541-08-polestar-2-26-overview-infotainment-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1742898541-08-polestar-2-26-overview-infotainment-t.png?q=25&dpr=3&w=768 3x"
            media="(min-width: 768px)"
            className="polestar2-677"
          />
          <source
            srcSet="https://www.polestar.com/dato-assets/94392/1742898485-08-polestar-2-26-overview-infotainment-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1742898485-08-polestar-2-26-overview-infotainment-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1742898485-08-polestar-2-26-overview-infotainment-m.png?q=25&dpr=3&w=360 3x"
            media="(min-width: 0px)"
            className="polestar2-678"
          />
          <img
            draggable="false"
            loading="lazy"
            className="polestar2-679"
            src="https://www.polestar.com/dato-assets/94392/1742461966-08-polestar-2-26-overview-infotainment-d.png?q=60&dpr=1&w=1120"
            alt="Polestar 2â€™s dashboard area with the steering wheel and centre display against a dark background."
          />
        </picture>
        <div className="polestar2-680">
          <div className="polestar2-681">
            <div className="polestar2-682" />
            <div className="polestar2-683">
              <div className="polestar2-684" />
              <div
                data-testid="in-view-motion-transition"
                className="polestar2-685"
              >
                <h2 className="polestar2-686">
                  With Google built-in, apps and car functions can be controlled
                  by the driver's voice, using the power of Google Assistant.Â¹
                </h2>
              </div>
              <div className="polestar2-687" />
            </div>
          </div>
        </div>
      </section>
      <section data-testid="gallery" className="polestar2-688">
        <div className="polestar2-689">
          <div className="polestar2-690" />
        </div>
        <div aria-live="polite" className="polestar2-691">
          <div className="polestar2-692" />
          <div className="polestar2-693">
            <div className="polestar2-694">
              <div className="polestar2-695" />
              <div className="polestar2-696">
                <figure className="polestar2-697" aria-hidden="false">
                  <picture className="polestar2-698">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-699"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-700"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694707-09-1-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741694707-09-1-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741694707-09-1-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-701"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694791-09-1-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741694791-09-1-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741694791-09-1-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-702"
                    />
                    <img
                      draggable="false"
                      className="polestar2-703"
                      src="https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 in Snow colour parked in an alleyway between brown coloured buildings with blue accents."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-704" aria-hidden="true">
                  <picture className="polestar2-705">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-706"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-707"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694896-09-2-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741694896-09-2-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741694896-09-2-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-708"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694927-09-2-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741694927-09-2-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741694927-09-2-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-709"
                    />
                    <img
                      draggable="false"
                      className="polestar2-710"
                      src="https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 standing on a parking lot with foreign lettering and worn out markings."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-711" aria-hidden="true">
                  <picture className="polestar2-712">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-713"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-714"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695283-09-3-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695283-09-3-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695283-09-3-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-715"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695261-09-3-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695261-09-3-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695261-09-3-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-716"
                    />
                    <img
                      draggable="false"
                      className="polestar2-717"
                      src="https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Close-up of Polestar 2â€™s hood with Polestar logo and smartzone with the sky reflected on surface."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-718" aria-hidden="true">
                  <picture className="polestar2-719">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-720"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-721"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695510-09-4-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695510-09-4-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695510-09-4-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-722"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695442-09-4-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695442-09-4-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695442-09-4-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-723"
                    />
                    <img
                      draggable="false"
                      className="polestar2-724"
                      src="https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 facing a blue door while standing in an antiquated alleyway half under the shadows."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-725" aria-hidden="true">
                  <picture className="polestar2-726">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-727"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-728"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695617-09-5-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695617-09-5-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695617-09-5-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-729"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695598-09-5-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695598-09-5-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695598-09-5-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-730"
                    />
                    <img
                      draggable="false"
                      className="polestar2-731"
                      src="https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 driving away from an arched rock formation on a highway in a hilly area."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-732" aria-hidden="true">
                  <picture className="polestar2-733">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-734"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-735"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695683-09-6-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695683-09-6-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695683-09-6-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-736"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695667-09-6-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695667-09-6-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695667-09-6-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-737"
                    />
                    <img
                      draggable="false"
                      className="polestar2-738"
                      src="https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 facing left and standing near a dirty brown brick wall near the sidewalk and some stairs."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-739" aria-hidden="true">
                  <picture className="polestar2-740">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-741"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-742"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694707-09-1-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741694707-09-1-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741694707-09-1-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-743"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694791-09-1-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741694791-09-1-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741694791-09-1-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-744"
                    />
                    <img
                      draggable="false"
                      className="polestar2-745"
                      src="https://www.polestar.com/dato-assets/94392/1741694840-09-1-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 in Snow colour parked in an alleyway between brown coloured buildings with blue accents."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-746" aria-hidden="true">
                  <picture className="polestar2-747">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-748"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-749"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694896-09-2-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741694896-09-2-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741694896-09-2-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-750"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741694927-09-2-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741694927-09-2-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741694927-09-2-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-751"
                    />
                    <img
                      draggable="false"
                      className="polestar2-752"
                      src="https://www.polestar.com/dato-assets/94392/1741695113-09-2-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 standing on a parking lot with foreign lettering and worn out markings."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-753" aria-hidden="true">
                  <picture className="polestar2-754">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-755"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-756"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695283-09-3-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695283-09-3-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695283-09-3-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-757"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695261-09-3-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695261-09-3-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695261-09-3-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-758"
                    />
                    <img
                      draggable="false"
                      className="polestar2-759"
                      src="https://www.polestar.com/dato-assets/94392/1741695224-09-3-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Close-up of Polestar 2â€™s hood with Polestar logo and smartzone with the sky reflected on surface."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-760" aria-hidden="true">
                  <picture className="polestar2-761">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-762"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-763"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695510-09-4-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695510-09-4-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695510-09-4-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-764"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695442-09-4-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695442-09-4-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695442-09-4-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-765"
                    />
                    <img
                      draggable="false"
                      className="polestar2-766"
                      src="https://www.polestar.com/dato-assets/94392/1741695384-09-4-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 facing a blue door while standing in an antiquated alleyway half under the shadows."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-767" aria-hidden="true">
                  <picture className="polestar2-768">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-769"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-770"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695617-09-5-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695617-09-5-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695617-09-5-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-771"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695598-09-5-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695598-09-5-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695598-09-5-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-772"
                    />
                    <img
                      draggable="false"
                      className="polestar2-773"
                      src="https://www.polestar.com/dato-assets/94392/1741695539-09-5-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 driving away from an arched rock formation on a highway in a hilly area."
                    />
                  </picture>
                </figure>
                <figure className="polestar2-774" aria-hidden="true">
                  <picture className="polestar2-775">
                    <source
                      media="(min-width: 1248px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1440 1x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1440 2x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1440 3x"
                      className="polestar2-776"
                    />
                    <source
                      media="(min-width: 960px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120 1x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=35&dpr=2&w=1120 2x, https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=25&dpr=3&w=1120 3x"
                      className="polestar2-777"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695683-09-6-polestar-2-26-overview-gallery-t.png?q=60&dpr=1&w=768 1x, https://www.polestar.com/dato-assets/94392/1741695683-09-6-polestar-2-26-overview-gallery-t.png?q=35&dpr=2&w=768 2x, https://www.polestar.com/dato-assets/94392/1741695683-09-6-polestar-2-26-overview-gallery-t.png?q=25&dpr=3&w=768 3x"
                      className="polestar2-778"
                    />
                    <source
                      media="(min-width: 0px)"
                      srcSet="https://www.polestar.com/dato-assets/94392/1741695667-09-6-polestar-2-26-overview-gallery-m.png?q=60&dpr=1&w=360 1x, https://www.polestar.com/dato-assets/94392/1741695667-09-6-polestar-2-26-overview-gallery-m.png?q=35&dpr=2&w=360 2x, https://www.polestar.com/dato-assets/94392/1741695667-09-6-polestar-2-26-overview-gallery-m.png?q=25&dpr=3&w=360 3x"
                      className="polestar2-779"
                    />
                    <img
                      draggable="false"
                      className="polestar2-780"
                      src="https://www.polestar.com/dato-assets/94392/1741695639-09-6-polestar-2-26-overview-gallery-d.png?q=60&dpr=1&w=1120"
                      alt="Polestar 2 facing left and standing near a dirty brown brick wall near the sidewalk and some stairs."
                    />
                  </picture>
                </figure>
              </div>
              <div className="polestar2-781" />
            </div>
            <div className="polestar2-782">
              <div data-type="control-button" className="polestar2-783">
                <button
                  title="Previous"
                  type="button"
                  aria-label="Previous"
                  className="polestar2-784"
                >
                  <div className="polestar2-785">
                    <span aria-hidden="true" className="polestar2-786">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        height="1em"
                        role="presentation"
                        className="polestar2-787"
                      >
                        <path
                          d="m10.25 14 1.05-1.05L6.35 8l4.95-4.95L10.25 2l-6 6 6 6Z"
                          fill="currentColor"
                          className="polestar2-788"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
              <div data-type="control-button" className="polestar2-789">
                <button
                  title="Next"
                  type="button"
                  aria-label="Next"
                  className="polestar2-790"
                >
                  <div className="polestar2-791">
                    <span aria-hidden="true" className="polestar2-792">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        height="1em"
                        role="presentation"
                        className="polestar2-793"
                      >
                        <path
                          d="m5.675 2-1.05 1.05L9.575 8l-4.95 4.95L5.675 14l6-6-6-6Z"
                          fill="currentColor"
                          className="polestar2-794"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
              <div className="polestar2-795">
                <div
                  role="tablist"
                  aria-owns="gallery-indicator-:Rtql6ir3klb5:-0 gallery-indicator-:Rtql6ir3klb5:-1 gallery-indicator-:Rtql6ir3klb5:-2 gallery-indicator-:Rtql6ir3klb5:-3 gallery-indicator-:Rtql6ir3klb5:-4 gallery-indicator-:Rtql6ir3klb5:-5"
                  className="polestar2-796"
                >
                  <div className="polestar2-797">
                    <button
                      type="button"
                      aria-label="Indicator 1"
                      aria-selected="true"
                      role="tab"
                      data-index={0}
                      tabIndex={0}
                      data-group="cw-:Rtql6ir3klb5H1:"
                      className="polestar2-798"
                    >
                      <div className="polestar2-799" />
                    </button>
                    <button
                      type="button"
                      aria-label="Indicator 2"
                      aria-selected="false"
                      role="tab"
                      data-index={1}
                      tabIndex={-1}
                      data-group="cw-:Rtql6ir3klb5H1:"
                      className="polestar2-800"
                    >
                      <div className="polestar2-801" />
                    </button>
                    <button
                      type="button"
                      aria-label="Indicator 3"
                      aria-selected="false"
                      role="tab"
                      data-index={2}
                      tabIndex={-1}
                      data-group="cw-:Rtql6ir3klb5H1:"
                      className="polestar2-802"
                    >
                      <div className="polestar2-803" />
                    </button>
                    <button
                      type="button"
                      aria-label="Indicator 4"
                      aria-selected="false"
                      role="tab"
                      data-index={3}
                      tabIndex={-1}
                      data-group="cw-:Rtql6ir3klb5H1:"
                      className="polestar2-804"
                    >
                      <div className="polestar2-805" />
                    </button>
                    <button
                      type="button"
                      aria-label="Indicator 5"
                      aria-selected="false"
                      role="tab"
                      data-index={4}
                      tabIndex={-1}
                      data-group="cw-:Rtql6ir3klb5H1:"
                      className="polestar2-806"
                    >
                      <div className="polestar2-807" />
                    </button>
                    <button
                      type="button"
                      aria-label="Indicator 6"
                      aria-selected="false"
                      role="tab"
                      data-index={5}
                      tabIndex={-1}
                      data-group="cw-:Rtql6ir3klb5H1:"
                      className="polestar2-808"
                    >
                      <div className="polestar2-809" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="polestar2-810" />
      </section>
      <section data-testid="hand-off" className="polestar2-811">
        <section className="polestar2-812">
          <div className="polestar2-813" />
          <h2 className="polestar2-814">Learn more about Polestar 2</h2>
          <div className="polestar2-815" />
          <ul role="list" className="polestar2-816">
            <li data-testid="staggered-motion" className="polestar2-817">
              <a
                target="_self"
                href="/us/preowned-cars/"
                className="polestar2-818"
              >
                <div className="polestar2-819">
                  <div className="polestar2-820">
                    <h3 className="polestar2-821">
                      Pre-owned Certified by Polestar program
                    </h3>
                  </div>
                  <span data-focus-spacing={4} className="polestar2-822">
                    <span className="polestar2-823">
                      <span className="polestar2-824">Discover benefits </span>
                      <span
                        aria-hidden="true"
                        data-type="icon"
                        className="polestar2-825"
                      >
                        <div className="polestar2-826">
                          <div className="polestar2-827">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              height="1em"
                              role="img"
                              className="polestar2-828"
                            >
                              <path
                                d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                fill="currentColor"
                                className="polestar2-829"
                              />
                            </svg>
                          </div>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </a>
            </li>
            <li data-testid="staggered-motion" className="polestar2-830">
              <a
                target="_self"
                href="/us/offers/pre-owned"
                className="polestar2-831"
              >
                <div className="polestar2-832">
                  <div className="polestar2-833">
                    <h3 className="polestar2-834">Current pre-owned offers</h3>
                  </div>
                  <span data-focus-spacing={4} className="polestar2-835">
                    <span className="polestar2-836">
                      <span className="polestar2-837">View offers</span>
                      <span
                        aria-hidden="true"
                        data-type="icon"
                        className="polestar2-838"
                      >
                        <div className="polestar2-839">
                          <div className="polestar2-840">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              height="1em"
                              role="img"
                              className="polestar2-841"
                            >
                              <path
                                d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                fill="currentColor"
                                className="polestar2-842"
                              />
                            </svg>
                          </div>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </a>
            </li>
            <li data-testid="staggered-motion" className="polestar2-843">
              <a
                target="_self"
                href="/us/preowned-cars/search-result/polestar-2/"
                className="polestar2-844"
              >
                <div className="polestar2-845">
                  <div className="polestar2-846">
                    <h3 className="polestar2-847">Pre-owned cars</h3>
                  </div>
                  <span data-focus-spacing={4} className="polestar2-848">
                    <span className="polestar2-849">
                      <span className="polestar2-850">
                        Explore pre-owned cars
                      </span>
                      <span
                        aria-hidden="true"
                        data-type="icon"
                        className="polestar2-851"
                      >
                        <div className="polestar2-852">
                          <div className="polestar2-853">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              height="1em"
                              role="img"
                              className="polestar2-854"
                            >
                              <path
                                d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                                fill="currentColor"
                                className="polestar2-855"
                              />
                            </svg>
                          </div>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <div className="polestar2-856" />
        </section>
      </section>
      <section className="polestar2-857">
        <div className="polestar2-858" />
        <div className="polestar2-859">
          <div className="polestar2-860" />
          <div className="polestar2-861">
            <div data-testid="disclaimer-list" className="polestar2-862">
              <ol className="polestar2-863">
                <li className="polestar2-864">
                  Google, Google Maps, and Google Assistant are trademarks of
                  Google LLC. Google Assistant and some related features are not
                  available in all languages or countries. See
                  g.co/assistant/carlanguages for updates to language and
                  country availability. Not all services, features,
                  applications, or required compatible devices are available in
                  all languages or countries, and may vary by car model. For
                  more details, visit the Help Center, sites for e.g. Google
                  Assistant, Google Maps, or the car manufacturer site.
                </li>
              </ol>
              <ul className="polestar2-865">
                <li className="polestar2-866">
                  Visuals are for illustrative purposes only. European model
                  shown.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="polestar2-867" />
      </section>
    </>
  );
};

export default Polestar2;
