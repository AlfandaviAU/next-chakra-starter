const title = 'Instagram';
const description =
  'An opinionated starter project with Next.js and Chakra UI. Created by hendraaagil';
const url = 'https://nextjs-chakra-hendraaagil.vercel.app';

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png`,
        alt: title,
        width: 2048,
        height: 1170,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@hendraaagil',
    site: '@hendraaagil',
  },
  additionalLinkTags: [{ rel: 'icon', href: '/favicon.ico' }],
};

export default SEO;
