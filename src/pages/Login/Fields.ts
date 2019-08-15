interface FormInput {
    name: string;
    class: string;
    type: string;
    required: boolean;
    placeholder: string;
    autofocus: boolean;
}

interface FormButton {
    name: string;
    type: string;
    class: string;
    content: string;
}

interface Form {
    name: string;
    class: string;
}

export const InputFieldsAttrs: FormInput[] = [
    {
        name: 'input',
        class: 'login-form__content-input login-form__content_styled',
        type: 'email',
        required: true,
        placeholder: 'Email',
        autofocus: true
    },
    {
        name: 'input',
        class: 'login-form__content-input login-form__content_styled',
        type: 'password',
        required: true,
        placeholder: 'Password',
        autofocus: false
    }
]

export const ButtonAttrs: FormButton = {
    name: 'button',
    type: 'submit',
    class: 'login-form__content-button login-form__content_styled',
    content: 'Login'
}

export const FormAttrs: Form = {
    name: 'form',
    class: 'login-form'
}