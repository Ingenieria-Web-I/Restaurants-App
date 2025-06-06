import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { getRestaurantById, updateRestaurant } from "../services/restaurantService";

function EditRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getRestaurantById(id);
        if (data) {
          setForm(data);
        } else {
          Swal.fire("Error", "Restaurante no encontrado", "error");
          navigate("/");
        }
      } catch (error) {
        console.error("Error al obtener restaurante:", error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateRestaurant(id, form);
      Swal.fire("Actualizado", "El restaurante ha sido modificado", "success");
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar:", error);
      Swal.fire("Error", "No se pudo guardar el restaurante", "error");
    }
  };

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-xl text-primario font-semibold">
        Cargando restaurante...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-primario">Editar Restaurante</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-white p-6 rounded-lg shadow-md">
        {["name", "description", "address", "image"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secundario"
            required
          />
        ))}
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