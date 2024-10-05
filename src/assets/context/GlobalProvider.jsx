import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const globalContext = createContext();

const GlobalProvider = ({children}) => {
  const [mode, setMode] = useState(false);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => setAllData(res.data));
          setLoading(false)
      } catch (e) {
        console.log(e);
        setLoading(true)
      }
    };
    getApi()
  }, []);

  const headerLink = [
    "Home",
    "Contact us",
    "About",
    "others",
    "Detail",
    "Contact",
  ];

  const data = {
    mode,
    setMode,
    headerLink,
    allData,
    loading
  };

  return (
    <globalContext.Provider value={data}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalProvider;
