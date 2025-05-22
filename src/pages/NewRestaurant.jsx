import { useState } from "react";

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

    const newRestaurant = {
      ...form,
      id: Date.now(),
    };

    // Agrega al estado global
    setRestaurants((prev) => [...prev, newRestaurant]);

    // Limpia el formulario
    setForm({
      name: "",
      description: "",
      address: "",
      image: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">Nuevo Restaurante</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input type="text" name="name" placeholder="Nombre del restaurante" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="description" placeholder="Descripción" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="address" placeholder="Dirección" value={form.address} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="image" placeholder="URL de la imagen" value={form.image} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-primario text-black px-4 py-2 rounded hover:bg-secundario transition">Agregar Restaurante</button>
      </form>
    </div>
  );
}

export default NewRestaurant;
