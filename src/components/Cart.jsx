import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiYourtraveldottv } from "react-icons/si";

// working with redux store
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../features/userFavoritesSlice";

const Cart = () => {
  const favorites = useSelector((state) => state.auth.favoritesState.favorites);

  const dispatch = useDispatch();

  return (
    <div className="absolute right-8 top-16 bg-gray-200 text-zinc-800 w-56 rounded-lg z-50">
      <ul>
        {/* CHANGE THE FAVORITES CART TO BE A SET IN1EAD OF A LIST */}
        {favorites.length <= 0 && (
          <li className="py-2 px-3 text-red-400 bg-red-50 rounded-lg">
            Favorites is currently empty!
          </li>
        )}
        {favorites.map((item, index) => (
          <li
            className={`${
              index !== favorites.length - 1 && "border-b border-zinc-500"
            } flex justify-between items-center py-2 px-3`}
            key={index}
          >
            <span className="flex items-center gap-1">
              <span className="text-blue-600">
                <SiYourtraveldottv />
              </span>
              {item}
            </span>
            <span
              className="text-red-500 text-lg bg-zinc-300 p-2 rounded-full cursor-pointer"
              onClick={() => {
                dispatch(removeFromFavorites(item));
              }}
            >
              <RiDeleteBin5Line />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
