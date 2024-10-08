export const dir: string = 'https://conversionratestore.github.io/projects/paintscratch/img/'

interface objInteface {
  [key: string]: any
}

interface Product {
  [key: number]: {
    head: string,
    images: string,
    title: string,
    desc: object,
    list: object,
    select: object
  }
}

export const svg: objInteface = {
  close: /*html */ `
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.7"/>
    <path d="M9 9L17 17M9 17L17 9" stroke="#283455" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  cart: `
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
    <g clip-path="url(#clip0_188_1379)">
      <path d="M9.56641 20.0234C10.6343 20.0234 11.5 19.1577 11.5 18.0898C11.5 17.0219 10.6343 16.1562 9.56641 16.1562C8.49851 16.1562 7.63281 17.0219 7.63281 18.0898C7.63281 19.1577 8.49851 20.0234 9.56641 20.0234Z" fill="white"/>
      <path d="M17.3008 20.0234C18.3687 20.0234 19.2344 19.1577 19.2344 18.0898C19.2344 17.0219 18.3687 16.1562 17.3008 16.1562C16.2329 16.1562 15.3672 17.0219 15.3672 18.0898C15.3672 19.1577 16.2329 20.0234 17.3008 20.0234Z" fill="white"/>
      <path d="M1.14453 3.26562H3.92046C3.95634 3.39482 7.21808 15.1386 7.01153 14.3951C7.08896 14.6739 7.34325 14.8671 7.63277 14.8671H19.2343C19.5219 14.8671 19.7749 14.6764 19.8543 14.3994L22.4753 5.37606C22.5307 5.18158 22.4917 4.97258 22.3702 4.81085C22.2481 4.64972 22.0574 4.55467 21.8554 4.55467H5.61609L5.03137 2.44861C4.95394 2.16979 4.69966 1.97656 4.41013 1.97656H1.14453C0.788276 1.97656 0.5 2.26484 0.5 2.62109C0.5 2.97734 0.788276 3.26562 1.14453 3.26562ZM16.6562 12.289H10.2109C9.85463 12.289 9.56635 12.0007 9.56635 11.6445C9.56635 11.2882 9.85463 10.9999 10.2109 10.9999H16.6562C17.0124 10.9999 17.3007 11.2882 17.3007 11.6445C17.3007 12.0007 17.0124 12.289 16.6562 12.289ZM8.92183 8.42184H17.9452C18.3015 8.42184 18.5897 8.71011 18.5897 9.06637C18.5897 9.42262 18.3015 9.71089 17.9452 9.71089H8.92183C8.56557 9.71089 8.2773 9.42262 8.2773 9.06637C8.2773 8.71011 8.56557 8.42184 8.92183 8.42184Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_188_1379">
        <rect width="22" height="22" fill="white" transform="translate(0.5)"/>
      </clipPath>
    </defs>
  </svg>`,
  arrowDown: `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_193_19761)">
      <path d="M7.54628 10.8891L13.7763 4.65896C13.9206 4.51486 14 4.3225 14 4.1174C14 3.9123 13.9206 3.71994 13.7763 3.57584L13.3176 3.11703C13.0188 2.81848 12.533 2.81848 12.2345 3.11703L7.0029 8.34867L1.76547 3.11123C1.62126 2.96713 1.42901 2.88757 1.22402 2.88757C1.0188 2.88757 0.826562 2.96713 0.682239 3.11123L0.223657 3.57004C0.0794468 3.71425 -4.45384e-08 3.90649 -5.35037e-08 4.1116C-6.24691e-08 4.3167 0.0794467 4.50906 0.223657 4.65315L6.45941 10.8891C6.60408 11.0336 6.79723 11.1129 7.00256 11.1124C7.20869 11.1129 7.40173 11.0336 7.54628 10.8891Z" fill="#283455"/>
    </g>
    <defs>
      <clipPath id="clip0_193_19761">
        <rect width="14" height="14" fill="white" transform="translate(14) rotate(90)"/>
      </clipPath>
    </defs>
  </svg>`
}

export const dataPrimaryProducts: Product = {
  0: {
    head: 'Create the Perfect Bed with a <span class="text-nowrap">Matching Sheet Set</span>',
    images: `<img src="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=1400" alt="Eucalyptus Silk Sheet Set" srcset="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkbeddingset_white.webp?crop=center&amp;height=1400&amp;v=1704709370&amp;width=1400 1400w" width="1400" height="1400" loading="eager" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full">
    <img src="//www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400" alt="Eucalyptus Silk Sheet Set" srcset="//www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptusbeddingset_grey.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">
    <img src="//www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400" alt="Eucalyptus Silk Sheet Set" srcset="//www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/06072022_Aeyla-0617x_3ff06a0c-9705-42e5-921f-d7346dc37be7.webp?crop=center&amp;height=1400&amp;v=1704709534&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">`,
    title: 'Eucalyptus Silk Sheet Set',
    desc: ['Double: Duvet Cover (200cm x 200cm), Fitted Sheet (135cm x 190cm x 32cm), Pillowcases (75cm x 50cm)', 'King: Duvet Cover (225cm x 220cm), Fitted Sheet (150cm x 200cm x 32cm), Pillowcases (75cm x 50cm)', 'Super King: Duvet Cover (260cm x 220cm), Fitted Sheet (180cm x 200cm x 32cm), Pillowcases (75cm x 50cm)'],
    list: ['Super soft fabric prevents hair breakage and skin creases. Hypoallergenic and gentle.', 'Naturally wicks away sweat to regulate body temperature and stay cool.'],
    select: {
      'White | Double': 44467947864350,
      'White | King': 44467947962654,
      'White | Super King': 44467948060958,
      'Stone | Double': 44467947897118,
      'Stone | King': 44467947995422,
      'Stone | Super King': 44467948093726,
      'Light Blue | Double': 48380928131358,
      'Light Blue | King': 48380928164126,
      'Light Blue | Super King': 48380928196894
    }
  },
  1: {
    head: 'Complete Your Comfort',
    images: `<img src="//www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400" alt="Eucalyptus Silk Pillow Cases - 2 Pack" srcset="//www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Euclayptussilkpillowcase_white.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400 1400w" width="1400" height="1400" loading="eager" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full">
    <img src="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400" alt="Eucalyptus Silk Pillow Cases - 2 Pack" srcset="//www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Eucalyptussilkpillowcase_grey.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">
    <img src="//www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400" alt="Eucalyptus Silk Pillow Cases - 2 Pack" srcset="//www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=352 352w, //www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=832 832w, //www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1200 1200w, //www.aeyla.co.uk/cdn/shop/products/Stone_Pillowcase-x.webp?crop=center&amp;height=1400&amp;v=1704709097&amp;width=1400 1400w" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-2xl object-cover aspect-square w-full h-full" style="display: none;">`,
    title: 'Eucalyptus Silk Pillow Cases',
    desc: ['For Standard Size Pillow: 50cm x 75cm'],
    list: ['Feels like a fresh breeze, keeping that cool-side-of-the-pillow sensation.', 'Super soft fabric prevents hair breakage and skin creases.'],
    select: {
      'White | 2 pack': 44467942981918,
      'White | 4 pack': 44467942981918,
      'Stone | 2 pack': 44467943014686,
      'Stone | 4 pack': 44467943014686,
      'Light Blue | 2 pack': 44467943047454,
      'Light Blue | 4 pack': 44467943047454
    }
  },
  2: {
    head: 'Maximize Relaxation with a <span class="text-nowrap">Cooling Sleep Mask</span>',
    images: `<img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortWHITE.webp?crop=center&amp;height=1400&amp;v=1677417887&amp;width=1400" alt="Eucalyptus Silk Eye Mask" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-xl object-cover aspect-square w-full h-full">
    <img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortGREY.webp?crop=center&amp;height=1400&amp;v=1677417887&amp;width=1400" alt="Eucalyptus Silk Eye Mask" width="1400" height="1400" loading="eager" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-xl object-cover aspect-square w-full h-full" style="display: none">
    <img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfortBLUE_705f925c-e28f-4a5d-b10a-70259fa1a23f.webp?crop=center&amp;height=1400&amp;v=1677417887&amp;width=1400" alt="Eucalyptus Silk Eye Mask" width="1400" height="1400" loading="lazy" sizes="(min-width: 1024) 41.6vw, 100vw" class="rounded-xl object-cover aspect-square w-full h-full" style="display: none;">`,
    title: 'Eucalyptus Silk Eye Mask',
    desc: [''],
    list: ['Promotes good sleep. ', 'Cooling, super soft, hypoallergenic & dermatologically tested material.'],
    select: {
      'White': 44467937280286,
      'Stone': 44467937247518,
      'Light Blue': 44467937313054
    }
  }
}

export const dataCrossSell: objInteface = {
  '/products/mela-weighted-blanket,/products/the-mela-weighted-blanket-with-removable-cover': {
    'addons': {
      'pillowcases': 2,
      'mask': 1,
      'pillowcases_mask': 0
    },
    'not_addons': 0
  },
  '/products/the-dual-pillow,/products/the-foamo': {
    'addons': {
      'pillowcases': 2,
      'mask': 1,
      'pillowcases_mask': 0
    },
    'not_addons': 1
  },
  '/products/opposites-attract-bundle': {
    'addons': {
      'pillowcases': 0,
      'mask': 0,
      'pillowcases_mask': 0
    },
    'not_addons': 1
  },
  '/products/pillow-pillowcase-bundle': {
    'addons': {
      'pillowcases': 0,
      'mask': 0,
      'pillowcases_mask': 0
    },
    'not_addons': 2
  },
  '/products/move-in-set-2': {
    'not_addons': 2
  }
}