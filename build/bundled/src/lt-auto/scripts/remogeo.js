function RemoGeoLocation(){this._remoteSvrUrl='https://webapi.amap.com/html/geolocate.html',this._callbackList=[],this._seqBase=1,this._frameReady=0,this._watchIdMap={}}RemoGeoLocation.prototype={_getSeq:function(){return this._seqBase++},_onRrameReady:function(a){return 0===this._frameReady?(this._frameReadyList||(this._frameReadyList=[]),this._frameReadyList.push(a),void this._prepareIframe()):void a.call(this)},_prepareIframe:function(){if(!this._iframeWin){var a=document.createElement('iframe');a.src=this._remoteSvrUrl+(0<this._remoteSvrUrl.indexOf('?')?'&':'?'),a.width='0px',a.height='0px',a.style.position='absolute',a.style.display='none';var b=this,c=setTimeout(function(){b._frameReady=!1,b._callbackFrameReadyList()},5e3);a.onload=function(){clearTimeout(c),b._frameReady=!0,b._callbackFrameReadyList(),a.onload=null},document.body.appendChild(a),this._iframeWin=a.contentWindow,window.addEventListener('message',function(a){0!==b._remoteSvrUrl.indexOf(a.origin)||b._handleRemoteMsg(a.data)},!1)}},_callbackFrameReadyList:function(){if(this._frameReadyList){var a=this._frameReadyList;this._frameReadyList=null;for(var b=0,c=a.length;b<c;b++)a[b].call(this,this._frameReady)}},_pickCallback:function(a,b){for(var c,d=this._callbackList,e=0,f=d.length;e<f;e++)if(c=d[e],a===c.seq)return b||d.splice(e,1),c},_handleRemoteMsg:function(a){var b=a.seq,c=this._pickCallback(b,!!a.notify);c?c.cbk.call(null,a.error,a.result):console.warn('Receive remote msg: ',a)},_postMessage:function(a,b,c,d){this._prepareIframe();var f={cmd:a,args:b,seq:d||this._getSeq()};this._callbackList.push({cbk:c,seq:f.seq}),this._onRrameReady(function(){if(!0===this._frameReady)try{this._iframeWin.postMessage(f,'*')}catch(a){this._pickCallback(f.seq),c(a)}else this._pickCallback(f.seq),c({message:'iFrame load failed!'})})},getCurrentPosition:function(a,b,c){this._postMessage('getCurrentPosition',[c],function(c,d){return c?void(b&&b(c)):void(a&&a(d))})},watchPosition:function(a,b,c){var d='wk'+this._getSeq(),e=this._getSeq();this._watchIdMap[d]={stat:0,seq:e};var f=this;return this._postMessage('watchPosition',[c],function(c,e){var g=null;e&&(g=e.id);var h=f._watchIdMap[d];if(h.id=g,h.stat=1,h.callbackList){var j=h.callbackList;h.callbackList=null;for(var k=0,i=j.length;k<i;k++)j[k].call(f,g)}return c?void(b&&b(c)):void(a&&a(e.pos))},e),d},clearWatch:function(a,b){function c(c){e._postMessage('clearWatch',[c],function(c,f){c||(e._pickCallback(d.seq),delete e._watchIdMap[a]),b&&b(c,f)})}if(!this._watchIdMap[a])return void b('Id not exists: '+a);var d=this._watchIdMap[a],e=this;1>d.stat?(!d.callbackList&&(d.callbackList=[]),d.callbackList.push(function(a){c(a)})):c(d.id)}};