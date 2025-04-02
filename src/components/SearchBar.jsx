/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TbLoader2 } from "react-icons/tb";
import { GEOCODING_API_URL } from "../utils/constants";

const SearchBar = ({ setLocation }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchSuggestions = async (query) => {
      if (query.length < 3) {
        setSuggestions([]);
        setLoadingSearch(false);
        return;
      }
      try {
        setLoadingSearch(true);
        const response = await fetch(
          `${GEOCODING_API_URL}?name=${encodeURIComponent(
            query,
          )}&count=5&language=en&format=json`,
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) {
          throw new Error(
            "Failed to get location suggestions! Status: " + response.status,
          );
        }
        const data = await response.json();
        setSuggestions(data.results || []);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error(error);
        }
      } finally {
        setLoadingSearch(false);
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

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion);
    clearInputs();
  };

  return (
    <>
      <div className="relative mb-4">
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for a location..."
          className="w-full rounded-full bg-white bg-opacity-40 px-4 py-2 pr-10 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        />
        {loadingSearch && (
          <TbLoader2
            size={24}
            className="absolute right-3 top-2 animate-spin"
          />
        )}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer px-4 py-2 text-sm text-gray-800 transition duration-150 hover:bg-purple-200 sm:text-base"
              >
                {suggestion.name}
                {suggestion.admin1 ? `, ${suggestion.admin1}` : ""}
                {suggestion.country ? `, ${suggestion.country}` : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
