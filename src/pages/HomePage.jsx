import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TravelSite() {
  const [places, setPlaces] = useState([]);

  const [form, setForm] = useState({
    place: "",
    rating: "",
    image: "",
    description: "",
  });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await axios.get(
        "https://webdev103.cyclic.app/travelsite"
      );
      setPlaces(response.data);
    }

    fetchPlaces();
  }, [reload]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/travelsite",
        form
      );

      setReload(!reload);
      setForm({
        place: "",
        rating: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(places);

  return (
    <div className=" bgflex flex-col items-center mx-auto py-8">
      <h1 className="text-2xl text-text font-bold mb-4 text-center">
        Meu Site de Viagens
      </h1>

      <div className="flex flex-col items-center">
        <div className=" flex gap-4 mb-4">
          <Link to="/all">
            <button className="bg-primary-button px-4 py-2 rounded shadow text-white hover:bg-slate-600 hover:text-white">
              Todos os locais
            </button>
          </Link>

          <Link to="/create">
            <button className="bg-primary-button text-white px-4 py-2 rounded shadow hover:bg-slate-600 hover:text-white">
              Adicionar um local
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-10 mt-7 shadow-lg border-black ">
          {places.map((place) => {
            return (
              <div
                key={place._id}
                className="p-4 bg-white rounded-lg shadow border-none min-h-[50px]"
              >
                <h2 className="text-xl text-center">{place.place}</h2>
                <p className="w-80 mx-14">
                  <img src={place.image} />
                </p>
                <p className="text-center">Avaliação:{place.rating}</p>
                <p className="text-center">Descrição: {place.description}</p>
                <Link to={`/places/${place._id}`}>
                  <button className="text-white  bg-primary-button items-end px-4 py-2 rounded">
                    Editar
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
