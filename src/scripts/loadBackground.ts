const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

let imagen:any = document.getElementsByTagName('body')[0];
imagen.style.backgroundImage = `url('https://archivos-sanss.s3.amazonaws.com/imgs/backgrounds/${getRandomInt(2)}.webp')`;