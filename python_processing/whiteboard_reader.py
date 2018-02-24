import picamera
from time import sleep

camera = picamera.PiCamera()

imageNum = 1
while True:
    imageFileName = "image" + str(imageNum) + ".jpg"
    print("Preparing to capture" + imageFileName)
    sleep(5)
    camera.capture(imageFileName)
    print("Captured " + imageFileName)
    imageNum = imageNum + 1

