import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

interface PdfSlideshowOverlayProps {
  file: string;
  buttonLabel?: string;
}

export default function PdfSlideshowOverlay({
  file,
  buttonLabel = "View Slides",
}: PdfSlideshowOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState(1000); // default

  // 🔁 Resize on mount and window change
  useEffect(() => {
    function handleResize() {
      const maxWidth = 1000;
      const padding = 48; // Account for padding/margins
      const width = Math.min(window.innerWidth - padding, maxWidth);
      setPageWidth(width);
    }

    if (isOpen) handleResize(); // run on open
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const nextPage = () => setPageNumber((n) => Math.min((numPages || 1), n + 1));
  const prevPage = () => setPageNumber((n) => Math.max(1, n - 1));

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outline">
        {buttonLabel}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-white/90 z-50 flex flex-col items-center justify-center p-4 sm:p-6 overflow-auto">
          {/* Close button */}
          <div className="w-full flex justify-end mb-4">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="text-black text-xl"
            >
              ✕ Close
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="w-full flex justify-center">
            <Document
              file={file}
              onLoadSuccess={({ numPages }) => {
                setNumPages(numPages);
                setPageNumber(1);
              }}
            >
              <Page
                pageNumber={pageNumber}
                width={pageWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-6 bg-gray-600 text-white rounded-xl px-4 py-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={prevPage}
              disabled={pageNumber === 1}
            >
              Previous
            </Button>
            <span className="text-sm">
              Page {pageNumber} of {numPages}
            </span>
            <Button
              size="sm"
              variant="secondary"
              onClick={nextPage}
              disabled={pageNumber === numPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
