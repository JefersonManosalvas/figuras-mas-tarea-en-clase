const express = require('express'); 
const app = express(); 

app.use(express.json()); 


var lista = [
  {
    id: '1',
    nombre: 'Jeferson', 
  },
  {
    id: '2',
    nombre: 'Paul',
  },
];


app.get('/nombre', (req, resp) => {
  resp.json(lista);
});

app.get('/jeferson',(req, resp)=>{
    resp.send('Mi nombre es Manosalvas Jeferson tengo 21 años soy estudiante del Instituto superior Tecnológico17 de julio de la carrera de Desarrollo de software');
});

app.get('/suma',(req, resp)=>{
    let n1= 10;
    let n2 = 2;
    resp.send(''+(n1+n2));
});

app.get('/sumaCliente/:n1',(req, resp)=>{
    let num1= parseInt(req.params.n1);
    let n2 = 2;
    let suma=num1+n2;
    resp.send(''+suma);
});

app.get('/rectangulo/:base/:altura', (req, resp) => {
    let base = parseFloat(req.params.base); // Base del rectángulo
    let altura = parseFloat(req.params.altura); // Altura del rectángulo

    let area = base * altura; // Fórmula del área
    let perimetro = 2 * (base + altura); // Fórmula del perímetro

    resp.send(`Área: ${area}, Perímetro: ${perimetro}`);
});

app.get('/rombo/:d1/:d2', (req, resp) => {
    let diagonalMayor = parseFloat(req.params.d1); // Diagonal mayor
    let diagonalMenor = parseFloat(req.params.d2); // Diagonal menor

    
    let lado = Math.sqrt(Math.pow(diagonalMayor / 2, 2) + Math.pow(diagonalMenor / 2, 2));

    
    let area = (diagonalMayor * diagonalMenor) / 2;

    
    let perimetro = 4 * lado;

    resp.send(`Área del rombo: ${area}, Perímetro del rombo: ${perimetro.toFixed(2)}`);
});

app.get('/romboide/:base/:altura/:ladoOblicuo', (req, resp) => {
    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura);
    let ladoOblicuo = parseFloat(req.params.ladoOblicuo);

    // Validar que los valores sean positivos
    if (base <= 0 || altura <= 0 || ladoOblicuo <= 0) {
        resp.status(400).send("Los valores de base, altura y lado oblicuo deben ser mayores que 0.");
        return;
    }

    // Calcular área y perímetro
    let area = base * altura;
    let perimetro = 2 * (base + ladoOblicuo);

    resp.send(`Área del romboide: ${area}, Perímetro del romboide: ${perimetro}`);
});





// Iniciar servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El puerto 3000 está corriendo'); 
});


