export type CakeCategory =
  | "Birthday"
  | "Anniversary"
  | "Theme"
  | "Custom";

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: CakeCategory;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/cake1.jpeg",
    title: "Birthday Cake",
    category: "Birthday",
  },
  {
    id: 2,
    src: "/gallery/cake2.jpeg",
    title: "Anniversary Cake",
    category: "Anniversary",
  },
  {
    id: 3,
    src: "/gallery/cake3.jpeg",
    title: "Theme Cake",
    category: "Theme",
  },
  {
    id: 4,
    src: "/gallery/cake4.jpeg",
    title: "Chocolate Cake",
    category: "Custom",
  },
  {
    id: 5,
    src: "/gallery/cake5.jpeg",
    title: "Custom Cake",
    category: "Custom",
  },
];