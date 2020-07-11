import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { yaziListesiGetir } from "../actions";

const YaziListesi = (props) => {
  const yaziListesi = useSelector((state) => state.yaziListesi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(yaziListesiGetir());
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
      })}
    </div>
  );
};

export default YaziListesi;
