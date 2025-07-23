import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();

  const [showContact, setShowContact] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactRef = useRef<HTMLDivElement | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setShowContact(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    setShowLangDropdown(false);
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const languages = [
    { code: "bs", label: "Bosanski", flag: "🇧🇦" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  return (
<nav style={{ position: 'sticky', top: 0, zIndex: 50 }} className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link href={"/"}>
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="ProfilGroup"
              width={250}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          </Link>

          {/* Right: Nav & Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-slate-700 hover:text-profil transition"
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-profil transition"
            >
              {t("about")}
            </Link>

            {/* Contact dropdown container */}
            <div className="relative" ref={contactRef}>
              <button
                onClick={() => setShowContact(!showContact)}
                className="bg-profil text-white px-4 py-1 rounded hover:bg-lime-600 transition"
              >
                {t("contact")}
              </button>

              {showContact && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-slate-200 rounded-md p-4 text-sm z-50">
                  <p className="font-semibold mb-2 text-slate-800">
                    ProfilGroup d.o.o.
                  </p>
                  <p className="mb-1 text-slate-700">{t("contact_info.address")}</p>
                  <p className="text-lime-600 mb-1">{t("contact_info.phone")}</p>
                  <p className="text-lime-600 mb-1">{t("contact_info.email")}</p>
                </div>
              )}
            </div>

            {/* Language selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1 px-3 py-1 border border-slate-300 rounded hover:border-lime-600 transition text-slate-700"
                aria-label="Select language"
              >
                <span>
                  {languages.find((lang) => lang.code === i18n.language)?.flag}
                </span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    showLangDropdown ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showLangDropdown && (
                <ul className="absolute right-0 mt-2 w-36 bg-white border border-slate-300 rounded shadow-md z-50">
                  {languages.map(({ code, label, flag }) => (
                    <li key={code}>
                      <button
                        onClick={() => changeLanguage(code)}
                        className={`w-full text-left px-4 py-2 hover:bg-lime-100 flex items-center gap-2 ${
                          i18n.language === code
                            ? "font-semibold text-profil"
                            : "text-slate-700"
                        }`}
                      >
                        <span>{flag}</span>
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 text-slate-700 hover:text-lime-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded hover:bg-blue-100 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded hover:bg-blue-100 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>

            <div className="border-t py-2 px-3">
              <p className="font-semibold mb-1 text-slate-800">{t("contact")}</p>
              <p className="text-slate-700">{t("contact_info.address")}</p>
              <p className="text-lime-600">{t("contact_info.phone")}</p>
              <p className="text-lime-600">{t("contact_info.email")}</p>
            </div>

            <div className="border-t py-2 px-3">
              <p className="font-semibold mb-2 text-slate-800">{t("language")}</p>
              <div className="flex gap-3">
                {languages.map(({ code, flag, label }) => (
                  <button
                    key={code}
                    onClick={() => {
                      changeLanguage(code);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-2xl text-slate-800 ${
                      i18n.language === code ? "opacity-100" : "opacity-50"
                    }`}
                    aria-label={`Switch language to ${label}`}
                  >
                    {flag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
