import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import { getData } from "./js/weatherData";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

console.log(checkForName);
getData();
// alert("I EXIST")
console.log("CHANGE!!");

export { checkForName, handleSubmit, getData };
