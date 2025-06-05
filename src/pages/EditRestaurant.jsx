import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function EditRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const docRef = doc(db, "restaurants", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setForm(docSnap.data());
        } else {
          Swal.fire("Error", "Restaurante no encontrado", "error");
          navigate("/");
        }
      } catch (error) {
        console.error("Error al obtener restaurante:", error);
        Swal.fire("Error", "No se pudo cargar el restaurante", "error");
      }
    };

    fetchRestaurant();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "restaurants", id);
      await updateDoc(docRef, form);

      Swal.fire({
        title: "Actualizado",
        text: "El restaurante ha sido modificado correctamente",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      console.error("Error al actualizar:", error);
      Swal.fire("Error", "No se pudo guardar el restaurante", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-primario">Editar Restaurante</h1>

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
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditRestaurant;