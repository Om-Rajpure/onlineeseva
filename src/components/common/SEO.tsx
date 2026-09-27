import { useEffect } from 'react';
import { business } from '../../data/business';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  schema?: Record<string, unknown>;
}

export function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  schema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Maha E-Seva Kendra Nerul`
    : `${business.name} | Government Services & Online Assistance in Nerul Navi Mumbai`;

  const metaDesc =
    description ||
    'Official facilitator for Aadhaar, PAN card, Domicile, Income certificates, Passport assistance, Driving licences and government citizen services in Nerul East, Navi Mumbai.';

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper for updating/inserting meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('description', metaDesc);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', metaDesc, true);
    setMetaTag('og:type', ogType, true);

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Schema.org structured data script
    let scriptTag = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'schema-json-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, metaDesc, canonical, ogType, schema]);

  return null;
}
