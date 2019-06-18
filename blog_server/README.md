# Express Server for Blog!

This is an express API to manage our CMS for a full stack blog project.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Migrations `npm run migration -- [#]`

Seed the database with `sudo -u [db-user] psql -d blog-db -f /home/[project-source-user]/[path]/[to]/seeds/seed.blog_articles.sql`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.