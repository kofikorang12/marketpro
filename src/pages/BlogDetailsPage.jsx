import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import BlogDetails from "../components/BlogDetails";
import ScrollToTop from "react-scroll-to-top";
const BlogDetailsPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Blog Details"} />

      {/* BlogDetails */}
      <BlogDetails />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BlogDetailsPage;
