import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Mercury = () => {
  return (
    <>
      <Head>
        <title>The planets | Mercury</title>
        <meta name="description" content="Mercury page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.mercury.images.planet}
        imageStructure={data.mercury.images.internal}
        imageGeology={data.mercury.images.geology}
        title={data.mercury.name}
        textOverview={data.mercury.overview.text}
        textStructure={data.mercury.structure.text}
        textGeology={data.mercury.geology.text}
        source={data.mercury.overview.source}
        sourceName={data.mercury.overview.sourceName}
        rotationInfo={data.mercury.infos.rotation}
        revolutionInfo={data.mercury.infos.revolution}
        radiusInfo={data.mercury.infos.radius}
        tempInfo={data.mercury.infos.temperature}
        bgColor="bg-dark-cyan"
      />
    </>
  );
};

export default Mercury;
