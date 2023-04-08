document.getElementById('next_news').onclick = function(){
    const widthItem = document.querySelector('.item__news').offsetWidth;
    document.getElementById('formList__news').scrollLeft += widthItem;
}
document.getElementById('prev_news').onclick = function(){
    const widthItem = document.querySelector('.item__news').offsetWidth;
    document.getElementById('formList__news').scrollLeft -= widthItem;
}
  