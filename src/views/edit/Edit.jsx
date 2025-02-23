import React, { useState, useEffect } from 'react';
import './Edit.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const [jewelerie, setJewelerie] = useState({
    name: "",
    type: "",
    Metalused: "",
    Weight: "",
    Color: "",
    Price: "",
    Status: "",
    image: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchJewelerieDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/jewelries/${id}`);
        console.log(response.data);
        setJewelerie(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching jewelerie details:", error);
        alert("Failed to load jewelerie details. Please try again.");
      }
    };

    fetchJewelerieDetails();
  }, [id]);

  const editJewelerie = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/jewelries/${id}`, jewelerie);
      alert("Jewelerie details updated successfully!");
      navigate(-1); 
    } catch (error) {
      console.error("Error updating jewellery:", error);
      alert("Failed to update jewellery details. Please try again.");
    }
  };

  return (
    <div className="jwellery-detail-wrapper">
      <div className="popup">
        <div className="popup-content glass-design">
          <h2 className="popup-title">Edit Jewellery Details</h2>
          <form
            className="popup-form"
            onSubmit={(e) => {
              e.preventDefault();
              editJewelerie();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="popup-input"
              value={jewelerie.name}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Type"
              className="popup-input"
              value={jewelerie.type}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, type: e.target.value })}
            />
            <input
              type="text"
              placeholder="Metal Used"
              className="popup-input"
              value={jewelerie.Metalused}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, Metalused: e.target.value })}
            />
            <input
              type="text"
              placeholder="Weight"
              className="popup-input"
              value={jewelerie.Weight}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, Weight: e.target.value })}
            />
            <input
              type="text"
              placeholder="Color"
              className="popup-input"
              value={jewelerie.Color}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, Color: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              className="popup-input"
              value={jewelerie.Price}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, Price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Status"
              className="popup-input"
              value={jewelerie.Status}
              required
              onChange={(e) => setJewelerie({ ...jewelerie, Status: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="popup-input"
              value={jewelerie.image} 
              required
              onChange={(e) => setJewelerie({ ...jewelerie, image: e.target.value })}
            />

            <div className="popup-buttons">
              <button type="submit" className="popup-button">
                Save Changes
              </button>
              <button
                type="button"
                className="popup-button close-button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
