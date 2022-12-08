import { useState } from "react";

interface SocialLink {
  id: number;
  image: string;
  alt: string;
  url: string;
  bgColor: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    image: '/images/linkedin_white.png',
    alt: 'Linkedin logo',
    // imageHover: '/images/linkedin.png',
    url: 'https://www.linkedin.com/company/floreer',
    bgColor: 'background-color: #0077B5;',
  },
  {
    id: 2,
    image: '/images/twitter_white.png',
    alt: 'Twitter logo',
    // imageHover: '/images/twitter.png',
    url: 'https://twitter.com/floreerconsult',
    bgColor: 'background-color: #55ADEE;',
  },
  {
    id: 3,
    image: '/images/facebook_white.png',
    alt: 'Facebook logo',
    // imageHover: '/images/facebook.png',
    url: 'https://www.facebook.com/Floreer-172831206113622',
    bgColor: 'background-color: #3A5998;',
  },
  {
    id: 4,
    image: '/images/instagram_white.png',
    alt: 'Instagram logo',
    // imageHover: '/images/instagram.png',
    url: 'https://www.instagram.com/floreerconsulting/',
    bgColor: 'background-color: #833AB4;',
  },
];

function redirectToExternalUrl(url: string) {
  window.location.href = url;
}

export default function FooterSocialLinks() {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <>
      <ul className="flex flex-row">
        {socialLinks.map((socialLink) => (
          <li
            className="h-8 w-8 p-1 ml-8"
            onMouseEnter={() => setHoverIndex(socialLink.id)}
            onMouseLeave={() => setHoverIndex(0)}
            key={socialLink.id}
          >
            {hoverIndex === socialLink.id ?
              <a
                onClick={() => redirectToExternalUrl(socialLink.url)}
                className="absolute h-8 w-8 p-1 rounded-full cursor-pointer"
                style={socialLink.bgColor}
              >
                <img
                  src={socialLink.image}
                  alt={socialLink.alt}
                  className="absolute h-6 w-6"
                />
              </a>
              :
              <a
                onClick={() => redirectToExternalUrl(socialLink.url)}
                className="absolute h-8 w-8 p-1 rounded-full cursor-pointer"
              >
                <img
                  src={socialLink.image}
                  alt={socialLink.alt}
                  className="absolute h-6 w-6"
                />
              </a>
            }
          </li>
        ))}
      </ul>
    </>
  )
};