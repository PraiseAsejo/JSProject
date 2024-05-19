# Project: Mint TheseNFTs

A simple JavaScript program to mint, list, and get the total supply of NFTs (Non-Fungible Tokens).

## Description

TheseNFTs is a basic NFT implementation using JavaScript. The program allows users to mint new NFTs by specifying attributes such as name, color, animal, and eyewear. It also provides functionalities to list all minted NFTs and get the total supply of NFTs.

## Getting Started

### Executing program

To run this program, you can use Programiz, an online IDE that can compile different programming languages. To get started, go to the Programiz JavaScript Editor website or any other Javascript compiler websie or application that you have.

Once you are on the Programiz JS editor website, copy and paste the following code into the the IDE.

const TheseNFTs = [];

function mintNFT (NFTname, NFTcolor, NFTanimal, NFTeyewear ) {
   const MyNFT = {
       "Name": NFTname,
       "Color": NFTcolor,
       "Animal": NFTanimal,
       "Eyewear": NFTeyewear
ac
}
TheseNFTs.push(MyNFT);
}

function listNFTs () {
    for (let nft = 0; nft < TheseNFTs.length; nft++) {
        console.log("Minted NFT #" + (nft + 1) + ":");
        console.log("Name: " + TheseNFTs[nft].Name)
        console.log("Color: " + TheseNFTs[nft].Color)
        console.log("Animal: " + TheseNFTs[nft].Animal)
        console.log("Eyewear: " + TheseNFTs[nft].Eyewear)
    }
}

function getTotalSupply() {
console.log(TheseNFTs.length + " NFTs");
}

mintNFT("Oggy","Blue","Cat","Glasses");
mintNFT("Darwin","Orange","Fish","Shutter Shades");
mintNFT("Spike","Gray","Dog","Monocle");
listNFTs();
getTotalSupply();

To compile the code, simply click on the Run button on the middle and see your output. You can create another NFT with its specified properties and call the MintNFT function.

## Authors

Praise Asejo
(With help from Metacrafters Chris)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
