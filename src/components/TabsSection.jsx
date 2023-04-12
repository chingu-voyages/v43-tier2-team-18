import { useState, useEffect } from "react";
import Weather from "./Weather";
import { useNavigate, useLocation } from "react-router-dom";

// working with redux store
import { store } from "../app/store";
import { addToFavorites, clearFavorites } from "../features/userFavoritesSlice";
import { useDispatch, useSelector } from "react-redux";

const TabsSection = ({ destination }) => {
  const [isValidated, setIsValidated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [message, setMessage] = useState(false);
  const favorites = useSelector((state) => state.auth.favoritesState.favorites);
<<<<<<< HEAD
=======

>>>>>>> de09a114dec870c0e9968a3acadc8059c513bc13

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< HEAD
  console.log(location);
=======
>>>>>>> de09a114dec870c0e9968a3acadc8059c513bc13
  const from = location.pathname;

  useEffect(() => {
    const isLoggedin = store.getState().auth.loginState.isLoggedIn;
    if (isLoggedin) {
      const currentUser = store.getState().auth.loginState.currentUser;
      setLoggedInUser(currentUser);
      setIsValidated(true);
    }
  }, []);

  const handleClick = () => {
    if (isValidated) {
      dispatch(addToFavorites(destination.name));
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 1000);
    } else {
      navigate("/v43-tier2-team-18/login", {
        state: { message: "You must login first", from: from },
      });
    }
  };

  return (
    <section className="flex flex-col-reverse md:px-12 lg:px-24 md:flex-row xs:grid-cols-1 md:grid-cols-6 gap-8 px-6 py-10 mx-auto max-w-6xl text-gray-800 dark:bg-black dark:text-gray-100">
      <div className="col-span-3 text-left  md:text-lg">
        <h3 className="py-2 font-semibold text-2xl lg:text-3xl">
          Culture and History
        </h3>
        <p className="leading-6">{destination.culture}</p>

        <div>
          <h4 className="text-2xl font-semibold mt-8">Popular cities</h4>
          {destination.popularCities.map((city) => (
            <span key={city} className="text-xl">
              {city}&nbsp;
            </span>
          ))}
        </div>
      </div>
      <div className="min-w-[250px] md:min-w-[300px] p-8 w-full bg-blue-50 text-center dark:bg-blue-900 rounded-lg text-xl">
        <p className="text-left">{destination.description}</p>
        <Weather destination={destination} />
        <button
          className="px-5 py-3 bg-blue-600 text-white rounded-xl mt-5"
          onClick={handleClick}
        >
          Add to favorites
        </button>

        {message && (
          <p className="px-2 py-1 bg-green-100 text-green-500 mt-2">
            {favorites.includes(destination.name)
              ? "Already in Favorites!"
              : "Successfully added!"}
          </p>
        )}
      </div>
    </section>
  );
};

export default TabsSection;
