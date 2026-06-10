// src/constants/business.ts

export interface BusinessInfo {
  name: string;
  tagline: string;
  instagram: string;
  location: string;
  phone: string;
  fssai: string;
  description: string[];
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Aksha Cakes",
  tagline: "Eggless | Homemade",
  instagram: "@aksha.cakes",
  location: "Gudivada, Andhra Pradesh, India",
  phone: "7337335674",
  fssai: "20126121000045",
  description: [
    "Customized Cakes",
    "Eggless Cakes",
    "Freshly Baked",
    "Birthday Cakes",
    "Anniversary Cakes",
    "Theme Cakes",
    "Homemade Cakes",
  ],
};