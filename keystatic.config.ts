import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
        }),
        image: fields.image({
          label: "Featured Image",
          directory: "src/assets/images/posts/featured",
          publicPath: "/src/assets/images/posts/featured/",
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),

        dateCreated: fields.date({
          label: "Date Created",
        }),
        readingTime: fields.number({
          label: "Reading Time (minutes)",
        }),
        profile: fields.image({
          label: "Featured Profile",
          directory: "src/assets/images/posts/profiles",
          publicPath: "/src/assets/images/posts/profiles/",
        }),
        authors: fields.array(
          fields.relationship({
            label: "Authors",
            description: "A list of authors for this post",
            collection: "authors",
          }),
          {
            label: "Authors",
            itemLabel: (props) => props.value,
          },
        ),

      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      format: { contentField: "bio" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        bio: fields.markdoc({
          label: "Bio",
          options: {
            dividers: true,
            links: true,
          },
        }),
      },
    }),
  },
});
