import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read services slugs
const servicesPath = path.join(rootDir, 'src', 'data', 'services.ts');
const servicesContent = fs.readFileSync(servicesPath, 'utf-8');
const serviceSlugMatches = [...servicesContent.matchAll(/(?:slug|["']slug["']):\s*["']([^"']+)["']/g)];
const serviceSlugs = serviceSlugMatches.map((m) => m[1]);

// Read schemes slugs
const schemesPath = path.join(rootDir, 'src', 'data', 'schemes.ts');
const schemesContent = fs.readFileSync(schemesPath, 'utf-8');
const schemeSlugMatches = [...schemesContent.matchAll(/(?:slug|["']slug["']):\s*["']([^"']+)["']/g)];
const schemeSlugs = schemeSlugMatches.map((m) => m[1]);

// Read articles slugs
const articlesPath = path.join(rootDir, 'src', 'data', 'articles.ts');
const articlesContent = fs.readFileSync(articlesPath, 'utf-8');
const articleSlugMatches = [...articlesContent.matchAll(/(?:slug|["']slug["']):\s*["']([^"']+)["']/g)];
const articleSlugs = articleSlugMatches.map((m) => m[1]);

const today = new Date().toISOString().split('T')[0];

const corePages = [
  { path: '/', freq: 'daily', priority: '1.0' },
  { path: '/services', freq: 'weekly', priority: '0.95' },
  { path: '/schemes', freq: 'daily', priority: '0.90' },
  { path: '/documents', freq: 'weekly', priority: '0.85' },
  { path: '/blog', freq: 'weekly', priority: '0.85' },
  { path: '/about', freq: 'monthly', priority: '0.80' },
  { path: '/contact', freq: 'monthly', priority: '0.85' },
  { path: '/faq', freq: 'monthly', priority: '0.75' },
  { path: '/privacy', freq: 'yearly', priority: '0.50' },
  { path: '/terms', freq: 'yearly', priority: '0.50' },
];

const xml = ['<?xml version="1.0" encoding="UTF-8"?>'];
xml.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

for (const p of corePages) {
  xml.push('  <url>');
  xml.push(`    <loc>https://onlineeseva.com${p.path}</loc>`);
  xml.push(`    <lastmod>${today}</lastmod>`);
  xml.push(`    <changefreq>${p.freq}</changefreq>`);
  xml.push(`    <priority>${p.priority}</priority>`);
  xml.push('  </url>');
}

for (const s of serviceSlugs) {
  xml.push('  <url>');
  xml.push(`    <loc>https://onlineeseva.com/services/${s}</loc>`);
  xml.push(`    <lastmod>${today}</lastmod>`);
  xml.push('    <changefreq>weekly</changefreq>');
  xml.push('    <priority>0.90</priority>');
  xml.push('  </url>');
}

for (const s of schemeSlugs) {
  xml.push('  <url>');
  xml.push(`    <loc>https://onlineeseva.com/schemes/${s}</loc>`);
  xml.push(`    <lastmod>${today}</lastmod>`);
  xml.push('    <changefreq>weekly</changefreq>');
  xml.push('    <priority>0.85</priority>');
  xml.push('  </url>');
}

for (const a of articleSlugs) {
  xml.push('  <url>');
  xml.push(`    <loc>https://onlineeseva.com/blog/${a}</loc>`);
  xml.push(`    <lastmod>${today}</lastmod>`);
  xml.push('    <changefreq>weekly</changefreq>');
  xml.push('    <priority>0.80</priority>');
  xml.push('  </url>');
}

xml.push('</urlset>\n');

const publicDir = path.join(rootDir, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml.join('\n'), 'utf-8');

console.log(
  `[sitemap-generator] Generated public/sitemap.xml with ${
    corePages.length + serviceSlugs.length + schemeSlugs.length + articleSlugs.length
  } production URLs!`
);
