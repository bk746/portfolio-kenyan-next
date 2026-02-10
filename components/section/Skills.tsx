"use client";

import { useState } from "react";
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
  siNpm,
  siVercel,
  siApple,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type TabId = "frontend" | "backend" | "outils";

type SkillRow = {
  iconKey: keyof typeof ICONS | "git" | "vscode";
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
  npm: siNpm,
  vercel: siVercel,
  apple: siApple,
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
      { iconKey: "express", name: "API REST", detail: "routes, requêtes, réponses", level: "Intermédiaire" },
      { iconKey: "mongodb", name: "Bases de données", detail: "concepts, CRUD de base", level: "Débutant" },
    ],
  },
  outils: {
    titre: "Outils",
    items: [
      { iconKey: "git", name: "Git / GitHub", detail: "commit, push, branches simples", level: "Intermédiaire" },
      { iconKey: "vscode", name: "VS Code", detail: "workflow quotidien", level: "Avancé" },
      { iconKey: "npm", name: "npm / yarn", detail: "", level: "Intermédiaire" },
      { iconKey: "figma", name: "Figma", detail: "lecture de maquettes, structure", level: "Intermédiaire", light: true },
      { iconKey: "vercel", name: "Vercel", detail: "déploiement Next.js", level: "Intermédiaire" },
      { iconKey: "apple", name: "iMovie / montage vidéo", detail: "vidéo portfolio, exports propres", level: "Intermédiaire" },
    ],
  },
};

function SkillIcon({ iconKey, light }: { iconKey: SkillRow["iconKey"]; light?: boolean }) {
  const iconBox = "shrink-0 w-12 h-12 flex items-center justify-center rounded-lg p-2";

  if (iconKey === "git") {
    return (
      <div className={iconBox} style={{ backgroundColor: "#F05032" }} title="Git">
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.223 1.383-.066 1.9.45.516.515.673 1.254.45 1.9l2.66 2.66c.922-.326 1.776-.157 2.43.496.653.653.822 1.508.496 2.43l2.66 2.66c.646-.223 1.385-.067 1.9.45.515.515.672 1.255.45 1.9l2.627 2.627c.603.604.603 1.582 0 2.188l-9.478 9.478c-.604.604-1.582.604-2.188 0l-9.478-9.478c-.604-.606-.604-1.584 0-2.188l2.627-2.627-2.66-2.66c-.223.645-.066 1.385.45 1.9.515.516 1.254.673 1.9.45l2.66-2.66c-.326-.922-.157-1.776.496-2.43.652-.653 1.508-.822 2.43-.496l2.66-2.66c-.223-.646-.067-1.385.45-1.9.515-.515 1.255-.672 1.9-.45l2.76-2.76-.452-2.478c-.303-.603-.182-1.33.323-1.835l9.478-9.478c.604-.604 1.582-.604 2.188 0l9.478 9.478c.604.604.604 1.582 0 2.188z" />
        </svg>
      </div>
    );
  }

  if (iconKey === "vscode") {
    return (
      <div className={iconBox} style={{ backgroundColor: "#007ACC" }} title="VS Code">
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L7.607 21.13a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z" />
        </svg>
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
