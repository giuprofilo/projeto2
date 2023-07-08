import { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

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

        <div className="flex gap-4 mb-4">
          <button className="bg-primary-button px-4 py-2 rounded shadow hover:bg-slate-600 hover:text-white">
            Todos os locais
          </button>
          <button className="bg-primary-button px-4 py-2 rounded shadow hover:bg-slate-600 hover:text-white">
            Respondidas
          </button>
          <button className="bg-primary-button px-4 py-2 rounded shadow hover:bg-slate-600 hover:text-white">
            Seja o primeiro
          </button>
        </div>

        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-10 mt-7 shadow-md border-black">
          {places.map((place) => {
            return (
              <div key={place._id}>
                <h2>{place.place}</h2>
                <p className="w-80">
                  <img src={place.image} />
                </p>
                <p>Avaliação:{place.rating}</p>
                <p>Descrição: {place.description}</p>
                <Link to={`/places/${place._id}`}>
                  <button className="text-white bg-primary-button px-4 py-2 rounded">
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

{
  /* //   <div className=" bg-background flex flex-col items-center mx-auto py-8">
//     <h1 className="text-2xl text-text font-bold mb-4">Meu Site de Viagens</h1>

//     <form
//       onSubmit={handleAddPlace}
//       className=" flex border m-4 p-5 rounded w-full shadow-md"
//     >
//       <input
//         type="text"
//         name="localInput"
//         className="border rounded px-4 py-2 mr-2 "
//         placeholder="Local Turístico"
//         required
//       />
//       <div className="flex items-center">
//         <label className="mr-2">Avaliação:</label>
//         <StarRating value={0} onChange={handleRatingChange} />
//         <input
//           type="hidden"
//           id="avaliacaoInput"
//           name="avaliacaoInput"
//           value=""
//         />
//       </div>
//       <input
//         type="file"
//         name="fotoInput"
//         className="border rounded px-4 py-4 mr-2"
//         required
//       />
//       <textarea
//         name="comentarioInput"
//         className="border rounded px-4 py-2 mr-2"
//         placeholder="Comentário"
//         required
//       ></textarea>
//       <button
//         type="submit"
//         className="text-white bg-primary-button px-4 py-2 rounded"
//       >
//         Adicionar
//       </button>
//     </form>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {places.map((place, index) => (
//         <div key={index} className="border rounded p-4">
//           <img src={place.foto} alt={place.local} className="w-full mb-2" />
//           <h2 className="text-lg font-semibold mb-2">{place.local}</h2>
//           <p className="mb-2">Avaliação: {place.avaliacao}</p>
//           <p className="mb-2">{place.comentario}</p>
//           <button
//             className=" bg-secondary-button text-white px-4 py-2 rounded mr-2"
//             onClick={() => handleDeletePlace(index)}
//           >
//             Excluir
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
//  ); */
}
