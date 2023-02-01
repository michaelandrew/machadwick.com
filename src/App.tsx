import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { Helmet } from 'react-helmet';

import { Title } from './components';
import { Layout } from './components';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Karla', 'Montserrat']
      }
    });
  }, []);

  const title = "Michael Andrew Chadwick";
  const description = "Software & UI Developer."

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Layout>
        <Title 
          title={title}
          description={description} />
      </Layout>
    </>
  )
}

export default App