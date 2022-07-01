import Values from "values.js";

/*
---------------------------------------------------------------------------
 GENERATE A SINGLE COLOR
 // https://awik.io/determine-color-bright-dark-using-javascript/
---------------------------------------------------------------------------
*/

export function singleColor(single) {
  const color = new Values(single);
  const response = {
    hex: color.hexString(),
    rgb: color.rgbString(),
    raw: {
      brightness: color.getBrightness(),
      hex: color.hex,
      rgb: color.rgb,
    },
  };

  return response;
}

export function colorGenerator(multi) {
  const colors = new Values(multi).all(10);

  return colors.map((color) => {
    const response = {
      hex: color.hexString(),
      rgb: color.rgbString(),
      raw: {
        brightness: color.getBrightness(),
        hex: color.hex,
        rgb: color.rgb,
      },
    };
    return response;
  });

  // export function singleColor(s) {
  //   const convert = hexToComplimentary(s);
  //   const colors = new Values(convert);
  //   const toHSL = RGBToHSL(colors.rgb[0], colors.rgb[1], colors.rgb[2]);
  //   const response = {
  //     hsl: toHSL,
  //     hex: colors.hexString(),
  //     rgb: colors.rgbString(),
  //     raw: {
  //       brightness: colors.getBrightness(),
  //       hsl: toHSL,
  //       hex: colors.hex,
  //       rgb: colors.rgb,
  //     },
  //   };

  // export function colorGenerator(g, amount) {
  //   const convert = hexToComplimentary(g);
  //   const colors = new Values(convert).all(10);
  //
  //   return colors.map((color) => {
  //     const toHSL = RGBToHSL(color.rgb[0], color.rgb[1], color.rgb[2]);
  //     const response = {
  //       hsl: toHSL,
  //       hex: color.hexString(),
  //       rgb: color.rgbString(),
  //       raw: {
  //         brightness: color.getBrightness(),
  //         hsl: toHSL,
  //         hex: color.hex,
  //         rgb: color.rgb,
  //       },
  //     };
  //     return response;
  //   });
}

/*
---------------------------------------------------------------------------
 GENERATE A complementary COLOR
 // https://stackoverflow.com/questions/1664140/js-function-to-calculate-complementary-colour
---------------------------------------------------------------------------
*/

export function hexToComplimentary(hex) {
  // Convert hex to rgb
  // Credit to Denis http://stackoverflow.com/a/36253499/4939630
  var rgb =
    "rgb(" +
    (hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .join(",") +
    ")";

  // Get array of RGB values
  rgb = rgb.replace(/[^\d,]/g, "").split(",");

  var r = rgb[0],
    g = rgb[1],
    b = rgb[2];

  // Convert RGB to HSL
  // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2.0;

  if (max === min) {
    h = s = 0; //achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);

    if (max === r && g >= b) {
      h = (1.0472 * (g - b)) / d;
    } else if (max === r && g < b) {
      h = (1.0472 * (g - b)) / d + 6.2832;
    } else if (max === g) {
      h = (1.0472 * (b - r)) / d + 2.0944;
    } else if (max === b) {
      h = (1.0472 * (r - g)) / d + 4.1888;
    }
  }

  h = (h / 6.2832) * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h += 180;
  if (h > 360) {
    h -= 360;
  }
  h /= 360;

  // Convert h s and l values into r g and b values
  // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 | rgb).toString(16).substring(1);
}

/*
---------------------------------------------------------------------------
 HSL TO HEX
// https://css-tricks.com/converting-color-spaces-in-javascript/
---------------------------------------------------------------------------
*/

export function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

/*
---------------------------------------------------------------------------
 HEX TO HSL
// https://css-tricks.com/converting-color-spaces-in-javascript/
---------------------------------------------------------------------------
*/
export function HexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length === 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
  // return "hsl(" + h + "," + s + "%," + l + "%)";
}

/*
---------------------------------------------------------------------------
 RGB TO HEX
// https://css-tricks.com/converting-color-spaces-in-javascript/
---------------------------------------------------------------------------
*/

export function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

/*
---------------------------------------------------------------------------
 RGB TO  HSL
// https://css-tricks.com/converting-color-spaces-in-javascript/
---------------------------------------------------------------------------
*/

export function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) h = 0;
  // Red is max
  else if (cmax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

/*
---------------------------------------------------------------------------
 DETECT LIGHT OR DARK COLORS
 // https://awik.io/determine-color-bright-dark-using-javascript/
---------------------------------------------------------------------------
*/
export function lightOrDark(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
}
