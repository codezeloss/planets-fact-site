import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Jupiter = () => {
  return (
    <>
      <Head>
        <title>The planets | Jupiter</title>
        <meta name="description" content="Jupiter page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.jupiter.images.planet}
        imageStructure={data.jupiter.images.internal}
        imageGeology={data.jupiter.images.geology}
        title={data.jupiter.name}
        textOverview={data.jupiter.overview.text}
        textStructure={data.jupiter.structure.text}
        textGeology={data.jupiter.geology.text}
        source={data.jupiter.overview.source}
        sourceName={data.jupiter.overview.sourceName}
        rotationInfo={data.jupiter.infos.rotation}
        revolutionInfo={data.jupiter.infos.revolution}
        radiusInfo={data.jupiter.infos.radius}
        tempInfo={data.jupiter.infos.temperature}
        bgColor="bg-red"
      />
    </>
  );
};

export default Jupiter;
