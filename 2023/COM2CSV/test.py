import serial
import csv
import datetime
import os
import pandas as pd
import matplotlib.pyplot as plt

# Seteamos el puerto serial
try:
    ser = serial.Serial('COM3', 9600)
except:
    print('Error al abrir el puerto serial')
    exit()

# Seteamos el nombre del archivo
filename = 'data2.csv'
if os.path.isfile(filename):
    print('El archivo ya existe, agregando datos...')
else:
    print('El archivo no existe, creando archivo...')
    # w es para escribir, r es para leer, a es para agregar
    with open(filename, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Fecha', 'Hora', 'Dato'])

def graficar():
    # Graficamos los datos tiempo real
    df = pd.read_csv(filename)
    df['Fecha'] = pd.to_datetime(df['Fecha'])
    df['Hora'] = pd.to_datetime(df['Hora'])
    df['Dato'] = pd.to_numeric(df['Dato'])
    df.plot(x='Fecha', y='Dato')
    plt.show()


# Leemos los datos del puerto serial
while True:
    try:
        data = ser.readline().decode('utf-8').strip()
        # Desempaquetamos los datos que estan entre @ y #
        if data.startswith('@') and data.endswith('#'):
            data = data[1:-1] 
            # Guardamos los datos en un archivo csv
            # Fecha y hora
            date = datetime.datetime.now().strftime('%d/%m/%Y')
            time = datetime.datetime.now().strftime('%H:%M:%S')
            # Escribimos los datos en el archivo
            with open(filename, 'a', newline='') as f:
                writer = csv.writer(f)
                writer.writerow([date, time, data])
            print(f'Fecha: {date} Hora: {time} Dato: {data}')

            # Estadistica descriptiva
            df = pd.read_csv(filename)
            print(df.describe()) 

            # Graficamos los datos tiempo real
            graficar()
           

    except Exception as e:
        print(f'Error al leer los datos: {str(e)}')
        exit()