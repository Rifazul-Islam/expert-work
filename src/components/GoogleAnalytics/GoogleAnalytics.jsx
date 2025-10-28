import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SLWSBTZQ8J"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SLWSBTZQ8J');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
