import { api } from "../api";

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
