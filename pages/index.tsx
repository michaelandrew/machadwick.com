import Title from '../components/title'

import config from '../config'

const Home = () => (
  <>
    <Title 
      title={config.siteMetadata.title} 
      description={config.siteMetadata.description}
    ></Title>
  </>
)

export default Home