import picamera
from time import sleep
import requests

camera = picamera.PiCamera()

##imageNum = 1
while True:
    ##    imageFileName = "image" + str(imageNum) + ".jpg"
    imageFileName = "image.jpg"
    print("Preparing to capture " + imageFileName)
##    sleep(5)
    camera.capture(imageFileName)
    print("Captured " + imageFileName)
    ##    imageNum = imageNum + 1
    url = "https://raspberry-whiteboard-reader.azurewebsites.net/api/upload"
    files = {'image':open(imageFileName, 'rb')}
    r = requests.request("POST",url, files=files)
    print(r.text)
        
    

