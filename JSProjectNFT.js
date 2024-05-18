const TheseNFTs = [];

function mintNFT (NFTname, NFTcolor, NFTanimal, NFTeyewear ) {
   const MyNFT = {
       "Name": NFTname,
       "Color": NFTcolor,
       "Animal": NFTanimal,
       "Eyewear": NFTeyewear
    
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
