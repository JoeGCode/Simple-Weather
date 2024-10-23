import { FiMapPin } from "react-icons/fi";

/* eslint-disable react/prop-types */
const LocationDetails = ({ location }) => {
  return (
    <>
      {location && (
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-semibold">{location.name}</h2>
          <div className="flex items-center">
            <FiMapPin className="mr-2" />
            <span>
              {location.name}, {location.country}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationDetails;
