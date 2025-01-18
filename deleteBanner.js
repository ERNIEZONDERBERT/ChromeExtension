if(typeof init === 'undefined') {
    const del = function () {
        const warningDiv = document.querySelector('#bot-warning');
        if (warningDiv) {
            document.body.removeChild(warningDiv);
            document.querySelector('#root').style.marginTop = `0`;
        }
    }
    del();
}