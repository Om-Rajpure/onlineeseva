import { SEO } from '../../components/common/SEO';
import { Hero } from './components/Hero';
import { PopularServices } from './components/PopularServices';
import { CategoryGrid } from './components/CategoryGrid';
import { DocumentChecker } from './components/DocumentChecker';
import { SchemesPreview } from './components/SchemesPreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LocationHours } from './components/LocationHours';
import { BlogPreview } from './components/BlogPreview';
import { HomeFAQ } from './components/HomeFAQ';
import { business } from '../../data/business';

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOffice',
    name: business.name,
    legalName: business.legalName,
    description: business.shortDescription,
    url: 'https://mahaesevakendra.in',
    telephone: business.phoneNumbers[0]?.number,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.033,
      longitude: 73.018,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1466',
    },
    priceRange: '₹40 - ₹300',
  };

  return (
    <>
      <SEO
        title="Maha E-Seva Kendra Nerul | Government Online Services & Certificates"
        description="Authorized government service centre in Nerul East, Navi Mumbai. Fast assistance for Aadhaar, PAN, Domicile, Income certificates, Passport, Licences. Open 9 AM – 10 PM daily."
        schema={localBusinessSchema}
      />

      <Hero />
      <PopularServices />
      <CategoryGrid />
      <DocumentChecker />
      <SchemesPreview />
      <WhyChooseUs />
      <LocationHours />
      <BlogPreview />
      <HomeFAQ />
    </>
  );
}
