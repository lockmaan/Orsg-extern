import PDFStyles from "../styles/PDF.module.css";
import problemPDF from "../EME-601 Operation Research.pdf";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.13.216/pdf.min.js";

const PDF = () => {
  return (
    <div>
      <h2>Resume</h2>
      <Document
        file={problemPDF}
        onLoadError={console.error}
        style={{ width: "100vh", height: "auto" }}
      >
        <Page pageIndex={0} />
      </Document>
    </div>
  );
};

export default PDF;
