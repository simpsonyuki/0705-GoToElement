window.onload = () =>{
    console.log("頁面載入完成~");

    var test = document.getElementById("test");

    test.onclick = () => {
        var target = test.getAttribute("data-gte-target");
        var offset = test.getAttribute("data-gte-offset");

        console.log(target);
        console.log(offset);

    }
}