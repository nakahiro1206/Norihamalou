// app/components/ScrollToHash.tsx (can be placed anywhere in your layout or page)
"use client";

import { useState, useEffect } from "react";
import { Tags, isTag } from "../Section/Section";

export const scrollToSection = (id: Tags) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerHeight * 0.05; // 5vh in pixels
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // To prevent default transition, it does not change window location.
    // This location change will not trigger hashChange.
    // window.location.hash = `#${id}`;
  }
};

export const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
};

export const InitScrollPlugin = () => {
  // This plugin prevents default transition and execute custom scroll function instead.
  const hash = useHash();
  useEffect(() => {
    const section = hash.replace("#", "");
    if (isTag(section)) {
      scrollToSection(section);
    }
  }, [hash]);
  return null;
};
