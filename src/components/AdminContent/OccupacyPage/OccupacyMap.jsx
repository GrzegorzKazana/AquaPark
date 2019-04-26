import React from "react";
import styles from "./OccupacyPage.module.scss";
import aquapark_map from "../../../assets/aquapark_map";

const OccupancyMap = ({ handleAttractionChange }) => (
  <div className={styles.MapWrapper}>
    <svg className={styles.SvgMap} viewBox="0 0 777 480">
      <g>
        {aquapark_map.areas
          .map(area =>
            area.attractions.map(attraction => (
              <path
                key={attraction.id_attraction}
                className={styles.MapElement}
                id={attraction.id_attraction.toString()}
                d={attraction.path}
                fill={(() => {
                  switch (area.id_area) {
                    case 0:
                      return `rgba(255, 0, 0, ${attraction.occupancyRatio})`;
                    case 1:
                      return `rgba(0, 0, 255, ${attraction.occupancyRatio})`;
                    case 2:
                      return `rgba(255, 255, 0, ${attraction.occupancyRatio})`;
                    default:
                      return `rgba(255, 255, 255, 1)`;
                  }
                })()}
                onClick={() =>
                  handleAttractionChange({ ...attraction, ...area })
                }
              />
            ))
          )
          .flat(1)}
      </g>
    </svg>
  </div>
);
export default OccupancyMap;
