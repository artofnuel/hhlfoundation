export const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "date",
      type: "string",
      title: "Date",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      fields: [{ type: "text", name: "alt", title: "Alt Text" }],
    },
    {
      name: "blogImages",
      type: "array",
      title: "Blog Images",
      of: [
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt Text" }],
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
};
