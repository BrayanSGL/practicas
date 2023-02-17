# README
Este es un proyecto que consiste en leer un valor analógico de un potenciómetro conectado a una tarjeta L476RG y enviar los datos a una PC a través de un puerto serial. La PC guarda los datos en un archivo CSV y los muestra en la consola.

## Requisitos
Para ejecutar este proyecto se necesita lo siguiente:

- Una tarjeta L476RG
- Una conexión USB para la tarjeta
- Una PC con un puerto serial disponible
- Python 3.x instalado en la PC
## Configuración
### Tarjeta L476RG
La conexión de la tarjeta es la siguiente:

- LED1: pin de salida digital conectado a un LED
- A5: pin de entrada analógica conectado a un potenciómetro
- USBTX y USBRX: pines de comunicación serial conectados a la PC
### PC
Antes de ejecutar el script en la PC, asegúrese de tener conectada la tarjeta L476RG al puerto USB y de haber configurado el puerto serial en el script (en este caso, el puerto COM3 a 9600 baudios). Además, es necesario tener Python 3.x instalado en la PC.

## Uso
1. Conecte la tarjeta L476RG a la PC a través del puerto USB.
2. Ejecute el script pc.py en la PC con Python 3.x. El script esperará a recibir datos a través del puerto serial.
3. Compile y cargue el programa main.cpp en la tarjeta L476RG. La tarjeta enviará los datos a la PC a través del puerto serial.
4. Los datos se guardarán en un archivo CSV llamado data.csv y se mostrarán en la consola.
## Contribuciones
Las contribuciones son bienvenidas. Siéntase libre de enviar una solicitud de extracción o abrir un problema.