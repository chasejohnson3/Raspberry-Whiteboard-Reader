# picam

small wrapper around the raspberry pi camera module.

## photo

The photo function takes three parameters
1. filename
2. options (optional)
3. callback (the same format as `child_process.exec`)

```
picam.still('filename.jpg',{width:800,height:600},function(err,stdin,stdout) {
  if(err) throw err;
});

```

## video

The video function is similar although it has an extra parameter specifying the length of time to record.

1. filename
2. video length
3. options (optional)
4. callback

```
picam.video('filename.h264',1000,{},function(err,stdin,stdout) {
  if(err) throw err;
});
```

## options

The options object is used to set arguments to the command. If argument is just a standalone flag, set it's value to `true` in your options object. The following arguments are currently supported:

```
width
height
vertical_flip
horizontal_flip
sharpness
brightness
saturation
iso
video_stabilization
ev_compensation
exposure
auto_white_balance
image_effect
color_effect
metering
rotation
region_of_interest
raw
verbose
encoding
quality
```

## more information

For more information about the raspberry pi camera module, see the [official documentation](http://www.raspberrypi.org/wp-content/uploads/2013/07/RaspiCam-Documentation.pdf)


## license
MIT

