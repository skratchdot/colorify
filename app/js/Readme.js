/* autogenerated by gulpfile.js */
exports.main = "<h1 id=\"colorify\">colorify</h1>\n<p>Colorify is a collection of color tools that comes in three forms:\na <a href=\"http://projects.skratchdot.com/colorify\">website</a>,\na <a href=\"#2-command-line-tool\">command line tool</a>, and\na <a href=\"#3-node-js-library\">node.js library</a>:</p>\n<h3 id=\"1-website\">1. Website</h3>\n<p>The website is built on <a href=\"http://facebook.github.io/react/\">react</a>, and contains\na few <strong>toy apps</strong> that can manipulate and display colors.</p>\n<ul>\n<li><a href=\"http://projects.skratchdot.com/colorify/\">Colorify: Page: Home</a></li>\n<li><a href=\"http://projects.skratchdot.com/colorify/about\">Colorify: Page: About</a></li>\n<li><a href=\"http://projects.skratchdot.com/colorify/stats\">Colorify: App: Stats</a></li>\n<li><a href=\"http://projects.skratchdot.com/colorify/mixer\">Colorify: App: Mixer</a></li>\n<li><a href=\"http://projects.skratchdot.com/colorify/math\">Colorify: App: Math</a></li>\n</ul>\n<h3 id=\"2-command-line-tool\">2. Command Line Tool</h3>\n<p>The cli can be installed by running <code>npm install -g colorify</code>. This will\nadd <code>colorify</code> to your PATH.  For the command line options, you can run\n<code>colorify --help</code>:</p>\n<pre><code class=\"lang-bash\">&gt; colorify --help\n\nUsage: colorify [options] [command]\n\n\nCommands:\n\n  help                     print help information (alias for using -h or --help)\n  random [options]         get a random color\n  stats [options] [color]  get color stats about an input string\n\nOptions:\n\n  -h, --help     output usage information\n  -v, --version  output the version number\n\n&gt; colorify random --help\n\n  Usage: random [options]\n\n  get a random color\n\n  Options:\n\n    -h, --help             output usage information\n    -f, --format &lt;format&gt;  css format types: hex, rgb, percent, hsl, hwb\n\n&gt; colorify stats --help\n\n  Usage: stats [options] [color]\n\n  get color stats about an input string\n\n  Options:\n\n    -h, --help         output usage information\n    -p, --path &lt;path&gt;  only show the specified path (i.e. schemes.tetradic.2)\n</code></pre>\n<h4 id=\"examples\">Examples</h4>\n<pre><code class=\"lang-bash\">$ colorify random\n#E13954\n$ colorify random\n#A8A3E5\n$ colorify random -f rgb\nrgba(137, 102, 186, 0.64)\n$ colorify stats --path &quot;hex&quot; &quot;orange&quot;\n#ffa500\n$ colorify stats --path &quot;websafe&quot; &quot;orange&quot;\n#ff9900\n$ colorify stats red\n  &quot;lib&quot;: {\n    &quot;onecolor&quot;: {\n      &quot;red&quot;: 1,\n      &quot;green&quot;: 0,\n      &quot;blue&quot;: 0,\n      &quot;alpha&quot;: 1,\n      &quot;hue&quot;: 0,\n      &quot;saturation&quot;: 1,\n      &quot;value&quot;: 1,\n      &quot;lightness&quot;: 0.5,\n      &quot;cyan&quot;: 0,\n      &quot;magenta&quot;: 1,\n      &quot;yellow&quot;: 1,\n      &quot;black&quot;: 0,\n      &quot;x&quot;: 0.4124564,\n      &quot;y&quot;: 0.2126729,\n      &quot;z&quot;: 0.0193339,\n      &quot;l&quot;: 1,\n      &quot;a&quot;: 1,\n      &quot;b&quot;: 0,\n      &quot;hex&quot;: &quot;#ff0000&quot;,\n      &quot;hexa&quot;: &quot;#ffff0000&quot;,\n      &quot;css&quot;: &quot;rgb(255,0,0)&quot;,\n      &quot;cssa&quot;: &quot;rgba(255,0,0,1)&quot;,\n      &quot;cmyk&quot;: [\n        &quot;CMYK&quot;,\n        0,\n        1,\n        1,\n        0,\n        1\n      ],\n      &quot;hsl&quot;: [\n        &quot;HSL&quot;,\n        0,\n        1,\n        0.5,\n        1\n      ],\n      &quot;hsv&quot;: [\n        &quot;HSV&quot;,\n        0,\n        1,\n        1,\n        1\n      ],\n      &quot;lab&quot;: [\n        &quot;LAB&quot;,\n        1,\n        1,\n        1,\n        1\n      ],\n      &quot;rgb&quot;: [\n        &quot;RGB&quot;,\n        1,\n        0,\n        0,\n        1\n      ],\n      &quot;xyz&quot;: [\n        &quot;XYZ&quot;,\n        0.4124564,\n        0.2126729,\n        0.0193339,\n        1\n      ]\n    },\n    &quot;color&quot;: {\n      &quot;rgb&quot;: {\n        &quot;r&quot;: 255,\n        &quot;g&quot;: 0,\n        &quot;b&quot;: 0\n      },\n      &quot;hsl&quot;: {\n        &quot;h&quot;: 0,\n        &quot;s&quot;: 100,\n        &quot;l&quot;: 50\n      },\n      &quot;hsv&quot;: {\n        &quot;h&quot;: 0,\n        &quot;s&quot;: 100,\n        &quot;v&quot;: 100\n      },\n      &quot;cmyk&quot;: {\n        &quot;c&quot;: 0,\n        &quot;m&quot;: 100,\n        &quot;y&quot;: 100,\n        &quot;k&quot;: 0\n      },\n      &quot;rgbArray&quot;: [\n        255,\n        0,\n        0\n      ],\n      &quot;hslArray&quot;: [\n        0,\n        100,\n        50\n      ],\n      &quot;hsvArray&quot;: [\n        0,\n        100,\n        100\n      ],\n      &quot;cmykArray&quot;: [\n        0,\n        100,\n        100,\n        0\n      ],\n      &quot;rgbaArray&quot;: [\n        255,\n        0,\n        0,\n        1\n      ],\n      &quot;hslaArray&quot;: [\n        0,\n        100,\n        50,\n        1\n      ],\n      &quot;alpha&quot;: 1,\n      &quot;red&quot;: 255,\n      &quot;green&quot;: 0,\n      &quot;blue&quot;: 0,\n      &quot;hue&quot;: 0,\n      &quot;saturation&quot;: 100,\n      &quot;lightness&quot;: 50,\n      &quot;saturationv&quot;: 100,\n      &quot;value&quot;: 100,\n      &quot;cyan&quot;: 0,\n      &quot;magenta&quot;: 100,\n      &quot;yellow&quot;: 100,\n      &quot;black&quot;: 0,\n      &quot;hexString&quot;: &quot;#FF0000&quot;,\n      &quot;rgbString&quot;: &quot;rgb(255, 0, 0)&quot;,\n      &quot;rgbaString&quot;: &quot;rgba(255, 0, 0, 1)&quot;,\n      &quot;percentString&quot;: &quot;rgb(100%, 0%, 0%)&quot;,\n      &quot;hslString&quot;: &quot;hsl(0, 100%, 50%)&quot;,\n      &quot;hslaString&quot;: &quot;hsla(0, 100%, 50%, 1)&quot;,\n      &quot;keyword&quot;: &quot;red&quot;,\n      &quot;luminosity&quot;: 0.2126,\n      &quot;dark&quot;: true,\n      &quot;light&quot;: false\n    }\n  },\n  &quot;alpha&quot;: 1,\n  &quot;cmyk&quot;: {\n    &quot;c&quot;: 0,\n    &quot;m&quot;: 100,\n    &quot;y&quot;: 100,\n    &quot;k&quot;: 0\n  },\n  &quot;hsl&quot;: {\n    &quot;h&quot;: 0,\n    &quot;s&quot;: 100,\n    &quot;l&quot;: 50\n  },\n  &quot;hsv&quot;: {\n    &quot;h&quot;: 0,\n    &quot;s&quot;: 100,\n    &quot;v&quot;: 100\n  },\n  &quot;rgb&quot;: {\n    &quot;r&quot;: 255,\n    &quot;g&quot;: 0,\n    &quot;b&quot;: 0\n  },\n  &quot;rgbPercent&quot;: {\n    &quot;r&quot;: 100,\n    &quot;g&quot;: 0,\n    &quot;b&quot;: 0\n  },\n  &quot;hex&quot;: &quot;#ff0000&quot;,\n  &quot;hexTriplet&quot;: &quot;ff0000&quot;,\n  &quot;isRandom&quot;: false,\n  &quot;parseSuccessful&quot;: true,\n  &quot;closest&quot;: {\n    &quot;name&quot;: &quot;Red&quot;,\n    &quot;rgb&quot;: [\n      255,\n      0,\n      0\n    ]\n  },\n  &quot;websafe&quot;: &quot;#ff0000&quot;,\n  &quot;websmart&quot;: &quot;#ff0000&quot;,\n  &quot;isWebsafe&quot;: true,\n  &quot;isWebsmart&quot;: true,\n  &quot;schemes&quot;: {\n    &quot;complementary&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#00ffff&quot;\n    ],\n    &quot;splitComplementary&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#00ff80&quot;,\n      &quot;#ff00aa&quot;\n    ],\n    &quot;splitComplementaryCW&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#00ff80&quot;,\n      &quot;#ff00ff&quot;\n    ],\n    &quot;splitComplementaryCCW&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ffff00&quot;,\n      &quot;#0080ff&quot;\n    ],\n    &quot;triadic&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#00ff00&quot;,\n      &quot;#0000ff&quot;\n    ],\n    &quot;clash&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#80ff00&quot;,\n      &quot;#8000ff&quot;\n    ],\n    &quot;tetradic&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#80ff00&quot;,\n      &quot;#00ffff&quot;,\n      &quot;#8000ff&quot;\n    ],\n    &quot;fourToneCW&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ffff00&quot;,\n      &quot;#00ffff&quot;,\n      &quot;#0000ff&quot;\n    ],\n    &quot;fourToneCCW&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#00ff00&quot;,\n      &quot;#00ffff&quot;,\n      &quot;#ff00ff&quot;\n    ],\n    &quot;fiveToneA&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#15ff00&quot;,\n      &quot;#00ff95&quot;,\n      &quot;#0095ff&quot;,\n      &quot;#1500ff&quot;\n    ],\n    &quot;fiveToneB&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ffaa00&quot;,\n      &quot;#80ff00&quot;,\n      &quot;#00ff2a&quot;,\n      &quot;#1500ff&quot;\n    ],\n    &quot;fiveToneC&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ffd500&quot;,\n      &quot;#80ff00&quot;,\n      &quot;#0095ff&quot;,\n      &quot;#ff00aa&quot;\n    ],\n    &quot;fiveToneD&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ffaa00&quot;,\n      &quot;#00ff95&quot;,\n      &quot;#8000ff&quot;,\n      &quot;#ff00d4&quot;\n    ],\n    &quot;fiveToneE&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#15ff00&quot;,\n      &quot;#002aff&quot;,\n      &quot;#8000ff&quot;,\n      &quot;#ff00aa&quot;\n    ],\n    &quot;sixToneCW&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ff8000&quot;,\n      &quot;#00ff00&quot;,\n      &quot;#00ff80&quot;,\n      &quot;#0000ff&quot;,\n      &quot;#8000ff&quot;\n    ],\n    &quot;sixToneCCW&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#80ff00&quot;,\n      &quot;#00ff00&quot;,\n      &quot;#0080ff&quot;,\n      &quot;#0000ff&quot;,\n      &quot;#ff0080&quot;\n    ],\n    &quot;neutral&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ff4000&quot;,\n      &quot;#ff8000&quot;,\n      &quot;#ffbf00&quot;,\n      &quot;#ffff00&quot;,\n      &quot;#bfff00&quot;\n    ],\n    &quot;analogous&quot;: [\n      &quot;#ff0000&quot;,\n      &quot;#ff8000&quot;,\n      &quot;#ffff00&quot;,\n      &quot;#80ff00&quot;,\n      &quot;#00ff00&quot;,\n      &quot;#00ff80&quot;\n    ]\n  },\n  &quot;shades&quot;: [\n    &quot;#ff0000&quot;,\n    &quot;#e60000&quot;,\n    &quot;#cc0000&quot;,\n    &quot;#b30000&quot;,\n    &quot;#990000&quot;,\n    &quot;#800000&quot;,\n    &quot;#660000&quot;,\n    &quot;#4d0000&quot;,\n    &quot;#330000&quot;,\n    &quot;#1a0000&quot;\n  ],\n  &quot;tints&quot;: [\n    &quot;#ff0000&quot;,\n    &quot;#ff1a1a&quot;,\n    &quot;#ff3333&quot;,\n    &quot;#ff4d4d&quot;,\n    &quot;#ff6666&quot;,\n    &quot;#ff8080&quot;,\n    &quot;#ff9999&quot;,\n    &quot;#ffb3b3&quot;,\n    &quot;#ffcccc&quot;,\n    &quot;#ffe5e5&quot;\n  ],\n  &quot;tones&quot;: [\n    &quot;#ff0000&quot;,\n    &quot;#f20d0d&quot;,\n    &quot;#e51a1a&quot;,\n    &quot;#d92626&quot;,\n    &quot;#cc3333&quot;,\n    &quot;#bf4040&quot;,\n    &quot;#b24d4d&quot;,\n    &quot;#a65959&quot;,\n    &quot;#996666&quot;,\n    &quot;#8c7373&quot;\n  ],\n  &quot;blind&quot;: {\n    &quot;protanomaly&quot;: &quot;#b75013&quot;,\n    &quot;protanopia&quot;: &quot;#8f7e1e&quot;,\n    &quot;deuteranomaly&quot;: &quot;#c34c00&quot;,\n    &quot;deuteranopia&quot;: &quot;#a17800&quot;,\n    &quot;tritanomaly&quot;: &quot;#fe0f00&quot;,\n    &quot;tritanopia&quot;: &quot;#fd1700&quot;,\n    &quot;achromatomaly&quot;: &quot;#7f2323&quot;,\n    &quot;achromatopsia&quot;: &quot;#363636&quot;\n  }\n}\n</code></pre>\n<h3 id=\"3-node-js-library\">3. Node.js Library</h3>\n<p>In it&#39;s current state, this is a pretty lame node.js library. All it does is\nexpose access to some other helpful color libraries and includes a few helper\nfunctions that were needed for the colorify website. The libraries that are\nincluded are:</p>\n<ul>\n<li><a href=\"https://github.com/harthur/color\">color</a></li>\n<li><a href=\"https://github.com/skratchdot/color-blind\">color-blind</a></li>\n<li><a href=\"https://github.com/skratchdot/color-harmony\">color-harmony</a></li>\n<li><a href=\"https://github.com/skratchdot/color-quantize\">color-quantize</a></li>\n<li><a href=\"https://github.com/c0bra/color-scheme-js\">color-scheme</a></li>\n<li><a href=\"https://github.com/skratchdot/color-stats\">color-stats</a></li>\n<li><a href=\"https://github.com/SimonWaldherr/ColorConverter.js\">colorconverter</a></li>\n<li><a href=\"https://www.npmjs.org/package/colorname\">colorname</a></li>\n<li><a href=\"https://github.com/One-com/one-color\">onecolor</a></li>\n</ul>\n<p>You can install the library by running <code>npm install colorify</code> and use it:</p>\n<pre><code class=\"lang-javascript\">var colorify = require(&#39;colorify&#39;);\nconsole.log(Object.keys(colorify.lib)); // outputs:\n                                        // [\n                                        //   &#39;color&#39;,\n                                        //   &#39;colorBlind&#39;,\n                                        //   &#39;colorHarmony&#39;,\n                                        //   &#39;colorQuantize&#39;,\n                                        //   &#39;colorScheme&#39;,\n                                        //   &#39;colorStats&#39;,\n                                        //   &#39;colorConverter&#39;,\n                                        //   &#39;colorName&#39;,\n                                        //   &#39;onecolor&#39;\n                                        // ]\n</code></pre>\n<h4 id=\"other-js-libs-to-check-out\">Other js libs to check out</h4>\n<ul>\n<li><a href=\"https://github.com/jrus/chromatist\">chromatist</a></li>\n<li><a href=\"https://github.com/gka/chroma.js\">chroma.js</a></li>\n<li>...more to add? submit a <a href=\"https://github.com/skratchdot/colorify/pulls\">pull request</a></li>\n</ul>\n<h4 id=\"source-code\">Source Code</h4>\n<ul>\n<li><a href=\"https://github.com/skratchdot/colorify\">Source Code on Github</a></li>\n</ul>\n<h2 id=\"for-developers\">For Developers</h2>\n<h3 id=\"clone-the-project\">Clone the Project</h3>\n<pre><code>git clone https://github.com/skratchdot/colorify.git\ncd colorify\n</code></pre><h3 id=\"install-the-dependencies\">Install the Dependencies</h3>\n<pre><code>npm install\n</code></pre><h3 id=\"run-the-application-and-watch-for-changes-\">Run the Application (and watch for changes)</h3>\n<pre><code>gulp\n</code></pre><p>Now browse to the app at <a href=\"http://localhost:8080/colorify\">http://localhost:8080/colorify</a></p>\n<h2 id=\"license\">License</h2>\n<p>Copyright (c) 2014 <a href=\"http://skratchdot.com/\">skratchdot</a><br>Licensed under the MIT license.</p>\n";
exports.links = "<h2 id=\"other-links-tools\">Other Links / Tools</h2>\n<ul>\n<li><a href=\"http://en.wikipedia.org/wiki/Color_theory\">Color Theory on Wikipedia</a></li>\n<li><a href=\"http://www.handprint.com/HP/WCL/wcolor.html\">Color Theory on HandPrint.com</a></li>\n<li><a href=\"https://kuler.adobe.com/\">Adobe Kuler</a></li>\n<li><a href=\"http://mudcu.be/sphere/\">Color Sphere</a></li>\n<li><a href=\"http://www.colorhexa.com/\">Color Hexa</a></li>\n<li><a href=\"http://colrd.com/\">Colrd.com</a></li>\n<li><a href=\"http://paletton.com/\">Paletton.com</a></li>\n<li><a href=\"http://bahamas10.github.io/ryb/\">RYB Color Wheel</a></li>\n<li><a href=\"http://colorblendy.com\">ColorBlendy</a></li>\n<li><a href=\"http://colourco.de/\">ColourCo.de</a></li>\n<li><a href=\"http://color.hailpixel.com/\">Color @ hailpixel.com</a></li>\n<li><a href=\"http://hslpicker.com\">hslpicker</a></li>\n<li><a href=\"http://colorblender.com\">ColorBlender</a></li>\n<li><a href=\"http://www.colorschemer.com/online.html\">ColorSchemer</a></li>\n<li><a href=\"http://coolors.co\">Coolors</a></li>\n<li><a href=\"http://www.checkman.io/please/\">Please.js</a></li>\n<li><a href=\"http://lovelypalettes.com/\">Lovely Palettes</a></li>\n<li><a href=\"http://www.color-hex.com/\">Color-Hex</a></li>\n<li><a href=\"http://www.colorshare.co/\">Color Share</a></li>\n<li><a href=\"http://uigradients.com\">UI Gradients</a></li>\n<li><a href=\"http://paintbycode.github.io/gradient-generator/\">Random CSS Gradient Generator</a></li>\n<li><a href=\"http://elrumordelaluz.github.io/draGGradients/\">draGGradients</a></li>\n<li><a href=\"bada55.io\">http://bada55.io</a></li>\n<li><a href=\"http://www.ficml.org/jemimap/style/color/wheel.html\">4096 Color Wheel</a></li>\n<li><a href=\"http://allprofitallfree.com/color-wheel2.html\">AllProfitAllFree - Color Wheel</a></li>\n<li><a href=\"http://design.geckotribe.com/colorwheel/\">Color Wheel &amp; Color Scheme Generator</a></li>\n<li><a href=\"http://colorotate.org/\">ColoRotate</a></li>\n<li><a href=\"http://colorsontheweb.com/\">Colors On The Web</a></li>\n<li><a href=\"http://www.colourlovers.com/\">Colour Lovers</a></li>\n<li><a href=\"http://colr.org/\">Colr</a></li>\n<li><a href=\"http://www.gpeters.com/color/color-schemes.php\">Instant Color Schemes</a></li>\n<li><a href=\"http://colorcodehex.com\">Color Code Hex</a></li>\n<li><a href=\"http://penguingeorge.com/products/colordrop/\">Colordrop</a></li>\n<li><a href=\"http://thesiteslinger.com/blog/making-color-contrast-checks-a-part-of-your-web-workflow/\">Color Contrast Links</a></li>\n<li><a href=\"http://jxnblk.com/colorable/\">Colorable</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=LKnqECcg6Gw\">Computer Color Is Broken</a></li>\n<li><a href=\"http://colours.neilorangepeel.com/\">CSS Colours</a></li>\n<li><a href=\"http://htmlcolorcodes.com/\">HTML Color Codes</a></li>\n<li><a href=\"http://www.colormatters.com/\">Color Matters</a></li>\n</ul>\n<p><strong><em>Have a link to share? Submit a <a href=\"https://github.com/skratchdot/colorify/pulls\">pull request</a> to add to this list.</em></strong></p>\n";