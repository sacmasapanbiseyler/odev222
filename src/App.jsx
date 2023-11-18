import "./App.css";
import React from "react";

function Arama({ aramaMetni, onSearch }) {
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
      <p></p>
    </div>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );

  const yaziListesi = [
    {
      baslik: "Si si şarp ",
      url: "www.op.gg/summoners/tr/Heg%C3%B8sder",
      yazar: "Ömer 'Hego' Demirkol",
      yorum_sayisi: 10,
      puan: 5,
      id: 0,
    },
    {
      baslik: "React Öğreniyorum",
      url: "https://www.instagram.com/akin.alann/",
      yazar: "Akın Alan",
      yorum_sayisi: 6,
      puan: 5,
      id: 1,
    },
    {
      baslik: "React Öğreniyorum",
      url: "/mkathar",
      yazar: "MM KATHAR ",
      yorum_sayisi: 0,
      puan: 0,
      id: 2,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "www.google.com.tr",
      yazar: " Adem Baştutan ",
      yorum_sayisi: 2,
      puan: 2,
      id: 3,
    },
    {
      baslik: "Futbolun Temelleri",
      url: "https://www.instagram.com/alexdesouza/",
      yazar: "Alex de Souza",
      yorum_sayisi: 5,
      puan: 5,
      id: 4,
    },
    {
      baslik: "Python Programlamaya Giriş",
      url: "www.python.org",
      yazar: "Furkan Bahtsız :)",
      yorum_sayisi: 7,
      puan: 4.8,
      id: 5,
    },

    {
      baslik: "Artificial Intelligence Fundamentals",
      url: "www.isparta.edu.tr/personel/01585/doc-dr-murat-ince",
      yazar: "Murat İNCE o7",
      yorum_sayisi: 5,
      puan: 5,
      id: 6,
    },
  ];

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });

  function handleSearch(event) {
    setAramaMetni(event.target.value);
  }
  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar} />
    </>
  );
}
export default App;
