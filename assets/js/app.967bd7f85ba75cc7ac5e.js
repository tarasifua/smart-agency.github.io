!function(t){function e(e){for(var n,a,l=e[0],r=e[1],c=e[2],d=0,u=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(p&&p(e);u.length;)u.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,l=1;l<o.length;l++){var r=o[l];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={0:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=r;s.push([3,1]),o()}([,,function(t,e,o){"use strict";e.a=[{name:"Smart Agency",desc:"Adaptive, Bootstrap",link:"/smagency/index.html",pic:"/smagency/sshot.png"},{name:"Test Site",desc:"Bootstrap, First try...",link:"/agencylp/index.html",pic:"/agencylp/pic.png"},{name:"-blank-",desc:"Some text description",link:"https://google.com",pic:"https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113822398-stock-illustration-initial-letter-kh-silver-gold.jpg"},{name:"-blank-",desc:"Some text description",link:"https://google.com",pic:"https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113822398-stock-illustration-initial-letter-kh-silver-gold.jpg"},{name:"-blank-",desc:"Some text description",link:"https://google.com",pic:"https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113822398-stock-illustration-initial-letter-kh-silver-gold.jpg"},{name:"-blank-",desc:"Some text description",link:"https://google.com",pic:"https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113822398-stock-illustration-initial-letter-kh-silver-gold.jpg"},{name:"-blank-",desc:"Some text description",link:"https://google.com",pic:"https://st2.depositphotos.com/5943796/11382/v/950/depositphotos_113822398-stock-illustration-initial-letter-kh-silver-gold.jpg"}]},function(t,e,o){"use strict";o.r(e);o(4),o(5),o(8),o(10)},function(t,e,o){"use strict";(function(t){var e=o(2);!function(){var o=!0,n=!1,i=void 0;try{for(var s,a=function(){var e=s.value,o=document.createElement("li"),n=document.createElement("div");t(n).on("click",function(){window.open("".concat(e.link),"_blank")}),t('<img src="'.concat(e.pic,'" alt=" " />')).appendTo(n),t("<h1>".concat(e.name,"</h1>")).appendTo(n),t("<p>".concat(e.desc,"</p>")).appendTo(n),t(n).appendTo(t(o)),t(o).appendTo(t("#categories"))},l=e.a[Symbol.iterator]();!(o=(s=l.next()).done);o=!0)a()}catch(t){n=!0,i=t}finally{try{o||null==l.return||l.return()}finally{if(n)throw i}}}(),t(".outer").on("mouseover",function(){t(this).addClass("animated pulse")}),t(".outer").on("mouseout",function(){t(this).removeClass("animated pulse")}),t(document).scroll(function(){Math.abs(t("#dev-id").offset().top-t(window).scrollTop())<t("#dev-id").height()/6?(t(".nav-item").removeClass("active"),t("#about").addClass("active")):Math.abs(t(".wrapper-hex").offset().top-t(window).scrollTop())<t(".wrapper-hex").height()/2?(t(".nav-item").removeClass("active"),t("#portfolio").addClass("active")):Math.abs(t("#get-in-touch").offset().top-t(window).scrollTop())<t("#get-in-touch").height()/2&&(t(".nav-item").removeClass("active"),t("#getint").addClass("active"))}),t(".nav-item").on("click",function(e){t(".nav-item").removeClass("active"),console.log(this),"Portfolio"===e.target.innerHTML?(t(this).addClass("active"),t("html, body").animate({scrollTop:t(".wrapper-hex").offset().top-40},1e3)):"About"===e.target.innerHTML?(t(this).addClass("active"),t("html, body").animate({scrollTop:t("#dev-id").offset().top-40},1e3)):"Get in touch"===e.target.innerHTML&&(t(this).addClass("active"),t("html, body").animate({scrollTop:t("#get-in-touch").offset().top-40},1e3))}),t("#blog").on("click",function(){t(this).addClass("active"),t("#portfolio").addClass("active"),t("#exampleModalCenter").modal("show")}),t("#exampleModalCenter").on("hide.bs.modal",function(){t("#blog").removeClass("active")})}).call(this,o(0))},,,,function(t,e,o){var n=o(9);"string"==typeof n&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1};o(1)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,o){}]);