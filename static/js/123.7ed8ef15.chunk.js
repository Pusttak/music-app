"use strict";(self.webpackChunkplaycloud=self.webpackChunkplaycloud||[]).push([[123],{5116:function(r,s,t){t.d(s,{Z:function(){return l}});var i=t(7483),a={list:"MainTrackList_list__BeFvD"},e=t(3329),l=function(r){var s=r.dataList,t=r.onPlay;return(0,e.jsx)("ul",{className:a.list,children:s.map((function(r,s){return(0,e.jsx)("li",{className:a.item,children:(0,e.jsx)(i.Z,{track:r,onPlay:t})},s)}))})}},7483:function(r,s,t){t.d(s,{Z:function(){return h}});var i=t(1087),a=t(5048),e=t(8080),l=t(1198),n=t(833),c=t(7873),o="TrackCard_card__u0rZs",d="TrackCard_link__HD5bn",u="TrackCard_playIcon__W+6pF",p="TrackCard_coverart__8QKKx",x="TrackCard_title__PC7to",_="TrackCard_subtitle__safku",v=t(3329),h=function(r){var s,t=r.track,h=t.key,k=t.title,j=t.subtitle,m=t.images,f=t.artists,C=r.onPlay,N=(0,a.v9)(n.ev),W=(0,a.v9)(l.P0),y=(0,a.I0)(),T=null===f||void 0===f||null===(s=f[0])||void 0===s?void 0:s.adamid;return(0,v.jsxs)("div",{className:o,children:[(0,v.jsxs)(i.rU,{to:"/tracks/".concat(h),className:d,children:[(0,v.jsx)("div",{className:p,children:(0,v.jsx)("img",{src:null===m||void 0===m?void 0:m.coverart,alt:j})}),(0,v.jsx)("p",{className:x,children:k})]}),(0,v.jsx)("div",{className:u,onClick:function(){return function(r){r===W?r!==W||C():y((0,e.L6)(r))}(h)},children:N&&h===W?(0,v.jsx)(c.fp,{size:16}):(0,v.jsx)(c.o1,{size:16})}),(0,v.jsx)(i.rU,{to:"/artists/".concat(T),children:(0,v.jsx)("p",{className:_,children:j})})]})}},6123:function(r,s,t){t.r(s),t.d(s,{default:function(){return f}});var i=t(5048),a=t(7689),e=t(5629),l=t(8080),n=t(7483),c=t(6443),o=t(1413),d=t(4925),u=t(3329),p=["size","strokeWidth","color"],x=function(r){var s=r.size,t=void 0===s?10:s,i=r.strokeWidth,a=void 0===i?4:i,e=r.color,l=void 0===e?"currentColor":e,n=(0,d.Z)(r,p);return(0,u.jsx)("svg",(0,o.Z)((0,o.Z)({width:t,height:t,fill:"none",stroke:l,strokeLinecap:"round",strokeWidth:a,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:(0,u.jsx)("path",{d:"M10.293 4.793c.78-1.277 2.634-1.277 3.414 0l7.433 12.164C21.955 18.29 20.996 20 19.434 20H4.566c-1.562 0-2.52-1.71-1.706-3.043l7.433-12.164Z"})}))},_={list:"ShortTracksList_list__I+0tM",listWrapper:"ShortTracksList_listWrapper__vUi+k",musicWrapper:"ShortTracksList_musicWrapper__GiP5c",textWrapper:"ShortTracksList_textWrapper__5W7iB",title:"ShortTracksList_title__upxa-",text:"ShortTracksList_text__Klcp1"},v=function(r){var s=r.option,t=r.onPlay,a=(0,i.I0)(),o=(0,e.CB)(s.value),d=o.data,p=o.isError,v=o.error;return(0,c.VI)(v),!p&&(0,u.jsxs)("div",{className:_.listWrapper,children:[(0,u.jsxs)("div",{className:_.textWrapper,children:[(0,u.jsx)("span",{className:_.title,children:s.title}),(0,u.jsxs)("span",{className:_.text,onClick:function(){return a((0,l.Sc)(s))},children:["See all",(0,u.jsx)(x,{})]})]}),(0,u.jsx)("div",{className:_.musicWrapper,children:(0,u.jsx)("ul",{className:_.list,children:null===d||void 0===d?void 0:d.slice(0,8).map((function(r,s){return(0,u.jsx)("li",{className:_.item,children:(0,u.jsx)(n.Z,{track:r,onPlay:t})},s)}))})})]})},h=t(5116),k=t(1198),j=t(3838),m=t(4046),f=function(){var r=(0,i.v9)(k.aX).value,s=(0,a.bx)().play,t=(0,e.CB)(r,{skip:!r}),l=t.data,n=t.isLoading,o=t.isError,d=t.error;return(0,c.VI)(d),!o&&n?(0,u.jsx)(j.rg,{size:350,style:{margin:"0 auto"}}):r?l&&(0,u.jsx)(h.Z,{dataList:l,onPlay:s}):(0,u.jsx)("ul",{children:m.Xx.slice(1,4).map((function(r,t){return(0,u.jsx)("li",{children:(0,u.jsx)(v,{onPlay:s,option:r})},t)}))})}}}]);
//# sourceMappingURL=123.7ed8ef15.chunk.js.map