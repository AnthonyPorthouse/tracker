// Events
document.addEventListener('tracker:roundChanged', function(e) {
    let round = e.detail.round;
    let step = e.detail.step;
    document.querySelector('#round').innerHTML = round + 1;

    let i = 0;
    Array.prototype.forEach.call(document.querySelectorAll('#tracker li'), function(el, index) {
        if (index == step) {
            el.className = 'active';
        } else {
            el.className = '';
        }

        i++;
    });
});

document.addEventListener('tracker:EntityListUpdated', function(e) {
    let entityList = e.detail.entityList;
    let el = document.querySelector('#tracker');
    let string = '<ul>';
    entityList.getList().forEach(function(element, index) {
        let active = (index == 0) ? 'class="active"' : '';
        string += `<li ${active}>${element.toString()}</li>`;
    });
    string += '</ul>';
    el.innerHTML = string;
});

document.addEventListener('tracker:alert', function(e) {
    alert(e.detail.message);
});
