let potensiometer = 0
basic.forever(function () {
    potensiometer = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, potensiometer)
    led.plotBarGraph(
    potensiometer,
    1023
    )
})
