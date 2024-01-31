// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RealEstateToken is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIdCounter;

    uint256 private listingPrice;

    mapping(uint256 => PropertyDetails) private propertyDetails;

    mapping(uint256 => address[]) private ownershipHistory;

    struct PropertyDetails {
        string location;
        uint256 size;
        // Add other property details as needed
    }

    event PropertyPurchased(
        address indexed buyer,
        address indexed seller,
        uint256 indexed tokenId,
        uint256 price
    );

    constructor(uint256 price) ERC721("DreamToken", "DRT") {
        // listingPrice = price * 10 ** 18;
    }

    function mint(string memory location, uint256 size) external onlyOwner {
        _safeMint(msg.sender, tokenIdCounter.current());
        propertyDetails[tokenIdCounter.current()] = PropertyDetails(
            location,
            size
        );
        ownershipHistory[tokenIdCounter.current()].push(owner());
        tokenIdCounter.increment();
    }

    function setListingPrice(uint256 newPrice) external onlyOwner {
        listingPrice = newPrice;
    }

    function purchaseProperty(uint256 tokenId) external payable {
        require(
            msg.value >= listingPrice,
            "Insufficient funds to purchase the property"
        );
        address seller = ownerOf(tokenId);
        address buyer = msg.sender;

        _transfer(seller, buyer, tokenId);

        ownershipHistory[tokenId].push(buyer);

        payable(seller).transfer(msg.value);

        emit PropertyPurchased(buyer, seller, tokenId, msg.value);
    }

    function getPropertyDetails(
        uint256 tokenId
    ) external view returns (string memory, uint256) {
        return (
            propertyDetails[tokenId].location,
            propertyDetails[tokenId].size
        );
    }

    function getOwnershipHistory(
        uint256 tokenId
    ) external view returns (address[] memory) {
        return ownershipHistory[tokenId];
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
