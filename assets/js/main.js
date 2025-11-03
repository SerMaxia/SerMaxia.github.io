(function () {
	const root = document.documentElement;
	const btn = document.getElementById('themeToggle');
	const key = 'theme-preference';

	function setTheme(mode) {
		if (mode === 'light') root.classList.add('light');
		else root.classList.remove('light');
		localStorage.setItem(key, mode);
		btn.textContent = mode === 'light' ? 'Light' : 'Dark';
	}

	const stored = localStorage.getItem(key);
	const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
	setTheme(stored || (prefersLight ? 'light' : 'dark'));

	btn.addEventListener('click', function () {
		const next = root.classList.contains('light') ? 'dark' : 'light';
		setTheme(next);
	});

	document.getElementById('year').textContent = new Date().getFullYear().toString();
})();
