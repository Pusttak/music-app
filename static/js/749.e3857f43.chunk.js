"use strict";(self.webpackChunkmusic_app=self.webpackChunkmusic_app||[]).push([[749],{7483:function(a,r,s){s.d(r,{Z:function(){return x}});var t=s(1087),i=s(5048),n=s(8080),c=s(1198),e=s(833),l=s(7873),o="TrackCard_card__u0rZs",u="TrackCard_link__HD5bn",d="TrackCard_playIcon__W+6pF",_="TrackCard_coverart__8QKKx",k="TrackCard_title__PC7to",v="TrackCard_subtitle__safku",m=s(3329),x=function(a){var r,s=a.track,x=s.key,f=s.title,j=s.subtitle,p=s.images,h=s.artists,C=a.onPlay,N=(0,i.v9)(e.ev),y=(0,i.v9)(c.P0),T=(0,i.I0)(),b=null===h||void 0===h||null===(r=h[0])||void 0===r?void 0:r.adamid;return(0,m.jsxs)("div",{className:o,children:[(0,m.jsxs)(t.rU,{to:"/tracks/".concat(x),className:u,children:[(0,m.jsx)("div",{className:_,children:(0,m.jsx)("img",{src:null===p||void 0===p?void 0:p.coverart,alt:j})}),(0,m.jsx)("p",{className:k,children:f})]}),(0,m.jsx)("div",{className:d,onClick:function(){return function(a){a===y?a!==y||C():T((0,n.L6)(a))}(x)},children:N&&x===y?(0,m.jsx)(l.fp,{size:16}):(0,m.jsx)(l.o1,{size:16})}),(0,m.jsx)(t.rU,{to:"/artists/".concat(b),children:(0,m.jsx)("p",{className:v,children:j})})]})}},446:function(a,r,s){s.d(r,{Z:function(){return c}});var t=s(7483),i={list:"TracksList_list__NHnsU"},n=s(3329),c=function(a){var r=a.dataList,s=a.onPlay;return(0,n.jsx)("ul",{className:i.list,children:r.map((function(a,r){var c=a.track;return(0,n.jsx)("li",{className:i.item,children:(0,n.jsx)(t.Z,{track:c,onPlay:s})},r)}))})}},1749:function(a,r,s){s.r(r);var t=s(7689),i=s(5629),n=s(3838),c=s(6443),e=s(446),l=s(3329);r.default=function(){var a=(0,t.UO)().artistName,r=(0,t.bx)().play,s=(0,i.qQ)(a,{skip:!a}),o=s.data,u=s.isError,d=s.error,_=s.isLoading;return(0,c.VI)(d),!u&&_?(0,l.jsx)(n.rg,{size:350,style:{margin:"0 auto"}}):o&&(0,l.jsx)(e.Z,{onPlay:r,dataList:o.tracks.hits})}}}]);
//# sourceMappingURL=749.e3857f43.chunk.js.map