import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "COTR Snippets",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Snippets",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "cotrPrint", link: "/cotrprint" },
          ],
        },
        {
          label: "Languages",
          autogenerate: { directory: "languages" },
        },
      ],
    }),
  ],
});
