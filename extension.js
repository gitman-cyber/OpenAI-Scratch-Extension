ext._shutdown = function() {};ext._getStatus = function() { return {status: 2, msg: 'Ready'};}; ext.myBlock = function (callback){ window.alert('Hello!'); }; var descriptor = { blocks: [ [" ","( hello)","myBlock"],],menus: {},url: 'https://kyleplo.github.io/scratch-extension-creator/help#'Hello!};ScratchExtensions.register('OpenAI', descriptor, ext);
