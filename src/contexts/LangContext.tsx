"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "en" | "tl";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = useCallback(() => setLang((l) => (l === "en" ? "tl" : "en")), []);
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function T({ en, tl }: { en: string; tl: string }) {
  const { lang } = useLang();
  return <>{lang === "tl" ? tl : en}</>;
}
