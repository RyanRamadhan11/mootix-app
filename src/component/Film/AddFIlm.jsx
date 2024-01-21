import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";
import Swal from 'sweetalert2';


function AddFilm() {
  const navigate = useNavigate();
  const [data, fetchData] = useFetch("http://localhost:3001/films");
  const [newFilm, setNewFilm] = useState({
    title: "",
    genre: "",
    release_date: "",
    director: "",
    imagePath: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    setNewFilm({
      ...newFilm,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    // Dapatkan file yang dipilih dari input
    const selectedImage = e.target.files[0];
  
    // Buat objek URL untuk file yang dipilih
    const imageUrl = URL.createObjectURL(selectedImage);
  
    // Set state untuk menyimpan path gambar yang dipilih
    setNewFilm({
      ...newFilm,
      imagePath: imageUrl,
    });
  };
  

  const handleAddFilm = async (e) => {
    e.preventDefault();

    // Validasi input tidak boleh kosong
    if (!newFilm.title || !newFilm.genre || !newFilm.release_date || !newFilm.director || !newFilm.imagePath) {
      Swal.fire('Error!', 'All fields are required. Please fill in all the details.', 'error');
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3001/films", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFilm),
      });
  
      if (response.ok) {
        // Tampilkan SweetAlert untuk konfirmasi berhasil menambahkan film
        Swal.fire('Success!', 'Film added successfully!', 'success').then(() => {
          // Redirect ke /film setelah menutup SweetAlert
          navigate("/film");
        });
      } else {
        console.error("Failed to add film:", response.statusText);
  
        // Set pesan alert jika gagal
        Swal.fire('Error!', 'Failed to add film. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error adding film:", error);
  
      // Set pesan alert jika terjadi error
      Swal.fire('Error!', 'An error occurred. Please try again.', 'error');
    }
  };
  

  return (
    <div className="container mt-5 h-100" style={{paddingBottom: '10em'}}>
      <Link to={`/film`}>
        <button type="submit" className="btn btn-secondary mb-3">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
        </button>
      </Link>

      <h2 className="mb-4" style={{marginTop: '1.5em'}}>Form Add Film</h2>

      {/* Tampilkan alert jika ada pesan */}
      {alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}

      <form onSubmit={handleAddFilm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newFilm.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre:
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={newFilm.genre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
        <label htmlFor="release_date" className="form-label">
          Release Date:
        </label>
        <input
          type="date"
          className="form-control"
          id="release_date"
          name="release_date"
          value={newFilm.release_date}
          onChange={handleInputChange}
        />
      </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">
            Director:
          </label>
          <input
            type="text"
            className="form-control"
            id="director"
            name="director"
            value={newFilm.director}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="imagePath" className="form-label">
            Image Path:
          </label>
          <input
            type="file"
            className="form-control"
            id="imagePath"
            name="imagePath"
            onChange={handleImageChange}
          />
        </div> */}


        <div className="mb-3">
          <label htmlFor="imagePath" className="form-label">
            Image Path:
          </label>
          <input
            type="text"
            className="form-control"
            id="imagePath"
            name="imagePath"
            value={newFilm.imagePath}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Add Film
        </button>
      </form>
     
    </div>
  );
}

export default AddFilm;
