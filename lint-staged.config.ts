import type { Configuration } from "lint-staged";

const config: Configuration = {
	"*": [
		(): string => "npm run lint:check",
		(): string => "npm run lint:format:check",
		(): string => "npm run lint:types:check",
		(): string => "npm run lint:clean:check",
		(): string => "npm run lint:fs:check",
	],
};

export default config;
