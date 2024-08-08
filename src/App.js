import { useEffect, useState } from "react";
import Video from "./components/Video";
import "./App.css";

function App() {
  const [data, setData] = useState(null); // Json file'dan çekilecek veri
  const [isLoading, setIsLoading] = useState(true); // Veri yüklenme durumu
  const [error, setError] = useState(null); // Veri çekerken hata alma durumu

  // Data fetch
  const fetchData = async function () {
    try {
      const res = await fetch("assets/Publishment.json");
      if (!res.ok) throw new Error("Data alınırken hata!");
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sayfa yüklenirken data fetch et
  useEffect(function () {
    fetchData();
  }, []);

  // Scene styles
  const sceneStyles = data
    ? {
        width: data.style.width,
        height: data.style.height,
      }
    : {};

  if (isLoading) return <div className="loading">LOADING...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="App" style={sceneStyles}>
      {data.components.map((component) => (
        <Video key={component.id} component={component} />
      ))}
    </div>
  );
}

export default App;
