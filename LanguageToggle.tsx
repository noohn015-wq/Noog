import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
    >
      <Languages className="h-4 w-4 text-amber-600" />
      <span>{lang === "ar" ? "EN" : "ع"}</span>
    </button>
  );
}