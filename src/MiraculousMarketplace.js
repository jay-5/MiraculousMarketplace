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
      name: 'Dev Tool 1',
      logo: '/path/to/devtool1-logo.png',
      description: 'A powerful dev tool for building DApps',
      chains: ['Ethereum', 'EOS'],
      site: 'https://devtool1.com',
      affiliateLink: 'https://devtool1.com?affiliate_id=12345'
    },
    {
      name: 'Dev Tool 2',
      logo: '/path/to/devtool2-logo.png',
      description: 'An easy-to-use dev tool for creating smart contracts',
      chains: ['Ethereum'],
      site: 'https://devtool2.com',
      affiliateLink: 'https://devtool2.com?affiliate_id=12345'
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
  const chainOptions = ['All', ...new Set(devTools.flatMap(devTool => devTool.chains))];

  const handleChainChange = event => {
    setSelectedChain(event.target.value);
  };

  const filteredDevTools = selectedChain === 'All'
    ? devTools
    : devTools.filter(devTool => devTool.chains.includes(selectedChain));
    return (
      <div>
        <header className="marketplace-header">
          <h1>Miraculous Marketplace</h1>
          <form>
            <input type="text" placeholder="Search..." />
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
  