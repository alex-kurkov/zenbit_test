import facebookImg from '../images/facebook.svg';
import twitterImg from '../images/twitter.svg';
import linkedinImg from '../images/linkedin.svg';
import pinterestImg from '../images/pinterest.svg';

export const API_URI = 'https://zen.kurkov.online';

export const googleMapsApiRequestUrl =
`https://www.google.com/maps/embed/v1/place
?key=AIzaSyA2ZiqJAMPp-S8iEYEDn-8E0Cobg6mu0mg
&q=place_id:ChIJuUMVlA1dwokR93efyfdYYDw
&zoom=13
&language=en
`

export const socialLinks = [
  {
    name: 'LinkedIn',
    slug: 'LinkedIn-profile',
    url: 'https://www.linkedin.cn',
    logo: linkedinImg,
  },
  {
    name: 'Twitter',
    slug: 'Twitter-profile',
    url: 'https://twitter.com',
    logo: twitterImg,
  },
  {
    name: 'facebook',
    slug: 'facebook-profile',
    url: 'https://facebook.com',
    logo: facebookImg,
  },
  {
    name: 'Pinterest',
    slug: 'Pinterest-profile',
    url: 'https://pinterest.com',
    logo: pinterestImg,
  },
]

export const mascottes = {
  goodieOne: {
    direction: 'none',
    type: 'ball',
    looking: 'left',
    color: '#f472b7',
    width: '214px',
    height: '214px',
    top: '65%',
    left: '-5%',
    mobileHidden: true,
  },
  goodieTwo: {
    direction: 'none',
    type: 'ball',
    looking: 'down',
    color: '#fad34f',
    width: '124px',
    height: '124px',
    top: '50%',
    left: '-8%',
    mobileHidden: false,
  },
  goodieThree: {
    direction: 'none',
    type: 'ball',
    looking: 'up',
    color: '#fad34f',
    width: '88px',
    height: '88px',
    top: '20px',
    left: '-120px',
    mobileHidden: true,
  },
  goodieFour: {
    direction: 'none',
    type: 'ball',
    looking: 'left',
    color: '#f472b7',
    width: '214px',
    height: '214px',
    top: '5px',
    left: '-100px',
    mobileHidden: true,
  },
  goodieFive: {
    direction: 'none',
    type: 'ball',
    looking: 'up',
    color: '#fad34f',
    width: '88px',
    height: '88px',
    top: '40%',
    left: '106%',
    mobileHidden: true,
  },
  goodieSix: {
    direction: 'down',
    type: 'finger',
    looking: 'somewhere',
    color: '#46ebb0',
    width: '94px',
    height: '94px',
    top: '100%',
    left: '55%',
    mobileHidden: false,
  },
}