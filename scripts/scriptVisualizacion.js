document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if(localStorage.length!==0 && document.getElementById('dateInput').value){
        const dateInput = document.getElementById('dateInput').value;
        const [year, month, day] = dateInput.split('-');

        const formattedDate = `${day}/${month}/${year}`;
        console.log(formattedDate);
        let found=false;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            //en caso que se halle una llave con esta fecha, se revisa si es del 5N, 7N o 6S, y segun eso, se guarda el JSON correspondiente para mostrarse
            const keyDatePart = key.split('-')[0]; 
            const keyRoomPart = key.split('-')[1]; 
            console.log(keyDatePart);
            if (keyDatePart === formattedDate) {
                found=true;
                if(keyRoomPart==="5N"){
                    const registroPara5N=JSON.parse(localStorage.getItem(key));
                }else if(keyRoomPart==="7N"){
                    const registroPara7N=JSON.parse(localStorage.getItem(key));
                }else if(keyRoomPart==="6S"){
                    const registroPara6S =JSON.parse(localStorage.getItem(key));   
                }
            }
        }
        if(found){
            redirectTo('review-date', 'selection-of-service');
            Registros6S.forEach((registro, index) => {
                const formGroup = document.createElement('div');
                formGroup.className = 'form-group';
        
                const h4 = document.createElement('h4');
                h4.class = `servicio-${index}-procedencia-visual`;
                h4.textContent = registro.nombre;
        
                const p = document.createElement('p');
                p.class = `servicio-${index}-cantidad`;
                p.textContent = registro.cantidad;
        
                formGroup.appendChild(h4);
                formGroup.appendChild(p);
                form.appendChild(formGroup);
            });
        }else{
            alert("No hay registros de esta fecha, por favor prueba con otra")
        }

    }else if(!document.getElementById('dateInput').value){
        alert("Por favor escoge una fecha");
    }else{
        alert("No hay registros de alguna sala")
    }

    
});

document.getElementById('selecService').addEventListener('submit', function(event) {
    event.preventDefault();

    var act = event.submitter.value;
    if (act === '5N') {}
});

