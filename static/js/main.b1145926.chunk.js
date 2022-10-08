(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(21),n=c.n(i),r=c(6),l=(c(26),c(5)),o=c.n(l),j=c(7),d=c(4),u=c(3),b=c(13),h=c.n(b),_=Object(s.createContext)(),m=(c(28),c(0)),O=function(){var e=Object(s.useContext)(_),t=e.favList,c=e.cartList,a=e.filterWord,i=e.setFilterWord,n=Object(u.p)().product;return Object(m.jsx)("div",{className:"header",id:"header",children:Object(m.jsxs)("div",{className:"header__container",children:[Object(m.jsxs)("div",{className:"header__menu",children:[Object(m.jsx)(r.b,{title:"logo",to:"home",children:Object(m.jsx)("span",{className:"header__logo"})}),Object(m.jsx)("nav",{className:"nav",children:Object(m.jsxs)("ul",{className:"nav__list",children:[void 0===Object(u.p)().product?Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/",className:"nav__link is-active",children:"home"})}):Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/",className:"nav__link",children:"home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"phone",className:h()("nav__link",{"is-active":"phone"===Object(u.p)().product}),children:"phones"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"tablet",className:h()("nav__link",{"is-active":"tablet"===Object(u.p)().product}),children:"tablets"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"accessories",className:h()("nav__link",{"is-active":"accessories"===Object(u.p)().product}),children:"accessories"})})]})})]}),Object(m.jsxs)("div",{className:"header__actions",children:[("phone"===n||"tablet"===n||"accessories"===n)&&Object(m.jsxs)("form",{className:"header__search",children:[Object(m.jsx)("label",{htmlFor:"#search",children:Object(m.jsx)("input",{type:"text",id:"search",className:"header__search-input",placeholder:"Search in favourites...",value:a,onChange:function(e){return i(e.target.value)}})}),a.length>0?Object(m.jsx)("button",{type:"button",title:"name",onClick:function(){return i("")},children:Object(m.jsx)("div",{className:"header__search-close"})}):Object(m.jsx)("div",{className:"header__search-img"})]}),Object(m.jsx)(r.b,{className:"header__button",title:"favourites",to:"favourites",children:t.length>0?Object(m.jsxs)("div",{className:"header__wrap",children:[Object(m.jsx)("span",{className:"header__favourites-hurt"}),Object(m.jsx)("span",{className:"header__number",children:t.length})]}):Object(m.jsx)("span",{className:"header__favourites"})}),Object(m.jsx)(r.b,{title:"cart",className:"header__button",to:"cart",children:c.length>0?Object(m.jsxs)("div",{className:"header__wrap",children:[Object(m.jsx)("span",{className:"header__cart-cart"}),Object(m.jsx)("span",{className:"header__number",children:c.length})]}):Object(m.jsx)("span",{className:"header__cart"})})]})]})})},x=(c(30),function(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("div",{className:"footer__container",children:[Object(m.jsx)(r.b,{title:"logo",to:"home",children:Object(m.jsx)("span",{className:"header__logo"})}),Object(m.jsx)("nav",{className:"nav",children:Object(m.jsxs)("ul",{className:"nav__list",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://github.com/VitalyPasechnik/react_phone-catalog",className:"nav__link",children:"github"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/vitaly-pasechnik-104bb6221/",className:"nav__link",children:"contacts"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#tablets",className:"nav__link",children:"rights"})})]})}),Object(m.jsxs)("div",{className:"footer__actions",children:[Object(m.jsx)("p",{children:"Back to top"}),Object(m.jsx)("a",{title:"top",className:"footer__button",href:"#header",children:Object(m.jsx)("span",{className:"footer__top"})})]})]})})}),p=(c(31),function(){return Object(m.jsxs)("div",{className:"Layout",children:[Object(m.jsx)(O,{}),Object(m.jsx)("div",{className:"layout__container",children:Object(m.jsx)(u.b,{})}),Object(m.jsx)(x,{})]})}),f=(c(32),c(33),function(e){var t=e.goods,c=Object(s.useContext)(_),a=c.toggleFav,i=c.toggleCart,n=c.favList,l=c.cartList;return Object(m.jsx)("div",{className:"ProductsList","data-cy":"cardsContainer",children:Object(m.jsx)("ul",{className:"ProductsList__container",children:t.map((function(e){return Object(m.jsxs)("li",{className:"ProductsList__item",children:[Object(m.jsxs)(r.b,{to:"../".concat(e.type,"/").concat(e.id),children:[Object(m.jsx)("img",{className:"ProductsList__img",src:e.imageUrl,alt:e.name}),Object(m.jsx)("p",{className:"ProductsList__title",children:e.name}),Object(m.jsxs)("div",{className:"ProductsList__price",children:[Object(m.jsx)("h2",{className:"ProductsList__real",children:"".concat(e.price-e.price*e.discount/100)}),e.discount>0&&Object(m.jsx)("h2",{className:"ProductsList__withoutDisc",children:"$".concat(e.price)})]}),Object(m.jsxs)("div",{className:"ProductsList__info",children:[Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Screen"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:e.screen})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Capacity"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:e.capacity})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"RAM"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:e.ram})]})]})]}),Object(m.jsxs)("div",{className:"ProductsList__action",children:[l.includes(e)?Object(m.jsx)("a",{title:"favourites",href:"#favourites",className:"ProductsList__button-added",onClick:function(){return i(e)},children:"Added to cart"}):Object(m.jsx)("a",{title:"favourites",href:"#favourites",className:"ProductsList__button",onClick:function(){return i(e)},children:"Add to cart"}),n.includes(e)?Object(m.jsx)("a",{className:"ProductsList__button-hurt",title:"favourites","data-cy":"addToFavorite",href:"#favourites",onClick:function(){return a(e)},children:Object(m.jsx)("span",{className:"ProductsList__favourites-red"})}):Object(m.jsx)("a",{className:"ProductsList__button-hurt","data-cy":"addToFavorite",title:"favourites",href:"#favourites",onClick:function(){return a(e)},children:Object(m.jsx)("span",{className:"ProductsList__favourites"})})]})]},e.id)}))})})}),N=function(e){var t=e.title,c=Object(s.useContext)(_).goods,a=Object(s.useState)([]),i=Object(d.a)(a,2),n=i[0],r=i[1],l=Object(s.useState)(0),o=Object(d.a)(l,2),j=o[0],u=o[1],b=function(e){j+e>=n.length+4?u(0):j+e>=0&&n.length>4?u(j+e):n.length<=4?u(0):u(n.length-3+e)};return Object(s.useEffect)((function(){r(c.filter((function(e){return"Hot prices"===t?e.discount>0:"Brand new models"===t?e.age<=3:e.price>0})).sort((function(e,t){return t.price-e.price})).splice(j))}),[j]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsxs)("div",{className:"section__container",children:[Object(m.jsx)("h1",{className:"section__title",children:t}),Object(m.jsxs)("div",{className:"section__actions",children:[Object(m.jsx)("button",{type:"button",title:"top",className:"section__button",onClick:function(){return b(-1)},children:Object(m.jsx)("span",{className:"section__left"})}),Object(m.jsx)("button",{type:"button",title:"top",className:"section__button",onClick:function(){return b(1)},children:Object(m.jsx)("span",{className:"section__right"})})]})]}),Object(m.jsx)(f,{goods:n})]})})},v=(c(34),function(){var e=Object(s.useContext)(_).goods;return Object(m.jsx)("div",{className:"category","data-cy":"categoryLinksContainer",children:Object(m.jsxs)("div",{className:"category__container",children:[Object(m.jsx)("h1",{children:"Shop by category"}),Object(m.jsxs)("div",{className:"category__section",children:[Object(m.jsxs)(r.b,{to:"phone",className:"category__mobile",children:[Object(m.jsx)("div",{className:"category__img-1 img"}),Object(m.jsx)("h3",{children:"Mobile phones"}),Object(m.jsxs)("p",{className:"category__models",children:[e.filter((function(e){return"phone"===e.type})).length," ","models"]})]}),Object(m.jsxs)(r.b,{to:"tablet",className:"category__mobile",children:[Object(m.jsx)("div",{className:"category__img-2 img"}),Object(m.jsx)("h3",{children:"Tablets"}),Object(m.jsxs)("p",{className:"category__models",children:[e.filter((function(e){return"tablet"===e.type})).length," ","models"]})]}),Object(m.jsxs)(r.b,{to:"accessories",className:"category__mobile",children:[Object(m.jsx)("div",{className:"category__img-3 img"}),Object(m.jsx)("h3",{children:"Accessories"}),Object(m.jsxs)("p",{className:"category__models",children:[e.filter((function(e){return"accessory"===e.type})).length," ","models"]})]})]})]})})}),g=(c(35),function(e){var t=e.image,c=Object(s.useState)(0),a=Object(d.a)(c,2),i=a[0],n=a[1],r=function(e){i+e>=t.length?n(0):n(e+i<=0?t.length-1:i+e)};return setTimeout((function(){return r(1)}),5e3),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"slider-banner",children:[Object(m.jsx)("button",{type:"button",title:"top",className:"section__button slider-banner__button",onClick:function(){return r(-1)},children:Object(m.jsx)("span",{className:"section__left"})}),Object(m.jsx)("div",{className:"slider-banner__main",children:Object(m.jsx)("img",{className:"slider__main-photos",src:"../".concat(t[i]),alt:t[i]})}),Object(m.jsx)("button",{type:"button",title:"top",className:"section__button slider-banner__button",onClick:function(){return r(1)},children:Object(m.jsx)("span",{className:"section__right"})})]})})}),L=function(){var e=Object(s.useContext)(_).goods;return Object(m.jsx)("div",{className:"homePage",children:Object(m.jsx)("main",{className:"homePage__main-container",children:e.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{image:["../img/Slider/Banner.png","../img/Slider/3.webp","../img/Slider/banner3.webp","../img/Slider/banner4.webp"]}),Object(m.jsx)(N,{title:"Hot prices"}),Object(m.jsx)(v,{}),Object(m.jsx)(N,{title:"Brand new models"})]})})})},P=(c(36),function(e){var t=e.good,c=e.addNum,a=Object(s.useState)(1),i=Object(d.a)(a,2),n=i[0],r=i[1],l=n*(t.price-+t.price*+t.discount/100);return Object(s.useEffect)((function(){return c(t.id,n)}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"cartList__numbers",children:[Object(m.jsx)("button",{title:"fav",type:"button",className:"cartList__button-num center",onClick:function(){n>=1&&r(n-1)},children:"-"}),Object(m.jsx)("p",{className:"center",children:n}),Object(m.jsx)("button",{title:"fav",type:"button",className:"cartList__button-num center",onClick:function(){return r(n+1)},children:"+"})]}),Object(m.jsx)("div",{className:"cartList__price",children:Object(m.jsx)("h2",{className:"goodsList__real",children:"$".concat(l)})})]})}),y=function(){var e=Object(s.useContext)(_),t=e.toggleCart,c=e.cartList,a=localStorage.getItem("bucket"),i=Object(s.useState)(0),n=Object(d.a)(i,2),l=n[0],o=n[1],j=Object(s.useState)([]),u=Object(d.a)(j,2),b=u[0],h=u[1];return Object(s.useEffect)((function(){if(null===a){var e=[];c.map((function(t){return e.push({id:t.id,total:1,totalSum:t.price-+t.price*+t.discount/100}),t})),h(e),localStorage.setItem("bucket",JSON.stringify(e))}else h(JSON.parse(a))}),[c]),Object(m.jsxs)("div",{className:"cartList",children:[c.length>0&&Object(m.jsx)("ul",{className:"cartList__container",children:c.map((function(e){return Object(m.jsxs)("li",{className:"cartList__item",children:[Object(m.jsx)("div",{className:"cartList__delete",children:Object(m.jsx)("button",{title:"Delete item",type:"button","data-cy":"cartDeleteButton",className:"cartList__button-added",onClick:function(){t(e),h(b.filter((function(t){return t.id!==e.id}))),localStorage.setItem("bucket",JSON.stringify(b.filter((function(t){return t.id!==e.id}))))},children:"x"})}),Object(m.jsx)(r.b,{to:"".concat(e.id),children:Object(m.jsxs)("div",{className:"cartList__wrap-items",children:[Object(m.jsx)("img",{className:"cartList__img",src:"../../".concat(e.imageUrl),alt:e.name}),Object(m.jsx)("p",{className:"cartList__title",children:e.name})]})}),Object(m.jsx)(P,{good:e,addNum:function(e,t){return function(e,t){var c=b.map((function(c){return c.id===e&&(c.total=t),c}));h(c),localStorage.setItem("bucket",JSON.stringify(c))}(e,t)}})]},e.id)}))}),Object(m.jsxs)("div",{className:"cartList__total",children:[Object(m.jsxs)("div",{className:"cartList__price",children:[Object(m.jsx)("h2",{className:"cartList__real",children:"$".concat(l)}),Object(m.jsx)("p",{className:"goodsList__info-title","data-cy":"productQauntity",children:"Total for ".concat(c.length," items")})]}),Object(m.jsx)("button",{title:"fav",type:"button",className:"cartList__button",onClick:function(){return function(){var e=0;b.map((function(t){return e+=t.total*t.totalSum,t})),o(e)}()},children:"Checkout"})]})]})},k=(c(37),function(){var e=Object(u.p)().product,t=Object(s.useContext)(_),c=t.goods,a=t.favList,i=t.cartList,n=t.filterWord,l=Object(s.useState)("price"),o=Object(d.a)(l,2),j=o[0],b=o[1],h=Object(s.useState)(8),O=Object(d.a)(h,2),x=O[0],p=O[1],N=Object(s.useState)([]),v=Object(d.a)(N,2),g=v[0],L=v[1],P=g.length/x;return Object(s.useEffect)((function(){var t=c.filter((function(t){return t.type===e})).sort((function(e,t){return t.price-e.price}));n.length>0&&(t=t.filter((function(e){return e.name.includes(n)||e.name.toLowerCase().includes(n)})));var s=t.slice(0*P,x);return L(s)}),[e,x,j,n]),Object(m.jsxs)("div",{className:"catalog",children:[Object(m.jsxs)("div",{className:"catalog__header",children:[Object(m.jsx)(r.b,{to:"/",className:"catalog__home-button",title:"home icon",children:Object(m.jsx)("span",{className:"catalog__home-icon"})}),Object(m.jsx)("div",{className:"catalog__header-container",children:Object(m.jsx)("span",{className:"catalog__header-arrow"})}),Object(m.jsx)("p",{className:"catalog__title",children:e})]}),Object(m.jsx)("h1",{children:"phone"===e?"Mobile phones":"tablet"===e?"Tablets":"accessories"===e?"Accessories":"favourites"===e?"Favorites":"cart"===e?"Cart":"No name"}),Object(m.jsx)("p",{className:"catalog__quantity",children:"".concat(g.length," models")}),g.length>0&&"favourites"!==e||g.length>0&&"cart"!==e?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"catalog__select-container",children:[Object(m.jsxs)("div",{className:"catalog__select1-container",children:[Object(m.jsx)("p",{children:"Sort by"}),Object(m.jsxs)("select",{title:"sort",className:"select__select-group",value:j,onChange:function(e){return b(e.target.value)},children:[Object(m.jsx)("option",{value:"age",children:"Newest"}),Object(m.jsx)("option",{value:"discount",children:"Hot prices"}),Object(m.jsx)("option",{value:"price",children:"Chipest"})]})]}),Object(m.jsxs)("div",{className:"catalog__select1-container",children:[Object(m.jsx)("p",{children:"Items on page"}),Object(m.jsxs)("select",{title:"sort",className:"select__select-group",value:x,onChange:function(e){return p(+e.target.value)},children:[Object(m.jsx)("option",{value:"8",children:"8"}),Object(m.jsx)("option",{value:"16",children:"16"}),Object(m.jsx)("option",{value:"32",children:"32"})]})]})]}),Object(m.jsx)(f,{goods:g})]}):Object(m.jsx)(m.Fragment,{children:"cart"===e&&i.length>0?Object(m.jsx)(y,{}):"favourites"===e&&a.length>0?Object(m.jsx)(f,{goods:a}):Object(m.jsx)("h1",{children:"Sorry, we don`t have a such goods for you!"})})]})}),S=function(e){return fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))},C=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("products.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S("products/".concat(t,".json")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=(c(38),function(e){var t=e.image,c=Object(s.useState)(t[0]),a=Object(d.a)(c,2),i=a[0],n=a[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"slider",children:[Object(m.jsx)("div",{className:"slider__small-photo",children:t.map((function(e){return Object(m.jsx)("button",{type:"button",className:h()("slider__small-wrap",{activePhoto:i===e}),onClick:function(){return n(e)},children:Object(m.jsx)("img",{src:"../".concat(e),className:"slider__small-img",alt:e})},e)}))}),Object(m.jsx)("div",{className:"slider__main-photo",children:Object(m.jsx)("img",{className:"slider__main-img",src:"../".concat(i),alt:i})})]})})}),A=(c(39),function(){var e=Object(s.useContext)(_),t=e.goods,c=e.toggleFav,a=e.toggleCart,i=e.favList,n=e.cartList,l=Object(u.p)().id,b=Object(s.useState)(),h=Object(d.a)(b,2),O=h[0],x=h[1],p=Object(s.useState)(),f=Object(d.a)(p,2),v=f[0],g=f[1],L=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(l);case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){L(),x(t.find((function(e){return e.id===l})))}),[]),Object(m.jsx)("div",{className:"catalog",children:v&&O&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"catalog__header",children:[Object(m.jsx)(r.b,{to:"home",className:"catalog__home-button",title:"home icon",children:Object(m.jsx)("span",{className:"catalog__home-icon"})}),Object(m.jsx)("div",{className:"catalog__header-container",children:Object(m.jsx)("span",{className:"catalog__header-arrow"})}),Object(m.jsx)("p",{className:"catalog__title",children:v.name})]}),Object(m.jsxs)("div",{className:"catalog__back",children:[Object(m.jsx)(r.b,{to:"/",className:"catalog__home-button",title:"home icon",children:Object(m.jsx)("span",{className:"catalog__left"})}),Object(m.jsx)("div",{className:"catalog__header-container",children:Object(m.jsx)("span",{className:"catalog__header-arrow"})}),Object(m.jsx)("p",{className:"catalog__title",children:"Back"})]}),Object(m.jsx)("h1",{children:O.name}),Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"item__description",children:Object(m.jsx)(F,{image:v.images})}),Object(m.jsxs)("div",{className:"item__description",children:[Object(m.jsx)("h2",{className:"item__title",children:"Description"}),Object(m.jsxs)("div",{className:"item__ProductsList",children:[Object(m.jsxs)("p",{className:"ProductsList__info-title",children:["ID:"," ",v.id]}),Object(m.jsx)("div",{className:"ProductsList__info-description",children:Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Available colors"})}),Object(m.jsxs)("div",{className:"item__container-checkbox",children:[Object(m.jsx)("div",{className:"item__checkbox",children:Object(m.jsx)("div",{className:"item__1"})}),Object(m.jsx)("div",{className:"item__checkbox",children:Object(m.jsx)("div",{className:"item__2"})}),Object(m.jsx)("div",{className:"item__checkbox",children:Object(m.jsx)("div",{className:"item__3"})}),Object(m.jsx)("div",{className:"item__checkbox",children:Object(m.jsx)("div",{className:"item__4"})})]}),Object(m.jsx)("div",{className:"item__description",children:Object(m.jsxs)("div",{className:"item__ProductsList",children:[Object(m.jsxs)("div",{className:"ProductsList__price",children:[Object(m.jsx)("h2",{className:"ProductsList__real",children:"".concat(O.price-O.price*O.discount/100)}),O.discount>0&&Object(m.jsx)("h2",{className:"ProductsList__withoutDisc",children:"$".concat(O.price)})]}),Object(m.jsxs)("div",{className:"ProductsList__info",children:[Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Screen"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:O.screen})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Capacity"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:O.capacity})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"RAM"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:O.ram})]})]}),Object(m.jsxs)("div",{className:"ProductsList__action",children:[n.includes(O)?Object(m.jsx)("button",{className:"ProductsList__button-added",type:"button",onClick:function(){return a(O)},children:"Added to cart"}):Object(m.jsx)("button",{className:"ProductsList__button",type:"button",onClick:function(){return a(O)},children:"Add to cart"}),i.includes(O)?Object(m.jsx)("a",{className:"ProductsList__button-hurt",title:"favourites",href:"#favourites",onClick:function(){return c(O)},children:Object(m.jsx)("span",{className:"ProductsList__favourites-red"})}):Object(m.jsx)("a",{className:"ProductsList__button-hurt",title:"favourites",href:"#favourites",onClick:function(){return c(O)},children:Object(m.jsx)("span",{className:"ProductsList__favourites"})})]})]})})]})]}),Object(m.jsxs)("div",{className:"item__description",children:[Object(m.jsx)("h2",{className:"item__title",children:"About"}),Object(m.jsx)("p",{className:"item__text",children:O.snippet}),Object(m.jsx)("p",{className:"item__text",children:v.description})]}),Object(m.jsxs)("div",{className:"item__description",children:[Object(m.jsx)("h2",{className:"item__title",children:"Tech specs"}),Object(m.jsxs)("div",{className:"ProductsList__info",children:[Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Screen"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:O.screen})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Resolution"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:v.display.screenResolution})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Processor"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:v.hardware.cpu})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"RAM"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:O.ram})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Built in memory"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:v.storage.flash})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Camera"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:v.camera.primary})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Zoom"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:v.camera.features[0]})]}),Object(m.jsxs)("div",{className:"ProductsList__info-description",children:[Object(m.jsx)("p",{className:"ProductsList__info-title",children:"Cell"}),Object(m.jsx)("p",{className:"ProductsList__info-value",children:v.connectivity.cell})]})]})]})]})}),Object(m.jsx)(N,{title:"You may also like"})]})})}),I=(c(40),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([]),n=Object(d.a)(i,2),r=n[0],l=n[1],b=Object(s.useState)([]),h=Object(d.a)(b,2),O=h[0],x=h[1],f=Object(s.useState)(""),N=Object(d.a)(f,2),v=N[0],g=N[1],P=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){P(),function(){var e=localStorage.getItem("cart"),t=localStorage.getItem("favorites");null!==e&&l(JSON.parse(e)),null!==t&&x(JSON.parse(t))}()}),[]),Object(m.jsx)(_.Provider,{value:{goods:c,favList:O,cartList:r,toggleFav:function(e){O.includes(e)?x(O.filter((function(t){return t.id!==e.id}))):O.push(e),localStorage.setItem("favorites",JSON.stringify(O))},toggleCart:function(e){r.includes(e)?l(r.filter((function(t){return t.id!==e.id}))):r.push(e),localStorage.setItem("cart",JSON.stringify(r))},filterWord:v,setFilterWord:g},children:Object(m.jsx)("div",{className:"Site",children:Object(m.jsxs)(u.e,{children:[Object(m.jsxs)(u.c,{path:"/",element:Object(m.jsx)(p,{}),children:[Object(m.jsx)(u.c,{index:!0,element:Object(m.jsx)(L,{})}),Object(m.jsx)(u.c,{path:":product",element:Object(m.jsx)(k,{})}),Object(m.jsx)(u.c,{path:":id",element:Object(m.jsx)(A,{})}),Object(m.jsx)(u.c,{path:"/:product/:id",element:Object(m.jsx)(A,{})})]}),Object(m.jsx)(u.c,{path:"/home",element:Object(m.jsx)(u.a,{to:"/"})}),Object(m.jsx)(u.c,{path:"*",element:Object(m.jsx)("p",{children:"Page not found"})})]})})})});n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(r.a,{children:Object(m.jsx)(I,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b1145926.chunk.js.map