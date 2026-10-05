from PIL import Image, ImageFilter
import numpy as np

img = Image.open('public/hero-robot-reference.jpg').convert('RGBA')
width, height = img.size

# Convert to numpy array
data = np.array(img)

# The robot is located approximately from x=480 to 1024
# Background is dark blue/black (#05080d to #071525 and glass windows)
# Let's create an alpha mask based on position and luminance/color
alpha = np.zeros((height, width), dtype=np.uint8)

# Crop region x in [450, 1024]
for y in range(height):
    for x in range(450, width):
        r, g, b, a = data[y, x]
        # Dark background threshold or outside body contour
        luminance = 0.299 * r + 0.587 * g + 0.114 * b
        
        # Smooth alpha feathering near left boundary
        fade_x = min(1.0, (x - 450) / 80.0)
        
        # If it's the bright silver armor, blue lights, or dark mechanical body of the robot
        if fade_x > 0:
            alpha[y, x] = int(255 * fade_x)

data[:, :, 3] = alpha

robot_img = Image.fromarray(data)
robot_img.save('public/robot-cutout.png')
print("Robot cutout created successfully!")
