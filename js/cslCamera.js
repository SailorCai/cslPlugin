$.Pgater=(function(){
	var agent=navigator.userAgent.toLowerCase();
	var iswx=agent.indexOf('qqbrowser') >= 0;
	if(iswx){
		var File=$("<input type='file' id='csl_gater_file' accept='image/*' capture='camera' multiple='multiple'>");
	}else{
		var File=$("<input type='file' id='csl_gater_file' accept='image/*' multiple='multiple'>");
	};
	File.css('display','none');
	return function(target,callBack){
		console.log(File);
		this.ele=File;
		this.parent=target;
		this.parent.append(this.ele);
		this.bindClk(this.parent,this.ele[0]);
		this.bindFuc(this.ele,callBack);
	};
})();
$.Pgater.prototype.bindFuc=function(ele,callBack){
	ele.on("change",function(){
		console.log(ele[0].files);
		var all=ele[0].files;
		var reader = new FileReader();
		var album=[];
		console.log(all.length);
		var length=all.length;
		var i=0;
		var recur=function(){
			console.log(all[i]);
			reader.readAsDataURL(all[i]);
			var One=all[i];
			reader.onload=function(e){
				//alert(One);
				console.log(One);
				One.data=this.result;
				album.push(One);
				i++;
				if(i<length){
					recur();
				}else{
					ele.value = '';
					//alert(i);
					callBack(album,img);
				};
			};
		};
		recur();
	});
};
$.Pgater.prototype.bindClk=function(ele,tar){
	ele.on('click',function(){
		tar.click();
	});
};
