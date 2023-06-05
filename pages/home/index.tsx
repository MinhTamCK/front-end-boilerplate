import { GetServerSideProps, NextPage } from "next";

import HomePageTemplate from "@/components/templates/HomePage";
import { SeoInfo } from "@/interfaces/base";
import usePostStore from "@/stores/post";

type IProps = {
  seoInfo: SeoInfo;
};

const HomePage: NextPage<IProps> = ({ posts }) => {
  const setPosts = usePostStore(state => state.setPosts);
  setPosts(posts);
  return <HomePageTemplate />;
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  return {
    props: {
      seoInfo: {
        title: "Web3 Photo",
        description: "Web3 Photo is the home for all your files, saved on ipfs",
        seoImage: "seoImage",
        keywords: "web3, upload file",
      },
    },
  };
};

export default HomePage;
