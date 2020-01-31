const allButtons = document.querySelectorAll('.menu_item');
console.log(allButtons );

const chooseLevel = (elem) => {
    allButtons.forEach((item) => item.classList.removed("checked"));
    elem.target.classList.add("checked");
};

