# Yiran Du website

This repository builds <https://yiransmind.github.io> with GitHub Pages and Jekyll.

## Edit These Files First

Most website updates only need one of these files:

| What you want to change | File to edit |
| --- | --- |
| Homepage bio text | `_pages/about.md` |
| Publications list | `_includes/pub.md` |
| Top menu links | `_data/navigation.yml` |
| Name, email, avatar, social links, site title | `_config.yml` |
| CV PDF | `files/CV.pdf` |
| Profile/avatar image | `images/image.jpg` |

The currently visible menu is controlled by `_data/navigation.yml`. Items that start with `#` are hidden from the top menu.

## Folders You Can Usually Ignore

These are template or build-support folders from Academic Pages / Jekyll. They are important for the site to build, but you normally do not need to open them:

- `_includes`, except `_includes/pub.md`
- `_layouts`
- `_sass`
- `assets`
- `markdown_generator`
- `.github`
- `.devcontainer`
- `vendor`, `.bundle`, `_site`, if they appear locally

## Preview Locally

If Ruby dependencies are installed, run:

```bash
bundle install
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>.

If this feels too much, the easiest workflow is to edit the files above directly on GitHub and let GitHub Pages rebuild the website automatically.

## Notes

- Do not delete the template folders unless you are intentionally redesigning the site.
- Files inside folders beginning with `_` are Jekyll source files. They may not appear as normal website folders, but Jekyll uses them to build the final pages.
- Uploaded files in `files/` are public. For example, `files/CV.pdf` appears at <https://yiransmind.github.io/files/CV.pdf>.
