import "@fontsource/nunito-sans";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

const InternNova = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="InternNova - Find internships, for highschoolers"
        description="InternNova makes finding an internship easy and accessible for high-school students all over the world! Through our site, you'll be able to connect with prestigious global companies which will help you build your resume and gain invaluable inexperience to kickstart your career!"
        openGraph={{
          url: "https://www.internnova.co",
          title: "InternNova - Find internships, for highschoolers",
          description:
            "InternNova makes finding an internship easy and accessible for high-school students all over the world! Through our site, you'll be able to connect with prestigious global companies which will help you build your resume and gain invaluable inexperience to kickstart your career!",
          images: [
            {
              url: "https://www.internnova.co/seo.png",
              height: 1212,
              width: 2114,
              alt: "Samrath",
            },
          ],
          site_name: "InternNova",
        }}
        twitter={{
          handle: "@internnovahq",
          site: "https://www.internnova.co",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default InternNova;
