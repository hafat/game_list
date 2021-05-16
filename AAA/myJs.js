 
if(window.location.href.search("bsn=60076")!=-1 && window.location.href.search("gamer.com.tw/B.php")!=-1){
    let banList = [
		/*  請把不適用的項目整行移除  */
		2980113, /*  英雄聯盟  */
		3650506, /*  崩壞 3rd  */
		3790298, /*  少女前線  */
		3975870, /*  碧藍航線  */
		4465319, /*  少女前線  */
		4523218, /*  永遠的七日之都  */
		5086930, /*  明日方舟  */
		5503284, /*  重裝戰姬  */
		5679653, /*  符文大地傳說  */
		5113198, /*  雀魂 / 雀姬  */
		6150285, /*  碧藍檔案  */
		3500784, /*  Warframe  */
		3542402, /*  Path of Exile   */
		6200868, /*  少女前線  */
		4806662, /*  魔法紀錄 魔法少女小圓外傳  */
		4491469, /*  梅露可物語  */
    ];
    var row = document.getElementsByClassName("b-list__row");
    for(var i = 0; i< row.length; i++){
    	if(row[i].getElementsByTagName('a')[0] 
    	  && banList.some(obj=>obj==row[i].getElementsByTagName('a')[0].name))
    		row[i].remove();
    	;
    }
}