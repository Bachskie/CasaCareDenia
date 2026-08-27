Casa Care Dénia — static site

Clean file structure:

```text
CasaCareDenia/
	index.html
	css/
		styles.css
	js/
		main.js
	assets/
		images/
			logo-transparent.png
			hero.jpg
```

Preview locally:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

Notes:
- No build step is required.
- `js/main.js` includes navigation, contact form mailto handling and Dutch/English language toggle.
