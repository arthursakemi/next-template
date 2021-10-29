import Head from 'next/head';

import Header from '../components/Header';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Next Template</title>
    </Head>
    <Header />
    <main>
      <h1>Next Template</h1>
    </main>
  </div>
);

export default Home;
