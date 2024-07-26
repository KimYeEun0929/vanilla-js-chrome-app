const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

//bgImage.id = 'bg';

//document.body.style.background(bgImage);

//document.body.appendChild(bgImage);

// 배경 이미지 설정
document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.height = '100vh';
document.body.style.width = '100vw';
document.body.style.backgroundSize = 'cover'; // 배경 이미지 크기 조절 (선택 사항)
