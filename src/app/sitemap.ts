import { MetadataRoute } from 'next';
import { services, locations } from '@/config/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carvanrecovery.co.uk';

  const staticRoutes = [
    '',
    '/about-us',
    '/contact',
    '/faq',
    '/reviews',
    '/services',
    '/breakdown-recovery',
    '/cambridge-vehicle-recovery',
    '/car-recovery',
    '/m11-recovery',
    '/road-recovery',
    '/van-recovery',
    '/vehicle-recovery',
    '/stansted-services',
    '/areas-we-cover',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/areas-we-cover/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
