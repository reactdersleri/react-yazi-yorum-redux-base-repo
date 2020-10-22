import React, { useState, useEffect } from "react";
import YaziFormu from "./YaziFormu";
import { api } from "../api";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const YaziDuzenle = (props) => {
  // const [yazi, setYazi] = useState({});
  const { id } = useParams();

  const yazi = useSelector((state) => state.yaziDetayi);

  // useEffect(() => {
  //   api()
  //     .get(`/posts/${id}`)
  //     .then((response) => {
  //       setYazi({ title: response.data.title, content: response.data.content });
  //     });
  // }, []);

  return (
    <div>
      <h1>Yazi Duzenleme Formu</h1>
      <YaziFormu yazi={yazi} />
    </div>
  );
};

export default YaziDuzenle;
