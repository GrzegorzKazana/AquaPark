import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AdminContent.scss";
import dictionaryList from "../../config/dictionaryList";
import styles from "./AdminContent.module.scss";
import NavBar from "./NavBar/NavBar";
import MainMenu from "./MainMenu/MainMenu";
import OccupancyPage from "./OccupacyPage/OccupacyPage";
import NewsletterPage from "./NewsletterPage/NewsletterPage";
import PricesPage from "./Pricing/PricesPage/PricesPage";
import ClassDiscountPage from "./Pricing/ClassDiscountPage/ClassDiscountPage";
import { Layout } from "antd";

import { connect } from "react-redux";
import { logOutUserThunk } from "../../actions/UserActions";
import { editDictThunk } from "../../actions/DictionaryActions";
import { emitNewsletter } from "../../api/ApiCalls";

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

const AdminContent = ({ logOut, prices, discounts, editDict, user }) => {
  const [openPage, setOpenPage] = useState(views.OCCUPACY);
  return (
    <Layout className={styles.Layout}>
      <Layout.Header>
        <NavBar onLogOut={() => logOut(user.user.userToken)} />
      </Layout.Header>
      <Layout>
        <Layout.Sider theme="light" breakpoint="md" collapsedWidth={0}>
          <div className={styles.SiderContent}>
            <MainMenu setOpenPage={setOpenPage} views={views} />
          </div>
        </Layout.Sider>
        <Layout.Content className={styles.Content}>
          {openPage === views.OCCUPACY && <OccupancyPage />}
          {openPage === views.NEWSLETTER && (
            <NewsletterPage
              onEmit={msg => emitNewsletter(user.user.userToken, msg)}
            />
          )}
          {openPage === views.PRICES && (
            <PricesPage
              prices={prices}
              editDict={dictData =>
                editDict(
                  user.user.userToken,
                  dictionaryList.find(d => d.name === "PRICES"),
                  dictData
                )
              }
            />
          )}
          {openPage === views.CLASS_DISCOUNT && (
            <ClassDiscountPage
              discounts={discounts}
              editDict={dictData =>
                editDict(
                  user.user.userToken,
                  dictionaryList.find(d => d.name === "CLASS_DISCOUNTS"),
                  dictData
                )
              }
            />
          )}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  logOut: token => dispatch(logOutUserThunk(token)),
  editDict: (userToken, dict, dictData) =>
    dispatch(editDictThunk(userToken, dict, dictData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminContent);

AdminContent.propTypes = {
  logOut: PropTypes.func.isRequired,
  prices: PropTypes.object,
  discounts: PropTypes.object
};
