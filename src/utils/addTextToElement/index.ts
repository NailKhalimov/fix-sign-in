export default function addTextToElement(element: HTMLElement, text: string) {
    element.appendChild(document.createTextNode(text));
}