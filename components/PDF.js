import React from "react";
import PDFStyles from "../styles/PDF.module.css";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.com/libraries/pdf.js";

const PDF = () => {
  return (
    <div>
      <h2>The problem</h2>
      <Document
        file={"../utils/Theorie_des_jeux.pdf"}
        onLoadError={console.error}
        style={{ width: "100vh", height: "auto" }}
      >
        <Page pageIndex={0} />
      </Document>
    </div>
  );
};

export default PDF;
