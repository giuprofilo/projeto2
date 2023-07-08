import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowRightIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function EditPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState({});
  const [reload, setReload] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [formEdit, setFormEdit] = useState({
    place: "",
    rating: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    async function fetchPlace() {
      const response = await axios.get(
        `https://webdev103.cyclic.app/travelsite/${params.id}`
      );
      setPlace(response.data);
      setFormEdit({
        place: response.data.place,
        rating: response.data.rating,
        image: response.data.image,
        description: response.data.description,
      });
    }

    fetchPlace();
  }, [reload]);

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

  function handleShowFormEdit(e) {
    e.preventDefault();
    setShowFormEdit(false);
  }

  function handleChangeEdit(e) {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  }

  async function handleDelete(e) {
    e.preventDefault();

    try {
      await axios.delete(
        `https://webdev103.cyclic.app/travelsite/${params.id}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(place);

  return (
    <div className=" bg-background flex flex-col items-center mx-auto py-8 w-full">
      <h1 className="text-2xl text-text font-bold mb-4">Página de edição</h1>
      <div className="p-4 bg-white rounded-lg shadow border-none min-h-[50px]">
        <h2 className="text-xl text-center">{place.place}</h2>
        <p className="w-90 mx-20">
          <img src={place.image} />
        </p>
        <p className="text-center">Avaliação:{place.rating}</p>
        <p className="text-center">Descrição: {place.description}</p>
        <button
          className="text-white bg-primary-button px-4 py-2 rounded"
          onClick={() => setShowFormEdit(true)}
        >
          <span>Editar</span>
        </button>
      </div>

      <div className="p-4  rounded-lg shadow border-none min-h-[50px] mt-5">
        {showFormEdit && (
          <form className=" flex flex-col justify-center items-center rounded w-full shadow-md bg-background bg-opacity-10">
            <div className="bg-white p-4 rounded shadow-lg w-full">
              <button
                className="bg-secondary-button w-full flex justify-end mb-2"
                onClick={handleShowFormEdit}
              >
                <XMarkIcon
                  className="h-6 w-6  bg-accent  hover:bg-black hover:text-white"
                  title="Fechar"
                />
              </button>

              <input
                type="text"
                name="place"
                value={formEdit.place}
                onChange={handleChangeEdit}
                placeholder="Local"
                className="border w-full p-2 focus:outline-none resize-none"
              />

              <input
                type="text"
                name="rating"
                value={formEdit.rating}
                onChange={handleChangeEdit}
                placeholder="Dê uma avaliação de 1 a 5"
                className="border w-full p-2 focus:outline-none resize-none"
              />

              <input
                type="text"
                name="image"
                value={formEdit.image}
                onChange={handleChangeEdit}
                placeholder="Insira a URL da imagem"
                className="border w-full p-2 focus:outline-none resize-none"
              />

              <textarea
                type="text"
                name="description"
                value={formEdit.description}
                onChange={handleChangeEdit}
                placeholder="Escreva uma descrição do local"
                className="border w-full p-2 focus:outline-none resize-none"
              />

              <div className="flex justify-between items-center">
                <button
                  onClick={handleSubmitEdit}
                  className="bg-secondary-button px-6 focus:outline-none hover:bg-black hover:text-white"
                  title="Enviar alteração"
                >
                  <ArrowRightIcon className="h-6 w-6" />
                </button>
                <TrashIcon
                  className="h-5 w-5 cursor-pointer hover:bg-red-400 hover:text-white"
                  title="Excluir local"
                  onClick={handleDelete}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
