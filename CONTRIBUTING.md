# Building components on top of Masonstrap

You'll be mainly concerned with the `scss` directory as that holds all of the
modifications we make over normal Bootstrap. DO NOT touch `masonstrap.scss` as
that is the main entry point for SASS compilation. Otherwise make a best guess
as the best location to place any new styles, it all get built into the same
location. Talk to @dhaynes if you have any questions.

Make changes in a branch:

```sh
git checkout -B branch-name
git push origin branch-name
git add .
git commit
git push origin branch-name
```

I'm pretty laid back on the project overall.

## Gulp

You should not have to worry about the build system (Gulp) unless it decides to
poop itself in which case you should worry. Each stage is split into its own
function that handles each case (html, scss, js, etc.) Google around, there's
probably a package that does exactly what you need it to do.