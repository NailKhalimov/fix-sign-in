import createInput from '../../components/widgets/Input/Input';
import createForm from '../../components/widgets/Form/Form';
import createButton from '../../components/widgets/Button/Button';
import createElementWithAttrs from '../../utils/createElementWithAttrs/index';

export default function Login() {
    interface InputField {
        name: string;
        class: string;
        type: string;
        required: boolean;
        onChangeHandler: any;
        placeholder: string;
    }

    const InputFields: InputField[] = [
        {
            name: 'input',
            class: 'login-form__content-input login-form__content_styled',
            type: 'email',
            required: true,
            onChangeHandler: 'asd',
            placeholder: 'Email'
        },
        {
            name: 'input',
            class: 'login-form__content-input login-form__content_styled',
            type: 'password',
            required: true,
            onChangeHandler: 'asd',
            placeholder: 'Password'
        }
    ]
    const Form: any = createElementWithAttrs({
        name: 'form',
        class: 'login-form'
    })(createForm());

    const Button: any = createElementWithAttrs({
        name: 'button',
        type: 'submit',
        class: 'login-form__content-button login-form__content_styled',
        content: 'Login'
    })(createButton());

    Button.appendChild(document.createTextNode('Login'));

    const Text = document.createElement('h1');
    Text.appendChild(document.createTextNode('Login'))

    Form.appendChild(Text)

    InputFields.map((fieldAttrs: object) => {
        Form.appendChild(createElementWithAttrs(fieldAttrs)(createInput()))
    })

    Form.appendChild(Button);

    return function(parentNode: any) {
        parentNode.appendChild(Form)
    };
}