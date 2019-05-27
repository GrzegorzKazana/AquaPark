import React, { useState } from "react";
import styles from "./OccupacyPage.module.scss";
import OccupacyMap from "./OccupacyMap";
import { Card, Button } from "antd";

const OccupacyPage = ({ areas, fetchDicts }) => {
  const [attraction, setAttraction] = useState({
    zoneId: -1,
    zoneName: "Aquapark",
    attractionId: -1,
    name: "Aquapark",
    occupancyRatio: 0,
    amountOfPeople: areas.dictionary.reduce(
      (accum, curr) => accum + curr.amountOfPeople,
      0
    )
  });

  const flatAttractions = areas.dictionary.flatMap(z =>
    z.attractions.map(a => ({ ...a, zoneId: z.zoneId, zoneName: z.name }))
  );
  return (
    <Card className={styles.OccupacyPage}>
      <Card
        size="small"
        title={`${attraction.name} - ${attraction.zoneName}`}
        className={styles.OccupacyHeader}
        extra={
          <Button type="link" onClick={fetchDicts}>
            Odśwież
          </Button>
        }
      >
        <p>
          Ilość osób: <b>{Math.round(attraction.amountOfPeople)}</b>
        </p>
      </Card>
      <OccupacyMap
        attractions={flatAttractions}
        handleAttractionChange={attr => setAttraction(attr)}
      />
    </Card>
  );
};
export default OccupacyPage;
