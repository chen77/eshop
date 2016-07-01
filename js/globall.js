// <!--ad广告切换-->
$(function() {
	$("#ad").each(function() {
		var t = $(this).find("ul");
		var v = $(this).find(".ad-view");
		t.find("li").hover(function() {
			var cmp = $(this).index();
			t.find("li").removeClass("hover");
			$(this).addClass("hover");
			v.find("a").hide().eq(cmp).show();
		})
	})
})


// <!--top-list切换-->
$(".flod-list li").hover(function() {
	if ($(this).find(".info").is(":hidden")) {
		$(".flod-list li").find(".info").slideUp();
		$(this).find(".info").slideDown();
	}
});
// <!--banner切换-->
$(function() {
		$(".banner-img").each(function() {
			var t = $(this).find("ul");
			var v = $(this).find(".banner-view");
			t.find("li").hover(function() {
				var cmp = $(this).index();
				t.find("li").removeClass("hover");
				$(this).addClass("hover");
				v.find("a").hide().eq(cmp).show();
			})
		})
	})
	// <!--购物车切换-->
$(".my-buy .buy-button1").hover(function() {
		$(this).find(".buy-info").show();
	},
	function() {
		$(this).find(".buy-info").hide();
	})

$(".my-buy .buy-button2").hover(function() {
		$(this).find(".buy-cart").show();
	},
	function() {
		$(this).find(".buy-cart").hide();
	})

// <!--所有商品导航显示-->		
$(".inside .nav-container .all-nav").hover(function() {
		$(this).find(".sup-nav").show();
	},
	function() {
		$(this).find(".sup-nav").hide();
	})

// <!--热购产品切换-->

$(function() {
		$(".tab .content .tunnel").width($(this).find(".photos").width() * $(this).find(".photos").length);
		$(".tab .content").each(function() {
			var pht_next = $(this).find(".photos");
			pht_next.each(function() {
				var tunl = $(this).find(".tunnel-next");
				tunl.width($(this).find(".gallery").width() * $(this).find(".gallery").length)
			})
		})
		$(".tab").each(function() {
			var n_tab = $(this).find(".h3");
			var tunnel = $(this).find(".tunnel");
			n_tab.each(function() {
				var h3_a = $(this).find("li");
				h3_a.hover(function() {
					var cmp = $(this).index();
					h3_a.removeClass("visted")
					$(this).addClass("visted")
					n_tab.find(".slider-nav").stop().animate({
						left: (h3_a.width()) * cmp
					})
					tunnel.stop().animate({
						left: -(cmp * (tunnel.find(".photos").width()))
					})
				})
			})
		})
	})
	// <!--产品详细内容tab切换--
$(function() {
	$(".pro-wrapper .tab").each(function() {
		var t = $(this).find("ul");
		var v = $(this).find(".tab-view");
		t.find("li").hover(function() {
			var cmp = $(this).index();
			t.find("li").removeClass("hover");
			$(this).addClass("hover");
			v.find(".tab-info").hide().eq(cmp).show();
		})
	})
})
// 产品详细颜色选择
$(function(){
	$("#proSelect a").each(function(){
		$(this).click(function(){
			$(this).addClass("act").parent().siblings().find("a").removeClass("act");
		})
	})
})
$(function(){
	$("#verSelect a").each(function(){
		$(this).click(function(){
			$(this).addClass("act").siblings().removeClass("act");
		})
	})
})