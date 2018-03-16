# Starter Pack

This is a minimal starter pack for web sites development.
It involves the use of:

* **[Grunt](http://gruntjs.com/)**: a JavaScript task runner;
* **[Bower](https://bower.io/)**: a package manager for client side libraries and frameworks;
* **[Composer](https://getcomposer.org/)**: dependency Manager for PHP;
* **[Sass](http://sass-lang.com/)**: a CSS extension language;
* **[Compass](http://compass-style.org/)**: an open-source CSS Authoring Framework;
* **[Susy](http://susy.oddbird.net/)**: a Sass-based grid framework.




## Requires

To use this starter pack you need to install the following libraries in your local environment. Many of these will have to be installed by the terminal. Make sure you are in your user path (run the "cd" command first to be sure).

### **NodeJS**

Click [here](https://nodejs.org/en/) and follow the install instructions.

### **Bower**

Run the following commands:

```bash
sudo npm install -g bower
```
[Source](https://bower.io/#install-bower)

### **Composer**

Run the following commands:
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

[Source](https://getcomposer.org/download/)

### **Homebrew** (for MacOS only)

Run the following commands:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

[Source](http://brew.sh/)

### **Ruby**

Click [here](https://www.ruby-lang.org/it/downloads/) and follow the install instructions.

### **Sass**

Run the following commands:

```bash
sudo gem install sass
```
[Source](http://sass-lang.com/install)

### **Compass**

Run the following commands:

```bash
sudo gem install compass
```
[Source](http://compass-style.org/install/)

### **Susy**

Run the following commands:

```bash
sudo gem install susy
```
[Source](http://susydocs.oddbird.net/en/latest/install/)




## Installation

### **Grunt**

**First installation**

Open the directory in the terminal. Run the command `npm init` and answer to the questions about the package's informations.
Afterward it, launch the `npm install` command. It will install Grunt and all its modules.

> **Note:** for install a new Grunt module, run `npm install [module-name] --save-dev` and remember to add and configure it in the Gruntfile.js.

> **Tip:** to making sure that your NodeJS modules are up to date, run `npm update`.

**Started project**

Open the directory in the terminal. Run the `npm install` command.

### **Bower**

**First installation**

Open the directory in the terminal. Run the command `bower init` and answer to the questions about the package's informations.
For install a JavaScript or CSS library, run `bower install [library-name] --save`. 

**Started project**

Open the directory in the terminal. Run the `bower install` command.

### **Composer**

**First installation**

If you need to install a PHP library make sure it is recorded on [Packagist](https://packagist.org/) and install it with the command `composer require [vendor/package]`

> **Tip:** to making sure that your PHP libraries are up to date, run `composer update`.

**Started project**

Open the directory in the terminal. Run the `composer install` command.


## Author

[Davide Caruso](https://davidecaruso.github.io)


## License

Licensed under [MIT](https://opensource.org/licenses/mit-license.php).
