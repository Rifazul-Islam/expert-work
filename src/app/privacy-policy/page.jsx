import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased leading-relaxed min-h-screen py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600">
            Effective date: <strong>October 27, 2025</strong>
          </p>
          <p className="mt-4 text-slate-700">
            This Privacy Policy explains how <strong>prompt-expert.info</strong>{" "}
            ("we", "our", or "us") collects, uses, discloses, and protects
            information when you visit and use our website to explore and copy
            Gemini AI image prompts. By using our website, you agree to the
            collection and use of information in accordance with this policy.
          </p>
        </header>

        <nav className="mb-6 bg-white p-4 rounded-lg shadow-sm">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>
              <a className="text-sky-600 hover:underline" href="#about-site">
                About this site
              </a>
            </li>
            <li>
              <a
                className="text-sky-600 hover:underline"
                href="#what-we-collect"
              >
                What we collect
              </a>
            </li>
            <li>
              <a className="text-sky-600 hover:underline" href="#how-we-use">
                How we use information
              </a>
            </li>
            <li>
              <a className="text-sky-600 hover:underline" href="#data-sharing">
                Data sharing & third parties
              </a>
            </li>
            <li>
              <a className="text-sky-600 hover:underline" href="#cookies">
                Cookies & tracking
              </a>
            </li>
            <li>
              <a className="text-sky-600 hover:underline" href="#security">
                Security
              </a>
            </li>
          </ul>
        </nav>

        <main className="space-y-8">
          <section
            id="about-site"
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-medium mb-3">About this site</h2>
            <p className="text-slate-700">
              <strong>prompt-expert.info</strong> is a free web platform
              designed to help users find and copy high-quality prompts for
              Gemini AI image generation. The prompts available on our site are
              pre-created and publicly listed for educational and creative use.
              Users cannot create, upload, or modify prompts directly on the
              site. Our goal is to make it easy for visitors to discover
              well-crafted AI prompts and use them in their preferred tools.
            </p>
          </section>

          <section
            id="what-we-collect"
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-medium mb-3">
              1. What information we collect
            </h2>
            <p className="text-slate-700 mb-3">
              Since users only browse and copy existing prompts, we collect very
              limited data — mainly for improving the site experience. This
              includes:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>
                <strong>Usage data</strong> — Non-identifying technical data
                such as IP address, browser type, device information, pages
                viewed, and visit duration.
              </li>
              <li>
                <strong>Feedback or contact information</strong> — If you
                contact us directly via email, we may collect your name and
                email address to respond.
              </li>
            </ul>
          </section>

          <section
            id="how-we-use"
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-medium mb-3">
              2. How we use information
            </h2>
            <p className="text-slate-700">
              We use collected data to maintain and improve our website, track
              general traffic analytics, and ensure site security. We do not
              sell, trade, or rent user information.
            </p>
          </section>

          <section
            id="data-sharing"
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-medium mb-3">
              3. Data sharing & third parties
            </h2>
            <p className="text-slate-700 mb-3">
              We do not share personal data with any third parties. However, we
              may use trusted analytics services like Google Analytics to
              understand how visitors interact with our site. These third-party
              tools may use cookies to collect anonymous usage statistics.
            </p>
          </section>

          <section id="cookies" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium mb-3">4. Cookies & tracking</h2>
            <p className="text-slate-700">
              We use cookies only to enhance your browsing experience and
              measure site traffic. You can disable cookies in your browser
              settings if you prefer not to share this data.
            </p>
          </section>

          <section id="security" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium mb-3">5. Security</h2>
            <p className="text-slate-700">
              We take appropriate security measures to protect data from
              unauthorized access or misuse. While no system is entirely secure,
              we make reasonable efforts to safeguard any data collected through
              our website.
            </p>
          </section>

          <section id="contact" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium mb-3">6. Contact us</h2>
            <p className="text-slate-700">
              For any privacy-related questions, please contact us at
              <strong> support@prompt-expert.info</strong>.
            </p>
          </section>
        </main>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} prompt-expert.info — All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
