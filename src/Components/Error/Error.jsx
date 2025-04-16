import erorr from "../../assets/image/destination/background-destination-desktop.jpg"
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-[#282B34] text-white bg-opacity-80 hover:bg-opacity-100 font-bold
        py-5 px-8 rounded-full transition-all duration-300 shadow-lg
        hover:scale-105 focus:outline-none z-10"
        >
        Back to home page
      </button>
          <p className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-50 text-7xl">can't fined this page</p>
      
      <img 
        src={erorr} 
        alt="Error illustration" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
export default Error