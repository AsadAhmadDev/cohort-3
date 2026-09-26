# AGENTS.md

## Project overview
This repository is a small collection of static web assignments and JavaScript practice files. Most work is plain HTML, CSS, and JavaScript without a framework or build pipeline.

## Repository layout
- `Assignments/` contains standalone mini-projects, each usually with its own `index.html`, `style.css`, and `script.js`.
- `JS/` contains general JavaScript practice code.
- `README.md` is minimal and does not define a full app setup.

## Working conventions
- Prefer vanilla JavaScript unless a task explicitly asks for a different approach.
- Keep each mini-project self-contained within its folder.
- Match the existing naming pattern: `index.html`, `style.css`, and `script.js` for the relevant assignment.
- Use semantic, task-specific class and ID names that align with the current HTML structure.
- Avoid introducing build tools, bundlers, or dependencies unless the task specifically requires them.

## Validation
There is no project-wide test suite or package manager setup. For browser-based work, validate by opening the HTML in a browser or serving the folder locally, for example:

```bash
cd /home/asad/Desktop/cohort-3
python3 -m http.server 8000
```

Then open `http://localhost:8000` and navigate to the relevant assignment folder.

## Important project-specific notes
- The user-card exercise in `Assignments/userCard/` is a simple DOM-based form and card renderer.
- Keep styling and behavior scoped to the relevant assignment folder rather than introducing shared global styles.
- When editing form-related JavaScript, maintain compatibility with the current `id` and `name` attributes used by the HTML.
- Do not assume a framework, CSS preprocessor, or test environment exists unless the task explicitly adds one.

## Prompting and implementation guidance for agents
- Prioritize small, local changes that match the existing structure.
- Check the nearest assignment’s HTML and script before modifying behavior or selectors.
- If the request involves a new feature, keep it consistent with the project’s static website style.
- Prefer direct DOM manipulation and simple event handlers over abstraction layers that are not already present.
