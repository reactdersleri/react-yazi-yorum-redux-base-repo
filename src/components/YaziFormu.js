import React, { useState, useEffect } from "react";
import { api } from "../api";
import { useParams, useHistory } from "react-router-dom";

const YaziFormu = (props) => {
  const [yazi, setYazi] = useState({
    title: "",
    content: "",
  });
  const [hata, setHata] = useState("");

  const { id } = useParams();
  const history = useHistory();

  const onInputChange = (event) =>
    setYazi({ ...yazi, [event.target.name]: event.target.value });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setHata("");

    if (props.yazi?.title) {
      api()
        .put(`/posts/${id}`, yazi)
        .then((response) => {
          console.log(response);
          history.push(`/posts/${id}`);
        })
        .catch((error) => {
          setHata("Başlık ve yazı içeriği alanları zorunludur.");
        });
    } else {
      api()
        .post("/posts", yazi)
        .then((response) => {
          history.push("/");
        })
        .catch((error) => {
          setHata("Başlık ve yazı içeriği alanları zorunludur.");
        });
    }
  };

  useEffect(() => {
    if (props.yazi?.title && props.yazi?.content) setYazi(props.yazi);
  }, [props.yazi]);

  return (
    <React.Fragment>
      {hata && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{hata}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>

          <input
            value={yazi.title}
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            value={yazi.content}
            rows="3"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </React.Fragment>
  );
};

export default YaziFormu;
