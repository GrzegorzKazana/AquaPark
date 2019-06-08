import * as API from "../api/ApiCalls";
import { notification } from "antd";
import { saveAs } from "file-saver";

export const FETCH_RAPORT = "FETCH_RAPORT";
export const fetchRaport = () => ({
  type: FETCH_RAPORT
});

export const LOAD_RAPORT = "LOAD_RAPORT";
export const loadRaport = raport => ({
  type: LOAD_RAPORT,
  raport
});

export const FETCH_RAPORT_ERROR = "FETCH_RAPORT_ERROR";
export const fetchRaportError = () => ({
  type: FETCH_RAPORT_ERROR
});

export const fetchStandardRaportThunk = () => dispatch => {
  dispatch(fetchRaport());
  API.getRaport()
    .then(raport => {
      console.log(raport);
      dispatch(loadRaport(raport.pdfData));
      saveRaport(raport);
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchRaportError());
      notification.error({
        message: err
      });
    });
};

export const fetchTimedRaportThunk = (dateStart, dateEnd) => dispatch => {
  dispatch(fetchRaport());
  API.getTimedRaport(dateStart, dateEnd)
    .then(raport => {
      console.log(raport);
      dispatch(loadRaport(raport.pdfData));
      saveRaport(raport);
    })
    .catch(err => {
      console.log(err);
      dispatch(fetchRaportError());
      notification.error({
        message: err
      });
    });
};

const saveRaport = raport => {
  const byteNumbers = atob(raport.pdfData)
    .split("")
    .map(char => char.charCodeAt());
  const bytes = new Uint8Array(byteNumbers);
  const blob = new Blob([bytes], { type: "application/pdf" });
  saveAs(blob, "raport.pdf");
};
