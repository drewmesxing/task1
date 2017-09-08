//声明变量
var items = document.getElementsByClassName("item");
var starta = document.getElementById("starta");
var enda = document.getElementById("enda");
var color = [];
var indexArr = [];
function random(){
    //取三个随机值格子
    for(var i=0;i<3 ;i++){
        indexArr[i]=Math.floor(Math.random()*9);
    }
    if (indexArr[0]==indexArr[1]||indexArr[0]==indexArr[2]||indexArr[1]==indexArr[2]){    /*当三个数有两个相等时*/
        random();
    };
    console.log(indexArr);
    for(var i=0;i<3;i++){
        color[i]="#"+("00000"+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
        console.log(color);
    }
}
var timer;
function changeColor(){
    timer=setTimeout(changeColor,1200);    /*设置定时器的时间间隔*/
    //重置盒子为原始色
    for(var i = 0;i < items.length; i++){
        items[i].style.backgroundColor = 'orange';
    };
    random();
    //让盒子与颜色匹配
    for(var i = 0;i < 3; i++){
        items[indexArr[i]].style.backgroundColor = color[i];
    }
}

    //开始按钮
starta.onclick = function(){
    //调用函数
    changeColor();
};
enda.onclick = function(){
    //清除时间
    clearTimeout(timer);
    //还原原始色
    for(var i=0;i<items.length;i++){
        items[i].style.background = 'orange';
    };
};
