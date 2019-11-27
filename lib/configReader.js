/**
 * Cryptonote Node.JS Pool
 * https://github.com/dvandal/cryptonote-nodejs-pool
 *
 * Configuration Reader
 **/

// Load required modules
let fs = require('fs');

// Set pool software version
global.version = "v2.0.0";

/**
 * Load pool configuration
 **/
 
// Get configuration file path
let configFile = (function(){
    for (let i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();

// Read configuration file data
try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

/**
 * Developper donation addresses -- thanks for supporting my works!
 **/
 
let donationAddresses = {
    BTC: '1EC1qw82VTy49hUwW9RrAJQ4aQNrVXWykZ',
    BCH: 'qzg2a63ljawvfrwu8pvxuemkm5x0l8d4gcz3l65f8a',
    ETH: '0x62bf4783D69e10AAf79fDCE784E401527fc2f362',
    LTC: 'LMxCZ7dPDFwjHvvpBo3bjHzFV4xde6u4fJ',
    GRFT: 'G6f5EVxpWfxboQet9vQzzfALec2tquVmZFTUg6HHcgw6Joq93n8knqNXvB6exvybdNgE5Z72swb5ETWLn8F7DjW51KJxGu1',
    MSR: '5hnZbtjTm8s93ZsxTC1D2CAKmBPTpHPya2pDMzwkj2gt7EdG6UnhwtaLUaGZWz2zqRSBw2Ti4c6ERY7Ex6C1ez8t8oUw15k',
    XMR: '4AQTBkmpJ22Qr5bdQJbTBe3TRFwxBQ8foNko6QowgZRuLuA8L7bwKKc7uhYvGGMDSqVBm4cDg3Vg8YfGyBHMhKZnFzjwffC',
    SUMO: 'Sumoo6V9ifjDTqP2khmLf4MgufSQnYFUo4EkahbYyxsWRbvQdKy1UCe2Gsa9yHx6x99KDGtRVKGJ6eHf9MhHZtX12TapJbBaj4f',
    XHV: 'hvxy5NUfn9rbrKYEaTpJPRPfFv5WhzJhG9q9fgu1cgvz3Q76m6cfemC3AbRAvM66rafjWFWHDFKHw5s9TbbESHiU22f9p2c6SL',
    AEON: 'WmtQQgGdyLLd4Y6nMzg7zA1dSR7EPWzaKcRrvwm45YPQNfaQxWcUCsWWEM9RHic3f2DcySH59RB6mJwiC7aYiXFM1KAh6RCmc',
    XVG: 'DBCWKSizEftHrmM5zBsLPhR3xZ2Z5t6WsT',
    BCN: '273kD7T92azb4uVVWRcUp2EvzFJ8nWswrAhUWcmPbParb73yzqYDeHJbdrhaVAuvWXKkbky9dUXitND4bT9x9Uv57brkves',
    TRTL: 'TRTLv3zyAX1Y4JTajk9jdDXsdqU7LUu9ZPRgnWKKPKtQcxBciC2Nvy183EymQUxsmAMfCr2ehbu3fZQicqo2LddaC8by3sR2ZZL',
    TKTS: 'TktSXcoU3c2ZyzVHU7dsbF2W6HysTDnG8RqGrDb2AYsMcFCazGztPe25AMhKHaWnLxFGTYJL1mLPiY4UREU2qJ7tCuY5A42Vmvx',
    GNS: 'gnskz1GkVQbH9rFwKUk76qU7gaXBc93wkYCVfSNiA48gT1jJpgwbgnUe9ENBq82mRjBDCjzmGV6A5CB9CXyJDYDc7roppNuRP5',
    BTCMZ: 'btcmzQ5wCDDTb51Pi5BmRcRZLebnaMt6dgFkK7gRj2bT3ij5kabFYCYat9EnXX7Du4JyG76b6wfJP1CkZegGQMFs7MtLs1UmMiX',
    WRKZ: 'WrkzPq8rwtJCT8uHmbiEkyPLHeQ9RzvUEE1icmatrUtbMvjgfDnKi4FXER9qRvMd8o4hERXuGnQDUd2qc8xmaPet58WxNE34ZJ',
    ETN: 'etnkDCNesZt2FwRuBg8fX7evrvXqixt2yeiEBcrfJTgLTEPDpiSqTGDUMZAYRP8JujMGQiqbxCHnvhMLumJN88tB1ME5rMBoB9',
    XCY: 'XCY1XAiNE7VbJqDwbGsLnDBcqt7i5ovZoefRYpAxPCpfJrAKoTRySBTMp98Ci4jm4sZXd37B1jmgkC1ieH4vwCZR1qf2Aki2pN',
    VGC: 'VEonoxyAwvse6BtsHWkEt48WbZKLiMa8w9UnLT3T7hXrGA342VHhCDQewjL9PFXZnzRF9ZVQMogajVySP94NFjA86ae5cTqVXS',
    WTIP: 'WtipUXAZUdXGFyRUvFMUbVFR2GNtzCTMr45sWeJbXFMiKa6NHJg4uazdBzR5XReeWG6nGAd118X4Pgwi2biYqmjy5uYi4TrSFo',
    BBS: 'fyTcqvMHg6HQ3ED2LjvRoCcLmwLXbrxGofSh1QjrrQ9RaYGUxJcHkdVBi71J7CYH2PhjojKL7JBN6c78LSkyDkb22fU21V9U4',
    XDN: 'ddd9HAThrBgaABF7ur2bkrcFzaby1X7KNhc4Hqjtgd8MN4Fqw2E2XU254UbpKpddmU8ASU5SrVvm2S8frj8DaCU826jwsNXs3',
    XLA: 'Se3PEajKCdT1ssQLFXdELWikih1KMRN7R89h75sii8h1LMRP9R8BCRGhh2Z3J3AM5p6qVPEZxrpQ1DwHZbfuiGw21Pa7z2XRZ',
    ITNS: 'iz4JcPMMTxuig9FaBSyt5iRMiNyPyobeU7aqmZsw69cFMm2KL9DsV72Uxgkqggyn5TjYVZ9JU8sQ2A5RebLRANVL2Mi3H7VBz',
    BTCP: 'b18BLo9XEJNdV6egpDZ1xZQw6MrxvbH6wWb',
    LOKI: 'L92LxsVYeiP176zfU8huNcEkzdqWGdWRd6Tj73tCg3EXZV5kWtdZdUsRrfULT5bxJr5BLQmiFv7pz8murYgxu42kSA9MrS2',
    RYO: 'RYoLsiinLRuYifA26f5DopTnB6h7ngsSGSMvkA2FugMPKAuK2yvpw89hTAZDe1QFpnNDJXfSMHi3LhUsJYjDp9DFXd9xVLuzQ3k',
    SAFE: 'RtgK52eVVVwS5XZLsAET4TxY9SEcahFGTy',
    ZCL: 'RtgK52eVVVwS5XZLsAET4TxY9SEcahFGTy',
    DEGO: 'dg4yszGBrNZ9R6Zcg8P8g5V3B9Ze7bsxqCostqSD54GXNWmA11r4Ma99f9YpXyu4PoVnFDCx5snfVFw4EzrFWcLL1udis88BN'
};

global.donations = {};

global.devFee = config.blockUnlocker.devDonation || 0.2;
// WORKAROUND: If 'devDonation' is set to 0%, We need to explicitly set 0% or it will default to 0.2%
if (config.blockUnlocker.devDonation === 0)
    global.devFee = 0;

let wallet = donationAddresses[config.symbol.toUpperCase()];
if (devFee && wallet)
    global.donations[wallet] = devFee;
