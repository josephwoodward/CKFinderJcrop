CKFinderJcrop
=============
CKFinder plugin of a much needed image cropping feature using the JQuery based JCrop (http://deepliquid.com/content/Jcrop.html).

![](http://oi58.tinypic.com/10p6grm.jpg)

Features :

Presets - You can define your own rules in config.php file, and easly crop-resize your images.
Aspect Ratio - You can cut your images with aspect ratio
Resize - If you want, you can resize your images after cutting them.
Overwrite - If you don't want to create a new file, you may overwirte it.


To install the plugin
 1. Create folder "cropresize" inside CKfinder/plugins
 2. Export the code inside this folder
 3. Edit CKfinder/config.php and at the end of the file add line 

>    include_once "plugins/cropresize/plugin.php";

Edit config.php and define your own presets. An example plesed is allready defined.
Note: Do not delete default preset in config.php

License
-------
All files are under the [The MIT License (MIT) license][license].

[license]:http://en.wikipedia.org/wiki/MIT_License

