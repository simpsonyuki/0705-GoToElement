window.onload = () =>{
    console.log("頁面載入完成~");
    // 取得單一元素
    // var test = document.getElementById("test");

    // 取得元素: 透過標籤取得所有(*)元素
    var elements = document.getElementsByTagName("*");

    for (let index = 0; index < elements.length; index++) {
        const e = elements[index];
        
        // 元素.點擊事件
        e.onclick = () => {
            var target = e.getAttribute("data-gte-target");   //目標屬性
            var offset = e.getAttribute("data-gte-offset");   //目標位移
    
            // console.log(target);
            // console.log(offset);
    
            if(target){
                
                var element = document.getElementById(target);   //目標元素
        
                // 視窗.捲動至({上方, 行為})
                window.scrollTo({
                    top: element.offsetTop - offset,   //取得上方位移(減掉的offset是html裡設定的data-gte-offset的值, 會讓區塊在移動的時候不會直接頂到視窗頂端,而是會多留data-gte-offset設定的位移高度)
                    behavior: "smooth",   //平滑移動
                })
            }
        }
    }

}