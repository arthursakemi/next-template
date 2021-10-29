import Head from 'next/head';
import { useContext } from 'react';

import { TemplateContext } from '../context/ContextTemplate';

import Header from '../components/Header';

const Home: React.FC = () => {
  const { demoState } = useContext(TemplateContext);

  return (
    <div>
      <Head>
        <title>Next Template</title>
      </Head>
      <main>
        <Header />
        <h3>Context</h3>
        <h4>{demoState}</h4>
      </main>
    </div>
  );
};

export default Home;
