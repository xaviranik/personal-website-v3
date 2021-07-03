import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../../assets/zabir-ahmed-anik.pdf";

const ResumePDF = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-navy-light rounded-lg">
      <div className="flex flex-col h-screen justify-center items-center">
        <Document
          className=""
          file="https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p className="text-gray-300 text-xl text-center">
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default ResumePDF;
