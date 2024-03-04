function show_menu(){
    document.getElementById("myDropdown").classList.toggle('show');
}

window.onclick = function(event){
    if (!event.target.matches('#drop-btn')){
        let dropdowns = document.getElementsByClassName('drop-content');
        let i;

        for(i=0; i < dropdowns.length; i++){
            let open_dropdown = dropdowns[i];

            if(open_dropdown.classList.contains('show')){
                open_dropdown.classList.remove('show');
            }
        }
    }
}