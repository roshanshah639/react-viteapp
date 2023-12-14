import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, autentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (autentication && authStatus !== autentication) {
      navigate("/login");
    } else if (!autentication && authStatus !== autentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, autentication, navigate]);

  return loader ? null : <>{children}</>;
};

export default Protected;
