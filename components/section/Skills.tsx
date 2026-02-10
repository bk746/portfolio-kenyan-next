"use client";

import { useState } from "react";
import { FaGithub, FaCode, FaFigma, FaMousePointer } from "react-icons/fa";
import {
  siHtml5,
  siCss,
  siTailwindcss,
  siJavascript,
  siReact,
  siNextdotjs,
  siFigma,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPython,
  siVercel,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type TabId = "frontend" | "backend" | "outils";

type SkillRow = {
  iconKey: keyof typeof ICONS | "git" | "vscode" | "cursor";
  name: string;
  detail: string;
  level: "Avancé" | "Intermédiaire" | "Débutant";
  light?: boolean;
};

const ICONS: Record<string, SimpleIcon> = {
  html5: siHtml5,
  css: siCss,
  tailwindcss: siTailwindcss,
  javascript: siJavascript,
  react: siReact,
  nextdotjs: siNextdotjs,
  figma: siFigma,
  nodedotjs: siNodedotjs,
  express: siExpress,
  mongodb: siMongodb,
  python: siPython,
  vercel: siVercel,
};

const LEVEL_COLOR: Record<SkillRow["level"], string> = {
  Avancé: "#0073DE",
  Intermédiaire: "#006849",
  Débutant: "#0073DE",
};

const TABS: { id: TabId; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "outils", label: "Outils" },
];

const SKILLS: Record<TabId, { titre: string; items: SkillRow[] }> = {
  frontend: {
    titre: "Frontend",
    items: [
      { iconKey: "html5", name: "HTML5", detail: "structure, sémantique, bonnes pratiques", level: "Avancé" },
      { iconKey: "css", name: "CSS3", detail: "responsive, animations, layout", level: "Avancé" },
      { iconKey: "tailwindcss", name: "Tailwind CSS", detail: "composants, responsive, variants, selectors avancés", level: "Avancé" },
      { iconKey: "javascript", name: "JavaScript", detail: "ES6+, logique, events, fetch", level: "Intermédiaire", light: true },
      { iconKey: "react", name: "React.js", detail: "components, props, hooks de base", level: "Intermédiaire" },
      { iconKey: "nextdotjs", name: "Next.js", detail: "routing, pages/app, composants, déploiement", level: "Intermédiaire" },
    ],
  },
  backend: {
    titre: "Back-end",
    items: [
      { iconKey: "nodedotjs", name: "Node.js", detail: "logique serveur, bases", level: "Intermédiaire" },
      { iconKey: "python", name: "Python", detail: "scripts, bases du langage", level: "Intermédiaire" },
      { iconKey: "express", name: "API REST", detail: "routes, requêtes, réponses", level: "Intermédiaire" },
      { iconKey: "mongodb", name: "Bases de données", detail: "concepts, CRUD de base", level: "Débutant" },
    ],
  },
  outils: {
    titre: "Outils",
    items: [
      { iconKey: "git", name: "Git / GitHub", detail: "commit, push, branches simples", level: "Intermédiaire" },
      { iconKey: "vscode", name: "VS Code", detail: "workflow quotidien", level: "Avancé" },
      { iconKey: "cursor", name: "Cursor", detail: "pair programming IA, refactor, génération de code", level: "Intermédiaire" },
      { iconKey: "figma", name: "Figma", detail: "lecture de maquettes, structure", level: "Intermédiaire", light: true },
      { iconKey: "vercel", name: "Vercel", detail: "déploiement Next.js", level: "Intermédiaire" },
    ],
  },
};

function SkillIcon({ iconKey, light }: { iconKey: SkillRow["iconKey"]; light?: boolean }) {
  const iconBox = "shrink-0 w-12 h-12 flex items-center justify-center rounded-lg p-2";

  if (iconKey === "git") {
    return (
      <div className={iconBox} style={{ backgroundColor: "#111827" }} title="GitHub">
        <FaGithub className="w-7 h-7 text-white" />
      </div>
    );
  }

  if (iconKey === "vscode") {
    return (
      <div className={iconBox} style={{ backgroundColor: "#007ACC" }} title="VS Code">
        <FaCode className="w-7 h-7 text-white" />
      </div>
    );
  }

  if (iconKey === "figma") {
    return (
      <div className={`${iconBox} border border-black/10 bg-white`} title="Figma">
        <FaFigma className="w-7 h-7 text-[#0ACF83]" />
      </div>
    );
  }

  if (iconKey === "cursor") {
    return (
      <div className={iconBox} style={{ backgroundColor: "#111827" }} title="Cursor">
        <FaMousePointer className="w-7 h-7 text-white" />
      </div>
    );
  }

  const icon = ICONS[iconKey];
  if (!icon) return null;
  const hex = `#${icon.hex}`;

  if (light) {
    return (
      <div className={`${iconBox} border border-black/10 bg-white`} title={icon.title}>
        <svg viewBox="0 0 24 24" className="w-full h-full" fill={hex} xmlns="http://www.w3.org/2000/svg">
          <path d={icon.path} />
        </svg>
      </div>
    );
  }

  return (
    <div className={iconBox} style={{ backgroundColor: hex }} title={icon.title}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d={icon.path} />
      </svg>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabId>("frontend");
  const { titre, items } = SKILLS[activeTab];

  return (
    <section id="skills" className="h-full w-full bg-white py-3 scroll-mt-20">
        <div className="w-full h-full bg-[#FAFAFC]">
      <div className="section-inner w-full bg-surface">
        <header className="section-header">
          <h2 className="section-heading">Skills</h2>
          <h3 className="section-subheading">Technologie maîtrisée</h3>
        </header>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`rounded-full px-6 py-3 text-lg font-semibold transition-all duration-200 ${
                activeTab === id
                  ? "scale-105 bg-[#0073DE] text-white shadow-md"
                  : "border-2 border-[#0073DE] bg-white text-[#0073DE] hover:bg-[#0073DE]/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div
          key={activeTab}
          className="section-container-narrow skills-enter min-h-120"
        >
          <h4 className="mb-6 text-center text-2xl font-semibold text-black">
            {titre}
          </h4>
          <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 rounded-xl border border-[#0073DE]/20 bg-white/80 px-4 py-3 shadow-sm"
              >
                <SkillIcon iconKey={item.iconKey} light={item.light} />
                <div className="min-w-0 flex-1">
                  <span className="text-lg font-medium text-black">
                    {item.name}
                    {item.detail && (
                      <span className="font-normal text-black/70">
                        {" "}
                        ({item.detail})
                      </span>
                    )}
                  </span>
                </div>
                <span
                  className="shrink-0 whitespace-nowrap text-lg font-semibold"
                  style={{ color: LEVEL_COLOR[item.level] }}
                >
                  {item.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
