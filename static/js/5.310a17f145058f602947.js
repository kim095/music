webpackJsonp([5],{BRgg:function(t,n,e){"use strict";n.b=function(){var t=s()({},o.b,{platform:"h5",uin:0,needNewCode:1,_:(new Date).getTime()});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,o.c)},n.a=function(t){var n=s()({},o.b,{platform:"h5",uin:0,needNewCode:1,tpl:3,page:"detail",type:"top",topid:t,_:(new Date).getTime()});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,o.c)};var i=e("woOf"),s=e.n(i),a=e("Gak4"),o=e("T452")},rrPN:function(t,n){},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),a=e("kvay"),o=e("BRgg"),r=e("T452"),c=e("NYxO"),u=e("PvFA"),g={created:function(){this._getMusicList()},data:function(){return{songs:[],rank:!0}},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(o.a)(this.topList.id).then(function(n){n.code===r.a&&(t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albumid&&n.push(Object(u.a)(e))}),n}},computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(c.c)(["topList"])),components:{MusicList:a.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,title:this.title,songs:this.songs,"bg-image":this.bgImage}})],1)},staticRenderFns:[]};var p=e("VU/8")(g,f,!1,function(t){e("rrPN")},"data-v-7a6af43a",null);n.default=p.exports}});
//# sourceMappingURL=5.310a17f145058f602947.js.map