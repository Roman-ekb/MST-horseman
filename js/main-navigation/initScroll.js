let navigation = document.querySelector(".header__main-navigation-wrapper")

const onScroll = () => {
    if (window.scrollY > 0) {
        navigation.classList.add('header__main-navigation--fixed');
    }
    else {
        navigation.classList.remove('header__main-navigation--fixed');
    }
};

const initScroll = () => {
    window.addEventListener('scroll', onScroll);
};

export {initScroll};