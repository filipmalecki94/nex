!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=129)}({0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"h",(function(){return v})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return y}));var r=n(4),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d="pgc_sgb_",u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"indexByPosition",value:function(e,t,n){var r=parseInt(t/e.width),a=Math.floor(n.y/e.height),o=Math.floor(n.x/e.width);return Math.max(0,a*r+o)}},{key:"moduleSettings",value:function(e){return window[e]&&window[e].settings?window[e].settings:null}},{key:"updateProperties",value:function(e,t){for(var n=Object.keys(e),r=0;r<n.length;r+=1){var a=n[r];Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}}},{key:"copyProperties",value:function(e,t){return t=Object.assign(t,e)}},{key:"checkScrip",value:function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1){var r=t[n];if(r.src===e)return n=t.length,r}return!1}},{key:"loadExtScripts",value:function(t,n,r){var a=0;function o(){(a+=1)===t.length&&n&&r&&n.dispatchGMEvent(e.GMEvent(r))}function i(){e.trace(this.src,"error")}for(var l=0;l<t.length;l+=1){var c=t[l],s=c.src,d=c.id,u=e.checkScrip(s);u||((u=document.createElement("script")).src=s,u.id="".concat(d,"_js"),u.async=!0,u.onload=o,u.onerror=i,document.body.appendChild(u))}}},{key:"getViewPortsBySelector",value:function(e){return document.querySelectorAll('div[data-gallery-id="'.concat(e,'"]'))}},{key:"requestAttachments",value:function(t,n,r,o){var i=new URL(t);i.searchParams.set("_fs_blog_admin","true");var l=new a.a;l.open("POST",i,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),l.onreadystatechange=function(){if(4===l.readyState){var e={};200!==l.status?e.error=l.statusText:e.data=l.responseText,r&&(e.params=r),o&&"function"==typeof o&&o(e)}},l.onerror=function(){e.trace("An error occurred while transferring the file.")};try{var s,d=[];for(s in n)if(Object.prototype.hasOwnProperty.call(n,s))if("object"===c(n[s])){for(var u in n[s])if(Object.prototype.hasOwnProperty.call(n[s],u))if(Array.isArray(n[s][u]))for(var m=n[s][u],p=0;p<m.length;p+=1)d.push("".concat(encodeURIComponent("".concat(s,"[").concat(u,"][]")),"=").concat(encodeURIComponent(m[p])));else d.push("".concat(encodeURIComponent("".concat(s,"[").concat(u,"]")),"=").concat(encodeURIComponent(n[s][u])))}else d.push("".concat(encodeURIComponent(s),"=").concat(encodeURIComponent(n[s])));l.send(d.join("&"))}catch(t){e.trace(t)}}},{key:"request2",value:function(t,n,r,o,i){var l=new URL(t),c=new a.a;c.open("POST",l,!0),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),c.onreadystatechange=function(){if(4===c.readyState){var e={};200!==c.status?e.error=c.statusText:e.data=c.responseText,o&&(e.params=o),i&&"function"==typeof i&&i(e)}},c.onerror=function(){e.trace("An error occurred while transferring the file.")};try{c.send("action=pgc_sgb_action_wizard&nonce=".concat(n,"&props=").concat(r))}catch(t){e.trace(t)}}},{key:"validURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*(\\?[;&a-z\\d%@_.,~+&:=-]*)?(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"request",value:function(t,n,r,o,i,l){var c=new URL(t),s=new a.a;s.open("POST",c,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),s.onreadystatechange=function(){if(4===s.readyState){var e={};200!==s.status?e.error=s.statusText:e.data=s.responseText,i&&(e.params=i),l&&"function"==typeof l&&l(e)}},s.onerror=function(){e.trace("An error occurred while transferring the file.")};try{s.send("action=".concat(r,"&nonce=").concat(n,"&props=").concat(o))}catch(t){e.trace(t)}}},{key:"getMediaModal",value:function(e,t){if(window.wp&&window.wp.media){var n=window.wp,r={title:"Select Files",multiple:"add",type:void 0,exclusionList:[]};t&&(r=Object.assign(r,t));var a=n.media.controller.Library.prototype.defaults,o={order:"DESC",orderby:"id",post__not_in:r.exclusionList};r.type&&(o.type=r.type);var i=n.media.controller.Library.extend({defaults:Object.assign(a,{query:!0,id:"library",title:r.title,multiple:r.multiple,priority:20,library:new n.media.query(o)})});return n.media.frames[e]?r.exclusionList&&n.media.frames[e].once("open",(function(){n.media.frames[e].setExclusion(r.exclusionList)})):(n.media.frames[e]=n.media({state:"library",states:[new i]}),n.media.frames[e].updateCollection=function(){var e=this.content.get();if(e&&e.collection){var t=e.collection;t.toArray().forEach((function(e){return e.trigger("destroy",e)})),t.mirroring._hasMore=!0,t.more()}},n.media.frames[e].setExclusion=function(t){n.media.frames[e].content&&n.media.frames[e].content.get().collection&&n.media.frames[e].content.get().collection.props.set({post__not_in:t})},n.media.frames[e].selectedItems=function(){return n.media.frames[e].state()?n.media.frames[e].state().get("selection").models.map((function(e){return e.attributes})):[]},n.media.frames[e].on("open",(function(){var t,r=this.state(),a=r.get("library"),o=r.get("selection");function i(){o&&o.models&&o.some((function(e){return!0===e.get("uploading")}))?(clearTimeout(t),t=setTimeout(i,100)):a.add(o.models)}n.media.frames[e].updateCollection(),n.media.frames[e].on("library:selection:add",(function(){i()}))}),n.media.frames[e])),n.media.frames[e].off("select"),n.media.frames[e]}}},{key:"getAttachmentDetailsModal",value:function(e,t){var n=window.wp;if(n&&n.media)return n.media.frames.pgc_simply_detail?n.media.frames.pgc_simply_detail.content.get("collection").controller.library.reset(e.models):(n.media.frames.pgc_simply_detail=n.media({frame:"edit-attachments",controller:{gridRouter:new n.media.view.MediaFrame.Manage.Router},library:e,model:new n.media.model.Attachment}),n.media.frames.pgc_simply_detail.resetRoute=function(){}),n.media.frames.pgc_simply_detail.state().frame.trigger("refresh",e.findWhere({id:parseInt(t)})),n.media.frames.pgc_simply_detail}},{key:"getVimeoData",value:function(t,n,r,o){var i=new URL("https://api.vimeo.com/".concat(t,"/").concat(n,"/videos"));for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&i.searchParams.append(l,r[l]);var c=new a.a;c.open("GET",i,!0),c.setRequestHeader("Content-Type","application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4"),c.onreadystatechange=function(){if(4===c.readyState){var e={};200!==c.status?(e.error=c.statusText,o({error:c.status})):e.data=c.responseText,r&&(e.params=r),o&&"function"==typeof o&&o(e)}},c.onerror=function(t){e.trace("transfer Failed"),e.trace(t),o({error:"Transfer Failed"})};try{c.send()}catch(t){e.trace(t)}}},{key:"getYouTubeData",value:function(t,n,r){var o=new URL("https://www.googleapis.com/youtube/v3/".concat(t));for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&o.searchParams.append(i,n[i]);var l=new a.a;l.open("GET",o,!0),l.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),l.onreadystatechange=function(){if(4===l.readyState){var e={};200!==l.status?(e.error=l.statusText,r({error:l.status})):e.data=l.responseText,n&&(e.params=n),r&&"function"==typeof r&&r(e)}},l.onerror=function(t){e.trace("transfer Failed"),e.trace(t)};try{l.send()}catch(t){e.trace(t)}}},{key:"fetchAttachmentsMedia",value:function(e,t){var n=window.wp;if(n||n.media){var r=[];e&&(r=e.map((function(e){return n.media.attachment(e)}))),function e(n){n.more().then((function(){n.hasMore()?e(n):t(r)}))}(n.media.query({post__in:e,orderby:"post__in"}))}else this.trace("WP MEDIA Undefined!")}},{key:"Item",value:function(e){for(var t={model:["id","title","url","link","alt","description","caption","mime","type","image","thumb","width","height","fileLength","sizes","meta"]},n=0;n<t.model.length;n+=1){var r=t.model[n];Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}if(t.sizes){var a={};t.sizes.thumbnail&&(a.thumbnail=t.sizes.thumbnail),t.sizes.medium&&(a.medium=t.sizes.medium),t.sizes.large&&(a.large=t.sizes.large),t.sizes.full&&(a.full=t.sizes.full),t.sizes=a}if(delete t.model,!(Object.keys(t).length<=1))return t}},{key:"ICONS",get:function(){return{}}},{key:"isTouchDevice",get:function(){return window.wp&&wp.media&&wp.media.isTouchDevice?wp.media.isTouchDevice:window.navigator.maxTouchPoints||"ontouchstart"in window}},{key:"browser",get:function(){var e=window.navigator.userAgent,t=e.indexOf("Chrome")>-1;if(e.indexOf("MSIE")>-1)return"explorer";if(e.indexOf("Firefox")>-1)return"firefox";var n=e.indexOf("Safari")>-1,r=e.toLowerCase().indexOf("op")>-1;return r&&!t?"opera":t&&!r||t&&n?"chrome":n&&!t?"safari":void 0}},{key:"passiveListener",get:function(){var e=!1;try{var t={get:function(){e=!0}},n=Object.defineProperty({},"passive",t);window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}catch(e){}return!!e&&{passive:!1,capture:!1}}},{key:"pageXOffset",get:function(){return void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft}},{key:"pageYOffset",get:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},{key:"trace",get:function(){return console.log}}],(n=null)&&s(t.prototype,n),r&&s(t,r),e}();function m(e){var t={};if(t.view=document.createElement("div"),t.view.className="sgb-item",t.view.dataset.id=e.id,"image"!==e.type&&"audio"!==e.type||(t.itemImg=new Image,t.itemImg.alt=e.alt,t.itemImg.width=e.width?e.width:300,t.itemImg.height=e.height?e.width:300,t.itemImg.setAttribute("loading","lazy"),t.itemImg.src="audio"===e.type?"".concat(window.PGC_SGB_ADMIN.assets,"holder-mp3.png"):e.url,t.view.appendChild(t.itemImg)),"audio"===e.type){var n=document.createElement("audio");n.setAttribute("preload","metadata"),n.setAttribute("controlsList","nodownload"),n.setAttribute("controls",""),n.src=e.url,t.view.appendChild(n)}else if("video"===e.type){var r=document.createElement("video");r.setAttribute("preload","auto"),r.setAttribute("controlsList","nodownload"),r.setAttribute("controls",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("playsinline",""),r.src=e.url,t.view.appendChild(r)}return t}function p(e){var t=document.createElement("div");if(t.className="sgb-gallery",e.length>0)for(var n=0;n<e.length;n+=1){var r=m(e[n]);t.appendChild(r.view)}return t.outerHTML}function f(e){var t={};if(t.view=document.createElement("div"),t.view.className="sgb-item",t.view.dataset.id=e.id,"image"!==e.type&&"audio"!==e.type||(t.itemImg=new Image,t.itemImg.alt=e.alt,t.itemImg.width=e.width?e.width:300,t.itemImg.height=e.height?e.width:300,t.itemImg.setAttribute("loading","auto"),t.itemImg.setAttribute("data-lazy-src",""),t.itemImg.className="skip-lazy",t.itemImg.classList.add("no-lazyload"),t.itemImg.classList.add("no-lazyload"),t.itemImg.classList.add("noLazy"),t.itemImg.src="audio"===e.type?"".concat(window.PGC_SGB_ADMIN.assets,"holder-mp3.png"):e.url,t.view.appendChild(t.itemImg)),"audio"===e.type){var n=document.createElement("audio");n.setAttribute("preload","metadata"),n.setAttribute("controlsList","nodownload"),n.setAttribute("controls",""),n.src=e.url,t.view.appendChild(n)}else if("video"===e.type){var r=document.createElement("video");r.setAttribute("preload","auto"),r.setAttribute("controlsList","nodownload"),r.setAttribute("controls",""),r.setAttribute("webkit-playsinline",""),r.setAttribute("playsinline",""),r.src=e.url,t.view.appendChild(r)}return t}function y(e){var t=document.createElement("div");if(t.className="sgb-gallery",e.length>0)for(var n=0;n<e.length;n+=1){var r=f(e[n]);t.appendChild(r.view)}return t.outerHTML}function h(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n].default);return t}function w(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]?n[r]=t[r]:n[r]=e[r].default);return JSON.stringify(n)}function g(e){var t=i({},e);return delete t.galleryData,delete t.selections,delete t.startPosIndex,delete t.loading,delete t.needUpdate,delete t.ordrerDirection,delete t.gutIsSelected,delete t.subLoading,delete t.importModalIsOpen,delete t.attachmentsIDsString,delete t.attachmentsIDsVerified,delete t.loadingAttachments,JSON.stringify(t)}function v(e){var t={},n=i({},this.props.attributes);for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);this.props.setAttributes(t),delete(n=i(i({},n),t)).galleryData,delete n.images,delete n.itemsMetaDataCollection,delete n.selections,delete n.startPosIndex,delete n.loading,delete n.needUpdate,delete n.ordrerDirection,delete n.gutIsSelected,delete n.subLoading,delete n.importModalIsOpen,delete n.attachmentsIDsString,delete n.attachmentsIDsVerified,delete n.loadingAttachments,delete n.galleryTagsListSrc,delete n.isPremium,delete n.dgbModalIsOpen,delete n.bulkSelect,delete n.selectedItems,delete n.selectedLast,this.props.setAttributes({galleryData:JSON.stringify(n)})}},122:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);n(122);var r=n(0),a=n(5);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=wp.element.Component,p=wp.components.Button,f="".concat("pgc_sgb_dashboard_widget","-"),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,e);var t,n,r,a=s(o);function o(){return i(this,o),a.apply(this,arguments)}return t=o,(n=[{key:"render",value:function(){var __=wp.i18n.__,e=this.props,t=e.thumbURL,n=e.title,r=e.ID,a=e.edit,o=e.copy,i=e.index,l=a(r);return wp.element.createElement("div",{className:"".concat(f,"item-view")},wp.element.createElement("div",{className:"".concat(f,"preview-wrapper"),onKeyPress:null,title:__("Edit Gallery","simply-gallery-block"),role:"button",tabIndex:i,onClick:function(){window.open(l,"_self")}},wp.element.createElement("div",{className:"".concat(f,"preview")},wp.element.createElement("div",{className:"".concat(f,"thumbnail")},wp.element.createElement("img",{src:t,alt:"thumnail"})),wp.element.createElement("div",{className:"".concat(f,"thumb-title")},n))),wp.element.createElement(p,{className:"".concat(f,"copy-button"),title:__("Copy Shortcode to Clipboard","simply-gallery-block"),onClick:function(e){o(r,e.target)}},wp.element.createElement("span",{className:"dashicons dashicons-clipboard"})))}}])&&l(t.prototype,n),r&&l(t,r),o}(m);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=wp.element,S=_.Component,k=_.Fragment,P=wp.components,L=P.Button,j=P.Spinner,I="pgc_sgb_dashboard_widget",R="".concat(I,"-"),T=r.a.trace,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,n,o,i=b(l);function l(){var e;return w(this,l),(e=i.apply(this,arguments)).getGalleriesList=e.getGalleriesList.bind(O(e)),e.chechViewState=e.chechViewState.bind(O(e)),e.postsDataReceivedHandler=e.postsDataReceivedHandler.bind(O(e)),e.state={loading:!1,itemsList:void 0},e.closed=!0,e}return t=l,(n=[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById(I);t&&(this.closed=t.classList.contains("closed"),t.addEventListener("click",(function(){e.chechViewState()}),!1),this.closed||this.getGalleriesList())}},{key:"chechViewState",value:function(){var e=document.getElementById(I);this.closed!==e.classList.contains("closed")&&(this.closed=e.classList.contains("closed"),this.closed?this.setState({itemsList:void 0}):this.getGalleriesList())}},{key:"postsDataReceivedHandler",value:function(e){if(e.data)try{var t=JSON.parse(e.data);if(t.message&&Object.prototype.hasOwnProperty.call(t.message,"data")&&Array.isArray(t.message.data))return void this.setState({loading:!1,itemsList:t.message.data})}catch(e){T(e)}this.setState({loading:!1})}},{key:"getGalleriesList",value:function(){var e=window.PGC_SGB_DASHBOARD;if(e){var t=JSON.stringify({type:"get_posts_by_type",postType:e.postType});this.setState({loading:!0,itemsList:void 0}),r.a.request2(e.ajaxurl,e.nonce,t,null,this.postsDataReceivedHandler)}}},{key:"editURL",value:function(e){var t=window.PGC_SGB_DASHBOARD,n=new URL("".concat(t.adminurl,"post.php"));return n.searchParams.set("post",e),n.searchParams.set("action","edit"),n}},{key:"copyShCode",value:function(e,t){var n=t.parentNode,r=window.PGC_SGB_DASHBOARD,a=document.getElementsByTagName("BODY")[0],o=document.createElement("div");o.style.position="fixed",o.style.opacity=0,o.innerText="[".concat(r.postType,' id="').concat(e,'"]'),a.appendChild(o),window.getSelection().removeAllRanges();var i=document.createRange();i.selectNodeContents(o),window.getSelection().addRange(i);try{document.execCommand("copy")&&(n&&n.classList.add("pgc-copied"),setTimeout((function(){n&&n.classList.remove("pgc-copied")}),1e3),window.getSelection().removeAllRanges())}catch(e){T.log(e)}a.removeChild(o)}},{key:"render",value:function(){var e=this,__=wp.i18n.__,t=window.PGC_SGB_DASHBOARD,n=t.isPremium,r=this.state,o=r.loading,i=r.itemsList,l=new URL("".concat(t.adminurl,"post-new.php"));l.searchParams.set("post_type",t.postType);var c=new URL("".concat(t.adminurl,"edit.php"));return c.searchParams.set("post_type",t.postType),c.searchParams.set("page","simply-gallery-block-pricing"),wp.element.createElement(k,null,wp.element.createElement("div",{className:"".concat(R,"header")},a.f,wp.element.createElement("span",null,"Simply ".concat(t.version)),wp.element.createElement(L,{isSecondary:!0,href:l.toString(),className:"".concat(R,"button")},"+ ".concat(__("Create New Gallery","simply-gallery-block")))),wp.element.createElement("div",{className:"".concat(R,"content")},o&&wp.element.createElement(j,null),!o&&i&&wp.element.createElement("div",{className:"".concat(R,"items-list")},i.map((function(t,n){return wp.element.createElement(y,{index:n,ID:t.ID,key:t.ID||t.title,thumbURL:t.thumbURL,title:t.title,edit:e.editURL,copy:e.copyShCode})}))),!o&&(!i||0===i.length)&&wp.element.createElement("div",null,__("You have no published galleries.","simply-gallery-block"))),wp.element.createElement("div",{className:"".concat(R,"footer")},wp.element.createElement("ul",null,wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/faq/",rel:"noreferrer",target:"_blank"},"FAQ"," ",wp.element.createElement("span",{className:"dashicons dashicons-external"}))),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/premium-gallery-blocks/",rel:"noreferrer",target:"_blank"},"Premium Blocks DEMO"," ",wp.element.createElement("span",{className:"dashicons dashicons-external"}))),(!n||"false"===n)&&wp.element.createElement("li",{style:{fontWeight:700}},wp.element.createElement("a",{href:c,rel:"noreferrer",style:{color:"#4caf50"}},"Go Pro")))))}}])&&g(t.prototype,n),o&&g(t,o),l}(S),C=wp.element.render;document.getElementById("simply-gallery-block-dashboard-widget")&&C(wp.element.createElement(A,null),document.getElementById("simply-gallery-block-dashboard-widget"))},4:function(e,t){e.exports=XMLHttpRequest},5:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return s}));var r=wp.element.createElement("svg",{className:"simply-icon",width:"22px",height:"22px",viewBox:"0 0 298.73 298.73",fill:"#0085ba",fillRule:"nonzero"},wp.element.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M264.959,9.35H33.787C15.153,9.35,0,24.498,0,43.154v212.461c0,18.634,15.153,33.766,33.787,33.766   h231.171c18.634,0,33.771-15.132,33.771-33.766V43.154C298.73,24.498,283.593,9.35,264.959,9.35z M193.174,59.623   c18.02,0,32.634,14.615,32.634,32.634s-14.615,32.634-32.634,32.634c-18.025,0-32.634-14.615-32.634-32.634   S175.149,59.623,193.174,59.623z M254.363,258.149H149.362H49.039c-9.013,0-13.027-6.521-8.964-14.566l56.006-110.93   c4.058-8.044,11.792-8.762,17.269-1.605l56.316,73.596c5.477,7.158,15.05,7.767,21.386,1.354l13.777-13.951   c6.331-6.413,15.659-5.619,20.826,1.762l35.675,50.959C266.487,252.16,263.376,258.149,254.363,258.149z"}))),a=wp.element.createElement("svg",{enableBackground:"new 0 0 48 48",height:"24px",version:"1.1",viewBox:"0 0 48 48",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("path",{id:"svg_4",d:"m0.062,21.972113l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#0085ba"}),wp.element.createElement("path",{id:"svg_5",d:"m26.027885,21.972113l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#01273a"}),wp.element.createElement("path",{id:"svg_6",d:"m26.027885,47.937997l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#0085ba"}),wp.element.createElement("path",{id:"svg_7",d:"m0.005183,47.937997l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#01273a"}))),o=wp.element.createElement("svg",{enableBackground:"new 0 0 48 48",height:"24px",version:"1.1",viewBox:"0 0 48 48",width:"24px"},wp.element.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("rect",{x:"4.204546",transform:"rotate(90 15,11) ",y:"-4.180727",width:"21.07",height:"29.498",fill:"#0085ba"}),wp.element.createElement("rect",{transform:"rotate(-90 33,37) ",y:"22.682727",x:"22.725454",width:"21.07",height:"29.498",fill:"#0085ba"}),wp.element.createElement("rect",{transform:"rotate(90 41,10) ",y:"3.717",x:"30.623183",width:"21.07",height:"13.695",fill:"#01273a"}),wp.element.createElement("rect",{x:"-3.693182",transform:"rotate(90 7,37) ",y:"30.588",width:"21.07",height:"13.695",fill:"#01273a"}))),i=wp.element.createElement("svg",{enableBackground:"new 0 0 48 48",height:"24px",version:"1.1",viewBox:"0 0 48 48",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#0085ba",height:"29.498",width:"21.07",y:"-0.033"}),wp.element.createElement("rect",{fill:"#0085ba",height:"29.498",width:"21.07",x:"26.93",y:"18.535"}),wp.element.createElement("rect",{fill:"#01273a",height:"13.695",width:"21.07",x:"26.93",y:"-0.033"}),wp.element.createElement("rect",{fill:"#01273a",height:"13.695",width:"21.07",y:"34.338"}))),l=wp.element.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("rect",{height:"12",width:"3",y:"2",x:"0",fill:"#0085ba"}),wp.element.createElement("rect",{height:"12",width:"3",y:"2",x:"21",fill:"#0085ba"}),wp.element.createElement("rect",{height:"17",width:"14",y:"0",x:"5",fill:"#0085ba"}),wp.element.createElement("rect",{height:"5",width:"7",y:"19",x:"0",fill:"#01273a"}),wp.element.createElement("rect",{height:"5",width:"7",y:"19",x:"8.5",fill:"#01273a"}),wp.element.createElement("rect",{height:"5",width:"7",y:"19",x:"17",fill:"#01273a"}))),c=wp.element.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#0085ba",id:"canvas_background",height:"26",width:"26",y:"0",x:"0"})),wp.element.createElement("g",null,wp.element.createElement("text",{fontWeight:"bold",fontStyle:"normal",xmlSpace:"preserve",textAnchor:"start",fontFamily:"Georgia, Times, 'Times New Roman', serif",fontSize:"18",id:"svg_11",y:"17",x:"0",strokeWidth:"0",stroke:"#fff",fill:"#ffffff"},"[/]"))),s=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#0085ba",id:"canvas_background",height:"26",width:"26",y:"-1",x:"-1"})),wp.element.createElement("g",null,wp.element.createElement("path",{fill:"none",id:"svg_1",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",stroke:"#ffffff",d:"m12,6.12638l0,13.00002m0,-13.00002c-1.1679,-0.77592 -2.75351,-1.25278 -4.5,-1.25278c-1.74649,0 -3.33211,0.47686 -4.5,1.25278l0,13.00002c1.16789,-0.7759 2.75351,-1.2528 4.5,-1.2528c1.74649,0 3.3321,0.4769 4.5,1.2528m0,-13.00002c1.1679,-0.77592 2.7535,-1.25278 4.5,-1.25278c1.7465,0 3.3321,0.47686 4.5,1.25278l0,13.00002c-1.1679,-0.7759 -2.7535,-1.2528 -4.5,-1.2528c-1.7465,0 -3.3321,0.4769 -4.5,1.2528"})))}});