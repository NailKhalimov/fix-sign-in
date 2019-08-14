import './style.scss';
import {hi} from './utils/index'

hi();

document.body.innerHTML = `
    <section>
        <form class="log-in-form">
            <input class="log-in-form__content-input log-in-form__content_styled">
            <input class="log-in-form__content-input log-in-form__content_styled">
            <button class="log-in-form__content-button log-in-form__content_styled">Log In</button>
        </form>
    </section>
`
