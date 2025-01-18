if(typeof init === 'undefined'){
    const init = function(){
        warningDiv = document.createElement('div');
        warningDiv.textContent = 'watch out this user might be a bot';
        warningDiv.style.backgroundColor = 'red';
        warningDiv.style.color = 'white';
        warningDiv.style.padding = '10px';
        warningDiv.style.margin = '0';
        warningDiv.style.borderRadius = '5px';
        warningDiv.style.position = 'fixed';
        warningDiv.style.top = '0';
        warningDiv.style.width = '100%';
        warningDiv.style.zIndex = '1000';
        warningDiv.id = 'bot-warning';
        document.body.appendChild(warningDiv);

        // Add margin to the top of the body to prevent overlap
        document.querySelector('#root').style.marginTop = `${warningDiv.offsetHeight}px`;
    }
    init();
}