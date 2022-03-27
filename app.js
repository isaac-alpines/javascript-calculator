let display = document.getElementById('display');
let display_history = document.getElementById('display-history');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                display_history.innerText = '';
                break;
            case '=':
                try{
                    display_history.innerText = display.innerText;
                    display.innerText = eval(display.innerText);

                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'del':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;           
        }
    });
});