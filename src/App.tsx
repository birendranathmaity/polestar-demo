import React, { useEffect, useRef, useState } from "react";
import "./styles/Home.css"; // Importing CSS styles
import NextStep from "./components/NextStep";
import { GET_HOMEPAGE, graphqlRequest } from "./service";
import Banner from "./components/Banner";
import DataTrackArea from "./components/DataTrackArea";
import Card from "./components/Card";
import LongDescription from "./components/LongDescription";

const App: React.FC = () => {
  const isMounted = useRef(false);
  const [banners, setBanners] = useState<any>([]);
  const [contents, setContent] = useState<any>([]);
  const fetchHome = async () => {
    try {
      const data = await graphqlRequest(GET_HOMEPAGE);
      const { sections = [] } = data?.data?.page;
      let items: any = [];
      let items1: any = [];

      sections.map((item: any, index: any) => {
        if (item?.heroTitle && index === 0) {
          items.push({
            title: item.heroTitle,
            imageUrl: item.heroImage.url,
            description: item.heroSubtitle,
            color: "#FFF",
            buttons: item?.buttons || [],
          });
        } else if (item?.heroTitle && index !== 0) {
          items1.push({
            title: item.heroTitle,
            imageUrl: item.heroImage.url,
            description: item.heroSubtitle,
            buttons: item?.buttons || [],
          });
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
      fetchHome();
    }
  }, []);
  return (
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
      {contents.map(
        (
          content: {
            title: string;
            imageUrl: string;
            description: string;
            buttons: any[];
          },
          index: React.Key | null | undefined
        ) => (
          <NextStep
            key={index}
            title={content.title}
            imageUrl={content.imageUrl}
            description={content.description}
            buttons={content?.buttons}
          />
        )
      )}

      <LongDescription />
    </div>
  );
};

export default App;
