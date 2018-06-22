# MonetaryCoin Forging DApp

## An interface to allow users to conveniently use the MCoin forging mechanism.


### Additional info

[MonetaryCoin Homepage](https://MonetaryCoin.org)

[MonetaryCoin smart contracts](https://github.com/Monetary-Foundation/MonetaryCoin)

[White Paper](https://github.com/Monetary-Foundation/MonetaryCoin-White-Paper/blob/master/Monetary%20Protocol%20Whitepaper.pdf)


### Core components

- [ ] [Web3.js](https://github.com/ethereum/web3.js/) Ethereum JavaScript API V1.0 (beta)
- [ ] [React-boilerplate](https://github.com/react-boilerplate/react-boilerplate) as a wrapper of React JS, Redux, Saga, Reselect, ImmutableJS and more
- [ ] [Ant Design](https://github.com/ant-design/ant-design) React js components
- [ ] [Webpack 3](https://github.com/webpack/webpack) - A bundler for javascript and friends.
- [ ] Many others, See [package.json](https://github.com/PaulLaux/eth-hot-wallet/blob/master/package.json)


### API Providers

- [ ] [Infura.io](https://infura.io/) as JsonRPC provider (fallback for non-web3 browsers)


### Features

- [x] Forging mechaisem interface




#### npm scripts for MonetaryCoin PreDistribution-DApp:

`npm run build:dll` to build webpack DLL required for development.

`npm run start` to start development mode. Go to http://localhost:3002 - changes will be reflected in realtime using hot module reloading.

`npm run build` to create bundle for publishing

`npm run generate` to create new components / containers using the generator.

For more documentation regarding the react setup see [react-boiledplate docs](https://eth-hot-wallet.com/docs/react-boilerplate/) or the official repo.

After build, webpack monitor will generate stats about bundle size:


![eth-hot-wallet webpack-monitor](https://paullaux.github.io/eth-hot-wallet/docs/images/webpack-monitor.JPG)

## License

This project is licensed under the MIT license, Copyright (c) 2018 The Monetary Foundation For more information see `LICENSE.md`.
