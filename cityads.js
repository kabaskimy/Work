! function (t, e) {
    function r(t, e) {
        return "undefined" != typeof e && "" != e ? "&" + t + "=" + encodeURIComponent(e) : ""
    }
    if (t.body) {
        var a = (new Date).getTimezoneOffset(),
            o = "xcnt_product_",
            c = "xcnt_basket_",
            n = "xcnt_order_",
            d = "xcnt_user_",
            _ = "xcnt_transport_",
            i = "xcnt_accomodation_",
            s = "xcnt_tour_",
            p = "",
            u = "";
        if (e == e.parent) p = t.location.hostname, u = t.location.href;
        else if ("" != t.referrer) {
            var h = t.createElement("a");
            h.href = t.referrer, p = h.hostname, u = t.referrer
        }
        var l = "//x.cnt.my/px/?r=" + Math.random() + r("dom", p) + "&tz=" + a + "&sw=" + screen.width + "&sh=" + screen.height + "&scd=" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth) + r("p_id", e[o + "id"]) + r("p_category", e[o + "category"]) + r("b_products", e[c + "products"]) + r("b_quantity", e[c + "quantity"]) + r("o_id", e[n + "id"]) + r("o_products", e[n + "products"]) + r("o_quantity", e[n + "quantity"]) + r("o_total", e[n + "total"]) + r("o_cur", e[n + "currency"]) + r("u_email", e[d + "email"]) + r("u_id", e[d + "id"]) + r("t_t", e[_ + "type"]) + r("t_company", e[_ + "company"]) + r("t_from", e[_ + "from"]) + r("t_to", e[_ + "to"]) + r("t_dtdep", e[_ + "depart_date"]) + r("t_dtret", e[_ + "return_date"]) + r("t_dur", e[_ + "duration"]) + r("t_cur", e[_ + "currency"]) + r("t_prc", e[_ + "price"]) + r("t_adu", e[_ + "adults"]) + r("t_chi", e[_ + "children"]) + r("t_chiage", e[_ + "children_age"]) + r("t_class", e[_ + "class"]) + r("a_t", e[i + "type"]) + r("a_loc", e[i + "location"]) + r("a_id", e[i + "id"]) + r("a_dtin", e[i + "checkin_date"]) + r("a_dtout", e[i + "checkout_date"]) + r("a_dprc", e[i + "day_price"]) + r("a_cur", e[i + "currency"]) + r("a_adu", e[i + "adults"]) + r("a_chi", e[i + "children"]) + r("a_chiage", e[i + "children_age"]) + r("a_rooms", e[i + "rooms"]) + r("to_id", e[s + "id"]) + r("to_loc", e[s + "location"]) + r("to_dtstfr", e[s + "start_date_from"]) + r("to_dtstto", e[s + "start_date_to"]) + r("u", e[d + "data"]) + r("url", u) + r("ref", t.referrer),
            m = t.createElement("img");
        m.id = "xcnt-img-" + Math.random(), m.width = "0", m.height = "0", m.style.cssText = "display:none !important;width:0 !important;height:0 !important;", m.src = l.substr(0, 2048), t.body.appendChild(m);
        var y = t.createElement("script");
        y.async = 1, y.src = "//x.cnt.my/async/parser/" + p + ".js?r=1" + r("dom", p), t.body.appendChild(y)
    }
}(document, window);



var l = "//x.cnt.my/px/?r=" 
+ Math.random() 
+ r("dom", p) 
+ "&tz=" + a + "
&sw=" + screen.width + 
"&sh=" + screen.height + 
"&scd=" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth) + 
r("p_id", e[o + "id"]) + 
r("p_category", e[o + "category"]) + 
r("b_products", e[c + "products"]) + 
r("b_quantity", e[c + "quantity"]) + 
r("o_id", e[n + "id"]) + 
r("o_products", e[n + "products"]) + 
r("o_quantity", e[n + "quantity"]) + 
r("o_total", e[n + "total"]) + 
r("o_cur", e[n + "currency"]) + 
r("u_email", e[d + "email"]) + 
r("u_id", e[d + "id"]) + 
r("t_t", e[_ + "type"]) + 
r("t_company", e[_ + "company"]) + 
r("t_from", e[_ + "from"]) + 
r("t_to", e[_ + "to"]) + 
r("t_dtdep", e[_ + "depart_date"]) + 
r("t_dtret", e[_ + "return_date"]) + 
r("t_dur", e[_ + "duration"]) + 
r("t_cur", e[_ + "currency"]) + 
r("t_prc", e[_ + "price"]) + 
r("t_adu", e[_ + "adults"]) + 
r("t_chi", e[_ + "children"]) + 
r("t_chiage", e[_ + "children_age"]) + 
r("t_class", e[_ + "class"]) + 
r("a_t", e[i + "type"]) + 
r("a_loc", e[i + "location"]) + 
r("a_id", e[i + "id"]) + 
r("a_dtin", e[i + "checkin_date"]) + 
r("a_dtout", e[i + "checkout_date"]) + 
r("a_dprc", e[i + "day_price"]) + 
r("a_cur", e[i + "currency"]) + 
r("a_adu", e[i + "adults"]) + 
r("a_chi", e[i + "children"]) + 
r("a_chiage", e[i + "children_age"]) + 
r("a_rooms", e[i + "rooms"]) + 
r("to_id", e[s + "id"]) + 
r("to_loc", e[s + "location"]) + 
r("to_dtstfr", e[s + "start_date_from"]) + 
r("to_dtstto", e[s + "start_date_to"]) + 
r("u", e[d + "data"]) + 
r("url", u) + 
r("ref", t.referrer),