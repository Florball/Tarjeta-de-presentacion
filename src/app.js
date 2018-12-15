let socials = {
  linkedin: {
    url: 'https://www.linkedin.com/in/flor-ballinas-332a5516b/',
    icon: 'https://business.utsa.edu/wp-content/uploads/2018/05/linkedin-logo.png'
  },
  github: {
    url: 'https://github.com/Florball',
    icon: 'https://banner2.kisspng.com/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg'
  },
  facebook: {
    url: 'https://www.facebook.com/florballinas',
    icon: 'https://www.frogs-in-nz.com/var/ezwebin_site/storage/images/media/images/icone-facebook/770588-1-fre-FR/Icone-Facebook_big.png'
  },
  medium: {
    url: 'https://medium.com/@florballinasarias',
    icon: 'http://pluspng.com/img-png/medium-logo-vector-png-monogram-minimum-digital-size-20-pixels-height-195.png'
  }
};

let socialIcons = '';
for (let social in socials) {
  socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
};

document.getElementById('sociales').innerHTML = socialIcons;