import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditPage() {
  const params = useParams();

  const [place, setPlace] = useState({});
  const [reload, setReload] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [formEdit, setFormEdit] = useState({
    question: "",
  });

  useEffect(() => {
    async function fetchPlace() {
      const response = await axios.get(
        `https://webdev103.cyclic.app/travelsite/${params.id}`
      );
      setPlace(response.data);
    }

    fetchPlace();
  }, []);

  async function handleSubmitEdit(e) {
    e.preventDefault();

    try {
      await axios.put(
        `https://webdev103.cyclic.app/travelsite/${params.id}`,
        formEdit
      );
      setShowFormEdit(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" bg-background flex flex-col items-center mx-auto py-8">
      <h1 className="text-2xl text-text font-bold mb-4">Página de edição</h1>
      <div>
        <h2>{place.place}</h2>
        <p>
          <img src={place.image} />
        </p>
        <p>Avaliação:{place.rating}</p>
        <p>Descrição: {place.description}</p>
        <button className="text-white bg-primary-button px-4 py-2 rounded">
          Editar
        </button>
      </div>
    </div>
  );
}
