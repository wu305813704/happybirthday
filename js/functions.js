// variables

//打字等待时间
// var wait = 75;
var wait = 1;
//树叶生成速度
// var createSpeed = 1;
var createSpeed = 10;
//地面生成速度
// var footerSpeed = 1;
var footerSpeed = 10;
//树叶掉落速度
// var leafFallSpeed = 1;
var leafFallSpeed = 25;

var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function(callback) {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
					if (callback && typeof callback === "function") {
						callback();  // 在打字完成后调用回调函数
					}
				}
			}, wait);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"gradient-text\">爱你的</span><span style=\"color: red;\">第</span><span class=\"digit\">" + days + "</span> <span style=\"color: blue;\">天</span><span class=\"digit\">" + hours + "</span> <span style=\"color: green;\">小时</span><span class=\"digit\">" + minutes + "</span> <span style=\"color: orange;\">分钟</span><span class=\"digit\">" + seconds + "</span> <span style=\"color: purple;\">秒</span>";
	$("#clock-box").html(result);
}
// 提示数组
var errorMessages = [
    "想想我们第一次见面是什么时候~",
    "可以问一下AI倒推一下日期哦~",
    "是不是记错了？再试一次呢。",
    "别灰心，再想想看。",
    "日期格式应该是：20200520"
];
