import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "COTR Snippets",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/CodeOTR/cotr-snippets",
      },
      sidebar: [
        {
          label: "Snippets",
		  autogenerate: { directory: "snippets" },
        },
        {
          label: "Languages",
          autogenerate: { directory: "languages" },
        },
      ],
    }),
  ],
});
