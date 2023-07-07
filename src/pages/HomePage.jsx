import { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";

function TravelSite() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await axios.get(
        "https://webdev103.cyclic.app/travelsite"
      );
      setPlaces(response.data);
    }

    fetchPlaces();
  }, []);

  console.log(places);

  // const handleAddPlace = (e) => {
  //   e.preventDefault();

  //   const localInput = e.target.elements.localInput.value;
  //   const avaliacaoInput = e.target.elements.avaliacaoInput.value;
  //   const fotoInput = e.target.elements.fotoInput.files[0];
  //   const comentarioInput = e.target.elements.comentarioInput.value;

  //   if (localInput && fotoInput && comentarioInput) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const imageSrc = reader.result;

  //       const newPlace = {
  //         local: localInput,
  //         avaliacao: avaliacaoInput,
  //         foto: imageSrc,
  //         comentario: comentarioInput,
  //       };

  //       setPlaces([...places, newPlace]);
  //     };
  //     reader.readAsDataURL(fotoInput);

  //     e.target.reset();
  //   }
  // };

  // const handleDeletePlace = (index) => {
  //   setPlaces(places.filter((_, i) => i !== index));
  // };

  // const handleRatingChange = (rating) => {
  //   document.getElementById("avaliacaoInput").value = rating;
  // };

  return (
    <div className=" bg-background flex flex-col items-center mx-auto py-8">
      <h1 className="text-2xl text-text font-bold mb-4">Meu Site de Viagens</h1>
      <div>
        {places.map((place) => {
          return (
            <div key={place._id}>
              <h2>{place.place}</h2>
              <p>
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
  );
}

export default TravelSite;

//   <div className=" bg-background flex flex-col items-center mx-auto py-8">
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
//  );
