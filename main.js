document.addEventListener('DOMContentLoaded', function () {
    function Slider({ nextBtnSelector, prevBtnSelector, listSelector }) {
        const nextBtn = document.querySelector(nextBtnSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const list = document.querySelector(listSelector);

        this.changeItem = function ({ active, newElement }) {
            if (newElement) {
                active.classList.remove('active');
                newElement.classList.add('active');
            }
        };
        this.sliderLength = list.querySelectorAll('li').length;

        function btnNotActive() {
            const activeLi = list.querySelector('.active');

            if (!activeLi.previousElementSibling) {
                prevBtn.classList.add('disabled');
            } else {
                prevBtn.classList.remove('disabled');
            }

            if (!activeLi.nextElementSibling) {
                nextBtn.classList.add('disabled');
            } else {
                nextBtn.classList.remove('disabled');
            }
        }
        btnNotActive();

        nextBtn.addEventListener('click', () => {
            const activeLi = list.querySelector('.active');
            this.changeItem({
                newElement: activeLi.nextElementSibling,
                active: activeLi,
            });
            btnNotActive();
        });

        prevBtn.addEventListener('click', () => {
            const activeLi = list.querySelector('.active');
            this.changeItem({
                newElement: activeLi.previousElementSibling,
                active: activeLi,
            });
            btnNotActive();
        });

        console.log(this);
    }

    const slider1 = new Slider({
        nextBtnSelector: '.js--slider__next',
        prevBtnSelector: '.js--slider__prev',
        listSelector: '.js--list',
    });

    const slider2 = new Slider({
        nextBtnSelector: '.js--slider__next2',
        prevBtnSelector: '.js--slider__prev2',
        listSelector: '.js--list2',
    });
});
