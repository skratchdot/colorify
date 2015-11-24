# colorify

Colorify is a collection of color tools that comes in three forms:
a [website](http://projects.skratchdot.com/colorify),
a [command line tool](#2-command-line-tool), and
a [node.js library](#3-node-js-library):

### 1. Website

The website is built on [react](http://facebook.github.io/react/), and contains
a few **toy apps** that can manipulate and display colors.

- [Colorify: Page: Home](http://projects.skratchdot.com/colorify/)
- [Colorify: Page: About](http://projects.skratchdot.com/colorify/about)
- [Colorify: App: Stats](http://projects.skratchdot.com/colorify/stats)
- [Colorify: App: Mixer](http://projects.skratchdot.com/colorify/mixer)
- [Colorify: App: Math](http://projects.skratchdot.com/colorify/math)

### 2. Command Line Tool

The cli can be installed by running `npm install -g colorify`. This will
add `colorify` to your PATH.  For the command line options, you can run
`colorify --help`:

```bash
> colorify --help

Usage: colorify [options] [command]


Commands:

  help                     print help information (alias for using -h or --help)
  random [options]         get a random color
  stats [options] [color]  get color stats about an input string

Options:

  -h, --help     output usage information
  -v, --version  output the version number
```

```bash
> colorify random --help

  Usage: random [options]

  get a random color

  Options:

    -h, --help             output usage information
    -f, --format <format>  css format types: hex, rgb, percent, hsl, hwb
```

```bash
> colorify stats --help

  Usage: stats [options] [color]

  get color stats about an input string

  Options:

    -h, --help         output usage information
    -p, --path <path>  only show the specified path (i.e. schemes.tetradic.2)
```

#### Examples

```bash
$ colorify random
```

```bash
#E13954
$ colorify random
#A8A3E5
```

```bash
$ colorify random -f rgb
rgba(137, 102, 186, 0.64)
```

```bash
$ colorify stats --path "hex" "orange"
#ffa500
```

```bash
$ colorify stats --path "websafe" "orange"
#ff9900
```

```bash
$ colorify stats red
  "lib": {
    "onecolor": {
      "red": 1,
      "green": 0,
      "blue": 0,
      "alpha": 1,
      "hue": 0,
      "saturation": 1,
      "value": 1,
      "lightness": 0.5,
      "cyan": 0,
      "magenta": 1,
      "yellow": 1,
      "black": 0,
      "x": 0.4124564,
      "y": 0.2126729,
      "z": 0.0193339,
      "l": 1,
      "a": 1,
      "b": 0,
      "hex": "#ff0000",
      "hexa": "#ffff0000",
      "css": "rgb(255,0,0)",
      "cssa": "rgba(255,0,0,1)",
      "cmyk": [
        "CMYK",
        0,
        1,
        1,
        0,
        1
      ],
      "hsl": [
        "HSL",
        0,
        1,
        0.5,
        1
      ],
      "hsv": [
        "HSV",
        0,
        1,
        1,
        1
      ],
      "lab": [
        "LAB",
        1,
        1,
        1,
        1
      ],
      "rgb": [
        "RGB",
        1,
        0,
        0,
        1
      ],
      "xyz": [
        "XYZ",
        0.4124564,
        0.2126729,
        0.0193339,
        1
      ]
    },
    "color": {
      "rgb": {
        "r": 255,
        "g": 0,
        "b": 0
      },
      "hsl": {
        "h": 0,
        "s": 100,
        "l": 50
      },
      "hsv": {
        "h": 0,
        "s": 100,
        "v": 100
      },
      "cmyk": {
        "c": 0,
        "m": 100,
        "y": 100,
        "k": 0
      },
      "rgbArray": [
        255,
        0,
        0
      ],
      "hslArray": [
        0,
        100,
        50
      ],
      "hsvArray": [
        0,
        100,
        100
      ],
      "cmykArray": [
        0,
        100,
        100,
        0
      ],
      "rgbaArray": [
        255,
        0,
        0,
        1
      ],
      "hslaArray": [
        0,
        100,
        50,
        1
      ],
      "alpha": 1,
      "red": 255,
      "green": 0,
      "blue": 0,
      "hue": 0,
      "saturation": 100,
      "lightness": 50,
      "saturationv": 100,
      "value": 100,
      "cyan": 0,
      "magenta": 100,
      "yellow": 100,
      "black": 0,
      "hexString": "#FF0000",
      "rgbString": "rgb(255, 0, 0)",
      "rgbaString": "rgba(255, 0, 0, 1)",
      "percentString": "rgb(100%, 0%, 0%)",
      "hslString": "hsl(0, 100%, 50%)",
      "hslaString": "hsla(0, 100%, 50%, 1)",
      "keyword": "red",
      "luminosity": 0.2126,
      "dark": true,
      "light": false
    }
  },
  "alpha": 1,
  "cmyk": {
    "c": 0,
    "m": 100,
    "y": 100,
    "k": 0
  },
  "hsl": {
    "h": 0,
    "s": 100,
    "l": 50
  },
  "hsv": {
    "h": 0,
    "s": 100,
    "v": 100
  },
  "rgb": {
    "r": 255,
    "g": 0,
    "b": 0
  },
  "rgbPercent": {
    "r": 100,
    "g": 0,
    "b": 0
  },
  "hex": "#ff0000",
  "hexTriplet": "ff0000",
  "isRandom": false,
  "parseSuccessful": true,
  "closest": {
    "name": "Red",
    "rgb": [
      255,
      0,
      0
    ]
  },
  "websafe": "#ff0000",
  "websmart": "#ff0000",
  "isWebsafe": true,
  "isWebsmart": true,
  "schemes": {
    "complementary": [
      "#ff0000",
      "#00ffff"
    ],
    "splitComplementary": [
      "#ff0000",
      "#00ff80",
      "#ff00aa"
    ],
    "splitComplementaryCW": [
      "#ff0000",
      "#00ff80",
      "#ff00ff"
    ],
    "splitComplementaryCCW": [
      "#ff0000",
      "#ffff00",
      "#0080ff"
    ],
    "triadic": [
      "#ff0000",
      "#00ff00",
      "#0000ff"
    ],
    "clash": [
      "#ff0000",
      "#80ff00",
      "#8000ff"
    ],
    "tetradic": [
      "#ff0000",
      "#80ff00",
      "#00ffff",
      "#8000ff"
    ],
    "fourToneCW": [
      "#ff0000",
      "#ffff00",
      "#00ffff",
      "#0000ff"
    ],
    "fourToneCCW": [
      "#ff0000",
      "#00ff00",
      "#00ffff",
      "#ff00ff"
    ],
    "fiveToneA": [
      "#ff0000",
      "#15ff00",
      "#00ff95",
      "#0095ff",
      "#1500ff"
    ],
    "fiveToneB": [
      "#ff0000",
      "#ffaa00",
      "#80ff00",
      "#00ff2a",
      "#1500ff"
    ],
    "fiveToneC": [
      "#ff0000",
      "#ffd500",
      "#80ff00",
      "#0095ff",
      "#ff00aa"
    ],
    "fiveToneD": [
      "#ff0000",
      "#ffaa00",
      "#00ff95",
      "#8000ff",
      "#ff00d4"
    ],
    "fiveToneE": [
      "#ff0000",
      "#15ff00",
      "#002aff",
      "#8000ff",
      "#ff00aa"
    ],
    "sixToneCW": [
      "#ff0000",
      "#ff8000",
      "#00ff00",
      "#00ff80",
      "#0000ff",
      "#8000ff"
    ],
    "sixToneCCW": [
      "#ff0000",
      "#80ff00",
      "#00ff00",
      "#0080ff",
      "#0000ff",
      "#ff0080"
    ],
    "neutral": [
      "#ff0000",
      "#ff4000",
      "#ff8000",
      "#ffbf00",
      "#ffff00",
      "#bfff00"
    ],
    "analogous": [
      "#ff0000",
      "#ff8000",
      "#ffff00",
      "#80ff00",
      "#00ff00",
      "#00ff80"
    ]
  },
  "shades": [
    "#ff0000",
    "#e60000",
    "#cc0000",
    "#b30000",
    "#990000",
    "#800000",
    "#660000",
    "#4d0000",
    "#330000",
    "#1a0000"
  ],
  "tints": [
    "#ff0000",
    "#ff1a1a",
    "#ff3333",
    "#ff4d4d",
    "#ff6666",
    "#ff8080",
    "#ff9999",
    "#ffb3b3",
    "#ffcccc",
    "#ffe5e5"
  ],
  "tones": [
    "#ff0000",
    "#f20d0d",
    "#e51a1a",
    "#d92626",
    "#cc3333",
    "#bf4040",
    "#b24d4d",
    "#a65959",
    "#996666",
    "#8c7373"
  ],
  "blind": {
    "protanomaly": "#b75013",
    "protanopia": "#8f7e1e",
    "deuteranomaly": "#c34c00",
    "deuteranopia": "#a17800",
    "tritanomaly": "#fe0f00",
    "tritanopia": "#fd1700",
    "achromatomaly": "#7f2323",
    "achromatopsia": "#363636"
  }
}
```

### 3. Node.js Library

In it's current state, this is a pretty lame node.js library. All it does is
expose access to some other helpful color libraries and includes a few helper
functions that were needed for the colorify website. The libraries that are
included are:

- [color](https://github.com/harthur/color)
- [color-blind](https://github.com/skratchdot/color-blind)
- [color-harmony](https://github.com/skratchdot/color-harmony)
- [color-quantize](https://github.com/skratchdot/color-quantize)
- [color-scheme](https://github.com/c0bra/color-scheme-js)
- [color-stats](https://github.com/skratchdot/color-stats)
- [colorconverter](https://github.com/SimonWaldherr/ColorConverter.js)
- [colorname](https://www.npmjs.org/package/colorname)
- [onecolor](https://github.com/One-com/one-color)

You can install the library by running `npm install colorify` and use it:
```javascript
var colorify = require('colorify');
console.log(Object.keys(colorify.lib)); // outputs:
                                        // [
                                        //   'color',
                                        //   'colorBlind',
                                        //   'colorHarmony',
                                        //   'colorQuantize',
                                        //   'colorScheme',
                                        //   'colorStats',
                                        //   'colorConverter',
                                        //   'colorName',
                                        //   'onecolor'
                                        // ]
```

#### Other js libs to check out

- [chromatist](https://github.com/jrus/chromatist)
- [chroma.js](https://github.com/gka/chroma.js)
- ...more to add? submit a [pull request](https://github.com/skratchdot/colorify/pulls)

#### Source Code

- [Source Code on Github](https://github.com/skratchdot/colorify)


## For Developers

### Clone the Project

```bash
git clone https://github.com/skratchdot/colorify.git
cd colorify
```

### Install the Dependencies

```bash
npm install
```

### Run the Application (and watch for changes)

```bash
gulp
```

Now browse to the app at [http://localhost:8080/colorify](http://localhost:8080/colorify)


## Other Links / Tools

- [Color Theory on Wikipedia](http://en.wikipedia.org/wiki/Color_theory)
- [Color Theory on HandPrint.com](http://www.handprint.com/HP/WCL/wcolor.html)
- [Adobe Kuler](https://kuler.adobe.com/)
- [Color Sphere](http://mudcu.be/sphere/)
- [Color Hexa](http://www.colorhexa.com/)
- [Colrd.com](http://colrd.com/)
- [Paletton.com](http://paletton.com/)
- [RYB Color Wheel](http://bahamas10.github.io/ryb/)
- [ColorBlendy](http://colorblendy.com)
- [ColourCo.de](http://colourco.de/)
- [Color @ hailpixel.com](http://color.hailpixel.com/)
- [hslpicker](http://hslpicker.com)
- [ColorBlender](http://colorblender.com)
- [ColorSchemer](http://www.colorschemer.com/online.html)
- [Coolors](http://coolors.co)
- [Please.js](http://www.checkman.io/please/)
- [Lovely Palettes](http://lovelypalettes.com/)
- [Color-Hex](http://www.color-hex.com/)
- [Color Share](http://www.colorshare.co/)
- [UI Gradients](http://uigradients.com)
- [Random CSS Gradient Generator](http://paintbycode.github.io/gradient-generator/)
- [draGGradients](http://elrumordelaluz.github.io/draGGradients/)
- [bada55.io](http://bada55.io/)
- [4096 Color Wheel](http://www.ficml.org/jemimap/style/color/wheel.html)
- [AllProfitAllFree - Color Wheel](http://allprofitallfree.com/color-wheel2.html)
- [Color Wheel & Color Scheme Generator](http://design.geckotribe.com/colorwheel/)
- [ColoRotate](http://colorotate.org/)
- [Colors On The Web](http://colorsontheweb.com/)
- [Colour Lovers](http://www.colourlovers.com/)
- [Colr](http://colr.org/)
- [Instant Color Schemes](http://www.gpeters.com/color/color-schemes.php)
- [Color Code Hex](http://colorcodehex.com)
- [Colordrop](http://penguingeorge.com/products/colordrop/)
- [Color Contrast Links](http://thesiteslinger.com/blog/making-color-contrast-checks-a-part-of-your-web-workflow/)
- [Colorable](http://jxnblk.com/colorable/)
- [Computer Color Is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw)
- [CSS Colours](http://colours.neilorangepeel.com/)
- [HTML Color Codes](http://htmlcolorcodes.com/)
- [Color Matters](http://www.colormatters.com/)

***Have a link to share? Submit a [pull request](https://github.com/skratchdot/colorify/pulls) to add to this list.***


## License

Copyright (c) 2014 [skratchdot](http://skratchdot.com/)  
Licensed under the MIT license.
