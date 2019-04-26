import React, { useState } from "react";
import styles from "./OccupacyPage.module.scss";
import OccupacyMap from "./OccupacyMap";
import { Card } from "antd";

const OccupacyPage = () => {
  const [attraction, setAttraction] = useState({
    id_area: -1,
    name_area: "Aquapark",
    id_attraction: -1,
    name_attraction: "Aquapark",
    occupancyRatio: Math.random(),
    numberOfPeople: Math.random() * 500
  });
  return (
    <Card className={styles.OccupacyPage}>
      <Card
        size="small"
        title={`${attraction.name_attraction} - ${attraction.name_area}`}
        className={styles.OccupacyHeader}
      >
        <p>
          Ilość osób: <b>{Math.round(attraction.numberOfPeople)}</b>
        </p>
      </Card>
      <OccupacyMap handleAttractionChange={attr => setAttraction(attr)} />
    </Card>
  );
};
export default OccupacyPage;
