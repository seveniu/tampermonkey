// ==UserScript==
// @name         甩甩尾巴
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://trade.dgtle.com/dgtle_module.php?mod=trade&typeid=110&sortid=
// @require      http://code.jquery.com/jquery-latest.js
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    
    var KEY = "lastId";
    var lastId = GM_getValue(KEY);
    if(lastId && lastId > 0) {
    } else {
        lastId = 591606;
    }
    
    console.log("lastId :" + lastId);
    var boxList = $(".tradebox ");
    function getId(box) {
        var href = $(box).find(".tradetitle a").attr("href");
        var start = href.indexOf('-') + 1;
        var end = href.indexOf('-',10);
        return href.slice(start, end);
    }
    
    boxList.each(function(i,v) {
        var id = parseInt(getId(v));
        
        if(id> lastId) {
            alert("有新的了");
            console.log("新 id : " + id);
            GM_setValue(KEY, id);
        }
    });
    
    setTimeout(function(){
        window.location.reload(1);
    }, 100000);
    // Your code here...
})();