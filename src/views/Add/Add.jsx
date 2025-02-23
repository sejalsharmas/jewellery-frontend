import { React, useState } from 'react';
import './Add.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Add() {
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

    const Add = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/jewelries`, {
                id: jewelerie.id,
                name: jewelerie.name,
                type: jewelerie.type,
                Metalused: jewelerie.Metalused,
                Weight: jewelerie.Weight,
                Color: jewelerie.Color,
                Price: jewelerie.Price,
                Status: jewelerie.Status,
                image: jewelerie.image,
            });

            setJewelerie({
                name: "",
                type: "",
                Metalused: "",
                Weight: "",
                Color: "",
                Price: "",
                Status: "",
                image: "",
                id: "",
            });

            navigate(-1 || '/');
        } catch (error) {
            console.error("Error adding jewelerie:", error);
        }
    };

    return (
        
            
           <div>
                
                <h1 className='add-new-Jewelerie-heading'></h1>
                <div className="popup">
                    <div className="popup-content glass-design">
                        <h2 className="popup-title">Add New Jewelerie</h2>
                        <form
                            className="popup-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                Add();
                            }}
                        >
                            <input
                                type="number"
                                placeholder="ID"
                                className="popup-input"
                                value={jewelerie.id}
                                required
                                onChange={(e) =>
                                    setJewelerie({
                                        ...jewelerie,
                                        id: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                className="popup-input"
                                value={jewelerie.Name}
                                required
                                onChange={(e) =>
                                    setJewelerie({
                                        ...jewelerie,
                                        jewelerie: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Type"
                                className="popup-input"
                                value={jewelerie.type}
                                required
                                onChange={(e) =>
                                    setJewelerie({
                                        ...jewelerie,
                                        type: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Metalused"
                                className="popup-input"
                                value={jewelerie.Metalused}
                                required
                                onChange={(e) =>
                                    setJewelerie({
                                        ...jewelerie,
                                        Metalused: e.target.value,
                                    })
                                }
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
                                <button
                                    type="submit"
                                    className="popup-button"
                                >
                                    Add Jewelerie
                                </button>
                                <button
                                    type="button"
                                    className="popup-button close-button"
                                    onClick={() => navigate(-1 || '/')}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Add;