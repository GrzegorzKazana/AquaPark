import React, { useState } from "react";
import "./AdminContent.scss";
import styles from "./AdminContent.module.scss";
import NavBar from "./NavBar/NavBar";
import MainMenu from "./MainMenu/MainMenu";
import OccupancyPage from "./OccupacyPage/OccupacyPage";
import NewsletterPage from "./NewsletterPage/NewsletterPage";
import PricesPage from "./Pricing/PricesPage/PricesPage";
import { Layout } from "antd";

const views = {
  OCCUPACY: "0",
  PRICES: "1",
  PERIOD_DISCOUNT: "2",
  CLASS_DISCOUNT: "3",
  DICT_A: "4",
  DICT_B: "5",
  NEWSLETTER: "6",
  REPORT: "7"
};

const AdminContent = () => {
  const [openPage, setOpenPage] = useState(views.OCCUPACY);
  return (
    <Layout className={styles.Layout}>
      <Layout.Header className={styles.Header}>
        <NavBar />
      </Layout.Header>
      <Layout>
        <Layout.Sider theme="light" breakpoint="md" collapsedWidth={0}>
          <div className={styles.SiderContent}>
            <MainMenu setOpenPage={setOpenPage} views={views} />
          </div>
        </Layout.Sider>
        <Layout.Content className={styles.Content}>
          {openPage === views.OCCUPACY && <OccupancyPage />}
          {openPage === views.NEWSLETTER && <NewsletterPage />}
          {openPage === views.PRICES && <PricesPage />}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default AdminContent;
