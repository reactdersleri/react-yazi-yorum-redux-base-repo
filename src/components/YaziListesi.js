import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";

const YaziListesi = (props) => {
  const [yaziListesi, setYaziListesi] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
      .then((response) => {
        setYaziListesi(response.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/yaziekle" className="ui primary button">
        Yazı Ekle
      </Link>
      {yaziListesi.map((yazi) => {
        return (
          <div className="item" key={yazi.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">
                {yazi.title}
              </Link>
              <div className="description">{yazi.created_at}</div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default YaziListesi;
