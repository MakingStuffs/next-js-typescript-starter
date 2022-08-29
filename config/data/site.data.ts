type SiteInfo = {
  name: string;
  description: string;
  favicon: string;
  socialImage: string;
  url: string;
};

const siteInfo: SiteInfo = {
  name: "Website",
  description: "This is a website",
  favicon: "/assets/images/favicon.icon",
  socialImage: "/assets/images/social-image.jpg",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://github.com/makingstuffs",
};

export default siteInfo;
