import { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
};

const CustomHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.png" type="image/png" />
      <meta
        name="description"
        content="Best eccomerce site on the planet"
      ></meta>
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/goloop-storage.appspot.com/o/loading.png?alt=media&token=d883ec3c-f3c7-428f-a7cb-354ab2c8c73d"
      ></meta>
    </Head>
  );
};

export default CustomHead;
