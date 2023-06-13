import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/router";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const LanguageSwitcher = () => {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();

  const handleChangeLanguage = () => {
    const selectedLocale = locale === "en" ? "nl" : "en";
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <button
      onClick={handleChangeLanguage}
      className="focus:outline-none text-2xl"
    >
      {locale === "en" ? getUnicodeFlagIcon("BE") : getUnicodeFlagIcon("GB")}
    </button>
  );
};

export default LanguageSwitcher;
