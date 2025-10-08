import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("")

    const handleSearch = () => {
        onSearch(query);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center p-3 rounded-3">
                <input
                    type="text"
                    className="form-control w-60 w-md-50 w-lg-50 bg-light me-2 text-dark border-0 focus-ring focus-ring-warning" style={{ maxWidth: "600px" }}
                    placeholder="Search Recipe"
                    value={query} onChange={(e) =>
                        setQuery(e.target.value)}
                    required
                />
                <button type="submit" className="btn btn-warning text-dark fw-semibold px-2" onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;