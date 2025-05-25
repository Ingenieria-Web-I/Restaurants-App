import { useState } from "react";
import Swal from "sweetalert2";

function NewRestaurant({ setRestaurants }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, address, image } = form;

    if (!name || !description || !address || !image) {
      Swal.fire("Error", "Por favor completa todos los campos", "error");
      return;
    }

    const newRestaurant = {
      ...form,
      id: Date.now(),
    };

    setRestaurants((prev) => [...prev, newRestaurant]);

    Swal.fire({
      title: "¡Éxito!",
      text: "El restaurante ha sido agregado",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });

    setForm({
      name: "",
      description: "",
      address: "",
      image: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-primario">Nuevo Restaurante</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Nombre del restaurante"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secundario"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secundario"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secundario"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secundario"
          required
        />

        <button
          type="submit"
          className="bg-primario text-white px-4 py-2 rounded hover:bg-secundario transition"
        >
          Agregar Restaurante
        </button>
      </form>
    </div>
  );
}

export default NewRestaurant;