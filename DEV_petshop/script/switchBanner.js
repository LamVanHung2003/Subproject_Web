// khai báo biến và lấy giá trị
const slider = document.querySelector('.slider');
const banners = document.querySelectorAll('.slider-banner');
const toggleLeft = document.querySelector('.slider-toggle-left');
const toggleRight = document.querySelector('.slider-toggle-right');
let currentBanner = 0;
// Thêm banner đầu tiên ở cuối danh sách banner
const firstBannerClone = banners[0].cloneNode(true);
slider.querySelector('.slider-banners').appendChild(firstBannerClone);
function switchBanner(direction) {
if (direction === 'left') {
// console.log("a."+ currentBanner);
currentBanner--;
// console.log("b."+ currentBanner);
if (currentBanner < 0) {
// console.log("1."+ banners.length);
currentBanner = banners.length;
slider.querySelector('.slider-banners').style.transition = 'none';
slider.querySelector('.slider-banners').style.transform = `translateX(-${(banners.length) * 100}%)`;
// console.log("c."+ currentBanner);
setTimeout(() => {
slider.querySelector('.slider-banners').style.transition = 'transform 0.5s ease-out';
currentBanner = banners.length - 1;
slider.querySelector('.slider-banners').style.transform = `translateX(-${currentBanner * 100}%)`;
// console.log("d."+ currentBanner);
}, 10);
}
} else if (direction === 'right') {
// console.log("a."+ currentBanner);
currentBanner++;
// console.log("b."+ currentBanner);
if (currentBanner > banners.length) {
// console.log("1."+ banners.length);
currentBanner = 0;
slider.querySelector('.slider-banners').style.transition = 'none';
slider.querySelector('.slider-banners').style.transform = `translateX(-${currentBanner * 100}%)`;
// console.log("c."+ currentBanner);
setTimeout(() => {
slider.querySelector('.slider-banners').style.transition = 'transform 0.5s ease-out';
currentBanner = 1;
slider.querySelector('.slider-banners').style.transform = `translateX(-${currentBanner * 100}%)`;
// console.log("d."+ currentBanner);
}, 10);
}
}
else {
return;
}
slider.querySelector('.slider-banners').style.transform = `translateX(-${currentBanner * 100}%)`;
}
toggleLeft.addEventListener('click', () => {
switchBanner('left');
});
toggleRight.addEventListener('click', () => {
switchBanner('right');
});