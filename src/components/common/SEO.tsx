import { useEffect } from 'react';
import { business } from '../../data/business';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://onlineeseva.com/images/og-image.png',
  schema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Online e-Seva Kendra Nerul`
    : `${business.name} | Online e-Seva Services in Nerul Navi Mumbai`;

  const metaDesc =
    description ||
    'Online e-Seva Kendra in Nerul, Navi Mumbai. Expert assistance for Aadhaar, PAN card, Domicile, Income certificates, Passport, Driving licence, Government schemes, Banking & Insurance services.';

  const canonicalUrl = canonical || `https://onlineeseva.com${window.location.pathname === '/' ? '' : window.location.pathname}`;

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
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'Maha E-Seva Kendra | Online e-Seva', true);

    // Twitter Cards
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', metaDesc);
    setMetaTag('twitter:image', ogImage);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

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
  }, [fullTitle, metaDesc, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
