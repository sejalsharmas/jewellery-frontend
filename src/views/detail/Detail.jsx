import React ,{useEffect , useState}from 'react'
import './Detail.css'
import { useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function Detail() {
    const [jewelrie, setJewelrie] = useState({})

    const {id} = useParams()
    const navigate = useNavigate();


    const loadJewelrieDetail = async (id) =>{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/jewelries/${id}` )
        setJewelrie(response.data.data)
    }

    const deleteJewelrie = async (id) => {
      if (window.confirm('Are you sure you want to delete this car?')) {
        try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/jewelries/${id}`);
          toast.success('jewelerie deleted successfully!');
          setTimeout(() => navigate(-1), 2000); 
        } catch (err) {
          console.error('Error deleting jewelerie:', err);
          toast.error('Failed to delete the jewelerie. Please try again.');
        }
      }
    };
    useEffect(()=>{
        loadJewelrieDetail(id)
    }, [id])

  return (
    <div>


       <h1 className='header'>Jewelrie Detail</h1>
        
       <div className="buttons-container">
        <button
          type="button"
          className="btn-delete"
          onClick={() => deleteJewelrie(id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn-edit"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
      </div>


         

      <div className="jewelerie-details-container">
        <div>
          <img src={jewelrie.image} alt="Car" className="jewelerie-detail-img" />
        </div>

        <div>
          <div className="key-value-div">
            <span className="jewellery-key">Name: </span>
            <span className="jewellery-value">{jewelrie?.name}</span>
          </div>
          <div className="key-value-div">
            <span className="jewellery-key">Type: </span>
            <span className="jewellery-value">{jewelrie?.type}</span>
          </div>
          <div className="key-value-div">
            <span className="jewellery-key">Metalused: </span>
            <span className="jewellery-value">{jewelrie?.Metalused}</span>
          </div>
          <div className="key-value-div">
            <span className="jewellery-key">Weight: </span>
            <span className="jewellery-value">{jewelrie?.Weight}</span>
          </div>
          <div className="key-value-div">
            <span className="jewellery-key">Color: </span>
            <span className="jewellery-value">{jewelrie?.Color}</span>
          </div>
          <div className="key-value-div">
            <span className="jewellery-key">Price: </span>
            <span className="jewellery-value">{jewelrie?.Price}</span>
          </div>
          <div className="key-value-div">
            <span className="jewellery-key">Status: </span>
            <span className="jewellery-value">{jewelrie?.Status}</span>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
   
export default Detail