webpackJsonp([4],{"2AYI":function(t,n){},NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),r=e("NYxO"),a=e("m40h"),c=e("T452"),u=e("PvFA"),d={components:{MusicList:o.a},data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.disc.dissid?Object(a.c)(this.disc.dissid).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.cdlist[0].songlist))}):this.$router.push("/recommend")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albumid&&n.push(Object(u.a)(t))}),n}},computed:s()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(r.c)(["disc"]))},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var h=e("VU/8")(d,f,!1,function(t){e("2AYI")},"data-v-6878e653",null);n.default=h.exports},m40h:function(t,n,e){"use strict";n.b=function(){var t=r()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},n.a=function(){var t=r()({},{g_tk:5381,notice:0,inCharset:"utf8",outCharset:"utf-8",platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("http://47.94.82.235:9000/api/getDiscList",{params:t}).then(function(t){return s.a.resolve(t.data)})},n.c=function(t){var n=r()({},{g_tk:5381,type:1,json:1,utf8:1,onlysong:0,disstid:t,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq.json",ct:24,needNewCode:0});return d.a.get("http://47.94.82.235:9000/api/getSongList",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("//Fk"),s=e.n(i),o=e("woOf"),r=e.n(o),a=e("Gak4"),c=e("T452"),u=e("mtWM"),d=e.n(u)}});
//# sourceMappingURL=4.e47de804f8a89a2ff9a2.js.map