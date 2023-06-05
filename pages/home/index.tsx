import { GetServerSideProps, NextPage } from "next";

import HomePageTemplate from "@/components/templates/HomePage";
import { SeoInfo } from "@/interfaces/base";

type IProps = {
  seoInfo: SeoInfo;
};

const HomePage: NextPage<IProps> = () => {
  return <HomePageTemplate />;
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  return {
    props: {
      seoInfo: {
        title: "Web3 File",
        description:
          "Web3 File is the home for all your files, saved on ipfs peer-to-peer (p2p) networking",
        seoImage: "seoImage",
        keywords: "web3, upload file",
      },
    },
  };
};

export default HomePage;
