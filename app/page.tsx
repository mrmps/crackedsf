import Landing from "@/components/Landing";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CrackedSF - Monthly Meetups for AI/ML Engineers',
  description: 'Join CrackedSF for monthly meetups dedicated to advanced AI/ML engineering in the SF/Bay Area. Stay updated with our latest events and news.',
  openGraph: {
    title: 'CrackedSF - Monthly Meetups for AI/ML Engineers',
    description: 'Join CrackedSF for monthly meetups dedicated to advanced AI/ML engineering in the SF/Bay Area. Stay updated with our latest events and news.',
    url: 'https://crackedsf.com',
    images: [
      {
        url: '/image.png',
        width: 800,
        height: 600,
        alt: 'CrackedSF Meetup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CrackedSF - Monthly Meetups for AI/ML Engineers',
    description: 'Join CrackedSF for monthly meetups dedicated to advanced AI/ML engineering in the SF/Bay Area. Stay updated with our latest events and news.',
    images: [
      {
        url: '/image.png',
        alt: 'CrackedSF Meetup',
      },
    ],
  },
};

export default function Home() {
  return (
    <Landing />
  );
}
