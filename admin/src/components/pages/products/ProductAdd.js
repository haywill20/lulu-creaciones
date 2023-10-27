import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";

const URIcategorias = "http://localhost:8000/categorias/";
const URIsubcategorias = "http://localhost:8000/subcategorias/";
const URIproductos = "http://localhost:8000/createproducto/";
function ProductAdd() {
  const [nombre, setNombre] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(0);
  const handleCategoriaChange = (e) => {
    setSelectedCategoria(e.target.value);
  };
  const [subCategorias, setSubCategorias] = useState([]);
  const [selectedSubCategoria, setSelectedSubCategoria] = useState(0);
  const [cod, setCod] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("En stock");
  const [condicion, setCondicion] = useState("Nuevo");
  const [marca, setMarca] = useState("Lúlu");
  const [precio, setPrecio] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const addProducto = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("imagen", file);
      formData.append("nombre", nombre);
      formData.append("categoria", selectedCategoria);
      formData.append("subCategoria", selectedSubCategoria);
      formData.append("cod", cod);
      formData.append("disponibilidad", disponibilidad);
      formData.append("condicion", condicion);
      formData.append("marca", marca);
      formData.append("precio", precio);

      await axios.post(URIproductos, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setNombre("");
      setSelectedCategoria("");
      setSelectedSubCategoria("");
      setCod("");
      setDisponibilidad("");
      setCondicion("");
      setMarca("");
      setPrecio("");
      setFile(null);
      setImagePreview(null);
    } catch (error) {
      console.log("Error al agregar el producto");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Mostrar una vista previa de la imagen
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubCategoriaChange = (e) => {
    setSelectedSubCategoria(e.target.value);
  };

  useEffect(() => {
    getCategorias();
  }, []);

  //procedimiento para mostrar todas las categorias
  const getCategorias = async () => {
    try {
      const res = await axios(URIcategorias);
      setCategorias(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSubCategorias();
  }, []);

  //procedimient para mostrar todas las subcategorias
  const getSubCategorias = async () => {
    try {
      const res = await axios(URIsubcategorias);
      setSubCategorias(res.data);
    } catch (error) {
      console.error("Error al obtener las SubCategorias:", error);
    }
  };

  return (
    <>
      <Menu />

      <main>
        <div className="container">
          <form
            onSubmit={addProducto}
            method="POST"
            encType="multipart/form-data"
          >
            {/* Title and Top Buttons Start */}
            <div className="page-title-container">
              <div className="row g-0">
                {/* Title Start */}
                <div className="col-auto mb-3 mb-md-0 me-auto">
                  <div className="w-auto sw-md-30">
                    <h1 className="mb-0 pb-0 display-4" id="title">
                      Agregar producto
                    </h1>
                  </div>
                </div>
                {/* Title End */}
                {/* Top Buttons Start */}
                <div className="w-100 d-md-none" />
                <div className="col-auto d-flex align-items-end justify-content-end">
                  <a
                    href="/productAdd"
                    type="submit"
                    className="btn btn-outline-primary btn-icon btn-icon-only"
                    data-delay='{"show":"500", "hide":"0"}'
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Save"
                  >
                    <i data-acorn-icon="save" />
                  </a>
                </div>

                {/* Top Buttons End */}
              </div>
            </div>
            {/* Title and Top Buttons End */}
            <div className="row">
              <div className="col-xl-8">
                {/* Product Info Start */}
                <div className="mb-5">
                  <h2 className="small-title">Detalles del producto</h2>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Categoria</label>
                        <select
                          className="form-select"
                          arial-label="Default select example"
                          onChange={handleCategoriaChange}
                        >
                          <option value={0} disabled hidden>
                            Selecciona una categoría
                          </option>
                          {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                              {categoria.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">subcategoria</label>
                        <select
                          className="form-select"
                          arial-label="Default select example"
                          onChange={handleSubCategoriaChange}
                        >
                          <option value={1} disabled hidden>
                            Selecciona una subcategoría
                          </option>

                          {subCategorias.map((subCategoria) => (
                            <option
                              key={subCategoria.id}
                              value={subCategoria.id}
                            >
                              {subCategoria.nombre}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">COD</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Codigo"
                          value={cod}
                          onChange={(e) => setCod(e.target.value)}
                        ></input>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Disponibilidad</label>
                        <select
                          className="form-select"
                          arial-label="Default select example"
                          onChange={(e) => setDisponibilidad(e.target.value)}
                        >
                          <option value="En stock" selected>
                            En stock
                          </option>
                          <option value="No disponible">No disponible</option>
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Condición</label>
                        <select
                          className="form-select"
                          arial-label="Default select example"
                          //value={condicion}
                          onChange={(e) => {
                            setCondicion(e.target.value);
                            console.log(condicion);
                          }}
                        >
                          <option value="Nuevo" selected>
                            Nuevo
                          </option>
                          <option value="Usado">Usado</option>
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Marca</label>
                        <select
                          className="form-select"
                          arial-label="Default select example"
                          onChange={(e) => setMarca(e.target.value)}
                        >
                          <option value="Lúlu" selected>
                            Lúlu
                          </option>
                          <option value="otra">Otra</option>
                        </select>
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Precio</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Precio"
                          value={precio}
                          onChange={(e) => setPrecio(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 mb-n5">
                {/* History Start */}

                {/* History End */}
                {/* Image Start */}
                <div className="mb-3">
                  <h2 className="small-title">Image</h2>
                  <h2 className="small-title">Dimensiones: 807 x 747</h2>
                  <div className="card">
                    <div className="card-body">
                      <div class="mb-3">
                        <input
                          className="form-control"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{ maxWidth: "100%", marginTop: "10px" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image End */}
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductAdd;
