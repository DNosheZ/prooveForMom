document.getElementById('menuForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var action = event.submitter.value;

    if (action === 'register') {
        window.location.href = 'registro.html';
    } else if (action === 'view') {
        //revisara si hay info para visualizar, la info 
        window.location.href = 'visualizacion.html';
    }
});