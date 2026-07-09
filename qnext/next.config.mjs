import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Keep tracing and workspace resolution anchored to this project folder.
	outputFileTracingRoot: __dirname,
};
export default nextConfig;
