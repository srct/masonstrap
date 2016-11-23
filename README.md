# Masonstrap (GMU bootstrap theme)

A project of [GMU SRCT](http://srct.gmu.edu).

Masonstrap is a custom theme for bootstrap customized with GMU brand colors and elements.
It aims to easily provide any web project with Mason branding.

## Enabling Masonstrap for Your Project
<legend></legend>

All you need to do is to take _bootstrap.min.css_ and add it to the static files for your project.

Masonstrap bundles bootstrap 3.0 and normalize.css for you.


## Making Changes to Masonstrap
<legend></legend>

If you would like to make changes to values or behaviors in Masonstrap you will need to do some quick setup.

Ensure node.js is installed:

On Ubuntu: `$ sudo apt-get install npm`
On OS X, make sure you have [Homebrew](http://brew.sh) then `$ brew install node`
On Windows, download it [here](https://nodejs.org/en/download/).

and in the root directory of this project (bootswatch/) run:

`$ npm install`

You will also need to have Grunt installed globally on your system:

`$ npm install -g grunt-cli`

Finally, run:

`$ grunt watch`

in order for Grunt to rebuild the bootstrap files.

After that, you are free to make whatever changes you like to _variables.less_ and _bootswatch.less_ and _bootstrap.min.css_ will be updated accordingly.

Customization
------
Bootswatch is open source and you’re welcome to modify the themes.

Each theme consists of two LESS files. `variables.less`, which is included by default in Bootstrap, allows you to customize [these settings](http://getbootstrap.com/customize/#less-variables). `bootswatch.less` introduces more extensive structural changes.

These files are also available in SASS.

Check out the [Help page](http://bootswatch.com/help/) for more details on building your own theme.

Icon
------
website by Stock Image Folio from the Noun Project
