(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{281:function(t,e,n){"use strict";n.r(e);var r=n(86),o=n(6),c=(n(63),n(40),{components:{Game:n(128).default},data:function(){return{page:0,limit:4,games:[],top_games:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTopData();case 2:return t.top_games=e.sent,e.next=5,t.fetchData();case 5:t.games=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(){return this.$content("games").skip(2).limit(this.limit).skip(this.limit*this.page).sortBy("order","desc").fetch()},fetchTopData:function(){return this.$content("games").limit(2).sortBy("order","desc").fetch()},infiniteHandler:function(t){var e=this;setTimeout(Object(o.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page+=1,n.next=3,e.fetchData();case 3:(o=n.sent).length>0?((c=e.games).push.apply(c,Object(r.a)(o)),t.loaded()):t.complete();case 5:case"end":return n.stop()}}),n)}))),500)}}}),l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"max-w-4xl mx-auto"},[n("masonry",{attrs:{cols:{default:1,600:1},gutter:10}},t._l(t.top_games,(function(t){return n("div",{key:t.slug},[n("game",{attrs:{title:t.title,description:t.description,img:t.img}})],1)})),0),t._v(" "),n("masonry",{attrs:{cols:{default:2,600:1},gutter:10}},t._l(t.games,(function(t){return n("div",{key:t.slug},[n("game",{attrs:{title:t.title,description:t.description,img:t.img}})],1)})),0)],1),t._v(" "),n("infinite-loading",{on:{infinite:t.infiniteHandler}},[n("h4",{staticClass:"my-5",attrs:{slot:"spinner"},slot:"spinner"},[t._v("Loading...")]),t._v(" "),n("h4",{staticClass:"my-5",attrs:{slot:"no-more"},slot:"no-more"},[t._v("- End -")]),t._v(" "),n("h4",{staticClass:"my-5",attrs:{slot:"no-results"},slot:"no-results"},[t._v("No results message")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Game:n(128).default})}}]);