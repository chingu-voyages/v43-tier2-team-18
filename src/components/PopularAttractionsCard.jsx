import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function PopularAttractionsCard({ attraction }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div
      className="relative min-w-[250px] max-w-[300px] text-zinc-900 text-left border border-transparent rounded-xl bg-white dark:text-white dark:bg-zinc-900 cursor-pointer"
      onClick={toggleModal}
    >
      <img
        className="w-full h-[200px] border-t border-transparent rounded-t-xl"
        src={attraction.images}
      />
      <h4 className="my-2 mx-4 font-semibold text-xl">{attraction.name}</h4>
      <p className="font-light text-sm m-4 mt-0 truncate">
        {attraction.description}
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Attraction Details"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:max-w-3xl mx-auto bg-white p-8 rounded-md shadow-lg overflow-hidden z-50 dark:bg-zinc-800 dark:text-gray-300"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-40"
      >
        <img
          className="w-full h-[250px] lg:h-[300px] object-cover border-t border-transparent rounded-t-xl"
          src={attraction.images}
        />
        <h4 className="my-2 font-semibold  text-xl">{attraction.name}</h4>
        <p className="font-light text-sm my-4 mt-0">{attraction.description}</p>
        <button
          onClick={toggleModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default PopularAttractionsCard;
