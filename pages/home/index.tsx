import { GetServerSideProps, NextPage } from "next";

import HomePageTemplate from "@/components/templates/HomePage";
import { SeoInfo } from "@/interfaces/base";
import { Post } from "@/interfaces/post";
import { getPosts } from "@/services/api/post";
import usePostStore from "@/stores/post";

type IProps = {
  seoInfo: SeoInfo;
  posts: Post[];
};

const HomePage: NextPage<IProps> = ({ posts }) => {
  const setPosts = usePostStore(state => state.setPosts);
  setPosts(posts);
  return <HomePageTemplate />;
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const posts = await getPosts();

  return {
    props: {
      seoInfo: {
        title: "home",
        description: "description",
        seoImage: "seoImage",
        keywords: "keywords",
      },
      posts,
    },
  };
};

export default HomePage;
