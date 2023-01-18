const fs = require('fs')
const colors = require('colors')
const crearArchivo = async (num = 5, listar, hasta = 10) => {

    try {

        let salida = '';
        let consola = ''

        for (let index = 1; index <= hasta; index++) {
            salida += `${num} x ${index} = ${num * index}\n`;
            consola += `${num} ${'x'.green} ${index} ${'='.green} ${num * index}\n`;
        }

        if (listar) {
            console.log('=================='.green)
            console.log(`Tabla del: ${num}`.blue)
            console.log('=================='.green)
            console.log(consola)
        }


        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);

        return `tabla-${num}.txt`
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    crearArchivo
}