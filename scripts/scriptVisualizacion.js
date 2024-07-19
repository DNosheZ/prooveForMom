let registroPara5N;
let registroPara7N;
let registroPara6S;

document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (localStorage.length !== 0 && document.getElementById('dateInput').value) {
        const dateInput = document.getElementById('dateInput').value;
        const [year, month, day] = dateInput.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        console.log(formattedDate);

        let found = false;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const keyDatePart = key.split('-')[0];
            const keyHourPart = key.split('-')[1];
            const keyRoomPart = key.split('-')[2];
            console.log(keyHourPart);
            if (keyDatePart === formattedDate) {
                found = true;
                if (keyRoomPart === "registro5N") {
                    registroPara5N = JSON.parse(localStorage.getItem(key));
                    console.log(registroPara5N);
                } else if (keyRoomPart === "registro7N") {
                    registroPara7N = JSON.parse(localStorage.getItem(key));
                    console.log(registroPara7N);
                } else if (keyRoomPart === "registro6S") {
                    registroPara6S = JSON.parse(localStorage.getItem(key));
                    console.log(registroPara6S);
                }
            }
        }
        if (found) {
            document.getElementById("register-option").style.display='none';
            redirectTo('review-date', 'selection-of-service');
        } else {
            alert("No hay registros de esta fecha, por favor prueba con otra");
        }
    } else if (!document.getElementById('dateInput').value) {
        alert("Por favor escoge una fecha");
    } else {
        alert("No hay registros de alguna sala");
    }
});
//la idea es que se muestre una tabla con los registros por hora, del dia escogido
//al escogerse una hora, se desplegara el menu para seleccionar el servicio del que se quiera revisar registro
document.getElementById('select-service-to-visualizate').addEventListener('submit', function(event) {
    event.preventDefault();

    const bedsDiv = document.getElementById("bedsVisualization");
    const act = event.submitter.value;

    bedsDiv.innerHTML = ''; // Limpiar el contenido existente
    if (act === '5N' && registroPara5N) {
        redirectTo('selection-of-service', 'service-visualization');
        document.getElementById('visualizacion-sala-i').innerHTML = "5N";
        console.log(registroPara5N);
        registroPara5N.forEach(servicio => {
            const serviceElement = document.createElement('div');
            serviceElement.className="form-container";
            const h4=document.createElement('h4');
            const p=document.createElement('p');
            h4.textContent=`${servicio.nombre} : `;
            p.textContent=`${servicio.cantidad}`;
            serviceElement.appendChild(h4);
            serviceElement.appendChild(p);
            bedsDiv.appendChild(serviceElement);
        });
    } else if (act === '7N' && registroPara7N) {
        redirectTo('selection-of-service', 'service-visualization');
        document.getElementById('visualizacion-sala-i').innerHTML = "7N";
        console.log(registroPara7N);
        registroPara7N.forEach(servicio => {
            const serviceElement = document.createElement('div');
            serviceElement.className="form-container";
            const h4=document.createElement('h4');
            const p=document.createElement('p');
            h4.textContent=`${servicio.nombre} : `;
            p.textContent=`${servicio.cantidad}`;
            serviceElement.appendChild(h4);
            serviceElement.appendChild(p);
            bedsDiv.appendChild(serviceElement);
        }); 
        bedsDiv.appendChild();
    } else if (act === '6S' && registroPara6S) {
        redirectTo('selection-of-service', 'service-visualization');
        document.getElementById('visualizacion-sala-i').innerHTML = "6S";
        console.log(registroPara6S);
        registroPara6S.forEach(servicio => {
            const serviceElement = document.createElement('div');
            serviceElement.className="form-container";
            const h4=document.createElement('h4');
            const p=document.createElement('p');
            h4.textContent=`${servicio.nombre} : `;
            p.textContent=`${servicio.cantidad}`;
            serviceElement.appendChild(h4);
            serviceElement.appendChild(p);
            bedsDiv.appendChild(serviceElement);
        });
    } else {
        alert("No hay datos disponibles para esta sala.");
    }
});
document.getElementById('back-visualization-room-to-general-form').addEventListener('submit', function(event) {
    event.preventDefault();
    redirectTo('service-visualization','selection-of-service');
});
document.getElementById('back-from-visualization-form').addEventListener('submit', function(event) {
    event.preventDefault();
    redirectTo('selection-of-service','review-date');
    document.getElementById("register-option").style.display='block';
});
document.getElementById('back-from-date-select-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'menu.html';
});