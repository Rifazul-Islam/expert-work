import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-800  text-white p-10">
      <aside>
        <img className="h-14 md:h-16 " src="/gemini-images/logos.png" alt="" />
        <p>
          Prompt Expert
          <br />
          Providing reliable tech since 2025
        </p>
      </aside>
      <nav>
        <h6 className="footer-title font-bold">Services</h6>
        <Link href={"/boy-prompt"} className="link link-hover">
          Boys
        </Link>
        <Link href={"/girl-prompt"} className="link link-hover">
          Girl
        </Link>
        <Link href={"/couple-prompt"} className="link link-hover">
          Couple
        </Link>
        <Link href={"/family-prompt"} className="link link-hover">
          Family
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href={"/privacy-policy"} className="link link-hover">
          Privacy policy
        </Link>
      </nav>

      <nav>© 2025 Prompt Expert All Rights Reserved.</nav>
    </footer>
  );
}

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-SLWSBTZQ8J"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-SLWSBTZQ8J');
// </script>
