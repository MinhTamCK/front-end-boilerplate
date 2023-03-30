import { GetServerSideProps, NextPage } from "next";

import PostPageTemplate from "@/components/templates/PostPage";
import { SeoInfo } from "@/interfaces/base";

type IProps = {
  seoInfo: SeoInfo;
};

const HomePage: NextPage<IProps> = () => {
  return <PostPageTemplate />;
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  return {
    props: {
      seoInfo: {
        title: "post",
        description: "description",
        seoImage: "seoImage",
        keywords: "keywords",
      }
    },
  };
};

export default HomePage;
