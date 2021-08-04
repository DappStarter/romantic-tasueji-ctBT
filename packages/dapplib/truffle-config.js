require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind method inflict private fold split'; 
let testAccounts = [
"0xd7c6e77baa36719e34bca82c1943901e174c4545da5d049113f734bd21062419",
"0x946f5f6d0190634ca8af0889569bdd0195af873b36a1026a9dbcea72723e79dc",
"0x84fa6efcfac0b64808fee33a9e81fd051d4af2c8bc54f0d55ceb174b4fd57a0e",
"0x79a9b347f7c59ed2746a07b66469347cb7ee653fbf4ad0a0dc5927a89367d99d",
"0x614ea46a848076dab1d0d0b68a2376923e208402204969344027e77228fffd01",
"0x6b01ffcd24f0384e8c29818b24e8a85b8760fc32e6bf147e8adc116cd5526fdc",
"0x49616b10291ffa599179aa173c2629c4544ba30c2abb2da664502d7448868d8d",
"0x39ddc21499b125f3f5099950d392ea2bf9f9afa87cab5cabef7a235f3556eec3",
"0x83c614c5a35d4c1e20fe3a3cfbf195b76f0bd5915b4f517349acdaeced7fdb89",
"0x4bafaa5fb583dfbdd0e095114478e5a6b887853feed0a196ea7178d835ced193"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

