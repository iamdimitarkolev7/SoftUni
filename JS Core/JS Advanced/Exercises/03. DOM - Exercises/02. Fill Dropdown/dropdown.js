function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');
    let element = document.createElement('option');
    element.textContent = text;
    element.value = value;
    menu.appendChild(element);
    document.getElementById('newItemText').value = "";
    document.getElementById('newItemValue').value = "";
}