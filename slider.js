// let position = 0;
// const slidesToShow = 4;
// const slidesToScroll = 1;
// const container = document.querySelector('.slider-container');
// const track = document.querySelector('.slider-track');
// const btnPrev = document.querySelector('.prevbtn');
// const btnNext = document.querySelector('.nextbtn');
// const items = document.querySelectorAll('.slider-item')
// const itemsCount = document.querySelectorAll('.slider-item').length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) =>{
//   item.style.minWidth = `${itemWidth}px`;
// });

// btnNext.addEventListener('click', () =>{
// const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
// position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
// setPosition();
// checkBtns();
// });

// btnPrev.addEventListener('click', () => {
//   const itemsLeft = Math.abs(position) / itemWidth;
//   position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//   setPosition();
//   checkBtns();
// })

// const setPosition = () => {
//   track.style.transform = `translateX(${position}px)`;
// }

// const checkBtns = () => {
//   btnPrev.disabled = position === 0;
//   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// };

//   checkBtns();
