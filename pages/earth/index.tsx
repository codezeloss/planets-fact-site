import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Earth = () => {
  return (
    <>
      <Head>
        <title>The planets | Earth</title>
        <meta name="description" content="Earth page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.earth.images.planet}
        imageStructure={data.earth.images.internal}
        imageGeology={data.earth.images.geology}
        title={data.earth.name}
        textOverview={data.earth.overview.text}
        textStructure={data.earth.structure.text}
        textGeology={data.earth.geology.text}
        source={data.earth.overview.source}
        sourceName={data.earth.overview.sourceName}
        rotationInfo={data.earth.infos.rotation}
        revolutionInfo={data.earth.infos.revolution}
        radiusInfo={data.earth.infos.radius}
        tempInfo={data.earth.infos.temperature}
        bgColor="bg-purple"
      />
    </>
  );
};

export default Earth;
