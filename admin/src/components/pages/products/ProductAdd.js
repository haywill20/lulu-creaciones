import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import Menu from "../../common/Menu";
import axios from "axios";

const URIcategorias = "http://localhost:8000/categorias/";
const URIsubcategorias = "http://localhost:8000/subcategorias/";
function ProductAdd() {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(categorias[0]);

  const handleCategoriaChange = (e) => {
    setSelectedCategoria(e.target.value);
  };

  const [subCategorias, setSubCategorias] = useState([]);
  const [selectedSubCategoria, setSelectedSubCategoria] = useState(
    subCategorias[0]
  );

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
                <button
                  type="button"
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
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                        />
                      </div>
                      <div className="mb-3 w-100">
                        <label className="form-label">Categoria</label>
                        <select
                          className="select-single-no-search"
                          value={selectedCategoria}
                          onChange={handleCategoriaChange}
                        >
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
                          className="select-single-no-search"
                          value={selectedSubCategoria}
                          onChange={handleSubCategoriaChange}
                        >
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
                        <label className="form-label">Descripción</label>
                        <textarea
                          className="form-control"
                          id="quillEditorBubble"
                          placeholder="Descripcion del producto"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">COD</label>
                        <input
                          className="form-control"
                          placeholder="Codigo"
                        ></input>
                      </div>
                      <div class="mb-3 w-100">
                        <label class="form-label">Disponibilidad</label>
                        <select class="select-single-no-search">
                          <option label="&nbsp;"></option>
                          <option value="En stock" selected>
                            En stock
                          </option>
                          <option value="No disponible">No disponible</option>
                        </select>
                      </div>
                      <div class="mb-3 w-100">
                        <label class="form-label">Disponibilidad</label>
                        <select class="select-single-no-search">
                          <option label="&nbsp;"></option>
                          <option value="En stock" selected>
                            En stock
                          </option>
                          <option value="No disponible">No disponible</option>
                        </select>
                      </div>
                      <div class="mb-3 w-100">
                        <label class="form-label">Condición</label>
                        <select class="select-single-no-search">
                          <option label="&nbsp;"></option>
                          <option value="Nuevo" selected>
                            Nuevo
                          </option>
                          <option value="Usado">Usado</option>
                        </select>
                      </div>
                      <div class="mb-3 w-100">
                        <label class="form-label">Marca</label>
                        <select class="select-single-no-search">
                          <option label="&nbsp;"></option>
                          <option value="Lúlu" selected>
                            Lúlu
                          </option>
                          <option value="otra">Otra</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-n5">
              {/* Price Start */}
              <div className="mb-5">
                <h2 className="small-title">Precio</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input
                          type="text"
                          className="form-control mask-currency"
                          placeholder="Precio"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Price End */}
              {/* History Start */}

              {/* History End */}
              {/* Image Start */}
              <div className="mb-5">
                <h2 className="small-title">Image</h2>
                <h2 className="small-title">Dimenciones: 807 x 747</h2>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div
                        className="dropzone dropzone-columns row g-2 row-cols-1 row-cols-md-1 border-0 p-0"
                        id="dropzoneProductImage"
                      />
                    </form>
                  </div>
                </div>
              </div>
              {/* Image End */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductAdd;
