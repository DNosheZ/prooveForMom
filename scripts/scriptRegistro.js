const Registros5N=[
    {
        servicio:"MI",
        nombre:'Medicina interna',
        cantidad,
    },
    {
        servicio:"CG",
        nombre:"Cirugia general",
        cantidad,
    },
    {
        servicio:"OTP",
        nombre:"Ortopedia",
        cantidad,
    },
    {
        servicio:"URG",
        nombre:"Urologia",
        cantidad,
    },
    {
        servicio:"GNK",
        nombre:"Ginecologia",
        cantidad,
    },
    {
        servicio:"CXP",
        nombre:"CX Plastica",
        cantidad,
    },
    {
        servicio:"CXV",
        nombre:"CX Vascular",
        cantidad,
    },
    {
        servicio:"IFT",
        nombre:"Infectologia",
        cantidad,
    },
    {
        servicio:"NRG",
        nombre:"Neurocirugia",
        cantidad,
    },
    {
        servicio:"MXF",
        nombre:"Maxilofacial",
        cantidad,
    },
    {
        servicio:"CXT",
        nombre:"Cirugia de torax",
        cantidad,
    },
    {
        servicio:"OTR",
        nombre:"Otorrino",
        cantidad,
    },
    {
        servicio:"HMT",
        nombre:"Hematologia",
        cantidad,
    },
    {
        servicio:"PSQ",
        nombre:"Psiquiatria",
        cantidad,
    },
    {
        servicio:"CXH",
        nombre:"CX Hepatobiliar",
        cantidad,
    },
    {
        servicio:"DMT",
        nombre:"Dermatologia",
        cantidad,
    },
    {
        servicio:"HPL",
        nombre:"Hepatologia",
        cantidad,
    },
    {
        servicio:"NRL",
        nombre:"Neurologia",
        cantidad,
    },
    {
        servicio:"NFL",
        nombre:"Nefrologia",
        cantidad,
    },
    {
        servicio:"MEDD",
        nombre:"MED Dolor",
        cantidad,
    },
    {
        servicio:"ALL",
        nombre:"Alergologia",
        cantidad,
    },
    {
        servicio:"TXL",
        nombre:"Toxicologia",
        cantidad,
    },
    {
        servicio:"P900",
        nombre:"Programa 900",
        cantidad,
    },
];

const Registros6S=[
    {
        servicio:"MI",
        nombre:'Medicina interna',
        cantidad,
    },
    {
        servicio:"CG",
        nombre:"Cirugia general",
        cantidad,
    },
    {
        servicio:"OTP",
        nombre:"Ortopedia",
        cantidad,
    },
    {
        servicio:"URG",
        nombre:"Urologia",
        cantidad,
    },
    {
        servicio:"GNK",
        nombre:"Ginecologia",
        cantidad,
    },
    {
        servicio:"CXP",
        nombre:"CX Plastica",
        cantidad,
    },
    {
        servicio:"CXV",
        nombre:"CX Vascular",
        cantidad,
    },
    {
        servicio:"IFT",
        nombre:"Infectologia",
        cantidad,
    },
    {
        servicio:"NRG",
        nombre:"Neurocirugia",
        cantidad,
    },
    {
        servicio:"MXF",
        nombre:"Maxilofacial",
        cantidad,
    },
    {
        servicio:"CXT",
        nombre:"Cirugia de torax",
        cantidad,
    },
    {
        servicio:"OTR",
        nombre:"Otorrino",
        cantidad,
    },
    {
        servicio:"HMT",
        nombre:"Hematologia",
        cantidad,
    },
    {
        servicio:"PSQ",
        nombre:"Psiquiatria",
        cantidad,
    },
    {
        servicio:"CXH",
        nombre:"CX Hepatobiliar",
        cantidad,
    },
    {
        servicio:"DMT",
        nombre:"Dermatologia",
        cantidad,
    },
    {
        servicio:"HPL",
        nombre:"Hepatologia",
        cantidad,
    },
    {
        servicio:"NRL",
        nombre:"Neurologia",
        cantidad,
    },
    {
        servicio:"NFL",
        nombre:"Nefrologia",
        cantidad,
    },
    {
        servicio:"MEDD",
        nombre:"MED Dolor",
        cantidad,
    },
    {
        servicio:"ALL",
        nombre:"Alergologia",
        cantidad,
    },
    {
        servicio:"TXL",
        nombre:"Toxicologia",
        cantidad,
    },
    {
        servicio:"P900",
        nombre:"Programa 900",
        cantidad,
    },
];

const Registros7N=[
    {
        servicio:"MI",
        nombre:'Medicina interna',
        cantidad,
    },
    {
        servicio:"CG",
        nombre:"Cirugia general",
        cantidad,
    },
    {
        servicio:"OTP",
        nombre:"Ortopedia",
        cantidad,
    },
    {
        servicio:"URG",
        nombre:"Urologia",
        cantidad,
    },
    {
        servicio:"GNK",
        nombre:"Ginecologia",
        cantidad,
    },
    {
        servicio:"CXP",
        nombre:"CX Plastica",
        cantidad,
    },
    {
        servicio:"CXV",
        nombre:"CX Vascular",
        cantidad,
    },
    {
        servicio:"IFT",
        nombre:"Infectologia",
        cantidad,
    },
    {
        servicio:"NRG",
        nombre:"Neurocirugia",
        cantidad,
    },
    {
        servicio:"MXF",
        nombre:"Maxilofacial",
        cantidad,
    },
    {
        servicio:"CXT",
        nombre:"Cirugia de torax",
        cantidad,
    },
    {
        servicio:"OTR",
        nombre:"Otorrino",
        cantidad,
    },
    {
        servicio:"HMT",
        nombre:"Hematologia",
        cantidad,
    },
    {
        servicio:"PSQ",
        nombre:"Psiquiatria",
        cantidad,
    },
    {
        servicio:"CXH",
        nombre:"CX Hepatobiliar",
        cantidad,
    },
    {
        servicio:"DMT",
        nombre:"Dermatologia",
        cantidad,
    },
    {
        servicio:"HPL",
        nombre:"Hepatologia",
        cantidad,
    },
    {
        servicio:"NRL",
        nombre:"Neurologia",
        cantidad,
    },
    {
        servicio:"NFL",
        nombre:"Nefrologia",
        cantidad,
    },
    {
        servicio:"MEDD",
        nombre:"MED Dolor",
        cantidad,
    },
    {
        servicio:"ALL",
        nombre:"Alergologia",
        cantidad,
    },
    {
        servicio:"TXL",
        nombre:"Toxicologia",
        cantidad,
    },
    {
        servicio:"P900",
        nombre:"Programa 900",
        cantidad,
    },
];

function redirectTo(origen, fin) {
    let div1 = document.getElementById(origen);
    let div2 = document.getElementById(fin);

    div1.style.display = 'none';
    div2.style.display = 'block';
}

document.getElementById('selecService').addEventListener('submit', function(event) {
    event.preventDefault();

    var act = event.submitter.value;

    if (act === '5N' || act === '7N' || act === '6S') {
        redirectTo('selection-of-service', 'service-register');
        var bedsDiv = document.getElementById("beds");
        console.log('Cambios efectuados');
        // Aquí puedes agregar campos específicos según el valor de action, si es necesario
    }
});