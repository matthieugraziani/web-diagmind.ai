import { useEffect } from "react";

const PacsViewer = () => {
  useEffect(() => {
    // Hide any overflow on body while viewer is mounted
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <iframe
      src="/pacs/index.html"
      title="Visionneuse PACS - IRM Cérébrale"
      className="w-full h-screen border-0"
      allow="fullscreen"
    />
  );
};

export default PacsViewer;
