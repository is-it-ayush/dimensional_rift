const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

export default { hexRgb, generateRandomColor, ColorLuminance, addRedirectToLink, addRedirectFrom404 };

export function hexRgb(hex, options = {}) {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alphaFromHex = 1;

	if (hex.length === 8) {
		alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;
	const alpha = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

	if (options.format === 'array') {
		return [red, green, blue, alpha];
	}

	if (options.format === 'css') {
		const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
		return `rgb(${red} ${green} ${blue}${alphaString})`;
	}

	return { red, green, blue, alpha };
}

export function ColorLuminance(hex, lum) {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00" + c).substr(c.length);
	}

	return rgb;
}

export function addRedirectToLink() {
	var link = document.getElementById('applink')
	link.addEventListener('click', e => {
		window.open('https://soyouwannaknowtheweatherhuh.vercel.app/', '_blank');

	})
}


export function addRedirectFrom404() {
	$('.redir-but').click(function (e) { 
		e.preventDefault();
		window.location.replace('https://isitayush.me');
	});
}

export function generateRandomColor() {
	let maxVal = 0xFFFFFF; // 16777215
	let randomNumber = Math.random() * maxVal;
	randomNumber = Math.floor(randomNumber);
	randomNumber = randomNumber.toString(16);
	let randColor = randomNumber.padStart(6, 0);
	return `#${randColor.toUpperCase()}`
}