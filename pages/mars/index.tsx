import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Mars = () => {
  return (
    <>
      <Head>
        <title>The planets | Mars</title>
        <meta name="description" content="Mars page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.mars.images.planet}
        imageStructure={data.mars.images.internal}
        imageGeology={data.mars.images.geology}
        title={data.mars.name}
        textOverview={data.mars.overview.text}
        textStructure={data.mars.structure.text}
        textGeology={data.mars.geology.text}
        source={data.mars.overview.source}
        sourceName={data.mars.overview.sourceName}
        rotationInfo={data.mars.infos.rotation}
        revolutionInfo={data.mars.infos.revolution}
        radiusInfo={data.mars.infos.radius}
        tempInfo={data.mars.infos.temperature}
        bgColor="red"
      />
    </>
  );
};

export default Mars;
