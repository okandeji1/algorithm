const clearbits = (colorval) => {
    // Compute the same color value with the low bit zeroed
    const x = Math.floor(colorval / 16) * 16;
    return x;
}

const chop2hide = (image) => {
    // For each pixel in the image
    for (let px of image.values()){
        // clear the low bits of the red
        px.setRed(clearbits(px.getRed()));
        // clear the low bits of the green
        px.setGreen(clearbits(px.getGreen()));
        // clear the low bits of the blue
        px.setBlue(clearbits(px.getBlue()));
    }
    // Return image
    return image;
}

const shiftImage = (image) => {
    // For each pixel in the image
    for (let px of image.values()){
        // Shift the red bits over
        px.setRed(px.getRed() / 16);
        // Shift the green bits over
        px.setGreen(px.getGreen() / 16);
        // Shift the blue bits over
        px.setBlue(px.getBlue() / 16);
    }
    // Return image
    return image;
}

const combineImages = (show, hide) => {
    // Make a new image as "show" size (call it answer)
    const answer = new SimpleImage(show.getWidth(), show.getHeight());
    // For each pixel in answer
    for (let px of answer.values()){
        // Get the x and y of that pixel
        const x = px.getX();
        const y = px.getY();
        // Get the pixel in the same place from show
        const showPixel = show.getPixel(x, y);
        // Get the pixel in the same place from hide
        const hidePixel = hide.getPixel(x, y);
        // Set the red of px to the sum of showPixel's red + hidePixel red
        px.setRed(showPixel.getRed() + hidePixel.getRed());
        // Set the green of px to the sum of showPixel's green + hidePixel green
        px.setGreen(showPixel.getGreen() + hidePixel.getGreen());
        // Set the blue of px to the sum of showPixel's blue + hidePixel blue
        px.setBlue(showPixel.getBlue() + hidePixel.getBlue());
    }
    // Return answer
    return answer;
}


const start = chop2hide(new SimpleImage('me.jpg'));
const hide = shiftImage(new SimpleImage('me.jpg'));

const combine = combineImages(start, hide);

print(combine);