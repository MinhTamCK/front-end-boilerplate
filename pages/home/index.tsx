import { GetServerSideProps, NextPage } from "next";

import HomePageTemplate from "@/components/templates/HomePage";
import { Post } from "@/interfaces/post";
import { getPosts } from "@/services/api/post";

type IProps = {
  seoInfo: {
    title: string;
    description: string;
    seoImage: string;
    keywords: string;
  };
  posts: Post[];
};

const HomePage: NextPage<IProps> = ({ posts }) => {
  return <HomePageTemplate posts={posts} />;
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const posts = await getPosts();

  return {
    props: {
      seoInfo: {
        title: "string",
        description: "string",
        seoImage: "string",
        keywords: "string",
      },
      posts,
    }, // will be passed to the page component as props
  };
};

export default HomePage;
