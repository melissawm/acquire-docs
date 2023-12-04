# Acquire **Docs** Contribution Quickstart

1. Make sure you have a fresh environment with the latest mkdocs and mkdocs-material installed. You can install them with `pip install -r requirements.txt` from the root of the repository.
2. Your pages should be written as markdown files, using the basic markdown syntax or following the [mkdocs](https://www.mkdocs.org/user-guide/writing-your-docs/) or [material for mkdocs](https://squidfunk.github.io/mkdocs-material/reference/formatting/) syntax.
3. Pages can be added to the top level menu or submenus by editing the `mkdocs.yml` file. The order of the pages in the menu is determined by the order of the pages in the `mkdocs.yml` file. Subpages can be added by creating subfolders in the `docs/` folder (see, for example, the `docs/tutorials/` folder).
4. To add images, place them in the `docs/images/` folder and reference them in your markdown files using the relative path `../images/your_image.png`.
5. Custom CSS configuration goes into the `docs/stylesheets/custom.css` file.
6. To build the website locally, after activating your environment (either using `conda activate <your-environment>` or `source activate <your-env>`, for example), run `mkdocs serve` to start a local server. You can then view the website at the URL indicated on your console.
