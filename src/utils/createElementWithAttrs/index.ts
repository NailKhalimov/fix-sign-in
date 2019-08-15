export default function createElementWithAttrs(attrs: object) {
    return function (element: any) {
        return attrs 
        ? Object.entries(attrs).reduce((accumulator: any, [key, value]) => {
            accumulator.setAttribute(key, value);
            return accumulator;
        }, element)
        : element;
    }
}