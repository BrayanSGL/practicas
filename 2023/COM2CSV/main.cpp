#include "mbed.h"
#include "platform/mbed_thread.h"
// Blinking rate in milliseconds
#define measurementTime 500

RawSerial pc(USBTX, USBRX);

float value;
AnalogIn pot(A5);

int main()
{
    pc.baud(9600);
    // Initialise the digital pin LED1 as an output
    DigitalOut led(LED1);

    while (true) {
        led = !led;
        value = ((pot.read_u16()) / (65535 / 500)) - 250;
        pc.printf("@%.0f#\n", value);
        thread_sleep_for(measurementTime);
    }
}
