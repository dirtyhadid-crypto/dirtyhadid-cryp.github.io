const tocLinks = [...document.querySelectorAll(".sidebar-link[href^='#']")];
const sections = tocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (tocLinks.length && sections.length && "IntersectionObserver" in window) {
  const state = new Map();
  const activate = () => {
    const visible = sections
      .filter((section) => state.get(section.id))
      .sort((a, b) => sections.indexOf(a) - sections.indexOf(b))[0];

    tocLinks.forEach((link) => {
      const isActive = visible && link.getAttribute("href") === `#${visible.id}`;
      link.classList.toggle("active", Boolean(isActive));
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        state.set(entry.target.id, entry.isIntersecting);
      });
      activate();
    },
    {
      rootMargin: "-18% 0px -68% 0px",
      threshold: [0, 0.2, 0.5, 1],
    }
  );

  sections.forEach((section) => observer.observe(section));
  activate();
}
