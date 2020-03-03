import Layout from "../src/components/Layout/Layout";
import Head from "next/head";
import { FormLayout } from "../src/components/Layout/FormLayout";
import { withRedux } from "../src/lib/withRedux";

const Index = () => (
  <>
    <Head>
      <title key="title">Self Frontend Challenge</title>
    </Head>
    <Layout>
      <FormLayout />
    </Layout>
  </>
);

export default withRedux(Index);
