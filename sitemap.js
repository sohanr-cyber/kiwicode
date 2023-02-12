import SitemapGenerator from "next-sitemap";
const routes = [
  {
    url: "/",
    lastmod: "2022-01-01",
  },
  {
    url: "/login",
    lastmod: "2022-02-01",
  },
  {
    url: "/register",
    lastmod: "2022-03-01",
  },
];

const generator = new SitemapGenerator({
  urls: routes,
  targetDirectory: "static",
});

generator.generate();
