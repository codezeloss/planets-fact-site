import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Venus = () => {
  return (
    <>
      <Head>
        <title>The planets | Venus</title>
        <meta name="description" content="Venus page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.venus.images.planet}
        imageStructure={data.venus.images.internal}
        imageGeology={data.venus.images.geology}
        title={data.venus.name}
        textOverview={data.venus.overview.text}
        textStructure={data.venus.structure.text}
        textGeology={data.venus.geology.text}
        source={data.venus.overview.source}
        sourceName={data.venus.overview.sourceName}
        rotationInfo={data.venus.infos.rotation}
        revolutionInfo={data.venus.infos.revolution}
        radiusInfo={data.venus.infos.radius}
        tempInfo={data.venus.infos.temperature}
        bgColor={data.venus.color}
      />
    </>
  );
};

export default Venus;
