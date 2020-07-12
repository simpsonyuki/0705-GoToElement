window.onload = () =>{
    console.log("頁面載入完成~");
    // 取得元素
    var test = document.getElementById("test");
    // 元素.點擊事件
    test.onclick = () => {
        var target = test.getAttribute("data-gte-target");   //目標屬性
        var offset = test.getAttribute("data-gte-offset");   //目標位移

        // console.log(target);
        // console.log(offset);

        var element = document.getElementById(target);   //目標元素

        // 視窗.捲動至({上方, 行為})
        window.scrollTo({
            top: element.offsetTop - offset,   //取得上方位移(減掉的offset是html裡設定的data-gte-offset的值, 會讓區塊在移動的時候不會直接頂到視窗頂端,而是會多留data-gte-offset設定的位移高度)
            behavior: "smooth",   //平滑移動
        })
    }
}