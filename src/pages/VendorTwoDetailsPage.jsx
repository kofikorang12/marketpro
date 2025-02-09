import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import VendorTwoDetails from "../components/VendorTwoDetails";
import ShippingOne from "../components/ShippingOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";

const VendorTwoDetailsPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Vendor Details"} />

      {/* VendorTwoDetails */}
      <VendorTwoDetails />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default VendorTwoDetailsPage;
