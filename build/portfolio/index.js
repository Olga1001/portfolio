(function() {
  "use strict";
  const I = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, y = (o) => document.querySelectorAll(o), h = (o) => document.querySelector(o), f = "../src/portfolio/assets/", x = {
    arrowLeft: (
      /*html */
      `
    <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>`
    ),
    close: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>`,
    zoomPlus: `
    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.88 16.56c-1.576 1.155-3.54 1.866-5.667 1.92h-.013c-.045.001-.098.001-.152.001-4.967 0-8.999-4.002-9.048-8.957v-.005-.24c0-5.125 4.155-9.28 9.28-9.28s9.28 4.155 9.28 9.28c-.04 2.142-.755 4.109-1.939 5.707l.019-.027 7.44 7.44-1.76 1.6zm-12.24-7.28c.023 3.716 3.041 6.72 6.76 6.72 3.734 0 6.76-3.027 6.76-6.76 0-.014 0-.028 0-.042v.002c0-.004 0-.01 0-.015 0-1.847-.766-3.515-1.998-4.703l-.002-.002c-1.221-1.235-2.915-2-4.788-2-3.718 0-6.732 3.014-6.732 6.732v.072zm5.92 3.733v-2.933h-2.96v-1.6h2.96v-2.906h1.6v2.906h2.88v1.6h-2.88v2.934z"/></svg>`,
    github: `
    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
    </svg>`
  }, b = {
    cerebelly: {
      variants: [
        {
          images: ["/notification.png", "/pdp.png"],
          title: " A/B тестування повідомлення додавання товара у кошик",
          gitHubCode: "https://conversionratestore.github.io/projects/cerebelly/add_to_cart_notification.js",
          description: `
          <b>Опис:</b> Було реалізовано A/B тест для покращення взаємодії користувачів з вебсайтом. 
          Одним із ключових елементів цього тесту стало створення повідомлення, яке з'являється при додаванні товару в кошик ("add to cart") на всьому сайті. Це ж повідомлення також з'являється під час спроби виходу з сайту (exit intent), що допомагає утримати користувачів та збільшити конверсії.
          <br><br>
          <b>Додаткові зміни:</b> 
          <br><br><b>Навігаційна панель:</b> На сторінці товару (PDP) було додано нову навігаційну панель для полегшення навігації та покращення користувацького досвіду.
          <br><br><b>Редизайн елементів:</b> Деякі елементи на сторінці товару (PDP) були передизайнені для підвищення візуальної привабливості та зручності використання.
          <br><br><b>Технології:</b> Проєкт реалізовано з використанням JavaScript/TypeScript, HTML та CSS.
        `,
          collections: "ts",
          classes: "width-50"
        }
      ]
    },
    huntergalloway: {
      variants: [
        {
          link: "https://www.huntergalloway.com.au/",
          images: ["/screencapture-huntergalloway-au-2024-08-15-18_08_16.png", "/screencapture-huntergalloway-au-contact-2024-08-15-18_09_38.png", "/screencapture-huntergalloway-au-mortgage-calculator-2024-08-15-18_09_08.png", "/blog.png"],
          title: "Редизайн i розробка вебсайту",
          description: `
          <b>Опис:</b> Було проведено повний редизайн та розробку ключових сторінок вебсайту, включаючи головну сторінку, сторінку калькулятора, сторінки блогів і контактну сторінку. Проєкт орієнтований на створення сучасного дизайну з акцентом на високу продуктивність і зручність користувачів.
          <br><br>
          <b>Технічні деталі:</b> 
          <br><br><b>Розробка:</b> Використано PHP, JavaScript, HTML та CSS для створення функціонального та адаптивного інтерфейсу.
          <br><br><b>CMS:</b> Вебсайт реалізовано на платформі WordPress, з використанням WP Engine, NitroPack для забезпечення високої швидкості завантаження.
          <br><br><b>Конструктор:</b> Для створення блогів застосовано Elementor, що дозволяє клієнтам самостійно оновлювати контент, зберігаючи цілісність дизайну.
          <br><br><b>Форми:</b> За допомогою Contact Form 7 створено форми з інтеграцією HubSpot для збору та обробки даних від користувачів.
          <br><br><b>Слайдер:</b> Реалізовано Swiper Slider для плавного і привабливого відображення динамічного контенту.
          <br><br><b>Оптимізація:</b> Значну увагу приділено оптимізації швидкості завантаження сайту, що підтверджується високими результатами в PageSpeed Insights. Також було виправлено неочікувані зміщення елементів під час завантаження сторінок, що значно покращило показник Cumulative Layout Shift (CLS) і забезпечило стабільність інтерфейсу.
        `,
          collections: "js"
        }
      ]
    },
    lemieux: {
      variants: [
        {
          images: ["/popup_1.png", "/popup_2.png", "/popup_2_1.png", "/popup_3.png", "/popup_4.png", "/popup_4_1.png"],
          title: "A/B тестування exit intent попапів",
          gitHubCode: "https://conversionratestore.github.io/projects/lemieux/exit_popup.js",
          description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест, в рамках якого створено чотири попапи, що з'являються при спробі виходу з сайту (exit intent). Кожен попап мав різні тригери та умови появи, що дозволяло таргетувати різні категорії користувачів. Не більше двох попапів показувались за сесію, в залежності від того, чи є товари в кошику, і чи користувач є новим чи постійним. Також, текст у деяких попапах змінювався в залежності від країни користувача.
          <br><br><b>Функціональність:</b>
          <br><br><b> Інтеграції та налаштування:</b><br>
            <br>-Підключення до API для отримання даних з кошика та інформації про товари.
            <br> -Налаштування попапів у Klaviyo.
             <br> <br>
             <b>Додаткові функції:</b><br>
            <br>-Додавання таймера для стимулювання швидких дій.
            <br>-Реалізація слайдера для відображення динамічного контенту.
            <br>-Можливість копіювання промокода безпосередньо з попапа.
             <br> <br>
             <b>Технології:</b> Використано JavaScript, HTML та CSS
        `,
          collections: "js",
          classes: "width-50"
        },
        {
          images: ["/slide_in_cart.png"],
          title: "A/B тестування нового Slide-in кошика",
          gitHubCode: "https://conversionratestore.github.io/projects/lemieux/slide_in_cart.js",
          description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест нового Slide-in cart, який забезпечує повний функціонал кошика, використовуючи API. 
          API дозволило додавати, видаляти та оновлювати товари в кошику, реалізувати логіку промокодів, 
          вивести загальну суму замовлення, вартість доставки, знижки тощо,
          забезпечуючи інтуїтивно зрозумілий і швидкий процес покупки.
          <br> <br>
          <b>Технології:</b> JavaScript, HTML та CSS
        `,
          collections: "js"
        }
      ]
    },
    doyogawithme: {
      variants: [
        {
          images: ["/free.png", "/free_desk.png", "/form.png"],
          title: "A/B тестування реєстраційного блоку",
          gitHubCode: "https://conversionratestore.github.io/projects/doyogawithme/account_progress.js",
          description: `
          <b>Опис:</b> Було реалізовано A/B тест для перевірки ефективності реєстраційного блоку, який закликає користувачів підписатися на доступ до безкоштовних занять.
          <br><br><b>Функціональність:</b>
          <br><br><b>Кнопки реєстрації:</b> У блоці передбачено дві кнопки для реєстрації, одна з яких дозволяє користувачам підписатися через Google, а інша — за допомогою електронної пошти.
          <br><br><b>Технології:</b> Проєкт реалізовано з використанням JavaScript/TypeScript, HTML та CSS.
        `,
          collections: "js"
        }
      ]
    },
    paintscratch: {
      variants: [
        {
          images: ["/quiz-1.png", "/quiz-2.png", "/quiz-3.png", "/quiz-final.png"],
          title: "A/B тестування квізу для підбору ремонтних наборів",
          link: "https://www.paintscratch.com/cgi-bin/order-form.cgi",
          gitHubCode: "https://github.com/Olga1001/portfolio/src/paintscratch",
          description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест інтерактивного квізу, який допомагає користувачам підібрати оптимальний набір для ремонту, виходячи з їхніх потреб. Користувачі відповідають на питання, обираючи "Type of damage," "Size," і "Material type," після чого їм надаються рекомендації щодо продуктів.
          <br><br><b>Функціональність:</b><br>
          <br><b>Рекомендовані продукти:</b>
          На основі відповідей користувачам показується персоналізований набір продуктів з текстом, який підтверджує, що "Your custom kit comes complete with everything you need for a perfect repair." У комплекті відображаються товари, необхідні для ремонту, разом з кнопкою "Add to cart," яка дозволяє додати всі товари з цієї групи до кошика.        
          <br><br><b>Додаткові продукти:</b>
          Також користувачам пропонуються додаткові товари, які можуть знадобитися, з окремими кнопками "Add to cart" для кожного товару.
          <br><br>
          У кінці квізу додається кнопка "Take quiz again," що дозволяє користувачам повторити процес для підбору інших товарів.
          `,
          collections: "ts"
        }
      ]
    },
    lakelasvegaswatersports: {
      variants: [
        {
          images: ["/home.png"],
          title: "A/B тестування редизайну головної сторінки",
          gitHubCode: "https://conversionratestore.github.io/projects/llvws/home.js",
          description: `
          <b>Опис:</b> 
          Було проведено A/B тест для редизайну головної сторінки вебсайту, з метою покращення користувацького досвіду та підвищення конверсії. 
          <br><br><b>Функціональність:</b><br>
          <br><b>Блоки інформації:</b>
          Додано блок з інформацією про доступні активності, включаючи варіанти як "Electric Boat Rental," "Kayak Rentals," "Swimmable Pontoon Boat," а також різні круїзи, такі як "Jingle On The Waves Cruise" і "Santa Sail - Kid Friendly Cruise." Користувачі можуть переглядати всі варіанти оренди і круїзів.
          <br><br><b>Банер:</b>
          Введено банер "Yacht Charter Services: Book Your Luxury Experience" для акцентування уваги на послугах оренди яхт.
          <br><br><b>Бенефіти:</b>
          Додані пропозиції, такі як "10% off with code: BOOK10" та "Free cancellation up to 24H before the event," для підвищення привабливості пропозицій.
          <br><br><b>Слайдер:</b>
          Реалізовано слайдер з відгуками клієнтів, що підвищує довіру та привабливість сервісів.
         <br> <br><b>Блок подій:</b>
          Виведено блок з інформацією про події для інформування користувачів про майбутні заходи.
          <br><br><b>Карта:</b>
          Додано інтерактивну карту, що показує місцезнаходження компанії.
        `,
          collections: "js"
        }
      ]
    },
    mammutmarsch: {
      variants: [
        {
          images: ["/popup.png"],
          title: "A/B тестування редизайну головної сторінки",
          gitHubCode: "https://conversionratestore.github.io/projects/mammutmarsch/t-shirt_upsell.js",
          description: `
          <b>Опис:</b> Було реалізовано A/B тест попапу, який з’являється в залежності від обраного пакету користувача. Попап пропонує придбати футболку для події (Event T-Shirt) з різними розмірами (S, M, L, XL, XXL) за 20€.
          <br><br><b>Функціональність:</b><br>
          <br><b>Деталі пропозиції:</b>
          У попапі представлено опис футболки: високоякісна бавовняна футболка з індивідуальним друком для кожної події, доступна у жіночому та чоловічому варіантах, з модним кроєм.
        
          <br><br><b>Опції:</b>
          Користувачі мають можливість або додати футболку до замовлення, або пропустити пропозицію та завершити реєстрацію без додаткових покупок.

        `,
          collections: "js"
        }
      ]
    },
    html: {
      variants: [
        {
          images: ["/mailhealthcare_letter.png", "/mailhealthcare_product.webp", "/mailhealthcare_contact.png", "/mailhealthcare_404.png"],
          link: "https://olga1001.github.io/mailhealthcare/dist/product.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/mailhealthcare",
          description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        {
          images: ["/keto.png"],
          title: "Верстка",
          description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        {
          images: ["/ve2pay.webp"],
          title: "Верстка",
          description: `
          <b>Опис:</b> Верстка w2p<br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        {
          images: ["/home.webp", "/ConsumerAttorneys_new_credit-reporting.png"],
          link: "https://olga1001.github.io/ConsumerAttorneys_new/dist/main.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/ConsumerAttorneys_new",
          description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        {
          images: ["/csgo.jpg"],
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/csgo",
          description: `
          <b>Опис:</b> Верстка CS GO рулетка<br><br>`,
          collections: "html"
        },
        {
          images: ["/magic.jpg"],
          link: "https://olga1001.github.io/magic/app/index.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/magic",
          description: `
          <b>Опис:</b> Верстка<br><br>
          HTML + SASS + jQuery + Slick + wow animation`,
          collections: "html"
        },
        {
          images: ["/monopoly.webp"],
          link: "https://olga1001.github.io/monopoly/dist/index.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/monopoly",
          description: `
          <b>Опис:</b> Верстка monopoly<br><br>`,
          collections: "html"
        },
        {
          images: ["/foot.jpg"],
          link: "https://olga1001.github.io/foot/index.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/foot",
          description: `
          <b>Опис:</b> Верстка<br><br>
          HTML + CSS + jQuery + Swiper`,
          collections: "html"
        }
      ]
    }
  }, A = () => {
    const o = /* @__PURE__ */ new Set();
    for (const n in b)
      b[n].variants.forEach((r) => {
        var c;
        const i = (c = r.collections) == null ? void 0 : c.split(",").map((l) => l.trim());
        i == null || i.forEach((l) => o.add(l));
      });
    let e = '<li><a href="#" data-filter="all" class="active">All</a></li>';
    return o.forEach((n) => {
      e += `<li><a href="#" data-filter="${n}">${n}</a></li>`;
    }), `<ul class="d-flex">${e}</ul>`;
  }, B = () => {
    let o = "";
    for (const e in b) {
      const n = b[e].variants;
      for (let s = 0; s < n.length; s++) {
        const r = n[s].images[0], i = n[s].collections;
        o += `
                <div class="portfolio_item item-masonry ${n[s].classes ? n[s].classes : "width-25"}" data-collections="${i}">
                    <a href="?product=${e}&variant=${s}">
                        <span>
                            <img src="${f + "images/" + e + r}" alt="${e} image">
                        </span>
                    </a>
                </div>`;
      }
    }
    return `
        <div class="portfolio">
            <div class="container">
                <nav class="nav ">
                    ${A()}
                </nav>
                <div class="portfolio_list masonry">${o}</div>
            <div>
        </div>`;
  }, $ = (o, e) => {
    const n = b[o].variants[e], s = n.images;
    let r = "";
    for (let i = 0; i < s.length; i++)
      r += `<div class="swiper-slide"><img src="${f + "images/" + o + s[i]}" alt="image"></div>`;
    return `
        <div class="product">
            <div class="d-flex">
                <div class="product_left">
                    <a href="#" class="btn-back items-center">${x.arrowLeft} Back</a>
                    <div class="product_gallery">
                        ${r}
                    </div>
                </div>
                <div class="product_right">
                    <div class="product_info">
                        <h2>${n.title}</h2>

                        ${n.link ? `<a href="${n.link}" target="_blank"><b>Preview</b></a><br><br>` : ""}
                       
                        <p>${n.description}</p>
                     
                        ${n.gitHubCode ? `<br><br><a href="${n.gitHubCode}" class="items-center" target="_blank">${x.github} <b>Github</b></a>` : ""}
                    </div>
                </div>
            </div>
        </div>`;
  }, H = (o, e) => {
    const n = e === "all" ? b : {};
    let s = "";
    if (e !== "all")
      for (const [r, i] of Object.entries(o)) {
        const c = i.variants.filter(
          (l) => l.collections ? e.includes(l.collections) : !1
        );
        c.length > 0 && (n[r] = { variants: c });
      }
    console.log(e), console.log(n);
    for (const r in n) {
      let i = n[r].variants;
      for (let c = 0; c < i.length; c++)
        s += `
            <div class="portfolio_item item-masonry ${i[c].classes ? i[c].classes : "width-25"}" data-collections="${i[c].collections}">
                <a href="?product=${r}&variant=${c}">
                    <span>
                        <img src="${f + "images/" + r + i[c].images[0]}" alt="${r} image">
                    </span>
                </a>
            </div>`;
    }
    return s;
  };
  var w = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function M(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
  }
  var k = { exports: {} }, v = { exports: {} }, L;
  function O() {
    return L || (L = 1, function(o) {
      (function(e, n) {
        o.exports ? o.exports = n() : e.EvEmitter = n();
      })(typeof window < "u" ? window : w, function() {
        function e() {
        }
        let n = e.prototype;
        return n.on = function(s, r) {
          if (!s || !r)
            return this;
          let i = this._events = this._events || {}, c = i[s] = i[s] || [];
          return c.includes(r) || c.push(r), this;
        }, n.once = function(s, r) {
          if (!s || !r)
            return this;
          this.on(s, r);
          let i = this._onceEvents = this._onceEvents || {}, c = i[s] = i[s] || {};
          return c[r] = !0, this;
        }, n.off = function(s, r) {
          let i = this._events && this._events[s];
          if (!i || !i.length)
            return this;
          let c = i.indexOf(r);
          return c != -1 && i.splice(c, 1), this;
        }, n.emitEvent = function(s, r) {
          let i = this._events && this._events[s];
          if (!i || !i.length)
            return this;
          i = i.slice(0), r = r || [];
          let c = this._onceEvents && this._onceEvents[s];
          for (let l of i)
            c && c[l] && (this.off(s, l), delete c[l]), l.apply(this, r);
          return this;
        }, n.allOff = function() {
          return delete this._events, delete this._onceEvents, this;
        }, e;
      });
    }(v)), v.exports;
  }
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function(o) {
    (function(e, n) {
      o.exports ? o.exports = n(e, O()) : e.imagesLoaded = n(e, e.EvEmitter);
    })(
      typeof window < "u" ? window : w,
      function(n, s) {
        let r = n.jQuery, i = n.console;
        function c(t) {
          return Array.isArray(t) ? t : typeof t == "object" && typeof t.length == "number" ? [...t] : [t];
        }
        function l(t, a, p) {
          if (!(this instanceof l))
            return new l(t, a, p);
          let d = t;
          if (typeof t == "string" && (d = document.querySelectorAll(t)), !d) {
            i.error(`Bad element for imagesLoaded ${d || t}`);
            return;
          }
          this.elements = c(d), this.options = {}, typeof a == "function" ? p = a : Object.assign(this.options, a), p && this.on("always", p), this.getImages(), r && (this.jqDeferred = new r.Deferred()), setTimeout(this.check.bind(this));
        }
        l.prototype = Object.create(s.prototype), l.prototype.getImages = function() {
          this.images = [], this.elements.forEach(this.addElementImages, this);
        };
        const j = [1, 9, 11];
        l.prototype.addElementImages = function(t) {
          t.nodeName === "IMG" && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
          let { nodeType: a } = t;
          if (!a || !j.includes(a))
            return;
          let p = t.querySelectorAll("img");
          for (let d of p)
            this.addImage(d);
          if (typeof this.options.background == "string") {
            let d = t.querySelectorAll(this.options.background);
            for (let J of d)
              this.addElementBackgroundImages(J);
          }
        };
        const C = /url\((['"])?(.*?)\1\)/gi;
        l.prototype.addElementBackgroundImages = function(t) {
          let a = getComputedStyle(t);
          if (!a)
            return;
          let p = C.exec(a.backgroundImage);
          for (; p !== null; ) {
            let d = p && p[2];
            d && this.addBackground(d, t), p = C.exec(a.backgroundImage);
          }
        }, l.prototype.addImage = function(t) {
          let a = new g(t);
          this.images.push(a);
        }, l.prototype.addBackground = function(t, a) {
          let p = new m(t, a);
          this.images.push(p);
        }, l.prototype.check = function() {
          if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
            this.complete();
            return;
          }
          let t = (a, p, d) => {
            setTimeout(() => {
              this.progress(a, p, d);
            });
          };
          this.images.forEach(function(a) {
            a.once("progress", t), a.check();
          });
        }, l.prototype.progress = function(t, a, p) {
          this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, a]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && i && i.log(`progress: ${p}`, t, a);
        }, l.prototype.complete = function() {
          let t = this.hasAnyBroken ? "fail" : "done";
          if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let a = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[a](this);
          }
        };
        function g(t) {
          this.img = t;
        }
        g.prototype = Object.create(s.prototype), g.prototype.check = function() {
          if (this.getIsImageComplete()) {
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
          }
          this.proxyImage = new Image(), this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src;
        }, g.prototype.getIsImageComplete = function() {
          return this.img.complete && this.img.naturalWidth;
        }, g.prototype.confirm = function(t, a) {
          this.isLoaded = t;
          let { parentNode: p } = this.img, d = p.nodeName === "PICTURE" ? p : this.img;
          this.emitEvent("progress", [this, d, a]);
        }, g.prototype.handleEvent = function(t) {
          let a = "on" + t.type;
          this[a] && this[a](t);
        }, g.prototype.onload = function() {
          this.confirm(!0, "onload"), this.unbindEvents();
        }, g.prototype.onerror = function() {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }, g.prototype.unbindEvents = function() {
          this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        };
        function m(t, a) {
          this.url = t, this.element = a, this.img = new Image();
        }
        return m.prototype = Object.create(g.prototype), m.prototype.check = function() {
          this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
        }, m.prototype.unbindEvents = function() {
          this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, m.prototype.confirm = function(t, a) {
          this.isLoaded = t, this.emitEvent("progress", [this, this.element, a]);
        }, l.makeJQueryPlugin = function(t) {
          t = t || n.jQuery, t && (r = t, r.fn.imagesLoaded = function(a, p) {
            return new l(this, a, p).jqDeferred.promise(r(this));
          });
        }, l.makeJQueryPlugin(), l;
      }
    );
  })(k);
  var T = k.exports;
  const S = /* @__PURE__ */ M(T), D = `body.fixed_body {
  overflow: hidden !important;
}

/* flex */
.d-flex {
  display: flex;
}

.items-center {
  display: flex;
  align-items: center;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.d-none {
  display: none;
}

@media (min-width: 900px) {
  .flex-lg-column-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
  .justify-lg-center {
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 768px) {
  .d-md-flex {
    display: flex;
  }
}/*# sourceMappingURL=base.css.map */`, z = `*, *:before, *:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  color: #1e1e1e;
  line-height: 1;
}
body:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  vertical-align: middle;
  background-color: #fff;
  z-index: 99;
  width: 100%;
  height: 100%;
}
body.init:before {
  content: none;
}

.container {
  padding: 0 20px;
  max-width: 1440px;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 100%;
}

h2 {
  padding: 20px 0;
  font-size: 34px;
  line-height: 1.4;
}

a {
  text-decoration: none;
}
a svg {
  margin-right: 8px;
}
a:hover {
  color: orange;
}
a:hover svg {
  fill: orange;
}

.item-masonry {
  padding: 10px;
}
.item-masonry img {
  display: block;
}
.item-masonry span {
  background-color: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 4px;
  display: block;
}

.width-25 {
  width: 25%;
}

.width-50 {
  width: 50%;
}

/* PDP */
.product {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 99;
}
.product.active {
  opacity: 1;
  pointer-events: auto;
}
.product.active .product_right, .product.active .product_left {
  transform: translateX(0);
}
.product_left, .product_right {
  width: 50%;
  padding: 40px 60px;
  min-height: 100vh;
  transition: all 0.3s ease;
}
.product_left {
  background-color: #6032a4;
  transform: translateX(-100%);
  box-shadow: 5px 5px 10px rgba(96, 50, 164, 0.4);
  z-index: 2;
}
.product_right {
  background-color: rgb(243, 243, 243);
  transform: translateX(100%);
}
.product_gallery .swiper-slide {
  height: -moz-fit-content;
  height: fit-content;
}
.product_gallery img {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: top;
     object-position: top;
  margin-bottom: 7px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}
.product_info {
  padding: 20px 0;
  line-height: 22px;
  position: sticky;
  top: 40px;
  height: -moz-fit-content;
  height: fit-content;
  font-size: 14px;
  max-width: 500px;
}

.btn-back {
  margin-bottom: 20px;
  color: #fff;
}
.btn-back svg {
  fill: #fff;
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.btn-close {
  position: fixed;
  top: 2.5%;
  right: calc(2.5% + 5px);
  transform: translateX(50%);
  z-index: 99999;
  border: 2px solid #fff;
  padding: 8px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
}
.btn-close svg {
  fill: #fff;
  width: 16px;
  height: 16px;
}

.btn-zoom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  background-color: transparent;
  border-radius: 50%;
  padding: 4px;
  width: 32px;
  height: 32px;
  border: 2px solid #757575;
  background-color: #fff;
}
.btn-zoom svg {
  width: 16px;
  height: 16px;
}

.nav {
  padding: 10px;
}
.nav li {
  list-style-type: none;
  margin-right: 10px;
}
.nav li a {
  display: block;
  padding: 4px 8px;
  line-height: 22px;
  font-size: 16px;
  border-radius: 16px;
  min-width: 45px;
  text-align: center;
  color: #1e1e1e;
  background-color: #f5f5f5;
}
.nav li a.active {
  background-color: orange;
  color: #fff;
}

/* portfolio */
.portfolio {
  padding: 20px 0;
  background-color: #6032a4;
  min-height: 100vh;
}

@media screen and (min-width: 768px) {
  .mySwiper .swiper-wrapper {
    display: block !important;
  }
}
@media screen and (max-width: 767px) {
  .container {
    padding: 0 10px;
  }
  h2 {
    font-size: 18px;
  }
  .nav,
  .item-masonry {
    padding: 4px;
  }
  .width-25 {
    width: 33.33%;
  }
  .width-50 {
    width: 66.66%;
  }
  .product_left, .product_right {
    width: 100%;
    padding: 14px;
    min-height: auto;
  }
  .product_info {
    padding: 0;
  }
  .product > .d-flex {
    flex-direction: column-reverse;
  }
  .btn-back {
    color: #1e1e1e;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .btn-back svg {
    fill: #1e1e1e;
  }
}/*# sourceMappingURL=main.css.map */`;
  I({ name: "Portfolio", dev: "Olha Zhuravel" }), document.head.insertAdjacentHTML("beforeend", `<style>${D}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${z}</style>`);
  const q = window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop", _ = () => {
    let o = setInterval(() => {
      if (typeof Masonry == "function") {
        clearInterval(o);
        const e = h(".masonry"), n = new Masonry(e, {
          itemSelector: ".item-masonry",
          columnWidth: ".width-25",
          percentPosition: !0
        });
        return S(e, () => {
          n.layout();
        }), n;
      }
    });
  }, G = () => {
    const o = h(".masonry");
    S(o, () => {
      u.msnry ? (u.msnry.reloadItems(), u.msnry.layout()) : u.msnry = _();
    });
  }, E = (o) => {
    let e = window.location.pathname + "?" + o;
    history.pushState(null, "", e);
  };
  class W {
    constructor() {
      this.msnry = null, this.init();
    }
    init() {
      this.addProjectsInPortfolio(), this.clickOnProject(), this.nav();
    }
    addProjectsInPortfolio() {
      h(".wrapper").insertAdjacentHTML("beforeend", B());
    }
    clickOnProject() {
      y(".portfolio_item a").forEach((e, n) => {
        e.addEventListener("click", (s) => {
          s.preventDefault(), s.stopPropagation();
          let r = e.search.split("product=")[1].split("&")[0], i = e.search.split("variant=")[1], c = "product=" + r + "&variant=" + i;
          E(c), new P(r, i);
        });
      });
    }
    nav() {
      y("nav a[data-filter]").forEach((e) => {
        e.addEventListener("click", (n) => {
          if (n.preventDefault(), e.classList.contains("active"))
            return;
          h("nav a.active").classList.remove("active"), e.classList.add("active");
          const s = e.dataset.filter, r = H(b, s);
          h(".portfolio_list").innerHTML = r, G(), this.clickOnProject();
        });
      });
    }
  }
  const u = new W();
  u.msnry = _(), setTimeout(() => {
    document.body.classList.add("init");
  }, 300);
  class P {
    constructor(e, n) {
      this.namePDP = e, this.variantPDP = n, this.init();
    }
    init() {
      this.addPDP(), this.clickBack(), document.body.classList.add("fixed_body");
    }
    addPDP() {
      var e;
      (e = h(".product")) == null || e.remove(), document.body.insertAdjacentHTML("afterbegin", $(this.namePDP, this.variantPDP)), q === "mobile" && h(".product_info").before(h(".product .btn-back")), setTimeout(() => {
        h(".product").classList.add("active");
      }, 300);
    }
    clickBack() {
      h(".product .btn-back").addEventListener("click", (e) => {
        e.preventDefault(), h(".product").classList.remove("active"), setTimeout(() => {
          var n;
          (n = h(".product")) == null || n.remove();
        }, 300), document.body.classList.remove("fixed_body"), E("");
      });
    }
  }
  if (window.location.href.includes("?product")) {
    const o = window.location.href.split("product=")[1].split("&")[0], e = window.location.href.split("variant=")[1].replace("#", "");
    new P(o, e);
  }
})();
//# sourceMappingURL=index.js.map
