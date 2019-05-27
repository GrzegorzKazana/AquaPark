import React from "react";
import PropTypes from "prop-types";
import styles from "./OccupacyPage.module.scss";
import aquapark_map from "../../../assets/aquapark_map";

const OccupancyMap = ({ attractions, handleAttractionChange }) => (
  <div className={styles.MapWrapper}>
    <svg className={styles.SvgMap} viewBox="0 0 777 480">
      <g>
        {aquapark_map.areas
          .map(area =>
            area.attractions.map(attraction => {
              const sel = attractions.find(
                a => a.attractionId === attraction.attractionId
              );
              return (
                <path
                  key={attraction.attractionId}
                  className={styles.MapElement}
                  id={attraction.attractionId.toString()}
                  d={attraction.path}
                  fill={(() => {
                    switch (area.zoneId) {
                      case 0:
                        return `rgba(255, 0, 0, ${sel.occupancyRatio})`;
                      case 1:
                        return `rgba(0, 0, 255, ${sel.occupancyRatio})`;
                      case 2:
                        return `rgba(255, 255, 0, ${sel.occupancyRatio})`;
                      default:
                        return `rgba(255, 255, 255, 1)`;
                    }
                  })()}
                  onClick={() =>
                    handleAttractionChange({ ...attraction, ...area, ...sel })
                  }
                />
              );
            })
          )
          .flat(1)}
      </g>
    </svg>
  </div>
);
export default OccupancyMap;

OccupancyMap.propTypes = {
  handleAttractionChange: PropTypes.func.isRequired
};
