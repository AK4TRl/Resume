function clickToBigImg(id){//绑定图片函数
    var imgsrc = $('#'+id).attr("src");
    //alert (imgsrc);
    var opacityBottom = '<div id="opacityBottom" style="display: none"><img class="bigImg" src="'+ imgsrc +'" ></div>';
    $(document.body).append(opacityBottom);
    toBigImg();
}
function toBigImg(){
    $("#opacityBottom").addClass("opacityBottom");
    $("#opacityBottom").show();
    $("#opacityBottom").bind("click",clickToSmallImg);
    $(".bigImg").bind("click",clickToSmallImg);
    function clickToSmallImg() {
        $("#opacityBottom").remove();
    }
};