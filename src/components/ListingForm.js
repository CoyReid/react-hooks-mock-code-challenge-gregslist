import { useState } from "react";

function ListingForm({addListing}) {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {description, image, location};
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(newListing => {
            addListing(newListing)
        });
        setDescription("")
        setImage("")
        setLocation("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <label>Image:</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
            <label>Location:</label>
            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)}></input>
            <button type="submit">Add Listing</button>
        </form>
    )
}

export default ListingForm;