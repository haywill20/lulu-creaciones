import React, { useEffect, useState, useRef } from "react";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";

const URIcategorias = "http://localhost:8000/categorias/";
const URIsubcategorias = "http://localhost:8000/subcategorias/";
const URIproductos = "http://localhost:8000/createproducto/";
function ProductAdd() {
  const [isOpenCategoria, setIsOpenCategoria] = useState(false);
  const dropdownCategoriaRef = useRef(null);
  const dropdownSubCategoriaRef = useRef(null);

  const [nombre, setNombre] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState({
    id: null,
    name: "",
  });

  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
    setIsOpenCategoria(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownCategoriaRef.current &&
      !dropdownCategoriaRef.current.contains(event.target) &&
      dropdownSubCategoriaRef.current &&
      !dropdownSubCategoriaRef.current.contains(event.target)
    ) {
      setIsOpenCategoria(false);
      setIsOpenSubCategoria(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpenSubCategoria, setIsOpenSubCategoria] = useState(false);
  const [subCategorias, setSubCategorias] = useState([]);
  const [selectedSubCategoria, setSelectedSubCategoria] = useState({
    id: null,
    name: "",
  });
  const [cod, setCod] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("En stock");
  const [condicion, setCondicion] = useState("Nuevo");
  const [marca, setMarca] = useState("Lúlu");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal de éxito

  const handleSubCategoriaClick = (subCategoria) => {
    setSelectedSubCategoria(subCategoria);
    setIsOpenSubCategoria(false);
  };

  const addProducto = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("imagen", file);
      formData.append("nombre", nombre);
      formData.append("id_categoria", selectedCategoria.id);
      formData.append("id_subcategoria", selectedSubCategoria.id);
      formData.append("cod", cod);
      formData.append("disponibilidad", disponibilidad);
      formData.append("condicion", condicion);
      formData.append("marca", marca);
      formData.append("cantidad", cantidad);
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
      setCantidad("");
      setPrecio("");
      setFile(null);
      setImagePreview(null);

      // Establecer una bandera en el almacenamiento local
      localStorage.setItem("showModalAfterReload", "true");

      // Recargar la página
      window.location.reload();
    } catch (error) {
      console.log("Error al agregar el producto");
    }
  };

  // En otro componente o en el componente principal
  useEffect(() => {
    const showModalAfterReload = localStorage.getItem("showModalAfterReload");
    if (showModalAfterReload === "true") {
      setShowModal(true);
      localStorage.removeItem("showModalAfterReload"); // Elimina la bandera después de mostrar el modal
    }
  }, []);

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
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-icon btn-icon-only"
                    data-delay='{"show":"500", "hide":"0"}'
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Save"
                  >
                    <i data-acorn-icon="save" />
                  </button>
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
                          required
                        />
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Categoria</label>
                        <div className="dropdown" ref={dropdownCategoriaRef}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Seleccione una categoria"
                            onClick={() => setIsOpenCategoria(!isOpenCategoria)}
                            value={selectedCategoria.nombre}
                            readOnly
                            onChange={() => {}}
                            required
                          />
                          {isOpenCategoria && (
                            <ul
                              className="dropdown-menu scroll-list"
                              style={{ display: "block" }}
                            >
                              {categorias.map((categoria) => (
                                <li key={categoria.id}>
                                  <button
                                    className="dropdown-item d-flex align-items-center"
                                    type="button"
                                    onClick={() =>
                                      handleCategoriaClick(categoria)
                                    }
                                  >
                                    {categoria.nombre}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {selectedCategoria.id && (
                          <p>
                            Categoria seleccionada(ID): {selectedCategoria.id}
                          </p>
                        )}
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">subcategoria</label>
                        <div className="dropdown" ref={dropdownSubCategoriaRef}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Seleccione unaSubcategoria"
                            onClick={() =>
                              setIsOpenSubCategoria(!isOpenSubCategoria)
                            }
                            value={selectedSubCategoria.nombre}
                            readOnly
                            onChange={() => {}}
                            required
                          />
                          {isOpenSubCategoria && (
                            <ul
                              className="dropdown-menu scroll-list"
                              style={{ display: "block" }}
                            >
                              {subCategorias.map((subCategoria) => (
                                <li key={subCategoria.id}>
                                  <button
                                    className="dropdown-item d-flex align-items-center"
                                    type="button"
                                    onClick={() =>
                                      handleSubCategoriaClick(subCategoria)
                                    }
                                  >
                                    {subCategoria.nombre}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {selectedSubCategoria.id && (
                          <p>
                            Subcategoria seleccionada(ID):{" "}
                            {selectedSubCategoria.id}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">COD</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Codigo"
                          value={cod}
                          onChange={(e) => setCod(e.target.value)}
                          required
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
                        <label className="form-label">cantidad</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Cantidad"
                          value={cantidad}
                          onChange={(e) => setCantidad(e.target.value)}
                          required
                        />
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
                          required
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
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          required
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

        {/* Modal de éxito */}
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Éxito</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                El producto se agregó correctamente.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductAdd;
