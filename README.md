Idle-Sleep
==========

Sleep with native spawn-sync

## Note

This is a toy! Not production code!


### Why?
This project uses spawn-sync to call the native spawnSync function. If it is not available, then it creates a script file that will be executed. The polyfill will then poll for this script to complete with "busy waiting" - not really "idle" anymore.


## Installation

Install this module with the following command:
```shell
npm install idle-sleep
```

Add the module to your ```package.json``` dependencies:
```shell
npm install --save idle-sleep
```
Add the module to your ```package.json``` dev-dependencies:
```shell
npm install --save-dev idle-sleep
```

## Getting Started

```javascript
var idleSleep = require('idle-sleep');

console.log('Start at ' + new Date());
idleSleep(1000);
console.log('Done at ' + new Date());
```

##Third-party libraries

The following third-party libraries are used by this module:

###Dependencies
* spawn-sync: https://github.com/ForbesLindesay/spawn-sync

##License

The MIT License

Copyright 2015 Marcel Erz
