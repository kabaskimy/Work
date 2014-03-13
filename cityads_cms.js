<script >
var click_id='',
	prx='',
	customer_type_value='1',
	customer_type='new',
	payment_method_value=$.cookie('PaymentMethodValue'),
	payment_method='Other',
	basket=[],
	basketString;

if(customer_type_value=='1'){
  customer_type='returned';
};

if(payment_method!=undefined){
	if(payment_method_value=='0'){
		payment_method='Store Credit';
	}else if(payment_method_value=='1'){
 		payment_method='Credit Card';
	}else if(payment_method_value=='2'){
 		payment_method='Webmoney';
 	}else if(payment_method_value=='3'||payment_method_value=='4'){
 		payment_method='Boleto';
 	}else if(payment_method_value=='5'){
 		payment_method='Paypal';
 	};
 };

 if(cms_roi.url_params!=undefined){
	if(cms_roi.url_params["prx"]!=undefined){
		prx=cms_roi.url_params["prx"];
	}
	if(cms_roi.url_params["click_id"]!=undefined){
		prx=cms_roi.url_params["click_id"];
	}
};

for(var i=0;i<cms_roi.items.length;i++){
var item=cms_roi.items[i],
 	product={};
 	product.pid=item[1];
 	product.pn=item[2];
 	product.up=item[5];
 	product.pc=item[4];
 	product.qty=item[6];
 	basket.push(product);
 }; 
 basketString=JSON.stringify(basket); 
 (function(){ var img=new Image();img.src=src="https://cityadspix.com/track/"+cms_roi.orderId+"/ct/q1/c/4175?click_id="+click_id+"&prx="+prx+"&customer_type="+customer_type+"&payment_method="+payment_method+"&basket="+basketString;img.width=1;img.height=1;
}())
</script>


<script id="xcntmyAsync" type="text/javascript">

var cityads_product='';
var cityads_quantity='';
for(var i;i<cms_roi.items.length;i++){
	var spliter=',';
	if(i!=cms_roi.items.length-1){
		spliter='';
	}
	cityads_product=cityads_product+cms_roi.items[i][2];
	cityads_quantity=cityads_quantity+cms_roi.items[i][6];	
};
var xcnt_order_products = cityads_product; 
var xcnt_order_quantity = cityads_quantity; 
var xcnt_order_id = cms_roi.orderId; 
var xcnt_order_total = cms_roi.orderAmount; 

(function(){
var xscr = document.createElement( 'script' );
var xcntr = escape(document.referrer); xscr.async = true;
xscr.src = ( document.location.protocol === 'https:' ? 'https:' : 'http:' ) + '//x.cnt.my/async/track/?r=' + Math.random();
var x = document.getElementById( 'xcntmyAsync' );
x.parentNode.insertBefore( xscr, x );
}());
</script>
