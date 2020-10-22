import React, { useEffect } from "react";
import YaziYorumlari from "./YaziYorumlari";
import { Link, useParams, useHistory } from "react-router-dom";
import SilModal from "./SilModal";
import { yaziGetir, yorumEkle } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const YaziDetayi = () => {
  const yaziDetayi = useSelector((state) => state.yaziDetayi);
  const dispatch = useDispatch();

  const { id } = useParams();
  const history = useHistory();

  const handleCommentSubmit = (event, yorum) => {
    event.preventDefault();
    dispatch(yorumEkle(id, yorum));
  };

  useEffect(() => {
    dispatch(yaziGetir(id));
  }, []);

  return (
    <React.Fragment>
      <h2 className="ui header">{yaziDetayi.title}</h2>
      <p>{yaziDetayi.created_at}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${yaziDetayi.id}/edit`}>
          Düzenle
        </Link>
        <SilModal yazi={yaziDetayi} />
      </div>
      <p>{yaziDetayi.content}</p>
      <YaziYorumlari
        yorumlar={yaziDetayi.yorumlar}
        handleSubmit={handleCommentSubmit}
      />
    </React.Fragment>
  );
};

export default YaziDetayi;
