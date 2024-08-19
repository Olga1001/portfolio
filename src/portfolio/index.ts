import { startLog, $$el, $el } from '../libraries'
import { addPortfolioSection, pdpHTML } from './blocks'
import imagesLoaded from 'imagesloaded';

// @ts-ignore
import basetyle from '../libraries/base.css?raw'
// @ts-ignore
import mainStyle from './assets/css/main.css?raw'

startLog({ name: 'Portfolio', dev: 'Olha Zhuravel' })

document.head.insertAdjacentHTML('beforeend', `<style>${basetyle}</style>`)
document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

const initMasonry = () => {
  let waitMasonry = setInterval(() => {
    if (typeof Masonry === 'function') {
      clearInterval(waitMasonry)
      
      const container = $el('.masonry');

      imagesLoaded(container, () => {
        return new Masonry(container, {
          itemSelector: '.item-masonry',
          columnWidth: '.width-25',
          percentPosition: true,
        });
      });
    }
  })
}

const pushStatePathName = (newSearch) => {
  let newUrl = window.location.pathname + '?' + newSearch;
  history.pushState(null, '', newUrl);
}

class Portfolio {
  msnry: any

  constructor() {
    this.msnry = null;
    this.init()
  }

  init() {
    this.addProjectsInPortfolio();
    this.clickOnProject();
    this.nav();
  }

  addProjectsInPortfolio() {
    $el('.wrapper').insertAdjacentHTML('beforeend', addPortfolioSection())
  }

  clickOnProject() {
    $$el('.portfolio_item a').forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        let namePDP = item.search.split('product=')[1].split('&')[0];
        let variantPDP = item.search.split('variant=')[1];
     
        let newSearch = 'product=' + namePDP + '&variant=' + variantPDP;

        pushStatePathName(newSearch);

        new PDP(namePDP, variantPDP);
      })
    })
  }

  nav() {
    $$el('nav a[data-filter]').forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.classList.add('loading');
        
          const category = item.dataset.filter;

          filterPortfolioItems(category, this);

      });
    });
  }
}

const portfolioInstance = new Portfolio();

portfolioInstance.msnry = initMasonry();

// Reset Masonry after filters
const filterPortfolioItems = (category, portfolioInstance) => {
  const items = $$el('.portfolio_item');

  $$el('.nav [data-filter]').forEach(item => {
    item.dataset.filter === category ? item.classList.add('active') : item.classList.remove('active')
  })

  items.forEach(item => {
    const itemCollections = item.getAttribute('data-collections').split(',').map(c => c.trim());
    if (category === 'all' || itemCollections.includes(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  document.body.classList.remove('loading');

  if (portfolioInstance.msnry) {
    portfolioInstance.msnry.reloadItems()
    portfolioInstance.msnry.layout(); 
    // portfolioInstance.msnry.destroy(); 
  } else {
    setTimeout(() => {
      portfolioInstance.msnry = initMasonry();
    }, 300)
  }
};

class PDP {
  namePDP: string
  variantPDP: string | number

  constructor(namePDP, variantPDP) {
    this.namePDP = namePDP;
    this.variantPDP = variantPDP;
    this.init()
  }

  init() {
    this.addPDP()
    this.initSwiper()
    this.clickBack()
    this.actionGallery()
  }

  addPDP() {
    $el('.product')?.remove();
    document.body.insertAdjacentHTML('afterbegin', pdpHTML(this.namePDP, this.variantPDP))
    setTimeout(() => {
      $el('.product').classList.add('active')
    }, 300)
  }

  clickBack() {
    $el('.product .btn-back').addEventListener('click', (e) => {
      e.preventDefault()
      $el('.product').classList.remove('active')
      setTimeout(() => {
        $el('.product')?.remove()
      }, 300)
   
      pushStatePathName('')
    })
  }

  actionGallery() {
    $el('.btn-zoom')?.addEventListener('click', (e) => {
      $el('.mySwiperGallery').classList.add('active')
    })
    $el('.btn-close').addEventListener('click', (e) => {
      e.currentTarget.parentElement.classList.remove('active')
    })
  }

  initSwiper() {
    let initSwiper = setInterval(function () {
      if (typeof Swiper == 'function') {
        clearInterval(initSwiper)

        // var swiper2 = new Swiper(".mySwiper2", {
        //   loop: true,
        //   spaceBetween: 10,
        //   slidesPerView: "auto",
        //   freeMode: true,
        //   watchSlidesProgress: true,
        //   navigation: {
        //     nextEl: ".mySwiper2 .swiper-button-next",
        //     prevEl: ".mySwiper2 .swiper-button-prev",
        //   },  
        // });

        // var swiper = new Swiper(".mySwiper", {
        //   loop: true,
        //   slidesPerView: 1,
        //   // slideToClickedSlide: true,
        //   thumbs: {
        //     swiper: swiper2,
        //   },
        // });
        
        var swiper3 = new Swiper(".mySwiperGallery", {
          loop: true,
          slidesPerView: 1,
        
          navigation: {
            nextEl: ".mySwiperGallery .swiper-button-next",
            prevEl: ".mySwiperGallery .swiper-button-prev",
          }, 
        });
      }
    }, 1000)
  }
}

if (window.location.href.includes('?product')) {
  const namePDP = window.location.href.split('product=')[1].split('&')[0]
  const variantPDP = window.location.href.split('variant=')[1].replace('#','')

  new PDP(namePDP, variantPDP);
}
