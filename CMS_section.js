<script type="text/javascript">
(function(){
	var img=new Image(),
		imgUrl,
		productInfo=[],
		categoryInfo=[];
	img.style='border: 0px; height: 1px; width: 1px;';
	img.alt='Advertise via Daisycon';
	for(var i=0;i<cms_roi.items.length;i++){
		productInfo.push(cms_roi.items[i][1]);
		categoryInfo.push(cms_roi.items[i][3]);
	};
	imgUrl="http://ds1.nl/t/?si=&ti="+cms_roi.OrderId+"&oa="+productionInfo.join(',')+"&="+categoryInfo.join(',')+"&bd="+cms_roi.orderAmount;
	img.src=imgUrl;
})()
</script>

<script type="text/javascript">
(function(){
	var img=new Image(),
		actionPay='undefined',
		imgUrl;
	if(cms_roi.url_params){
		actionPay=cms_roi.url_params.actionpay;
	}
	imgUrl='http://n.actionpay.ru/ok/4856.png?actionpay='+actionPay+'&apid='+cms_roi.OrderId+"&price="+cms_roi.orderAmount;
	img.height='1';
	img.width='1';
	img.src=imgUrl;
})();
</script>