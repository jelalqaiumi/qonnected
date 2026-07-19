import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Keep tracing and workspace resolution anchored to this project folder.
	outputFileTracingRoot: __dirname,
	images: {
		// Serve modern formats — mindre filer ger bättre LCP och därmed ranking.
		formats: ["image/avif", "image/webp"],
	},
};
export default nextConfig;
