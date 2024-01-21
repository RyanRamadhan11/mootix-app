import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

function UpdateFilm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newFilm, setNewFilm] = useState({
    title: "",
    genre: "",
    release_date: "",
    director: "",
    imagePath: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleInputChange = (e) => {
    setNewFilm({
      ...newFilm,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateFilm = async (e) => {
    e.preventDefault();

    // Validasi input tidak boleh kosong
    if (!newFilm.title || !newFilm.genre || !newFilm.release_date || !newFilm.director || !newFilm.imagePath) {
      Swal.fire('Error!', 'All fields are required. Please fill in all the details.', 'error');
      return;
    }
  
    try {
      const response = await axios.put(`http://localhost:3001/films/${id}`, newFilm);
  
      if (response.status === 200) {
        // Tampilkan SweetAlert untuk konfirmasi berhasil memperbarui film
        Swal.fire('Success!', 'Film updated successfully!', 'success').then(() => {
          // Redirect ke /film setelah menutup SweetAlert
          navigate("/film");
        });
      } else {
        console.error("Failed to update film:", response.statusText);
  
        // Set pesan alert jika gagal
        Swal.fire('Error!', 'Failed to update film. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error updating film:", error);
  
      // Set pesan alert jika terjadi error
      Swal.fire('Error!', 'ID Film Not Found!', 'error');
    }
  };
  

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/films/${id}`);
        const fetchedData = response.data;

        setNewFilm(fetchedData);
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    // Call the function to fetch data and update state
    fetchDataAndUpdateState();
  }, [id]);

  return (
    <div className="container mt-5" style={{ paddingBottom: "10em" }}>
      <Link to={`/film`}>
        <button type="submit" className="btn btn-secondary mb-3">
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
        </button>
      </Link>

      <h2 className="mb-4" style={{ marginTop: "1.5em" }}>
        Form Update Film
      </h2>

      {/* Tampilkan alert jika ada pesan */}
      {alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}

      <form onSubmit={handleUpdateFilm}>
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
          Update Film
        </button>
      </form>
    </div>
  );
}

export default UpdateFilm;



// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import useFetch from "./UseFetch";
// import axios from "axios";

// function UpdateFilm() {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [data, fetchData] = useFetch(`http://localhost:3001/films/${id}`);
//     const [newFilm, setNewFilm] = useState({
//       title: "",
//       genre: "",
//       release_date: "",
//       director: "",
//       imagePath: "",
//     });
//     const [alert, setAlert] = useState({ message: "", type: "" });
  
//     const handleInputChange = (e) => {
//       setNewFilm({
//         ...newFilm,
//         [e.target.name]: e.target.value,
//       });
//     };
  
//     const handleUpdateFilm = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await axios.put(`http://localhost:3001/films/${id}`, newFilm);
  
//         if (response.status === 200) {
//           setAlert({ message: "Film updated successfully!", type: "success" });
  
//           // Wait for 2000 milliseconds (2 seconds) before redirecting to /film
//           setTimeout(() => {
//             navigate("/film");
//           }, 2000);
//         } else {
//           console.error("Failed to update film:", response.statusText);
  
//           // Set pesan alert jika gagal
//           setAlert({
//             message: "Failed to update film. Please try again.",
//             type: "danger",
//           });
//         }
//       } catch (error) {
//         console.error("Error updating film:", error);
  
//         // Set pesan alert jika terjadi error
//         setAlert({ message: "ID Film Not Found !!.", type: "danger" });
//       }
//     };
  
//     useEffect(() => {
//       const fetchDataAndUpdateState = async () => {
//         try {
//           // Fetch data
//           const fetchedData = await fetchData();
  
//           // Check if the fetched data is not empty
//           if (fetchedData) {
//             // Update state with the fetched data
//             setNewFilm(fetchedData);
//           }
//         } catch (error) {
//           console.error("Error fetching film data:", error);
//         }
//       };
  
//       // Call the function to fetch data and update state
//       fetchDataAndUpdateState();
//     }, [fetchData]);
  
//     return (
//       <div className="container mt-5" style={{ paddingBottom: "10em" }}>
//         <Link to={`/film`}>
//           <button type="submit" className="btn btn-secondary mb-3">
//             <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
//           </button>
//         </Link>
  
//         <h2 className="mb-4" style={{ marginTop: "1.5em" }}>
//           Form Update Film
//         </h2>
  
//         {/* Tampilkan alert jika ada pesan */}
//         {alert.message && (
//           <div className={`alert alert-${alert.type}`} role="alert">
//             {alert.message}
//           </div>
//         )}
  
//         <form onSubmit={handleUpdateFilm}>
//           <div className="mb-3">
//             <label htmlFor="title" className="form-label">
//               Title:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="title"
//               name="title"
//               value={newFilm.title}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="genre" className="form-label">
//               Genre:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="genre"
//               name="genre"
//               value={newFilm.genre}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="release_date" className="form-label">
//               Release Date:
//             </label>
//             <input
//               type="date"
//               className="form-control"
//               id="release_date"
//               name="release_date"
//               value={newFilm.release_date}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="director" className="form-label">
//               Director:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="director"
//               name="director"
//               value={newFilm.director}
//               onChange={handleInputChange}
//             />
//           </div>
  
//           <div className="mb-3">
//             <label htmlFor="imagePath" className="form-label">
//               Image Path:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="imagePath"
//               name="imagePath"
//               value={newFilm.imagePath}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary mt-4">
//             Update Film
//           </button>
//         </form>
//       </div>
//     );
//   }
  
//   export default UpdateFilm;
