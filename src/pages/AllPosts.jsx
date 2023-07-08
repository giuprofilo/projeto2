import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [reload, setReload] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await axios.get(
        "https://webdev103.cyclic.app/travelsite"
      );
      setPlaces(response.data);
    }

    fetchPlaces();
  }, [reload]);
  return (
    <div className="flex flex-col  gap-4 sm:grid sm:grid-cols-2 sm:gap-10 mt-7 shadow-md border-black">
      {places.map((place) => {
        return (
          <div
            key={place._id}
            className="p-4 bg-white rounded-lg shadow border-none min-h-[50px]"
          >
            <h2 className="text-xl text-center">{place.place}</h2>
            <p className="w-90 mx-20">
              <img src={place.image} />
            </p>
            <p className="text-center">Avaliação:{place.rating}</p>
            <p className="text-center">Descrição: {place.description}</p>
            <Link to={`/places/${place._id}`}>
              <button className="text-white bg-primary-button hover:bg-slate-400 px-4 py-2 rounded">
                Editar
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
