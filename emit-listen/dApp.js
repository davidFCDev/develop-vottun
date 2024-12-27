const { ethers } = require("ethers");

// Proyecto Infura
const TU_PROYECTO_INFURA = "TuProyectoInfura";

// Proveedor
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${TU_PROYECTO_INFURA}`
);

// ABI y dirección del contrato
const abi = [
  /* ABI del contrato */
];
const direccionContrato = "0xDireccionDeTuContrato";

const contrato = new ethers.Contract(direccionContrato, abi, provider);

// Escuchamos el evento del contrato
contrato.on(
  "ValorActualizado",
  (actualizador, valorAnterior, nuevoValor, evento) => {
    console.log(`Actualizado por: ${actualizador}`);
    console.log(`Valor anterior: ${valorAnterior}, Nuevo valor: ${nuevoValor}`);
    console.log("Detalles del evento:", evento);
  }
);
