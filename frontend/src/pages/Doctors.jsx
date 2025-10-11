import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctors } from "../assets/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const { Doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      {/* <p className="text-[18px] font-semibold">Browse through the doctors specialist.</p> */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mt-6">
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p onClick={() => navigate("/doctors/General physician")} className="w-[94vw] sm:w-auto pl-3 py-2 pr-16 border primary text-white rounded cursor-pointer hover:scale-105 transition-all duration-300">
            General physician</p>
          <p onClick={() => navigate("/doctors/Gynecologist")} className="w-[94vw] sm:w-auto pl-3 py-2 pr-16 border primary text-white rounded cursor-pointer hover:scale-105 transition-all duration-300">
            Gynecologist</p>
          <p onClick={() => navigate("/doctors/Dermatologist")} className="w-[94vw] sm:w-auto pl-3 py-2 pr-16 border primary text-white rounded cursor-pointer hover:scale-105 transition-all duration-300">
            Dermatologist</p>
          <p onClick={() => navigate("/doctors/Pediatricians")} className="w-[94vw] sm:w-auto pl-3 py-2 pr-16 border primary text-white rounded cursor-pointer hover:scale-105 transition-all duration-300">
            Pediatricians</p>
          <p onClick={() => navigate("/doctors/Neurologist")} className="w-[94vw] sm:w-auto pl-3 py-2 pr-16 border primary text-white rounded cursor-pointer hover:scale-105 transition-all duration-300">
            Neurologist</p>
          <p onClick={() => navigate("/doctors/Gastroenterologist")} className="w-[94vw] sm:w-auto pl-3 py-2 pr-16 border primary text-white rounded cursor-pointer hover:scale-105 transition-all duration-300">Gastroenterologist</p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6 ">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-700 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
