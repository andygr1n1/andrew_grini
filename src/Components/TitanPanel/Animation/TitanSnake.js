export const titanAnimation = (obj, content, toggle) => {
    if (toggle) {
        let width = 5;
        obj.style.background =  "#262426";
        obj.style.boxShadow = "1px 1px 1px 1px #333";
        const maximo = () => {
            const snakeEffect = requestAnimationFrame(maximo);
            obj.style.width = `${width}%`
            width += 5;
            if (width > 101) {
                cancelAnimationFrame(snakeEffect);
                content.style.display = "flex";
            }
        }
        maximo();
    }
    else {
        let width = 100;
        content.style.display = "none";
        const reducto = () => {
            const snakeEffect = requestAnimationFrame(reducto);
            obj.style.width = `${width}%`
            width -= 5;
            if (width < 4) {
                obj.style.background = "none";
                obj.style.boxShadow = "none";
                cancelAnimationFrame(snakeEffect);
            }
        }
        reducto();
    }
}
