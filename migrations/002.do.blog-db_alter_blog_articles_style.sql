CREATE TYPE article_category AS ENUM (
  'Listicle',
  'How-to',
  'News',
  'Interview',
  'Story'
);

ALTER TABLE blog_articles
  ADD COLUMN
    style article_category;