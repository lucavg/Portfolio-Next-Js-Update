import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import userDataEn from "@constants/dataEn";
import userDataNl from "@constants/dataNl";
import Modal from "react-responsive-modal";
import "react-slideshow-image/dist/styles.css";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Internship() {
  const router = useRouter();
  const t = useTranslations("Internship");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const data = router.locale === "nl" ? userDataNl : userDataEn;

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    margin: "8px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#666"
          onMouseEnter={(e) => (e.target.style.fill = "#ccc")}
          onMouseLeave={(e) => (e.target.style.fill = "#666")}
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
          onMouseEnter={(e) => (e.target.style.fill = "#ccc")}
          onMouseLeave={(e) => (e.target.style.fill = "#666")}
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  const openModal = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t("pageTitle")}
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto gap-y-20 gap-x-20">
            <div className="inline-flex flex-col col-span-1 md:col-span-2">
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 pb-5 dark:text-gray-200">
                  {t("descriptionTitle")}
                </h1>
                {data.internshipDescription.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-l mb-4 text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  ></p>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-1 md:col-span-3">
              <div className="slide-container">
                <Fade {...properties} transitionDuration={400}>
                  {data.fadeImages.map((fadeImage, index) => (
                    <div className="flex flex-col justify-center">
                      <img
                        style={{ width: "125%" }}
                        src={fadeImage.url}
                        alt={fadeImage.caption}
                        onClick={() => openModal(index)}
                      />
                      <h2 className="text-xl mx-auto my-2 text-gray-700 dark:text-gray-300">
                        {fadeImage.caption}
                      </h2>
                    </div>
                  ))}
                </Fade>
              </div>
              <div className="inline-flex flex-col">
                <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                  Internship Documentation
                </h1>
                <div className="mt-4 ml-4">
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={t("POALink")}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-52 group-hover:translate-x-0 transition duration-300"></div>
                        {t("POA")}
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={t("realizationReportLink")}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-52 group-hover:translate-x-0 transition duration-300"></div>
                        {t("realizationReport")}
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={t("reflectionReportLink")}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-52 group-hover:translate-x-0 transition duration-300"></div>
                        {t("reflectionReport")}
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-row justify-start items-center">
                    <a
                      href={t("weekReportsLink")}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <div className="my-4">&rarr;</div>
                      <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-52 group-hover:translate-x-0 transition duration-300"></div>
                        {t("weekReports")}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        center
        styles={{ modal: { maxWidth: "75%" } }}
        classNames={{ modal: "sm:max-w-fit" }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <img
            style={{ width: "150%", height: "150%", maxWidth: "100%" }}
            src={data.fadeImages[selectedImage]?.url}
            alt={data.fadeImages[selectedImage]?.caption}
          />
        </div>
        <h2 className="text-xl mx-auto my-2 text-gray-700">
          {data.fadeImages[selectedImage]?.caption}
        </h2>
      </Modal>
    </section>
  );
}
