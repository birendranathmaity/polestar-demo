import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css"; // Importing CSS styles
import Header from "./components/Header";
import Feature from "./components/Feature";
import NextStep from "./components/NextStep";
import PeakPerformance from "./components/PeakPerformance";
import Footer from "./components/Footer";
import { GET_HOMEPAGE, graphqlRequest } from "./service";
import Banner from "./components/Banner";
import DataTrackArea from "./components/DataTrackArea";
import Card from "./components/Card";
import LongDescription from "./components/LongDescription";

const App: React.FC = () => {
 const isMounted = useRef(false);
  const [banners, setBanners] = useState<any>([]);
  const fetchHome = async () => {
    try {
      const data = await graphqlRequest(GET_HOMEPAGE);
      const { sections = [] } = data?.data?.page;
      let items: any = [];
      sections.map((item: any) => {
        if (item?.heroTitle)
          items.push({
            title: item.heroTitle,
            imageUrl: item.heroImage.url,
            description: item.heroSubtitle,
            color: "#FFF",
            buttons: item?.buttons || [],
          });
      });

      setBanners(items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchHome();
    }
  }, []);
  return (
    <div className="App">
      <div className="style-2">
        <div tabIndex={-1} className="style-3">
          <div
            aria-hidden="false"
            data-version="112.10.0"
            data-type="component-warehouse"
            dir="ltr"
            className="style-4"
          >
            <Header />
            <main className="style-311">
              <div className="style-312">
                <div className="style-313">
                  {banners.map(
                    (
                      feature: {
                        title: string;
                        imageUrl: string;
                        description: string;
                        color: string | undefined;
                        buttons: any[];
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <Banner
                        key={index}
                        title={feature.title}
                        imageUrl={feature.imageUrl}
                        description={feature.description}
                        color={feature.color}
                        buttons={feature?.buttons}
                      />
                    )
                  )}
                </div>

                <DataTrackArea />
                <Card />
                <NextStep />
                <LongDescription />
                <Footer />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
