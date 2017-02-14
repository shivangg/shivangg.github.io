---
layout: post
title: "Making Stepper Motor work with Polulu A4988 stepper translator"
---

## The First Step
Basic step to successful working with stepper lies within the ability to find the correct configuration of the wires coming out of the stepper
motor.

1. 4 wire : Bipolar stepper motor
2. 5 wire : Unipolar/Bipolar stepper motor

<iframe width="420" height="315" src="https://www.youtube.com/embed/fTtwWJZlGt4" frameborder="0" allowfullscreen></iframe>

This video will take you through the steps to successfully find the wire configuration of your stepper motor. After finding the wires
the battle is half won. Using a microcontroller just pass the series of **HIGH** and **LOWS**

 **1000**
 **0100**
 **0010**
 **0001**

and you can make it move though this is a very bad practice. Its so baecause then the motor will draw a large current from your microcontroller
thus, _damaging_ it!. If we cannot power the motor from our microconroller, the only option left is external supply. but we can't just connect
the external supply-_why?_ because we need to give the power to the motor in a particular fashion as shown in the above snipppet. So, what to do?
**Solution** - Driver IC.

The _sole_ purpose of a driver IC is to transfer current from the external supply to the motor on the command of the microcontroller. So, the microcontroller just tells the driver IC to power the motor according to the programmed code.

The above snippet is to power the stepper in _One phase Stepping_ which is rarely used today. Recently, more stepping modes arae being used like

1. Two phase stepping
![Two phase stepping graph]({{site.baseurl}}/images/twophaseStepping.gif)
2. Microstepping

To achieve such dedicated stepping modes, we have options of 

1. Coding them on our own or finding suitable library to do our work.
2. Use an electronic stepping translator.

**Translator** is a device to simplify the task of stepping to as easy as just sending the pulses. Using this, there is no need to program the
stepping mode yourself; just pass the information to the translator about which mode you desire and let it do the rest. Now, just send out pulses to move the motor by the step in the mode you specified. _Polulu A4988_ is one such stepping translator.

![Polulu A4988]({{ site.baseurl }}/images/polulua4988.jpg)

You can use it by 

1. Connecting the correct stepping motor wires(the config of which you know now!) to the 1A/B and 2A/B.
2. `Vdd` to 5V microcontroller supply and `Vmot` to external supply(respective _Gnd_ too).
3. Short `SLEEP` and `RESET` to make this easier to work and keep `ENABLE` logic low to keep it functional.
4. `DIRECTION` is the key to way to rotate the motor is opposite directions for `HIGH` and `LOW` logic values.
5. Select `MS1`,`MS2` and `MS3` to select the corect stepping mode. Keep all `LOW` for one phse stepping.
6. `STEP`-give a pulse of reasonable duration to this pin to the motor move. Single pulse makes it move by single step.

