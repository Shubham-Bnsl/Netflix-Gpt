import Netflix_Logo from "../Netflix_Logo.png";

export const LOGO = Netflix_Logo;
export const USER_AVTAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

 
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer "+ import.meta.env.VITE_OPTIONS_API,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const BackgroundIMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "Hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
];
export const GEMINI_AI__KEY = import.meta.env.VITE_GEMINI_KEY;
