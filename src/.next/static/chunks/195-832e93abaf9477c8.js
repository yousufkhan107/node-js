"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{8497:function(s,e,a){var i=a(4246),t=a(8579),l=a.n(t),c=a(1497);e.Z=function(s){var e=s.parentClass;return(0,i.jsx)("div",{className:"axil-instagram-area axil-section-gap ".concat(e||""),children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("div",{className:"section-title",children:(0,i.jsx)("h2",{className:"title",children:"Instagram"})})})}),(0,i.jsx)("div",{className:"row mt--30",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("ul",{className:"instagram-post-list",children:c.map((function(s){return(0,i.jsx)("li",{className:"single-post",children:(0,i.jsxs)("a",{href:s.url,children:[(0,i.jsx)(l(),{src:"https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=400",height:190,width:190,alt:"Instagram Images"}),(0,i.jsx)("span",{className:"instagram-button",children:(0,i.jsx)("i",{className:"fab fa-instagram"})})]})},s.id)}))})})})]})})}},898:function(s,e,a){var i=a(4246),t=a(9894),l=a.n(t),c=a(8579),n=a.n(c),r=a(7249);e.Z=function(s){var e=s.dataPost,a=s.postStart,t=s.show,c=s.bgColor;return(0,i.jsx)(i.Fragment,{children:e.slice(a||0,t).map((function(s){return(0,i.jsxs)("div",{className:"content-block post-list-view axil-control mt--30 ".concat(c||""," ").concat(!0===s.sticky?"sticky":""," ").concat("quote"===s.postFormat?"format-quote":""),children:[s.featureImg?(0,i.jsxs)("div",{className:"post-thumbnail",children:[(0,i.jsx)(l(),{href:"/post/".concat(s.slug),children:(0,i.jsx)("a",{children:(0,i.jsx)(n(),{src:"https://images.pexels.com/photos/15490800/pexels-photo-15490800/free-photo-of-men-rising-up-helmets.jpeg?auto=compress&cs=tinysrgb&w=400",alt:s.title,height:250,width:295,priority:!0})})}),!0===s.playBtn?(0,i.jsx)(l(),{href:"/post/".concat(s.slug),children:(0,i.jsx)("a",{className:"video-popup size-medium position-top-center icon-color-secondary",children:(0,i.jsx)("span",{className:"play-icon"})})}):""]}):"",(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsx)("div",{className:"post-cat",children:(0,i.jsx)("div",{className:"post-cat-list",children:(0,i.jsx)(l(),{href:"/category/".concat((0,r.lV)(s.cate)),children:(0,i.jsx)("a",{className:"hover-flip-item-wrapper",children:(0,i.jsx)("span",{className:"hover-flip-item",children:(0,i.jsx)("span",{"data-text":s.cate,children:s.cate})})})})})}),"quote"===s.postFormat?(0,i.jsx)("blockquote",{children:(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)(l(),{href:"/post/".concat(s.slug),children:(0,i.jsx)("a",{children:s.title})})})}):(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)(l(),{href:"/post/".concat(s.slug),children:(0,i.jsx)("a",{children:s.title})})}),(0,i.jsxs)("div",{className:"post-meta-wrapper",children:[(0,i.jsx)("div",{className:"post-meta",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h6",{className:"post-author-name",children:(0,i.jsx)(l(),{href:"/author/".concat((0,r.lV)(s.author_name)),children:(0,i.jsx)("a",{className:"hover-flip-item-wrapper",children:(0,i.jsx)("span",{className:"hover-flip-item",children:(0,i.jsx)("span",{"data-text":s.author_name,children:s.author_name})})})})}),(0,i.jsxs)("ul",{className:"post-meta-list",children:[(0,i.jsx)("li",{children:s.date}),(0,i.jsx)("li",{children:s.read_time})]})]})}),(0,i.jsx)("ul",{className:"social-share-transparent justify-content-end",children:s.author_social.map((function(s){return(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:s.url,children:(0,i.jsx)("i",{className:s.icon})})},s.url)}))})]})]})]},s.slug)}))})}},958:function(s,e,a){var i=a(4246),t=a(7196),l=a(4141),c=a(1491),n=a(1021),r=a(5921);e.Z=function(s){var e=s.dataPost;return(0,i.jsxs)("div",{className:"sidebar-inner",children:[(0,i.jsx)(t.Z,{catData:e}),(0,i.jsx)(n.Z,{}),(0,i.jsx)(c.Z,{postData:e}),(0,i.jsx)(r.Z,{}),(0,i.jsx)(l.Z,{})]})}},7196:function(s,e,a){var i=a(4246),t=a(9894),l=a.n(t),c=a(8579),n=a.n(c),r=a(7249);e.Z=function(s){var e=s.catData,a=(0,r.R1)(e,"cate");return(0,i.jsx)("div",{className:"axil-single-widget widget widget_categories mb--30",children:(0,i.jsx)("ul",{children:a.slice(0,4).map((function(s){return(0,i.jsx)("li",{className:"cat-item",children:(0,i.jsx)(l(),{href:"/category/".concat((0,r.lV)(s.cate)),children:(0,i.jsxs)("a",{className:"inner",children:[(0,i.jsx)("div",{className:"thumbnail",children:(0,i.jsx)(n(),{src:"https://images.pexels.com/photos/2498764/pexels-photo-2498764.jpeg?auto=compress&cs=tinysrgb&w=400",alt:s.cate,height:50,width:50,priority:!0})}),(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("h5",{className:"title",children:s.cate})})]})})},s.slug)}))})})}},4141:function(s,e,a){var i=a(4246),t=a(8579),l=a.n(t),c=a(1497);e.Z=function(){return(0,i.jsxs)("div",{className:"axil-single-widget widget widget_instagram mb--30",children:[(0,i.jsx)("h5",{className:"widget-title",children:"Instagram"}),(0,i.jsx)("ul",{className:"instagram-post-list-wrapper",children:c.map((function(s){return(0,i.jsx)("li",{className:"instagram-post-list",children:(0,i.jsx)("a",{href:s.url,children:(0,i.jsx)(l(),{src:"https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=400",height:105,width:105,alt:"Instagram Images"})})},s.id)}))})]})}},1491:function(s,e,a){var i=a(4246),t=a(9894),l=a.n(t),c=a(8579),n=a.n(c);e.Z=function(s){var e=s.postData;return(0,i.jsxs)("div",{className:"axil-single-widget widget widget_postlist mb--30",children:[(0,i.jsx)("h5",{className:"widget-title",children:"Popular on Blogar"}),(0,i.jsx)("div",{className:"post-medium-block",children:e.slice(0,3).map((function(s){return(0,i.jsxs)("div",{className:"content-block post-medium mb--20",children:[s.featureImg?(0,i.jsx)("div",{className:"post-thumbnail",children:(0,i.jsx)(l(),{href:"/post/".concat(s.slug),children:(0,i.jsx)("a",{children:(0,i.jsx)(n(),{src:"https://images.pexels.com/photos/1975106/pexels-photo-1975106.jpeg?auto=compress&cs=tinysrgb&w=400",alt:s.title,height:100,width:100,priority:!0})})})}):"",(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsx)("h6",{className:"title",children:(0,i.jsx)(l(),{href:"/post/".concat(s.slug),children:(0,i.jsx)("a",{children:s.title})})}),(0,i.jsx)("div",{className:"post-meta",children:(0,i.jsxs)("ul",{className:"post-meta-list",children:[(0,i.jsx)("li",{children:s.date}),(0,i.jsx)("li",{children:s.post_views})]})})]})]},s.slug)}))})]})}},1021:function(s,e,a){var i=a(4246);e.Z=function(){return(0,i.jsxs)("div",{className:"axil-single-widget widget widget_search mb--30",children:[(0,i.jsx)("h5",{className:"widget-title",children:"Search"}),(0,i.jsx)("form",{action:"#",children:(0,i.jsxs)("div",{className:"axil-search form-group",children:[(0,i.jsx)("button",{type:"submit",className:"search-button",children:(0,i.jsx)("i",{className:"fal fa-search"})}),(0,i.jsx)("input",{type:"text",className:"form-control",placeholder:"Search"})]})})]})}},5921:function(s,e,a){var i=a(4246),t=a(6309);e.Z=function(){return(0,i.jsxs)("div",{className:"axil-single-widget widget widget_social mb--30",children:[(0,i.jsx)("h5",{className:"widget-title",children:"Stay In Touch"}),(0,i.jsxs)("ul",{className:"social-icon md-size justify-content-center",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:t.fb.H,children:(0,i.jsx)("i",{className:t.fb.q})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:t.CR.H,children:(0,i.jsx)("i",{className:t.CR.q})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:t.km.H,children:(0,i.jsx)("i",{className:t.km.q})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:t.bs.H,children:(0,i.jsx)("i",{className:t.bs.q})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:t.Q4.H,children:(0,i.jsx)("i",{className:t.Q4.q})})})]})]})}},1497:function(s){s.exports=JSON.parse('[{"id":1,"image":"/images/small-images/instagram-md-01.webp","url":"#"},{"id":2,"image":"/images/small-images/instagram-md-02.webp","url":"#"},{"id":3,"image":"/images/small-images/instagram-md-03.webp","url":"#"},{"id":4,"image":"/images/small-images/instagram-md-04.webp","url":"#"},{"id":5,"image":"/images/small-images/instagram-md-05.webp","url":"#"},{"id":6,"image":"/images/small-images/instagram-md-06.webp","url":"#"}]')},6309:function(s){s.exports=JSON.parse('{"fb":{"H":"https://facebook.com/","q":"fab fa-facebook-f"},"km":{"H":"https://twitter.com/","q":"fab fa-twitter"},"CR":{"H":"https://www.instagram.com/","q":"fab fa-instagram"},"Q4":{"H":"https://www.linkedin.com/","q":"fab fa-linkedin-in"},"yt":{"H":"https://www.youtube.com/","q":"fab fa-youtube"},"Ws":{"H":"https://www.pinterest.com/","q":"fab fa-pinterest"},"Vi":{"H":"https://discord.com/","q":"fab fa-discord"},"bs":{"H":"https://slack.com/","q":"fab fa-slack"}}')}}]);