import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Uranus = () => {
  return (
    <>
      <Head>
        <title>The planets | Uranus</title>
        <meta name="description" content="Uranus page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.uranus.images.planet}
        imageStructure={data.uranus.images.internal}
        imageGeology={data.uranus.images.geology}
        title={data.uranus.name}
        textOverview={data.uranus.overview.text}
        textStructure={data.uranus.structure.text}
        textGeology={data.uranus.geology.text}
        source={data.uranus.overview.source}
        sourceName={data.uranus.overview.sourceName}
        rotationInfo={data.uranus.infos.rotation}
        revolutionInfo={data.uranus.infos.revolution}
        radiusInfo={data.uranus.infos.radius}
        tempInfo={data.uranus.infos.temperature}
        bgColor="bg-cyan"
      />
    </>
  );
};

export default Uranus;
