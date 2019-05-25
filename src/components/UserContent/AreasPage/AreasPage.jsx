import React from "react";
import PropTypes from "prop-types";
import "./AreasPage.scss";
import styles from "./AreasPage.module.scss";
import { Carousel, Typography, Icon } from "antd";
import SpinnerOverlay from "../../Common/SpinnerOverlay/SpinnerOverlay";

const CarouselCard = ({ title, description, image }) => (
  <div className={styles.CarouselItem}>
    <img
      className={styles.CarouselItem__Image}
      alt="example"
      src={
        image ||
        "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzA0MzRjZGI4MTJlNjdkMzBmNV93aW5kb3dzX3hwX2JsaXNzLXdpZGUuanBnIl0sWyJwIiwidGh1bWIiLCJ4MzkwPiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA4MSAtYXV0by1vcmllbnQiXV0/windows_xp_bliss-wide.jpg"
      }
    />
    <span className={styles.CarouselItem__Description}>
      <Typography>
        <Typography.Title>{title}</Typography.Title>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Typography>
    </span>
  </div>
);

const AreasPage = ({ areas }) => {
  const carouselRef = React.createRef();

  const swipeLeft = () => carouselRef.current && carouselRef.current.prev();
  const swipeRight = () => carouselRef.current && carouselRef.current.next();

  return (
    <>
      <Icon
        type="left"
        className={styles.CarouselNavigationButtonLeft}
        onClick={swipeLeft}
      />
      <Icon
        type="right"
        className={styles.CarouselNavigationButtonRight}
        onClick={swipeRight}
      />

      <Carousel ref={carouselRef}>
        {areas.dictionary.map(area => (
          <CarouselCard
            key={area.zoneId}
            title={area.name}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac dignissim nisl. Donec pellentesque sapien convallis arcu maximus elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed euismod velit id justo pharetra, vitae posuere nulla molestie. Fusce ornare elit in leo ultricies scelerisque."
          />
        ))}
      </Carousel>
      <SpinnerOverlay open={areas.fetching} />
    </>
  );
};
export default AreasPage;

CarouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

AreasPage.propTypes = {
  areas: PropTypes.object.isRequired
};
