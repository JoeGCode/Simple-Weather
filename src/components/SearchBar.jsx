/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GEOCODING_API_URL } from "../utils/constants";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ setLocation }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchSuggestions = async (query) => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await fetch(
          `${GEOCODING_API_URL}?name=${query}&count=5&language=en&format=json`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        setSuggestions(data.results || []);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error(error);
        }
      }
    };

    fetchSuggestions(search);

    return () => {
      controller.abort();
    };
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const clearInputs = () => {
    setSearch("");
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() && suggestions.length > 0) {
      setLocation(suggestions[0]);
      clearInputs();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    clearInputs();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative mb-8">
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a location..."
          className="w-full py-2 px-4 pr-10 rounded-full bg-white bg-opacity-40 placeholder-gray-800 focus:outline-none focus:ring-white focus:ring-2"
        />
        <button
          type="submit"
          className="absolute text-white right-2 top-1/2 -translate-y-1/2"
        >
          <FiSearch className="w-6 h-6" />
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg mt-2 shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-sm sm:text-base"
              >
                {suggestion.name}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
};

export default SearchBar;
