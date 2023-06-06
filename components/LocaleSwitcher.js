import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();

  const handleChangeLanguage = (e) => {
    const selectedLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <div className="relative inline-flex">
      <select
        value={locale}
        onChange={handleChangeLanguage}
        className="appearance-none bg-transparent border border-gray-300 mr-4 text-sm text-gray-800 dark:text-gray-400 py-1 pl-2 pr-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="en" className="text-white">
          {t("english")}
        </option>
        <option value="nl">{t("dutch")}</option>
      </select>
      <span className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default LanguageSwitcher;
