// components/PdfSlideshow.tsx
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
interface PdfSlideshowProps {
  file: string; // PDF file path
}

export default function PdfSlideshow({ file }: PdfSlideshowProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const nextPage = () => setPageNumber((p) => Math.min((numPages || 1), p + 1));
  const prevPage = () => setPageNumber((p) => Math.max(1, p - 1));

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Page pageNumber={pageNumber} width={800} />
      </Document>

      <div className="mt-4 flex justify-center items-center gap-4 text-sm">
        <button
          onClick={prevPage}
          disabled={pageNumber === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {pageNumber} of {numPages}
        </span>

        <button
          onClick={nextPage}
          disabled={pageNumber === numPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
