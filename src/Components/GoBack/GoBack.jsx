import React from "react";
import "./GoBack.css";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className="goBack" onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBack;
