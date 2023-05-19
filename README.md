# portfolio-ivanob-gatsby

My personal portfolio with some information about me: skills, projects, experience...
***DISCLAIMER***: Based on the templates here listed [1], All the credits for the authors. This is an update in gatsby 5.10.0 and Typescript, but all the styling has been copied

### Goals

- [ ] Learn the basics of Gatsby + Netlify
- [ ] Learn Tailwind CSS
- [ ] Create Portfolio/Personal page / Redo my descriptions
- [ ] Interact with S3 to store my CV
- [ ] Register a domain and link it
- [ ] Learn about google analytics

### How to deploy with Netlify

A project created with Gatsby by default does not directly deploy in Netlify, there are couple of things to change:

- Gatsby requires node version 18 and netlify by default uses node 16, so it is needed to create an environment variable in the build called `NODE_VERSION` and value `18`
- The `Publish directory` in the build settings is not `dist/`, should be replaced by `public/` which is the folder that gatsby uses to build
- It is needed to write the build command in the build settings: `npm run build` by default

### Resources

- Course tailwind (Spanish): https://www.youtube.com/watch?v=h5HQVHTpeHs&t=489s&ab_channel=midulive
- Gatsby getting-started docu: gatsbyjs.com/docs/tutorial/getting-started/
- Buenas prácticas, consejos y plantilla para mejorar tu Currículum: https://www.youtube.com/watch?v=xYi8qzLsS24&ab_channel=midulive
- https://gatsbystarterportfoliominimalt.gatsbyjs.io/#github

### [1] Gatsby templates Examples:
- https://github.com/ajimenezdev/gatsby-cv
- https://github.com/santosfrancisco/gatsby-starter-cv