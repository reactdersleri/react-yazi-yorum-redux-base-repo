import React, { useState, useEffect } from "react";
import YaziFormu from "./YaziFormu";
import { api } from "../api";

const YaziDuzenle = (props) => {
  const [yazi, setYazi] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((response) => {
        setYazi({ title: response.data.title, content: response.data.content });
      });
  }, []);

  return (
    <div>
      <h1>Yazi Duzenleme Formu</h1>
      <YaziFormu yazi={yazi} />
    </div>
  );
};

export default YaziDuzenle;
