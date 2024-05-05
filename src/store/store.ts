import { create } from "zustand";

type ImageStore = {
  image: string | null;
  updateImage: (newImage: string | null) => void;
};

export const useImageStore = create<ImageStore>()((set) => ({
  image: null,
  updateImage: (newImage: string | null) => set({ image: newImage }),
}));
