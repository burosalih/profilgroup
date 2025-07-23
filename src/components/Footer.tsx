import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-neutral-900 text-white text-sm px-6 py-8 border-t-1 border-profil">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        <div className="text-center md:text-left max-w-sm">
<Image
  src="/logowhite.png"
  alt="ProfilGroup Logo"
  width={300}
  height={50}
  className="h-12 mb-4 mx-auto md:mx-0"
/>
          <p className="italic text-gray-400 mb-4">{t("footer.slogan")}</p>

          <div className="space-y-1 text-gray-400">
            <p>{t("contact_info.address")}</p>
            <p>{t("contact_info.phone")}</p>
            <p>{t("contact_info.email")}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-xs text-gray-400 select-none">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
