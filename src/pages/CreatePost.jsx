import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CreatePost() {
  const [places, setPlaces] = useState([]);

  const [form, setForm] = useState({
    place: "",
    rating: "",
    image: "",
    description: "",
  });
  const navigate = useNavigate();
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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(places);
  return (
    <div className=" bg-background flex flex-col items-center mx-auto py-8">
      <h1 className="text-2xl text-text font-bold mb-4">Meu Site de Viagens</h1>

      <div className="flex flex-col items-center">
        <form className=" m-4 p-5 rounded w-full shadow-md border-black">
          <input
            type="text"
            name="place"
            value={form.place}
            onChange={handleChange}
            placeholder="Local"
            className="border w-full p-2 focus:outline-none resize-none"
          />

          <div>
            <input
              type="text"
              name="rating"
              value={form.rating}
              onChange={handleChange}
              placeholder="Dê uma avaliação de 1 a 5"
              className="p-2 border focus:outline-none w-full"
            />
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Insira a URL da imagem"
              className="p-2 border focus:outline-none w-full"
            />
            <textarea
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Escreva uma descrição do local"
              className="p-2 border focus:outline-none w-full"
            />

            <button
              onClick={handleSubmit}
              className="bg-secondary-button px-6 focus:outline-none hover:bg-black hover:text-white"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
