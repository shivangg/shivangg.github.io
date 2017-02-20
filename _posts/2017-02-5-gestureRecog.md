---
layout: post
title: "Intuitive Gesture Recognition"
---


## Get Highly configurable gestures for Ubuntu 14.04

Touchegg turned out to be a great little tool for configuring custom gestures for the Ubuntu 14.04. Powerful gesture recognition with up to 5 finger taps, up to 4 finger rotations and 3 fingers pinches(as long as your touchpad allows). Make your gesture recognition mimic MacBook or make it even better than that; *choice is yours* .  Quick search took me to an article where the author suggested to change the source of `unity` and recompile it to disable the default gesture recognition of Unity. Followed the instruction and away went my cursor :(

After 2 sleepless nights, I decided to made a clean install, this time hoping to not make any foolish mistake. Someone suggested that Touchegg was working out-of-the-box without touching Unity. This was safe(quite) so I gave it a try. Simply ran,

```sh
sudo apt-get install touchegg
```

and made a configuration file at `~/.config/touchegg/touchegg.conf`. This is the magic file to hold all my intuitive gestures.


```xml

<touchégg>
    <settings>
            <property name="composed_gestures_time">706</property>
    </settings>
    <application name="All">
            <gesture type="DRAG" fingers="3" direction="RIGHT">
                    <action type="SEND_KEYS">Control+Alt+Right</action>
            </gesture>
            <gesture type="DRAG" fingers="3" direction="LEFT">
                    <action type="SEND_KEYS">Control+Alt+Left</action>
            </gesture>
            <gesture type="DRAG" fingers="3" direction="UP">
                    <action type="MAXIMIZE_RESTORE_WINDOW"></action>
            </gesture>
            <gesture type="PINCH" fingers="2" direction="IN">
                    <action type="SEND_KEYS">Control+minus</action>
            </gesture>
            <gesture type="PINCH" fingers="2" direction="OUT">
                    <action type="SEND_KEYS">Control+equal</action>
            </gesture>
            <gesture type="DRAG" fingers="4" direction="DOWN">
                    <action type="SEND_KEYS">Super+s</action>
            </gesture>
            <gesture type="DRAG" fingers="4" direction="UP">
                    <action type="SEND_KEYS">Super+w</action>
            </gesture>
            <gesture type="DRAG" fingers="3" direction="DOWN">
                    <action type="MINIMIZE_WINDOW"></action>
            </gesture>
    </application>
</touchégg>

```
The text in the file is self-explanatory if stressed. For eg: `SEND_KEYS` is used to trigger a key combination when a particular gesture is made.

To start touchegg as soon as the machine is turned on, make a file at path `~/.config/autostart/touchegg.desktop` and add this to it:

```
[Desktop Entry]
Version=0.1
Name=Touchegg
GenericName=Touchégg
Comment=Touchégg Gestures Manager
Exec=/usr/bin/touchegg %u
Terminal=false
Type=Application


```


Later, I installed `Touchegg-GCE` for easy configuring of the `touchegg.conf` file.