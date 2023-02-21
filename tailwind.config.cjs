/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "360px",
			s: "480px",
			m: "768px",
			l: "976px",
			xl: "1440px",
		},

		fontFamily: {
			montserrat: [
				"montserrat",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			// alternatives depending on font type:

			// mono: [
			//   'ui-monospace',
			//   'SFMono-Regular',
			//   'Menlo',
			//   'Monaco',
			//   'Consolas',
			//   '"Liberation Mono"',
			//   '"Courier New"',
			//   'monospace',
			// ],
		},

		// use this color generator to create the neccessary shades:
		// https://javisperez.github.io/tailwindcolorshades/
		colors: {
			primary: {
				100: "var(--primary-100)",
				400: "var(--primary-400)",
				DEFAULT: "var(--primary-500)",
				600: "var(--primary-600)",
				900: "var(--primary-900)",
			},
			secondary: {
				100: "var(--secondary-100)",
				400: "var(--secondary-400)",
				DEFAULT: "var(--secondary-500)",
				600: "var(--secondary-600)",
				900: "var(--secondary-900)",
			},
			gray: colors.gray,
			white: "var(--white)",
			black: "var(--black)",
			transparent: "transparent",
		},

		// generate shadows here
		// https://brumm.af/shadows
		boxShadow: {
			s: "0 2.4px 4.9px -3px rgba(0, 0, 0, 0.01), 0 6.5px 13.5px -3px rgba(0, 0, 0, 0.015), 0 15.7px 32.6px -3px rgba(0, 0, 0, 0.02), 0 52px 108px -3px rgba(0, 0, 0, 0.03)",
			sm: "0 2.4px 4.9px -3px rgba(0, 0, 0, 0.01), 0 6.5px 13.5px -3px rgba(0, 0, 0, 0.015), 0 15.7px 32.6px -3px rgba(0, 0, 0, 0.02), 0 52px 108px -3px rgba(0, 0, 0, 0.03)",
			m: "0 2.1px 3px -3px rgba(0, 0, 0, 0.014), 0 5.1px 7.2px -3px rgba(0, 0, 0, 0.02), 0 9.6px 13.5px -3px rgba(0, 0, 0, 0.025), 0 17.2px 24.1px -3px rgba(0, 0, 0, 0.03), 0 32.2px 45.1px -3px rgba(0, 0, 0, 0.036), 0 77px 108px -3px rgba(0, 0, 0, 0.05)",
			DEFAULT:
				"0 2.7px 3px -3px rgba(0, 0, 0, 0.017), 0 6.4px 7.2px -3px rgba(0, 0, 0, 0.024), 0 12px 13.5px -3px rgba(0, 0, 0, 0.03), 0 21.4px 24.1px -3px rgba(0, 0, 0, 0.036), 0 40.1px 45.1px -3px rgba(0, 0, 0, 0.043), 0 96px 108px -3px rgba(0, 0, 0, 0.06)",
			l: "0 2.7px 3px -3px rgba(0, 0, 0, 0.022), 0 6.4px 7.2px -3px rgba(0, 0, 0, 0.032), 0 12px 13.5px -3px rgba(0, 0, 0, 0.04), 0 21.4px 24.1px -3px rgba(0, 0, 0, 0.048), 0 40.1px 45.1px -3px rgba(0, 0, 0, 0.058), 0 96px 108px -3px rgba(0, 0, 0, 0.08)",
			xl: "0 3.8px 3px -3px rgba(0, 0, 0, 0.034), 0 9.1px 7.2px -3px rgba(0, 0, 0, 0.048), 0 17.2px 13.5px -3px rgba(0, 0, 0, 0.06), 0 30.6px 24.1px -3px rgba(0, 0, 0, 0.072), 0 57.2px 45.1px -3px rgba(0, 0, 0, 0.086), 0 137px 108px -3px rgba(0, 0, 0, 0.12)",
			none: "none",
		},

		fontSize: {
			xs: ["var(--font--xs)", { lineHeight: "1.2" }],
			s: ["var(--font--s)", { lineHeight: "1.2" }],
			base: ["var(--font--base)", { lineHeight: "1.45" }],
			m: ["var(--font--m)", { lineHeight: "1.45" }],
			l: ["var(--font--l)", { lineHeight: "1.1" }],
			xl: ["var(--font--xl)", { lineHeight: "1" }],
			"2xl": ["var(--font--2xl)", { lineHeight: "0.95" }],
			"3xl": ["var(--font--3xl)", { lineHeight: "0.95" }],
			"4xl": ["var(--font--4xl)", { lineHeight: "0.95" }],
		},

		zIndex: {
			auto: "auto",
			0: "0",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
		},

		extend: {
			spacing: {
				none: "var(--spacing-none)",
				"2xs": "var(--spacing-2xs)",
				xs: "var(--spacing-xs)",
				s: "var(--spacing-s)",
				m: "var(--spacing-m)",
				l: "var(--spacing-l)",
				xl: "var(--spacing-xl)",
				"2xl": "var(--spacing-2xl)",
				"3xl": "var(--spacing-3xl)",
				"4xl": "var(--spacing-4xl)",
				"5xl": "var(--spacing-5xl)",
				body: "var(--body)",
				"body-narrow": "var(--body-narrow)",
				"body-wide": "var(--body-wide)",
				"body-full": "var(--body-full)",

				horizontal: "var(--spacing-horizontal)",
				vertical: "var(--spacing-vertical)",
				gap: "var(--spacing-gap)",
			},
			maxWidth: {
				body: "var(--body)",
				"body-narrow": "var(--body-narrow)",
				"body-wide": "var(--body-wide)",
				"body-full": "var(--body-full)",
			},
			borderRadius: {
				none: "0",
				xs: "0.5rem",
				s: "1rem",
				md: "1.5rem",
				lg: "2rem",
				xl: "2.5rem",
			},
		},
	},
	corePlugins: {
		// preflight: false,
	},
	prefix: "",
	variants: {
		extend: {},
	},
};
