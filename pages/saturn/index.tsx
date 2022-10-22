import Head from "next/head";
import Planet from "../../components/Planet";
import data from "../../constants/data";

const Saturn = () => {
  return (
    <>
      <Head>
        <title>The planets | Saturn</title>
        <meta name="description" content="Saturn page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Planet
        imageOverview={data.saturn.images.planet}
        imageStructure={data.saturn.images.internal}
        imageGeology={data.saturn.images.geology}
        title={data.saturn.name}
        textOverview={data.saturn.overview.text}
        textStructure={data.saturn.structure.text}
        textGeology={data.saturn.geology.text}
        source={data.saturn.overview.source}
        sourceName={data.saturn.overview.sourceName}
        rotationInfo={data.saturn.infos.rotation}
        revolutionInfo={data.saturn.infos.revolution}
        radiusInfo={data.saturn.infos.radius}
        tempInfo={data.saturn.infos.temperature}
        bgColor={data.saturn.color}
      />
    </>
  );
};

export default Saturn;
