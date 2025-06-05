import { useState } from "react";
import { restaurantService } from "../services/firebaseRestaurantServices";


import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

function NewRestaurant() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    setRestaurant({
      ...restaurant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, address, image } = restaurant;

    if (!name || !description || !address || !image) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor, llena todos los campos",
        icon: "warning",
        confirmButtonColor: "#e3342f",
        background: "#ffffff",
        color: "#333",
      });
      return;
    }

  try {
      await restaurantService.create(restaurant);
      Swal.fire({
        title: "¡Restaurante agregado!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        background: "#ffffff",
        color: "#333",
        iconColor: "#38c172",
        customClass: {
          popup: "rounded-xl shadow-md backdrop-blur-sm",
        },
      });

      // Limpiar formulario
      setRestaurant({
        name: "",
        description: "",
        address: "",
        image: "",
      });
    } catch (error) {
      console.error("Error al agregar restaurante:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo agregar el restaurante",
        icon: "error",
        confirmButtonColor: "#e3342f",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-primario">Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre del restaurante"
          value={restaurant.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primario"
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={restaurant.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primario"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={restaurant.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primario"
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={restaurant.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-primario"
        />
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