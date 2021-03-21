export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60579c3554783c239b1b794b",
                  title: "Sanity Studio",
                  name: "sanity-blog-studio-zbno88zt",
                  apiId: "50028b4b-61e8-41c1-9f29-25e15c21277d",
                },
                {
                  buildHookId: "60579c35478fc63c85d36c43",
                  title: "Blog Website",
                  name: "sanity-blog-web-n35ec8x3",
                  apiId: "43d9ce81-9a01-4ec1-b2ac-72dcdda0136d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/joseph-anselm/sanity-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-blog-web-n35ec8x3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
