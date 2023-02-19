import ButtonItem from "./ButtonItem.js";
import buttons from "./buttons.js";

const ButtonList = (active) => {
    return(`
    ${buttons.map(button => {
        return(ButtonItem(button, active));
    }).join('')}
    `);
}

export default ButtonList;