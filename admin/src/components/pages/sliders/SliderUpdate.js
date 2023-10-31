import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";

const URIupdateslider = "http://localhost:8000/updateslider/";
const URIslider = "http://localhost:8000/slider/";
const URIproductos = "http://localhost:8000/productos/";
const productImagen = require.context(
  "../../../../../backend/uploads/productos",
  true
  );

function SliderUpdate() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ id: null, name: "" });
  const [productos, setProductos] = useState([]);
  const dropdownRef = useRef(null);
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [textoBoton, setTextoBoton] = useState("");
  const [parrafo, setParrafo] = useState("");
  const [tituloExcedido, setTituloExcedido] = useState(false);
  const [subtituloExcedido, setSubtituloExcedido] = useState(false);
  const [textoBotonExcedido, setTextoBotonExcedido] = useState(false);
  const [parrafoExcedido, setParrafoExcedido] = useState(false);
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal de éxito
  const [imagePreview, setImagePreview] = useState("http://localhost:8000/images/");
  const [imagenName, setImagenName] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const handleItemClick = (producto) => {
    setSelectedItem(producto);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getProductos();
  }, []);

  // Método para mostrar todos los productos
  const getProductos = async () => {
    try {
      const res = await axios(URIproductos);
      setProductos(res.data);
    } catch (error) {
      console.error("Error al obtener los Productos:", error);
    }
  };

  // Método para actualizar un slider
  const updateSlider = async (e) => {
    e.preventDefault();

    if (
      tituloExcedido ||
      subtituloExcedido ||
      textoBotonExcedido ||
      parrafoExcedido
    ) {
      alert("Por favor, revise los campos con límite de caracteres excedido.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("imagen", file ? file : imagenName);
      formData.append("titulo", titulo);
      formData.append("subtitulo", subtitulo);
      formData.append("parrafo", parrafo);
      formData.append("texto_boton", textoBoton);
      formData.append("id_producto", selectedItem.id);
      await axios.put(URIupdateslider + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowModal(true);
    } catch (error) {
      console.log("Error al agregar el producto");
    }
  };

  useEffect(() => {
    getSliderById();
  }, []);

  useEffect(() => {
    if (imagenName) {
      setImagePreview(`http://localhost:8000/images/${imagenName}`);
    }
  }, [imagenName]);

  const getSliderById = async () => {
    const res = await axios.get(URIslider + id);
    const sliderData = res.data;

    setTitulo(sliderData.titulo);
    setSubtitulo(sliderData.subtitulo);
    setTextoBoton(sliderData.texto_boton);
    setSelectedItem({
      id: sliderData.id_producto,
      name: sliderData.nombre_producto,
    });
    setParrafo(sliderData.parrafo);
    setImagenName(sliderData.imagen);

  };

  // En otro componente o en el componente principal
  useEffect(() => {
    const showModalAfterReload = localStorage.getItem("showModalAfterReload");
    if (showModalAfterReload === "true") {
      setShowModal(true);
      localStorage.removeItem("showModalAfterReload"); // Elimina la bandera después de mostrar el modal
    }
  }, []);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
    setTituloExcedido(e.target.value.length > 20);
  };

  const handleSubtituloChange = (e) => {
    setSubtitulo(e.target.value);
    setSubtituloExcedido(e.target.value.length > 20);
  };

  const handleTextoBotonChange = (e) => {
    setTextoBoton(e.target.value);
    setTextoBotonExcedido(e.target.value.length > 15);
  };

  const handleParrafoChange = (e) => {
    setParrafo(e.target.value);
    setParrafoExcedido(e.target.value.length > 200);
  };

  return (
    <>
      <Menu />
      <main>
        <div className="container">
          <form
            onSubmit={updateSlider}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="page-title-container">
              <div className="row g-0">
                <div className="col-auto mb-3 mb-md-0 me-auto">
                  <div className="w-auto sw-md-30">
                    <h1 className="mb-0 pb-0 display-4" id="title">
                      Agregar Slider
                    </h1>
                  </div>
                </div>
                <div className="w-100 d-md-none" />
                <div className="col-auto d-flex align-items-end justify-content-end">
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
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <div className="mb-5">
                  <h2 className="small-title">Informacion de Slider</h2>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label className="form-label">Titulo</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Titulo"
                          value={titulo}
                          onChange={handleTituloChange}
                          required
                        />
                        {tituloExcedido && (
                          <p className="text-danger">
                            Límite de caracteres excedido el máximo es 20.
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Subtitulo</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subtitulo"
                          value={subtitulo}
                          onChange={handleSubtituloChange}
                          required
                        />
                        {subtituloExcedido && (
                          <p className="text-danger">
                            Límite de caracteres excedido el maximo es 20.
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Texto Boton</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Texto del Boton"
                          value={textoBoton}
                          onChange={handleTextoBotonChange}
                          required
                        />
                        {textoBotonExcedido && (
                          <p className="text-danger">
                            El limite de caracteres excedido el máximo es 15.
                          </p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Link de producto</label>
                        <div className="dropdown" ref={dropdownRef}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Producto al que redireccionará el botón del slider"
                            onClick={() => setIsOpen(!isOpen)}
                            value={selectedItem.nombre}
                            readOnly
                            onChange={() => {}}
                          />

                          {isOpen && (
                            <ul
                              className="dropdown-menu scroll-list"
                              style={{ display: "block" }}
                            >
                              {productos.map((producto) => (
                                <li key={producto.id}>
                                  <button
                                    className="dropdown-item d-flex align-items-center"
                                    type="button"
                                    onClick={() => handleItemClick(producto)}
                                  >
                                    <img
                                      src={productImagen(
                                        `./${producto.imagen}`
                                      )}
                                      alt={producto.nombre}
                                      width="32"
                                      height="32"
                                      className="me-2"
                                    />
                                    {producto.nombre}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {selectedItem.id && (
                          <p>Elemento seleccionado (ID): {selectedItem.id}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Parrafo</label>

                        <textarea
                          className="form-control"
                          placeholder="Parrafo"
                          value={parrafo}
                          onChange={handleParrafoChange}
                        ></textarea>
                        {parrafoExcedido && (
                          <p className="text-danger">
                            Límite de caracteres excedido el maximo es 200.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 mb-n5">
                <div className="mb-5">
                  <h2 className="small-title">Image</h2>
                  <div className="mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="mb-3">
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
                </div>
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
                El slider se agregó correctamente.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    setShowModal(false);
                    navigate("/sliders");
                  }}
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

export default SliderUpdate;
