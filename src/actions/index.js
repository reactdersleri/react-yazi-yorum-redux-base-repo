import { api } from "../api";
import Axios from "axios";

export const yaziListesiGetir = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({ type: "YAZI_LISTESI_GETIR", payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: "YAZI_LISTESI_GETIR_HATA",
        payload: "Yazilar yuklenirken hata olustu.",
      });
    });
};

export const yaziGetir = (id) => (dispatch) => {
  Axios.all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = {
        ...responses[0].data,
        yorumlar: responses[1].data,
      };
      dispatch({ type: "YAZI_GETIR", payload });
    })
    .catch((error) => {
      dispatch({
        type: "YAZI_GETIR_HATA",
        payload: "Yazi yuklenirken hata olustu.",
      });
    });
};

export const yaziDuzenle = (id, yazi, push) => (dispatch) => {
  console.log({ yazi });
  api()
    .put(`/posts/${id}`, yazi)
    .then((response) => {
      dispatch({ type: "YAZI_DUZENLE", payload: response.data });
      push(`/posts/${id}`);
    })
    .catch((error) => {
      dispatch({
        type: "YAZI_DUZENLE_HATA",
        payload: "Başlık ve yazı içeriği alanları zorunludur.",
      });
    });
};

export const yorumEkle = (id, yorum) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, yorum)
    .then((response) => {
      dispatch({ type: "YORUM_EKLE", payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: "YORUM_EKLE_HATA",
        payload: "Yorum eklerken hata olustu.",
      });
    });
};

export const yaziSil = (id, close, push) => (dispatch) => {
  api()
    .delete(`/posts/${id}`)
    .then(() => {
      dispatch({ type: "YAZI_SIL", payload: id });
      close();
      push(`/`);
    })
    .catch(() => {
      dispatch({
        type: "YAZI_SIL_HATA",
        payload: "Yazıyı silerken hata oluştu.",
      });
    });
};
