const randomColor = function () {
        const hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
                color = color + hex[Math.floor(Math.random() * 16)];

        }
        return color;
};
let interval
document.querySelector('#start').addEventListener('click', (e) => {
        interval = setInterval(() => {
                document.body.style.backgroundColor = randomColor();
        }, 200);

});
document.querySelector('#stop').addEventListener('click', (e) => {
        clearInterval(interval)
});