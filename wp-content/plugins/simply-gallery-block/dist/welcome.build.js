!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=130)}({0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s})),n.d(t,"h",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return y}));var l=n(4),r=n.n(l);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s="pgc_sgb_",p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,l;return t=e,l=[{key:"indexByPosition",value:function(e,t,n){var l=parseInt(t/e.width),r=Math.floor(n.y/e.height),a=Math.floor(n.x/e.width);return Math.max(0,r*l+a)}},{key:"moduleSettings",value:function(e){return window[e]&&window[e].settings?window[e].settings:null}},{key:"updateProperties",value:function(e,t){for(var n=Object.keys(e),l=0;l<n.length;l+=1){var r=n[l];Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}}},{key:"copyProperties",value:function(e,t){return t=Object.assign(t,e)}},{key:"checkScrip",value:function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1){var l=t[n];if(l.src===e)return n=t.length,l}return!1}},{key:"loadExtScripts",value:function(t,n,l){var r=0;function a(){(r+=1)===t.length&&n&&l&&n.dispatchGMEvent(e.GMEvent(l))}function o(){e.trace(this.src,"error")}for(var i=0;i<t.length;i+=1){var c=t[i],m=c.src,s=c.id,p=e.checkScrip(m);p||((p=document.createElement("script")).src=m,p.id="".concat(s,"_js"),p.async=!0,p.onload=a,p.onerror=o,document.body.appendChild(p))}}},{key:"getViewPortsBySelector",value:function(e){return document.querySelectorAll('div[data-gallery-id="'.concat(e,'"]'))}},{key:"requestAttachments",value:function(t,n,l,a){var o=new URL(t);o.searchParams.set("_fs_blog_admin","true");var i=new r.a;i.open("POST",o,!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),i.onreadystatechange=function(){if(4===i.readyState){var e={};200!==i.status?e.error=i.statusText:e.data=i.responseText,l&&(e.params=l),a&&"function"==typeof a&&a(e)}},i.onerror=function(){e.trace("An error occurred while transferring the file.")};try{var m,s=[];for(m in n)if(Object.prototype.hasOwnProperty.call(n,m))if("object"===c(n[m])){for(var p in n[m])if(Object.prototype.hasOwnProperty.call(n[m],p))if(Array.isArray(n[m][p]))for(var u=n[m][p],d=0;d<u.length;d+=1)s.push("".concat(encodeURIComponent("".concat(m,"[").concat(p,"][]")),"=").concat(encodeURIComponent(u[d])));else s.push("".concat(encodeURIComponent("".concat(m,"[").concat(p,"]")),"=").concat(encodeURIComponent(n[m][p])))}else s.push("".concat(encodeURIComponent(m),"=").concat(encodeURIComponent(n[m])));i.send(s.join("&"))}catch(t){e.trace(t)}}},{key:"request2",value:function(t,n,l,a,o){var i=new URL(t),c=new r.a;c.open("POST",i,!0),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),c.onreadystatechange=function(){if(4===c.readyState){var e={};200!==c.status?e.error=c.statusText:e.data=c.responseText,a&&(e.params=a),o&&"function"==typeof o&&o(e)}},c.onerror=function(){e.trace("An error occurred while transferring the file.")};try{c.send("action=pgc_sgb_action_wizard&nonce=".concat(n,"&props=").concat(l))}catch(t){e.trace(t)}}},{key:"validURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*(\\?[;&a-z\\d%@_.,~+&:=-]*)?(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"request",value:function(t,n,l,a,o,i){var c=new URL(t),m=new r.a;m.open("POST",c,!0),m.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),m.onreadystatechange=function(){if(4===m.readyState){var e={};200!==m.status?e.error=m.statusText:e.data=m.responseText,o&&(e.params=o),i&&"function"==typeof i&&i(e)}},m.onerror=function(){e.trace("An error occurred while transferring the file.")};try{m.send("action=".concat(l,"&nonce=").concat(n,"&props=").concat(a))}catch(t){e.trace(t)}}},{key:"getMediaModal",value:function(e,t){if(window.wp&&window.wp.media){var n=window.wp,l={title:"Select Files",multiple:"add",type:void 0,exclusionList:[]};t&&(l=Object.assign(l,t));var r=n.media.controller.Library.prototype.defaults,a={order:"DESC",orderby:"id",post__not_in:l.exclusionList};l.type&&(a.type=l.type);var o=n.media.controller.Library.extend({defaults:Object.assign(r,{query:!0,id:"library",title:l.title,multiple:l.multiple,priority:20,library:new n.media.query(a)})});return n.media.frames[e]?l.exclusionList&&n.media.frames[e].once("open",(function(){n.media.frames[e].setExclusion(l.exclusionList)})):(n.media.frames[e]=n.media({state:"library",states:[new o]}),n.media.frames[e].updateCollection=function(){var e=this.content.get();if(e&&e.collection){var t=e.collection;t.toArray().forEach((function(e){return e.trigger("destroy",e)})),t.mirroring._hasMore=!0,t.more()}},n.media.frames[e].setExclusion=function(t){n.media.frames[e].content&&n.media.frames[e].content.get().collection&&n.media.frames[e].content.get().collection.props.set({post__not_in:t})},n.media.frames[e].selectedItems=function(){return n.media.frames[e].state()?n.media.frames[e].state().get("selection").models.map((function(e){return e.attributes})):[]},n.media.frames[e].on("open",(function(){var t,l=this.state(),r=l.get("library"),a=l.get("selection");function o(){a&&a.models&&a.some((function(e){return!0===e.get("uploading")}))?(clearTimeout(t),t=setTimeout(o,100)):r.add(a.models)}n.media.frames[e].updateCollection(),n.media.frames[e].on("library:selection:add",(function(){o()}))}),n.media.frames[e])),n.media.frames[e].off("select"),n.media.frames[e]}}},{key:"getAttachmentDetailsModal",value:function(e,t){var n=window.wp;if(n&&n.media)return n.media.frames.pgc_simply_detail?n.media.frames.pgc_simply_detail.content.get("collection").controller.library.reset(e.models):(n.media.frames.pgc_simply_detail=n.media({frame:"edit-attachments",controller:{gridRouter:new n.media.view.MediaFrame.Manage.Router},library:e,model:new n.media.model.Attachment}),n.media.frames.pgc_simply_detail.resetRoute=function(){}),n.media.frames.pgc_simply_detail.state().frame.trigger("refresh",e.findWhere({id:parseInt(t)})),n.media.frames.pgc_simply_detail}},{key:"getVimeoData",value:function(t,n,l,a){var o=new URL("https://api.vimeo.com/".concat(t,"/").concat(n,"/videos"));for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&o.searchParams.append(i,l[i]);var c=new r.a;c.open("GET",o,!0),c.setRequestHeader("Content-Type","application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4"),c.onreadystatechange=function(){if(4===c.readyState){var e={};200!==c.status?(e.error=c.statusText,a({error:c.status})):e.data=c.responseText,l&&(e.params=l),a&&"function"==typeof a&&a(e)}},c.onerror=function(t){e.trace("transfer Failed"),e.trace(t),a({error:"Transfer Failed"})};try{c.send()}catch(t){e.trace(t)}}},{key:"getYouTubeData",value:function(t,n,l){var a=new URL("https://www.googleapis.com/youtube/v3/".concat(t));for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&a.searchParams.append(o,n[o]);var i=new r.a;i.open("GET",a,!0),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),i.onreadystatechange=function(){if(4===i.readyState){var e={};200!==i.status?(e.error=i.statusText,l({error:i.status})):e.data=i.responseText,n&&(e.params=n),l&&"function"==typeof l&&l(e)}},i.onerror=function(t){e.trace("transfer Failed"),e.trace(t)};try{i.send()}catch(t){e.trace(t)}}},{key:"fetchAttachmentsMedia",value:function(e,t){var n=window.wp;if(n||n.media){var l=[];e&&(l=e.map((function(e){return n.media.attachment(e)}))),function e(n){n.more().then((function(){n.hasMore()?e(n):t(l)}))}(n.media.query({post__in:e,orderby:"post__in"}))}else this.trace("WP MEDIA Undefined!")}},{key:"Item",value:function(e){for(var t={model:["id","title","url","link","alt","description","caption","mime","type","image","thumb","width","height","fileLength","sizes","meta"]},n=0;n<t.model.length;n+=1){var l=t.model[n];Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}if(t.sizes){var r={};t.sizes.thumbnail&&(r.thumbnail=t.sizes.thumbnail),t.sizes.medium&&(r.medium=t.sizes.medium),t.sizes.large&&(r.large=t.sizes.large),t.sizes.full&&(r.full=t.sizes.full),t.sizes=r}if(delete t.model,!(Object.keys(t).length<=1))return t}},{key:"ICONS",get:function(){return{}}},{key:"isTouchDevice",get:function(){return window.wp&&wp.media&&wp.media.isTouchDevice?wp.media.isTouchDevice:window.navigator.maxTouchPoints||"ontouchstart"in window}},{key:"browser",get:function(){var e=window.navigator.userAgent,t=e.indexOf("Chrome")>-1;if(e.indexOf("MSIE")>-1)return"explorer";if(e.indexOf("Firefox")>-1)return"firefox";var n=e.indexOf("Safari")>-1,l=e.toLowerCase().indexOf("op")>-1;return l&&!t?"opera":t&&!l||t&&n?"chrome":n&&!t?"safari":void 0}},{key:"passiveListener",get:function(){var e=!1;try{var t={get:function(){e=!0}},n=Object.defineProperty({},"passive",t);window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}catch(e){}return!!e&&{passive:!1,capture:!1}}},{key:"pageXOffset",get:function(){return void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft}},{key:"pageYOffset",get:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},{key:"trace",get:function(){return console.log}}],(n=null)&&m(t.prototype,n),l&&m(t,l),e}();function u(e){var t={};if(t.view=document.createElement("div"),t.view.className="sgb-item",t.view.dataset.id=e.id,"image"!==e.type&&"audio"!==e.type||(t.itemImg=new Image,t.itemImg.alt=e.alt,t.itemImg.width=e.width?e.width:300,t.itemImg.height=e.height?e.width:300,t.itemImg.setAttribute("loading","lazy"),t.itemImg.src="audio"===e.type?"".concat(window.PGC_SGB_ADMIN.assets,"holder-mp3.png"):e.url,t.view.appendChild(t.itemImg)),"audio"===e.type){var n=document.createElement("audio");n.setAttribute("preload","metadata"),n.setAttribute("controlsList","nodownload"),n.setAttribute("controls",""),n.src=e.url,t.view.appendChild(n)}else if("video"===e.type){var l=document.createElement("video");l.setAttribute("preload","auto"),l.setAttribute("controlsList","nodownload"),l.setAttribute("controls",""),l.setAttribute("webkit-playsinline",""),l.setAttribute("playsinline",""),l.src=e.url,t.view.appendChild(l)}return t}function d(e){var t=document.createElement("div");if(t.className="sgb-gallery",e.length>0)for(var n=0;n<e.length;n+=1){var l=u(e[n]);t.appendChild(l.view)}return t.outerHTML}function f(e){var t={};if(t.view=document.createElement("div"),t.view.className="sgb-item",t.view.dataset.id=e.id,"image"!==e.type&&"audio"!==e.type||(t.itemImg=new Image,t.itemImg.alt=e.alt,t.itemImg.width=e.width?e.width:300,t.itemImg.height=e.height?e.width:300,t.itemImg.setAttribute("loading","auto"),t.itemImg.setAttribute("data-lazy-src",""),t.itemImg.className="skip-lazy",t.itemImg.classList.add("no-lazyload"),t.itemImg.classList.add("no-lazyload"),t.itemImg.classList.add("noLazy"),t.itemImg.src="audio"===e.type?"".concat(window.PGC_SGB_ADMIN.assets,"holder-mp3.png"):e.url,t.view.appendChild(t.itemImg)),"audio"===e.type){var n=document.createElement("audio");n.setAttribute("preload","metadata"),n.setAttribute("controlsList","nodownload"),n.setAttribute("controls",""),n.src=e.url,t.view.appendChild(n)}else if("video"===e.type){var l=document.createElement("video");l.setAttribute("preload","auto"),l.setAttribute("controlsList","nodownload"),l.setAttribute("controls",""),l.setAttribute("webkit-playsinline",""),l.setAttribute("playsinline",""),l.src=e.url,t.view.appendChild(l)}return t}function y(e){var t=document.createElement("div");if(t.className="sgb-gallery",e.length>0)for(var n=0;n<e.length;n+=1){var l=f(e[n]);t.appendChild(l.view)}return t.outerHTML}function g(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n].default);return t}function w(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]?n[l]=t[l]:n[l]=e[l].default);return JSON.stringify(n)}function h(e){var t=o({},e);return delete t.galleryData,delete t.selections,delete t.startPosIndex,delete t.loading,delete t.needUpdate,delete t.ordrerDirection,delete t.gutIsSelected,delete t.subLoading,delete t.importModalIsOpen,delete t.attachmentsIDsString,delete t.attachmentsIDsVerified,delete t.loadingAttachments,JSON.stringify(t)}function b(e){var t={},n=o({},this.props.attributes);for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);this.props.setAttributes(t),delete(n=o(o({},n),t)).galleryData,delete n.images,delete n.itemsMetaDataCollection,delete n.selections,delete n.startPosIndex,delete n.loading,delete n.needUpdate,delete n.ordrerDirection,delete n.gutIsSelected,delete n.subLoading,delete n.importModalIsOpen,delete n.attachmentsIDsString,delete n.attachmentsIDsVerified,delete n.loadingAttachments,delete n.galleryTagsListSrc,delete n.isPremium,delete n.dgbModalIsOpen,delete n.bulkSelect,delete n.selectedItems,delete n.selectedLast,this.props.setAttributes({galleryData:JSON.stringify(n)})}},115:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);n(65),n(115);var l=n(5),r=n(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=wp.element,d=u.Component,f=u.Fragment,y=wp.components.Button,g=(r.a.trace,"pgc-sgb-welcome-page-"),w=window.PGC_SGB_WELCOME_PAGE,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,r,a=m(s);function s(){return o(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var __=wp.i18n.__;if(!w)return wp.element.createElement(f,null,wp.element.createElement("div",{className:"".concat(g,"header")},wp.element.createElement("div",{className:"".concat(g,"logo-wrap ").concat(g,"group")},l.f,wp.element.createElement("div",{className:"".concat(g,"title")},"".concat(__("Welcome aboard. Our team welcomes You!","simply-gallery-block"))))),wp.element.createElement("div",{className:"".concat(g,"content")},wp.element.createElement("h2",{style:{color:"red"}},__("Oops, something went wrong.","simply-gallery-block"))),wp.element.createElement("div",{className:"".concat(g,"footer")},wp.element.createElement(y,{isSecondary:!0,href:"https://wordpress.org/support/plugin/simply-gallery-block/"},__("Ask a question","simply-gallery-block")," ")));var e="true"===w.isPremium,t="true"===w.isPro,n=w.assets,r=w.adminurl,a=w.postType,o=new URL("".concat(r,"edit.php"));return o.searchParams.set("post_type",a),o.searchParams.set("page","simply-gallery-block-pricing"),wp.element.createElement(f,null,wp.element.createElement(f,null,wp.element.createElement("div",{className:"".concat(g,"header")},wp.element.createElement("div",{className:"".concat(g,"logo-wrap ").concat(g,"group")},l.f,wp.element.createElement("div",{className:"".concat(g,"title")},"".concat(__("Welcome aboard. Our team welcomes you!","simply-gallery-block"))),wp.element.createElement("abbr",{title:"".concat(__("Version:","simply-gallery-block")," ").concat(w.version),className:"".concat(g,"version")},w.version),!e&&wp.element.createElement("div",{className:"".concat(g,"premium-title")},"The"," ",wp.element.createElement("span",null,"PREMIUM")," ","version is now available."," ",wp.element.createElement("a",{href:o},"Learn more about Plus / Pro Version"))))),wp.element.createElement(f,null,wp.element.createElement("div",{className:"".concat(g,"content")},!e&&wp.element.createElement(f,null,wp.element.createElement("div",{className:"".concat(g,"disclaimer")},wp.element.createElement("h3",null,"🙂 Disclaimer"),wp.element.createElement("div",null,__("Attention! Our blocks and a couple of decent plugins can make you quit searching and using themes with a lot of unclaimed code and third-party website builders (which were outdated yesterday). And start using great solutions from the WordPress team.","simply-gallery-block"))),wp.element.createElement("h2",null,__("Main Features & Solutions","simply-gallery-block")),wp.element.createElement("ul",{className:"".concat(g,"features")},wp.element.createElement("li",null,wp.element.createElement("strong",null,__("Visual Gallery Builder","simply-gallery-block")),wp.element.createElement("p",null,__("Build your gallery with no coding knowledge. Thanks to native WordPress Block Editor you are able to create and customize galleries visually.","simply-gallery-block")),wp.element.createElement("img",{src:"".concat(n,"blocks.png"),alt:"simply"})),wp.element.createElement("li",null,wp.element.createElement("strong",null,__("Video, Photo, Audio. Mixed media content","simply-gallery-block")),wp.element.createElement("p",null,__('Your gallery can now contain any of three types of media content. Just press the button - "Add Media".',"simply-gallery-block")),wp.element.createElement("img",{src:"".concat(n,"selectMedia.png"),alt:"add media"})),wp.element.createElement("li",null,wp.element.createElement("strong",null,__("Don't limit your imagination. Be creative!","simply-gallery-block")),wp.element.createElement("p",null,__("Change the gallery layout in a couple of clicks. Our team has taken care of your comfort and ease of use. Transform! ","simply-gallery-block")),wp.element.createElement("img",{src:"".concat(n,"transform.png"),alt:"transform gallery"})),wp.element.createElement("li",null,wp.element.createElement("strong",null,__("Managing gallery content is now very easy","simply-gallery-block")),wp.element.createElement("p",null,__("Any sort of sorting is available to you, even manual mode. Editing a description, adding tags, attaching a poster, adding an external link to a gallery element is very easy and convenient. And also just add a link to YouTube or Vimeo video to the image and get a unique video playlist.","simply-gallery-block")),wp.element.createElement("img",{src:"".concat(n,"itemsManager.png"),alt:"items manager"})),wp.element.createElement("li",null,wp.element.createElement("strong",null,__("Easy to Customize","simply-gallery-block")),wp.element.createElement("p",null,__("A large number of settings will allow you to customize your gallery uniquely and integrate into any theme.","simply-gallery-block")),wp.element.createElement("img",{src:"".concat(n,"cPanel.png"),alt:"block control panel"})),wp.element.createElement("li",null,wp.element.createElement("strong",null,__("YouTube and Vimeo","simply-gallery-block")),wp.element.createElement("p",null,__("Just copy the video link and add it to the image. The image will turn into a video poster. The gallery will embed the external video (YouTube and Vimeo) to your page only at the time of viewing. This means that you can add up to 100 videos to the gallery and your page will have a fast loading speed.","simply-gallery-block")),wp.element.createElement("img",{src:"".concat(n,"youtube.png"),alt:"add youtube vimeo"}))),wp.element.createElement("h2",null,__("And of course","simply-gallery-block")),wp.element.createElement("ul",{className:"".concat(g,"features-mini")},wp.element.createElement("li",null,__("Fully Responsive","simply-gallery-block")),wp.element.createElement("li",null,__("Popup Deep Linking","simply-gallery-block")),wp.element.createElement("li",null,__("Keyboard and mouse wheel support","simply-gallery-block")),wp.element.createElement("li",null,__("SVG icon","simply-gallery-block")),wp.element.createElement("li",null,__("Physics Based Animations","simply-gallery-block")),wp.element.createElement("li",null,__("FullScreen support","simply-gallery-block")),wp.element.createElement("li",null,__("Inactive State detection","simply-gallery-block")),wp.element.createElement("li",null,__("Smart Resizing","simply-gallery-block")),wp.element.createElement("li",null,__("Social Sharing (Facebook, Twitter, Pinterest)","simply-gallery-block")),wp.element.createElement("li",null,__("Thumbnails support","simply-gallery-block")),wp.element.createElement("li",null,__("Lightbox – Mouse wheel navigation","simply-gallery-block")),wp.element.createElement("li",null,__("Multi-touch gestures support","simply-gallery-block")),wp.element.createElement("li",null,__("Optimized to be Fast as Native","simply-gallery-block")),wp.element.createElement("li",null,__("Tags Filtrations","simply-gallery-block")),wp.element.createElement("li",null,__("No unnecessary JS libraries","simply-gallery-block")),wp.element.createElement("li",null,__("And much more...","simply-gallery-block")))),e&&wp.element.createElement("div",{className:"".concat(g,"thank")},wp.element.createElement("h3",null,__("Thank You for choosing us!","simply-gallery-block"))),wp.element.createElement("div",null,wp.element.createElement("h2",null,"FAQ"),wp.element.createElement("ul",{className:"".concat(g,"faq-menu")},wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/faq/"},__("Lightbox Image Size","simply-gallery-block"))),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/how-to-create-an-album/"},__("How to create an Album","simply-gallery-block"))),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/tags-filter/"},__("Tags Filter","simply-gallery-block"))),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/faq/"},__("How to attach a YouTube or Vimeo video to a poster (image) in the gallery","simply-gallery-block"))),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/faq/"},__("How To Get YouTube API Key?","simply-gallery-block"))))),wp.element.createElement("h2",{style:{maxWidth:"360px"}},__(e?"PREMIUM Blocks Demo":"Upgrade to the PLUS Plan and get more Blocks!","simply-gallery-block")),wp.element.createElement("div",{className:"f-width"},wp.element.createElement("svg",{className:"".concat(g,"spc-t"),viewBox:"0 0 1000 100",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1000,0l-1000,100l1000,0l0,-100Z"}))),wp.element.createElement("ul",{className:"".concat(g,"features-demo")},wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/diamond/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"diamond.jpg"),alt:"diamond demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Diamond")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/accordion/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"accordion.jpg"),alt:"accordion demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Accordion")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/horizon-premium-gallery-block/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"horizon.jpg"),alt:"horizon demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Horizon")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/split-carousel/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"split.jpg"),alt:"Split Carousel demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Split Carousel")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/portfolio2/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"portfolio2.jpg"),alt:"Portfolio2 demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Portfolio2")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/simply-list/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"list.jpg"),alt:"list demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"List")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/tagsbox-covers-gallery/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"tags.jpg"),alt:"tags box demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Tags Box")),wp.element.createElement("li",null,wp.element.createElement("a",{href:"https://simplygallery.co/portfolio-premium-block/",target:"_blank",rel:"noreferrer"},wp.element.createElement("img",{src:"".concat(n,"portfolio.jpg"),alt:"portfolio demo"})),wp.element.createElement("div",{className:"".concat(g,"block-label")},"Portfolio"))),!e&&wp.element.createElement("div",{className:"f-width-simple"},wp.element.createElement("a",{href:o},wp.element.createElement("h3",null,"Upgrade NOW"))),wp.element.createElement("div",{className:"f-width",style:{transform:"rotateZ( 180deg )",margin:"0px -20px 0"}},wp.element.createElement("svg",{className:"".concat(g,"spc-t"),viewBox:"0 0 1000 100",preserveAspectRatio:"none"},wp.element.createElement("path",{d:"M1000,0l-1000,100l1000,0l0,-100Z"}))),!t&&wp.element.createElement("div",{className:"".concat(g,"pro-plan")},wp.element.createElement("h2",null,__("If You know how to plan. If the gallery is your means of expression or a showcase of your craft. If You are an advanced user then you need a PRO plan.","simply-gallery-block")),wp.element.createElement("h3",null,"PRO Plan Features"),wp.element.createElement("ul",{className:"".concat(g,"features-mini")},wp.element.createElement("li",null,__("Supports FileBird Folders","simply-gallery-block")),wp.element.createElement("li",null,__("Supports MLA Categories and Tags","simply-gallery-block")),wp.element.createElement("li",null,__("Publishing YouTube Playlists","simply-gallery-block")),wp.element.createElement("li",null,__("Modern Lightbox","simply-gallery-block")),wp.element.createElement("li",null,__("Email Support","simply-gallery-block")),wp.element.createElement("li",null,__("Priority Support","simply-gallery-block"))),wp.element.createElement("a",{href:o},wp.element.createElement("h3",null,"Upgrade 🚀"))))),wp.element.createElement(f,null,wp.element.createElement("div",{className:"".concat(g,"footer")})))}}])&&i(t.prototype,n),r&&i(t,r),s}(d),b=wp.element.render;document.getElementById("pgc-simply-gallery-plugin-welcome-page")&&b(wp.element.createElement(h,null),document.getElementById("pgc-simply-gallery-plugin-welcome-page"))},4:function(e,t){e.exports=XMLHttpRequest},5:function(e,t,n){"use strict";n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return m}));var l=wp.element.createElement("svg",{className:"simply-icon",width:"22px",height:"22px",viewBox:"0 0 298.73 298.73",fill:"#0085ba",fillRule:"nonzero"},wp.element.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{xmlns:"http://www.w3.org/2000/svg",d:"M264.959,9.35H33.787C15.153,9.35,0,24.498,0,43.154v212.461c0,18.634,15.153,33.766,33.787,33.766   h231.171c18.634,0,33.771-15.132,33.771-33.766V43.154C298.73,24.498,283.593,9.35,264.959,9.35z M193.174,59.623   c18.02,0,32.634,14.615,32.634,32.634s-14.615,32.634-32.634,32.634c-18.025,0-32.634-14.615-32.634-32.634   S175.149,59.623,193.174,59.623z M254.363,258.149H149.362H49.039c-9.013,0-13.027-6.521-8.964-14.566l56.006-110.93   c4.058-8.044,11.792-8.762,17.269-1.605l56.316,73.596c5.477,7.158,15.05,7.767,21.386,1.354l13.777-13.951   c6.331-6.413,15.659-5.619,20.826,1.762l35.675,50.959C266.487,252.16,263.376,258.149,254.363,258.149z"}))),r=wp.element.createElement("svg",{enableBackground:"new 0 0 48 48",height:"24px",version:"1.1",viewBox:"0 0 48 48",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("path",{id:"svg_4",d:"m0.062,21.972113l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#0085ba"}),wp.element.createElement("path",{id:"svg_5",d:"m26.027885,21.972113l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#01273a"}),wp.element.createElement("path",{id:"svg_6",d:"m26.027885,47.937997l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#0085ba"}),wp.element.createElement("path",{id:"svg_7",d:"m0.005183,47.937997l21.943,0l0,-21.943l-21.943,0l0,21.943z",fill:"#01273a"}))),a=wp.element.createElement("svg",{enableBackground:"new 0 0 48 48",height:"24px",version:"1.1",viewBox:"0 0 48 48",width:"24px"},wp.element.createElement("g",{xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("rect",{x:"4.204546",transform:"rotate(90 15,11) ",y:"-4.180727",width:"21.07",height:"29.498",fill:"#0085ba"}),wp.element.createElement("rect",{transform:"rotate(-90 33,37) ",y:"22.682727",x:"22.725454",width:"21.07",height:"29.498",fill:"#0085ba"}),wp.element.createElement("rect",{transform:"rotate(90 41,10) ",y:"3.717",x:"30.623183",width:"21.07",height:"13.695",fill:"#01273a"}),wp.element.createElement("rect",{x:"-3.693182",transform:"rotate(90 7,37) ",y:"30.588",width:"21.07",height:"13.695",fill:"#01273a"}))),o=wp.element.createElement("svg",{enableBackground:"new 0 0 48 48",height:"24px",version:"1.1",viewBox:"0 0 48 48",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#0085ba",height:"29.498",width:"21.07",y:"-0.033"}),wp.element.createElement("rect",{fill:"#0085ba",height:"29.498",width:"21.07",x:"26.93",y:"18.535"}),wp.element.createElement("rect",{fill:"#01273a",height:"13.695",width:"21.07",x:"26.93",y:"-0.033"}),wp.element.createElement("rect",{fill:"#01273a",height:"13.695",width:"21.07",y:"34.338"}))),i=wp.element.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("rect",{height:"12",width:"3",y:"2",x:"0",fill:"#0085ba"}),wp.element.createElement("rect",{height:"12",width:"3",y:"2",x:"21",fill:"#0085ba"}),wp.element.createElement("rect",{height:"17",width:"14",y:"0",x:"5",fill:"#0085ba"}),wp.element.createElement("rect",{height:"5",width:"7",y:"19",x:"0",fill:"#01273a"}),wp.element.createElement("rect",{height:"5",width:"7",y:"19",x:"8.5",fill:"#01273a"}),wp.element.createElement("rect",{height:"5",width:"7",y:"19",x:"17",fill:"#01273a"}))),c=wp.element.createElement("svg",{enableBackground:"new 0 0 24 24",height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#0085ba",id:"canvas_background",height:"26",width:"26",y:"0",x:"0"})),wp.element.createElement("g",null,wp.element.createElement("text",{fontWeight:"bold",fontStyle:"normal",xmlSpace:"preserve",textAnchor:"start",fontFamily:"Georgia, Times, 'Times New Roman', serif",fontSize:"18",id:"svg_11",y:"17",x:"0",strokeWidth:"0",stroke:"#fff",fill:"#ffffff"},"[/]"))),m=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},wp.element.createElement("g",null,wp.element.createElement("rect",{fill:"#0085ba",id:"canvas_background",height:"26",width:"26",y:"-1",x:"-1"})),wp.element.createElement("g",null,wp.element.createElement("path",{fill:"none",id:"svg_1",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",stroke:"#ffffff",d:"m12,6.12638l0,13.00002m0,-13.00002c-1.1679,-0.77592 -2.75351,-1.25278 -4.5,-1.25278c-1.74649,0 -3.33211,0.47686 -4.5,1.25278l0,13.00002c1.16789,-0.7759 2.75351,-1.2528 4.5,-1.2528c1.74649,0 3.3321,0.4769 4.5,1.2528m0,-13.00002c1.1679,-0.77592 2.7535,-1.25278 4.5,-1.25278c1.7465,0 3.3321,0.47686 4.5,1.25278l0,13.00002c-1.1679,-0.7759 -2.7535,-1.2528 -4.5,-1.2528c-1.7465,0 -3.3321,0.4769 -4.5,1.2528"})))},65:function(e,t,n){}});