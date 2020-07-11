const INITIAL_STATE = {
  yaziListesi: [],
  yaziListesiHata: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "YAZI_LISTESI_GETIR":
      return { ...state, yaziListesi: action.payload };
    case "YAZI_LISTESI_GETIR_HATA":
      return { ...state, yaziListesiHata: action.payload };
    default:
      return state;
  }
};
