import React, { useState } from 'react';
import './MiraculousMarketplace.css';

function DevToolSquare(props) {
  const { name, logo, description, chains, site, affiliateLink } = props;
  return (
    <div className="dev-tool-square" onClick={() => window.open(affiliateLink, '_blank')}>
      <img src={logo} alt={name} className="dev-tool-logo" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Operates on: {chains.join(', ')}</p>
      <a href={site} target="_blank">Learn more</a>
    </div>
  );
}

function MiraculousMarketplace() {
  const [devTools] = useState([
    {
      name: 'The Graph',
      logo: 'https://assets-global.website-files.com/6364e65656ab107e465325d2/637e69ad01e933f218693bf5_R4mv2md-MnCehqGhYgTFcu3TsE-lzwlBHhMnb7MUdQY.jpeg',
      description: "The Graph is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum. It makes it possible to query data that is difficult to query directly.",
      chains: ['Ethereum'],
      site: 'https://thegraph.com/en/',
      affiliateLink: 'https://thegraph.com/en/affiliate_id=12345'
    },
    {
      name: 'Hardhat',
      logo: 'https://assets-global.website-files.com/6364e65656ab107e465325d2/6381641b6a60932fb3c3c2d9_crsLQ2lVok-0X37hZ_7RSl62vTm5GRP0Ws4xyPt4E5I.jpeg',
      description: "Hardhat is a development environment for Ethereum software. It consists of different components for editing, compiling, debugging and deploying your smart contracts and dApps, all of which work together to create a complete development environment.",
      chains: ['Ethereum'],
      site: 'https://hardhat.org/',
      affiliateLink: 'https://hardhat.org/?affiliate_id=12345'
    },
    {
      name: 'Dev Tool 3',
      logo: '/path/to/devtool3-logo.png',
      description: 'A cutting-edge dev tool for building decentralized applications',
      chains: ['Ethereum', 'Tron'],
      site: 'https://devtool3.com',
      affiliateLink: 'https://devtool3.com?affiliate_id=12345'
    },
  ]);
  const [selectedChain, setSelectedChain] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const chainOptions = ['All', ...new Set(devTools.flatMap(devTool => devTool.chains))];

  const handleChainChange = event => {
    setSelectedChain(event.target.value === 'All' ? '' : event.target.value);
  };

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const filteredDevTools = selectedChain === ''
  ? devTools.filter(devTool => devTool.name.toLowerCase().includes(searchQuery.toLowerCase()))
  : devTools.filter(devTool => devTool.chains.includes(selectedChain))
  .filter(devTool => devTool.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <div>
      <header className="marketplace-header">
        <h1>Miraculous Marketplace</h1>
        <form>
          <input type="text" placeholder="Search..." onChange={handleSearch}/>
          <button type="submit">Go</button>
        </form>
      </header>
        <div className="chain-selector">
          <label htmlFor="chain-select">Chain:</label>
          <select id="chain-select" value={selectedChain} onChange={handleChainChange}>
            {chainOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="dev-tool-marketplace">
          {filteredDevTools.map(devTool => (
            <DevToolSquare
              key={devTool.name}
              name={devTool.name}
              logo={devTool.logo}
              description={devTool.description}
              chains={devTool.chains}
              site={devTool.site}
              affiliateLink={devTool.affiliateLink}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default MiraculousMarketplace;
  