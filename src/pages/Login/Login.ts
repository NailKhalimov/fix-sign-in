import createInput from '../../components/widgets/Input/Input';
import createForm from '../../components/widgets/Form/Form';
import createButton from '../../components/widgets/Button/Button';

import addChild from '../../utils/addChild/index';

export default function Login() {
    interface InputField {
        name: string;
        class: string;
        type: string;
        required: boolean;
        onChangeHandler: any;
    }

    interface FormLogin {
        name: string
    }

    const form: any = createForm();

    const fields: InputField[] = [
        {
            name: 'input',
            class: 'log-in-form__content-input',
            type: 'email',
            required: true,
            onChangeHandler: 'asd'
        },
        {
            name: 'input',
            class: 'log-in-form__content-input',
            type: 'password',
            required: true,
            onChangeHandler: 'asd'
        },
    ]

    const formAttrs: FormLogin[] = [
        {
            name: 'form',
        }
    ]

    fields.map((fieldAttrs: object) => {

    })

    return;
}