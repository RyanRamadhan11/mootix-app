import React, { useState } from "react";
import useFetch from "./UseFetch";
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

import { useSelector} from "react-redux";


function Film() {
  const [data, fetchData] = useFetch("http://localhost:3001/films");
  const userRole = useSelector((state) => state.authentication.role);

  const deleteFilm = async (id) => {
    try {
      // Tampilkan SweetAlert untuk konfirmasi penghapusan
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You sure will delete this movie!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi, lakukan penghapusan
        await axios.delete(`http://localhost:3001/films/${id}`);
        // Setelah penghapusan berhasil, perbarui data dengan memanggil fetchData
        fetchData();
  
        // Tampilkan SweetAlert untuk konfirmasi penghapusan berhasil
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    } catch (error) {
      console.log('Error deleting film:', error.response?.data || error.message);
      // Tampilkan SweetAlert untuk informasi penghapusan gagal
      Swal.fire('Error!', 'Failed to delete the file.', 'error');
    }
  }
  

  //tanpa sweatalert
  // const deleteFilm = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/films/${id}`);
  //     // Setelah penghapusan berhasil, perbarui data dengan memanggil fetchData
  //     fetchData();
  //   } catch (error) {
  //     console.log('Error deleting film:', error.response?.data || error.message);
  //   }
  // }

  return (
    <div className="container mt-3 h-100">
      <h2 className="mb-4">Film List</h2>
      {userRole === "Admin" && (
      <Link to={`/film/addFilm`}>
        <button type="submit" className="btn btn-primary mb-3">
          Add Film
        </button>
      </Link>
      )}

      <div className="row">
        {data &&
          data.map((film) => (
            <div key={film.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="embed-responsive embed-responsive-4by3">
                  <img
                    src={film.imagePath || "placeholder-image-url"}
                    alt={film.title}
                    className="card-img-top embed-responsive-item"
                    style={{height: '20em'}}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{film.title}</h5>
                  <p className="card-text">
                    <strong>Genre:</strong> {film.genre}
                  </p>
                  <p className="card-text">
                    <strong>Release Date:</strong> {film.release_date}
                  </p>
                  <p className="card-text">
                    <strong>Director:</strong> {film.director}
                  </p>
                </div>

                {userRole === "Admin" && (
                <div className="card-footer d-flex justify-content-center ">
                  <Link to={`/film/updateFilm/${film.id}`}>
                    <button type="submit" className="btn btn-success mt-3 mb-3 mr-2 mx-3">Update</button>
                  </Link>
                  <button type="submit" className="btn btn-danger mt-3 mb-3 mx-3" onClick={()=> deleteFilm(film.id)}>Delete</button>
                </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Film;
