import PIL
from PIL import Image

fl = "/Users/patricklarsen/Desktop/wearing-one-male.jpg"
flresized ="/Users/patricklarsen/Desktop/resized-wearing-one-male.jpg" 
basewidth = 300

img = Image.open(fl)  
wpercent = (basewidth / float(img.size[0]))
hsize = int((float(img.size[1]) * float(wpercent)))
img = img.resize((basewidth, hsize), PIL.Image.ANTIALIAS)
img.save(flresized)
