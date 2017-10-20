/**
 * Created by 李靖 on 2017/10/19.
 */

app.directive("serve", function () {
    return {
        restrict: "EA",
        templateUrl: "./App/Views/template/_serve.html",
        scope: {
            objs: "=users",
            car:"=car"
        },
        link:function(){
            var flash = new Swiper(".flash",{
                autoplay:2000,
                loop:true,
                autoplayDisableOnInteraction:false,
                pagination:".swiper-pagination",
                paginationClickable:true,
                effect:"fade"

            });
            var myScroll = new IScroll('#wrapper', {
                scrollX: true
            });

        }
    }
});