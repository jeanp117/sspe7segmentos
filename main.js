const diccionario = [
  [
    ["•", "_", "•"],
    ["|", "•", "|"],
    ["|", "_", "|"],
  ],
  [
    ["•", "•", "•"],
    ["•", "•", "|"],
    ["•", "•", "|"],
  ],
  [
    ["•", "_", "•"],
    ["•", "_", "|"],
    ["|", "_", "•"],
  ],
  [
    ["•", "_", "•"],
    ["•", "_", "|"],
    ["•", "_", "|"],
  ],
  [
    ["•", "•", "•"],
    ["|", "_", "|"],
    ["•", "•", "|"],
  ],
  [
    ["•", "_", "•"],
    ["|", "_", "•"],
    ["•", "_", "|"],
  ],
  [
    ["•", "_", "•"],
    ["|", "_", "•"],
    ["|", "_", "|"],
  ],
  [
    ["•", "_", "•"],
    ["•", "•", "|"],
    ["•", "•", "|"],
  ],
  [
    ["•", "_", "•"],
    ["|", "_", "|"],
    ["|", "_", "|"],
  ],
  [
    ["•", "_", "•"],
    ["|", "_", "|"],
    ["•", "_", "|"],
  ],
];

const archivo = 
`•••••_•••_•••••••_•••_•••_•••_•••_•••_••
••|••_|••_|•|_|•|_••|_••••|•|_|•|_|•|•|•
••|•|_•••_|•••|••_|•|_|•••|•|_|••_|•|_|•`;

let anchoDelRenglon = archivo.indexOf("\n");
//Crea un arreglo de renglones y de cada renglón separa sus caracteres
let archivoMatrix = archivo.split("\n").map((e) => e.split(""));
let caracteresExtraidos = [];

for (let index = 0; index < anchoDelRenglon; index += 4) {
  caracteresExtraidos.push([
    archivoMatrix[0].slice(index, index + 3),
    archivoMatrix[1].slice(index, index + 3),
    archivoMatrix[2].slice(index, index + 3),
  ]);
}

let respuesta=""
caracteresExtraidos.forEach((caracter) => {
  for (let numero = 0; numero <= diccionario.length; numero++) {
    if (JSON.stringify(caracter) == JSON.stringify(diccionario[numero])) respuesta +=numero
  }
});
console.log(respuesta);
