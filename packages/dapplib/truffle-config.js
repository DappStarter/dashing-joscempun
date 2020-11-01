require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note predict unveil gloom clock foster twice'; 
let testAccounts = [
"0xee1aae6c3580aff91223a4b914df5e349c9e64380369be157bc882bcf3334818",
"0x6a94c65e337351590fd86ac5191a90106f3c805c5ba4c2c93d656e31dd813813",
"0x8c1a6ed428f1dc17e90b5e3e12bae0bce8a838ec9f23dcc06f1f8645c6b32443",
"0x24ab7f814c0a5eb1dde76d963224dde124f2771b09b7c383b9aa05a3056cdc41",
"0x85e732e3ec0f9dc2a30536029a6ac414d201a54115e7981cfdf9a6556174cd7f",
"0xbdc960b2236559390a86a012a10736b59474fe7f7e274d56ad2ea6b9ffc9eca2",
"0x78dcccc566761126af9a8aaaaf4a0a90ba7d6ad92ecfc7dcb5772f3710338dec",
"0x79c0c6379c1a0762bd75d783df642811c595eb8cb7d0ff6e65174c4d7b6cad4e",
"0x087a5f8cab5d5f735a4135cadb6fc5a3f2fe35dbea8c73ee8a047bdeb9ffe5cb",
"0x0a02ad3099f944a0aa8127c29d127a160a264a4ac212280619eb5c0ad60f5264"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
