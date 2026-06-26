export const PEC_WHATSAPP = "2349124418659";
export const PEC_PHONE_DISPLAY = "09124418659";
export const PEC_EMAIL = "hello@prodigyexclusive.com";
export const PEC_LINKEDIN_URL =
  "https://www.linkedin.com/in/prodigy-exclusive-company-28780b223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
export const PEC_FACEBOOK_URL = "https://www.facebook.com/share/1JBGSzVdxR/";
export const PEC_INSTAGRAM_URL =
  "https://www.instagram.com/prodigy_exclusive_company?igsh=djByeXB0dWNvNzU2&utm_source=ig_contact_invite";
export const PEC_TIKTOK_URL =
  "https://www.tiktok.com/@prodigyexclusivecompany?_r=1&_t=ZS-97Xju9KRATB";
export const PEC_X_URL = "https://x.com/PECsolar";
export const PEC_YOUTUBE_URL = "https://www.youtube.com/@Prodigyexclusivecompany";
export const PEC_HEAD_OFFICE =
  "No 2 Ishola Bello street, Akiode Ojodu Berger, Ikeja Lagos";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${PEC_WHATSAPP}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
