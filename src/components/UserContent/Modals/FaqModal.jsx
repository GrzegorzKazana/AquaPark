import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

const FaqModal = ({ open, handleClose }) => {
  const footer = (
    <Button type="primary" onClick={handleClose}>
      Ok
    </Button>
  );

  return (
    <Modal
      title="FAQ"
      visible={open}
      onOk={handleClose}
      footer={footer}
      onCancel={handleClose}
    >
      <ul>
        <li>
          <h3>Czy obowiązują mnie jakieś zniżki?</h3>
          <p>
            Wszystkie aktualnie obowiązujące oferty specjalne znajdują się w
            cenniku.
          </p>
        </li>
        <li>
          <h3>Czy mogę wypożyczyć u Was ręcznik?</h3>
          <p>Nie prowadzimy wypożyczalni ręczników.</p>
        </li>
        <li>
          <h3>Czy mogę wjechać z wózkiem z dzieckiem na strefę basenów?</h3>
          <p>
            Ze względu na wilgotność i wysoką temperaturę jest to bardzo zły
            pomysł, warunki te mają negatywny wpływ na stan techniczny sprzętu.
          </p>
        </li>
        <li>
          <h3>Czy muszę mieć klapki i czepek?</h3>
          <p>
            Nie jest to wymagane, ale ze względu na higienę bardzo wskazane.
          </p>
        </li>
        <li>
          <h3>Czy są atrakcje z których nie można korzystać będąc mokrym?</h3>
          <p>
            Tak, korzystanie z niektórych saun wymaga bycia suchym, aby nie było
            to niebezpieczne dla zdrowia.
          </p>
        </li>
      </ul>
    </Modal>
  );
};
export default FaqModal;

FaqModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
