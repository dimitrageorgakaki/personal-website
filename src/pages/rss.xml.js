import rss from '@astrojs/rss';
import { getPosts } from '../data/posts';
import { site, url } from '../data/site';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${site.name}: writing`,
    description: site.description,
    // `site` is set by the deploy workflow; the fallback only matters for local builds.
    site: context.site ?? 'http://localhost:4321',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      categories: post.data.tags,
      link: url(`/blog/${post.id}/`),
    })),
  });
}
