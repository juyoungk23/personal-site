import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import meta from './meta';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: meta.socialGithub,
    label: 'Github',
    icon: faGithub,
  },
  {
    link: meta.socialInstagram,
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: meta.socialLinkedin,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: `mailto:${meta.email}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
