import createInput from '../../components/widgets/Input/Input';
import createForm from '../../components/widgets/Form/Form';
import createButton from '../../components/widgets/Button/Button';
import createElementWithAttrs from '../../utils/createElementWithAttrs/index';
import addTextToElement from '../../utils/addTextToElement/index';
import { InputFieldsAttrs, ButtonAttrs, FormAttrs } from './Fields'; 
import './style.scss';

export default function Login() {
    const Form: HTMLElement = createElementWithAttrs(FormAttrs)(createForm());
    const Button: HTMLElement = createElementWithAttrs(ButtonAttrs)(createButton());
    const Text: HTMLElement = document.createElement('h1');
    addTextToElement(Button, 'Login');
    addTextToElement(Text, 'Login');
    
    Form.appendChild(Text);

    InputFieldsAttrs.map((attr: object) => {
        Form.appendChild(createElementWithAttrs(attr)(createInput()))
    })

    Form.appendChild(Button);

    return function(parentNode: any) {
        parentNode.appendChild(Form)
    };
}