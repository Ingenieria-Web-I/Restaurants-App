import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { createRestaurant } from "../services/restaurantService";

function NewRestaurant() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, address, image } = restaurant;

    if (!name || !description || !address || !image) {
      Swal.fire("Campos incompletos", "Por favor, llena todos los campos", "warning");
      return;
    }

    try {
      await createRestaurant(restaurant);
      Swal.fire("¡Restaurante agregado!", "", "success");

      setRestaurant({ name: "", description: "", address: "", image: "" });
    } catch (error) {
      console.error("Error al agregar restaurante:", error);
      Swal.fire("Error", "No se pudo agregar el restaurante", "error");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-primario">Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "description", "address", "image"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={restaurant[field]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primario"
          />
        ))}
        <button
          type="submit"
          className="w-full bg-primario text-white py-2 rounded hover:bg-secundario transition"
        >
          Agregar Restaurante
        </button>
      </form>
    </div>
  );
}

export default NewRestaurant;
