"use client";

import { useImageStore } from "@/store/store";
import { useEffect, useState, useRef } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

export default function ContentContainer() {
  const { image: imageUrl } = useImageStore();
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const stageContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Load the image and adjust size
  useEffect(() => {
    if (imageUrl) {
      const img = new window.Image();
      img.onload = () => {
        setImage(img);
        adjustImageSize(img);
      };
      img.src = imageUrl;
    }
  }, [imageUrl, dimensions]);

  // Adjust the image size to fit within the canvas while maintaining aspect ratio
  const adjustImageSize = (img: HTMLImageElement) => {
    const aspectRatio = img.width / img.height;
    let newWidth = dimensions.width;
    let newHeight = dimensions.width / aspectRatio;

    if (newHeight > dimensions.height) {
      newHeight = dimensions.height;
      newWidth = dimensions.height * aspectRatio;
    }

    setImageDimensions({ width: newWidth, height: newHeight });
  };

  // Resize handling
  useEffect(() => {
    function updateSize() {
      if (stageContainerRef.current) {
        const padding = 16 * 2; // Adjust for padding as before
        setDimensions({
          width: stageContainerRef.current.offsetWidth - padding,
          height: stageContainerRef.current.offsetHeight - padding,
        });
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize(); // Initial size update

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      ref={stageContainerRef}
      className="flex flex-row w-full h-[calc(100vh-2rem)] p-4 shadow bg-card text-card-foreground round"
    >
      <div className="flex items-center justify-center w-full bg-secondary">
        <Stage width={dimensions.width} height={dimensions.height}>
          <Layer>
            {image && (
              <KonvaImage
                image={image}
                width={imageDimensions.width}
                height={imageDimensions.height}
                x={(dimensions.width - imageDimensions.width) / 2}
                y={(dimensions.height - imageDimensions.height) / 2}
                cornerRadius={100}
              />
            )}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
