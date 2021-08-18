import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";

function ListingsContainer({search}) {

  const [listings, setListings] = useState([]);
  const [sort, setSort] = useState("id");
  
  useEffect(()=> {
    fetch("http://localhost:6001/listings").then(r=> r.json()).then(setListings)
  }, [])

  function onDelete(listingId) {
    const newListings = listings.filter(listing => listing.id !== listingId);
    setListings(newListings);
  }

  function addListing(newListing) {
    const newListings = [newListing, ...listings];
    setListings(newListings)
  }

  const listingCards = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => {
      if (sort === "id") {
        return a.id - b.id;
      } else {
        return a.location.localeCompare(b.location);
      }
    })
    .map(listing => (
      <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>
    ));

  return (
    <main>
      <ListingForm addListing={addListing}/>
      <button onClick={() => setSort("id")}>Sort by Default</button>
      <button onClick={() => setSort("location")}>Sort by Location</button>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
