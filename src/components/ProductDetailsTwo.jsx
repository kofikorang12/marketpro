import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getCountdown } from "../helper/Countdown";

const ProductDetailsTwo = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const productImages = [
    "assets/images/thumbs/product-details-two-thumb1.png",
    "assets/images/thumbs/product-details-two-thumb2.png",
    "assets/images/thumbs/product-details-two-thumb3.png",
    "assets/images/thumbs/product-details-two-thumb1.png",
    "assets/images/thumbs/product-details-two-thumb2.png",
  ];

  // increment & decrement
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);

  const [mainImage, setMainImage] = useState(productImages[0]);

  const settingsThumbs = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <section className="product-details py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-9">
            <div className="row gy-4">
              <div className="col-xl-6">
                <div className="product-details__left">
                  <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                    <div className="">
                      <div className="product-details__thumb flex-center h-100">
                        <img src={mainImage} alt="Main Product" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-24">
                    <div className="product-details__images-slider">
                      <Slider {...settingsThumbs}>
                        {productImages.map((image, index) => (
                          <div
                            className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8"
                            key={index}
                            onClick={() => setMainImage(image)}
                          >
                            <img
                              className="thum"
                              src={image}
                              alt={`Thumbnail ${index}`}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="product-details__content">
                  <div className="flex-center mb-24 flex-wrap gap-16 bg-color-one rounded-8 py-16 px-24 position-relative z-1">
                    <img
                      src="assets/images/bg/details-offer-bg.png"
                      alt=""
                      className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
                    />
                    <div className="flex-align gap-16">
                      <span className="text-white text-sm">Special Offer:</span>
                    </div>
                    <div className="countdown" id="countdown11">
                      <ul className="countdown-list flex-align flex-wrap">
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.days}
                          <span className="days" />
                        </li>
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.hours}
                          <span className="hours" />
                        </li>
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.minutes}
                          <span className="minutes" />
                        </li>
                        <li className="countdown-list__item text-heading flex-align gap-4 text-xs fw-medium w-28 h-28 rounded-4 border border-main-600 p-0 flex-center">
                          {timeLeft.seconds}
                          <span className="seconds" />
                        </li>
                      </ul>
                    </div>
                    <span className="text-white text-xs">
                      Remains untill the end of the offer
                    </span>
                  </div>
                  <h5 className="mb-12">African Black soap</h5>
                  <div className="flex-align flex-wrap gap-12">
                    <div className="flex-align gap-12 flex-wrap">
                      <div className="flex-align gap-8">
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                        <span className="text-15 fw-medium text-warning-600 d-flex">
                          <i className="ph-fill ph-star" />
                        </span>
                      </div>
                      <span className="text-sm fw-medium text-neutral-600">
                        4.7 Star Rating
                      </span>
                      <span className="text-sm fw-medium text-gray-500">
                        (21,671)
                      </span>
                    </div>
                    <span className="text-sm fw-medium text-gray-500">|</span>
                    <span className="text-gray-900">
                      {" "}
                      <span className="text-gray-400">SKU:</span>EB4DRP{" "}
                    </span>
                  </div>
                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  <p className="text-gray-700">
                    African Black Soap is a traditional soap originating from
                    West Africa, known for its natural ingredients and numerous
                    skin benefits. It is made from locally harvested plants such
                    as cocoa pods, palm tree leaves, and shea tree bark, which
                    are sun-dried and roasted. This soap is renowned for its
                    ability to cleanse, exfoliate, and moisturize the skin,
                    making it suitable for all skin types. It helps to treat
                    acne, eczema, and other skin conditions while promoting a
                    healthy, radiant complexion.
                  </p>
                  <div className="my-32 flex-align gap-16 flex-wrap">
                    <div className="flex-align gap-8">
                      <div className="flex-align gap-8 text-main-two-600">
                        <i className="ph-fill ph-seal-percent text-xl" />
                        -10%
                      </div>
                      <h6 className="mb-0">USD 38.69</h6>
                    </div>
                    <div className="flex-align gap-8">
                      <span className="text-gray-700">Regular Price</span>
                      <h6 className="text-xl text-gray-400 mb-0 fw-medium">
                        USD 42.99
                      </h6>
                    </div>
                  </div>

                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />

                  <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                  {/* <Link
                    to="/https://www.whatsapp.com"
                    className="btn btn-black flex-center gap-8 rounded-8 py-16"
                  >
                    <i className="ph ph-whatsapp-logo text-lg" />
                    Request More Information
                  </Link> */}
                  <div className="mt-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-80">
          <div className="product-dContent border rounded-24">
            <div className="product-dContent__header border-bottom border-gray-100 flex-between flex-wrap gap-16">
              <ul
                className="nav common-tab nav-pills mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <Link
                to="#"
                className="btn bg-color-one rounded-16 flex-align gap-8 text-main-600 hover-bg-main-600 hover-text-white"
              >
                <img src="assets/images/icon/satisfaction-icon.png" alt="" />
                100% Satisfaction Guaranteed
              </Link>
            </div>
            <div className="product-dContent__box">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                  tabIndex={0}
                >
                  {/* <div className="mb-40">
                    <h6 className="mb-24">Product Description</h6>
                    <p>African product with high quality</p>

                    <ul className="list-inside mt-32 ms-16">
                      <li className="text-gray-400 mb-4">
                        8.0 oz. bag of LAY'S Classic Potato Chips
                      </li>
                      <li className="text-gray-400 mb-4">
                        Tasty LAY's potato chips are a great snack
                      </li>
                      <li className="text-gray-400 mb-4">
                        Includes three ingredients: potatoes, oil, and salt
                      </li>
                      <li className="text-gray-400 mb-4">
                        Gluten free product
                      </li>
                    </ul>
                  </div> */}
                  <div className="mb-40">
                    <h6 className="mb-24">Product Specifications</h6>
                    <ul className="mt-32">
                      <li className="text-gray-400 mb-14 flex-align gap-14">
                        <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                          <i className="ph ph-check" />
                        </span>
                        <span className="text-heading fw-medium">
                          Product Type:
                          <span className="text-gray-500"> Soap</span>
                        </span>
                      </li>

                      <li className="text-gray-400 mb-14 flex-align gap-14">
                        <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                          <i className="ph ph-check" />
                        </span>
                        <span className="text-heading fw-medium">
                          Brand:
                          <span className="text-gray-500"> Lay's</span>
                        </span>
                      </li>
                      {/* <li className="text-gray-400 mb-14 flex-align gap-14">
                        <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                          <i className="ph ph-check" />
                        </span>
                        <span className="text-heading fw-medium">
                          FSA Eligible:
                          <span className="text-gray-500"> No</span>
                        </span>
                      </li> */}
                      <li className="text-gray-400 mb-14 flex-align gap-14">
                        <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                          <i className="ph ph-check" />
                        </span>
                        {/* <span className="text-heading fw-medium">
                          Size/Count:
                          <span className="text-gray-500"> 8.0oz</span>
                        </span> */}
                      </li>
                      <li className="text-gray-400 mb-14 flex-align gap-14">
                        <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                          <i className="ph ph-check" />
                        </span>
                        {/* <span className="text-heading fw-medium">
                          Item Code:
                          <span className="text-gray-500"> 331539</span>
                        </span> */}
                      </li>
                      <li className="text-gray-400 mb-14 flex-align gap-14">
                        <span className="w-20 h-20 bg-main-50 text-main-600 text-xs flex-center rounded-circle">
                          <i className="ph ph-check" />
                        </span>
                        <span className="text-heading fw-medium">
                          Ingredients:
                          <span className="text-gray-500">Not Available</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                  tabIndex={0}
                >
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <h6 className="mb-24">Product Description</h6>
                      <div className="d-flex align-items-start gap-24 pb-44 border-bottom border-gray-100 mb-44">
                        <img
                          src="assets/images/thumbs/comment-img1.png"
                          alt=""
                          className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                        />
                        <div className="flex-grow-1">
                          <div className="flex-between align-items-start gap-8 ">
                            <div className="">
                              <h6 className="mb-12 text-md">Nicolas cage</h6>
                              <div className="flex-align gap-8">
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                            </div>
                            <span className="text-gray-800 text-xs">
                              3 Days ago
                            </span>
                          </div>
                          <h6 className="mb-14 text-md mt-24">
                            Greate Product
                          </h6>
                          <p className="text-gray-700">
                            is an amazing product that has transformed my skin.
                            After using it for just a few weeks, I noticed a
                            significant improvement in my complexion. My skin
                            feels cleaner, softer, and more hydrated. The
                            natural ingredients are gentle yet effective, and I
                            love that it's suitable for all skin types. Highly
                            recommend!
                          </p>
                          <div className="flex-align gap-20 mt-44">
                            <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                              <i className="ph-bold ph-thumbs-up" />
                              Like
                            </button>
                            <Link
                              to="#comment-form"
                              className="flex-align gap-12 text-gray-700 hover-text-main-600"
                            >
                              <i className="ph-bold ph-arrow-bend-up-left" />
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-start gap-24">
                        <img
                          src="assets/images/thumbs/comment-img1.png"
                          alt=""
                          className="w-52 h-52 object-fit-cover rounded-circle flex-shrink-0"
                        />
                        <div className="flex-grow-1">
                          <div className="flex-between align-items-start gap-8 ">
                            <div className="">
                              <h6 className="mb-12 text-md">Thomas Wood</h6>
                              <div className="flex-align gap-8">
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-15 fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                            </div>
                            <span className="text-gray-800 text-xs">
                              1 month ago
                            </span>
                          </div>
                          <h6 className="mb-14 text-md mt-24">
                            wonderfull Product
                          </h6>
                          <p className="text-gray-700">
                            This soap is fantastic! It has a pleasant scent and
                            leaves my skin feeling soft and refreshed. I've
                            noticed a significant improvement in my skin's
                            texture and clarity since I started using it. Highly
                            recommended!
                          </p>
                          <div className="flex-align gap-20 mt-44">
                            <button className="flex-align gap-12 text-gray-700 hover-text-main-600">
                              <i className="ph-bold ph-thumbs-up" />
                              Like
                            </button>
                            <Link
                              to="#comment-form"
                              className="flex-align gap-12 text-gray-700 hover-text-main-600"
                            >
                              <i className="ph-bold ph-arrow-bend-up-left" />
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="mt-56">
                        <div className="">
                          <h6 className="mb-24">Write a Review</h6>
                          <span className="text-heading mb-8">
                            What is it like to Product?
                          </span>
                          <div className="flex-align gap-8">
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                          </div>
                        </div>
                        <div className="mt-32">
                          <form action="#">
                            <div className="mb-32">
                              <label
                                htmlFor="title"
                                className="text-neutral-600 mb-8"
                              >
                                Review Title
                              </label>
                              <input
                                type="text"
                                className="common-input rounded-8"
                                id="title"
                                placeholder="Great Products"
                              />
                            </div>
                            <div className="mb-32">
                              <label
                                htmlFor="desc"
                                className="text-neutral-600 mb-8"
                              >
                                Review Content
                              </label>
                              <textarea
                                className="common-input rounded-8"
                                id="desc"
                                defaultValue={""}
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-main rounded-pill mt-48"
                            >
                              Submit Review
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="ms-xxl-5">
                        <h6 className="mb-24">Customers Feedback</h6>
                        <div className="d-flex flex-wrap gap-44">
                          <div className="border border-gray-100 rounded-8 px-40 py-52 flex-center flex-column flex-shrink-0 text-center">
                            <h2 className="mb-6 text-main-600">4.8</h2>
                            <div className="flex-center gap-8">
                              <span className="text-15 fw-medium text-warning-600 d-flex">
                                <i className="ph-fill ph-star" />
                              </span>
                              <span className="text-15 fw-medium text-warning-600 d-flex">
                                <i className="ph-fill ph-star" />
                              </span>
                              <span className="text-15 fw-medium text-warning-600 d-flex">
                                <i className="ph-fill ph-star" />
                              </span>
                              <span className="text-15 fw-medium text-warning-600 d-flex">
                                <i className="ph-fill ph-star" />
                              </span>
                              <span className="text-15 fw-medium text-warning-600 d-flex">
                                <i className="ph-fill ph-star" />
                              </span>
                            </div>
                            <span className="mt-16 text-gray-500">
                              Average Product Rating
                            </span>
                          </div>
                          <div className="border border-gray-100 rounded-8 px-24 py-40 flex-grow-1">
                            <div className="flex-align gap-8 mb-20">
                              <span className="text-gray-900 flex-shrink-0">
                                5
                              </span>
                              <div
                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-main-600 rounded-pill"
                                  style={{ width: "70%" }}
                                />
                              </div>
                              <div className="flex-align gap-4">
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                              <span className="text-gray-900 flex-shrink-0">
                                124
                              </span>
                            </div>
                            <div className="flex-align gap-8 mb-20">
                              <span className="text-gray-900 flex-shrink-0">
                                4
                              </span>
                              <div
                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-main-600 rounded-pill"
                                  style={{ width: "50%" }}
                                />
                              </div>
                              <div className="flex-align gap-4">
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                              <span className="text-gray-900 flex-shrink-0">
                                52
                              </span>
                            </div>
                            <div className="flex-align gap-8 mb-20">
                              <span className="text-gray-900 flex-shrink-0">
                                3
                              </span>
                              <div
                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={35}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-main-600 rounded-pill"
                                  style={{ width: "35%" }}
                                />
                              </div>
                              <div className="flex-align gap-4">
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                              <span className="text-gray-900 flex-shrink-0">
                                12
                              </span>
                            </div>
                            <div className="flex-align gap-8 mb-20">
                              <span className="text-gray-900 flex-shrink-0">
                                2
                              </span>
                              <div
                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={20}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-main-600 rounded-pill"
                                  style={{ width: "20%" }}
                                />
                              </div>
                              <div className="flex-align gap-4">
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                              <span className="text-gray-900 flex-shrink-0">
                                5
                              </span>
                            </div>
                            <div className="flex-align gap-8 mb-0">
                              <span className="text-gray-900 flex-shrink-0">
                                1
                              </span>
                              <div
                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow={5}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar bg-main-600 rounded-pill"
                                  style={{ width: "5%" }}
                                />
                              </div>
                              <div className="flex-align gap-4">
                                <span className="text-xs fw-medium text-warning-600 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                                <span className="text-xs fw-medium text-gray-400 d-flex">
                                  <i className="ph-fill ph-star" />
                                </span>
                              </div>
                              <span className="text-gray-900 flex-shrink-0">
                                2
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTwo;
