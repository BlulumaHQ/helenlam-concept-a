import { Globe } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export function LanguageSwitcher({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { lang, setLang } = useT();
  const base = variant === "dark" ? "text-white/80" : "text-ink/70";
  const active = variant === "dark" ? "text-gold" : "text-brand";
  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-medium ${base}`}>
      <Globe className="h-3.5 w-3.5 mr-1 opacity-70" />
      <button
        onClick={() => setLang("en")}
        className={`px-1.5 py-0.5 transition-smooth tracking-wide ${lang === "en" ? `${active} font-semibold` : "hover:opacity-100 opacity-70"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="opacity-30">/</span>
      <button
        onClick={() => setLang("zh")}
        className={`px-1.5 py-0.5 transition-smooth tracking-wide ${lang === "zh" ? `${active} font-semibold` : "hover:opacity-100 opacity-70"}`}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
    </div>
  );
}
