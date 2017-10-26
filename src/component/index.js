export default function component() {
    console.log("Iam updated");
    var element = document.createElement('div');
    element.classList.add('hello');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}