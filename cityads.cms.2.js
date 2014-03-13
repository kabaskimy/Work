ArraytoString(a){
	var str='null';
	if（a){

	  str='[';
	  if

}
}



function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1; 
    c_end=document.cookie.indexOf(";",c_start);
    if (c_end==-1) c_end=document.cookie.length;
    return unescape(document.cookie.substring(c_start,c_end));
    } 
  }
return ""
};

var click_id=getCookie('click_id');
var prx=getCookie('prx');
var customer_type_value=getCookie('ClientTypeValue');
var customer_type='new';
if(customer_type_value=='1')
{
  customer_type='returned';
}
var payment_method_value=getCookie('PaymentMethodValue');
var payment_method='Other';
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
 var basket=[];
 for(var i=0;i<cms_roi.items.length;i++){
 var item=cms_roi.items[i];
 var product={};
 product.pid=item[1];
 product.pn=item[2];
 product.up=item[5];
 product.pc=item[4];
 product.qty=item[6];
 basket.push(product);
 }; 
 var basketString=JSON.stringify(basket); 
 (function(){ var img=new Image();img.src=src="https://cityadspix.com/track/"+cms_roi.orderId+"/ct/q1/c/12345?click_id="+click_id+"&prx="+prx+"&customer_type="+customer_type+"&payment_method="+payment_method+"&basket="+basketString;img.width=1;img.height=1;
}())

1,  the target_name parameter is a const,and its value will always to be "q1" in this case ?

2,  you will pass the values of click_id and prx parameters to us when redirect to our website ?

3,  partner_id is a const value for us,which is our identfier for your system?