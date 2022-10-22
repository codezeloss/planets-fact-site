import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Neptune = () => {
  return (
    <>
      <Head>
        <title>The planets | Neptune</title>
        <meta name="description" content="Neptune page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.neptune.images.planet}
        imageStructure={data.neptune.images.internal}
        imageGeology={data.neptune.images.geology}
        title={data.neptune.name}
        textOverview={data.neptune.overview.text}
        textStructure={data.neptune.structure.text}
        textGeology={data.neptune.geology.text}
        source={data.neptune.overview.source}
        sourceName={data.neptune.overview.sourceName}
        rotationInfo={data.neptune.infos.rotation}
        revolutionInfo={data.neptune.infos.revolution}
        radiusInfo={data.neptune.infos.radius}
        tempInfo={data.neptune.infos.temperature}
        bgColor="bg-dark-blue"
      />
    </>
  );
};

export default Neptune;
