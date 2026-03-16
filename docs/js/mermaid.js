import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

const blocks = Array.from(document.querySelectorAll("pre.mermaid"));

if (blocks.length > 0) {
  const getTheme = () => {
    const colorMode = document.documentElement.getAttribute("data-color-mode");

    if (colorMode === "dark") {
      return "dark";
    }

    if (colorMode === "light") {
      return "default";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default";
  };

  const renderMermaid = async () => {
    mermaid.initialize({
      startOnLoad: false,
      theme: getTheme()
    });

    for (const block of blocks) {
      if (!block.dataset.mermaidSource) {
        block.dataset.mermaidSource = block.textContent;
      }

      block.removeAttribute("data-processed");
      block.textContent = block.dataset.mermaidSource;
    }

    await mermaid.run({nodes: blocks});
  };

  let activeTheme = getTheme();

  renderMermaid();

  new MutationObserver(() => {
    const nextTheme = getTheme();

    if (nextTheme === activeTheme) {
      return;
    }

    activeTheme = nextTheme;
    renderMermaid();
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-color-mode"]
  });
}
