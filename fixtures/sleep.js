process.stdin.on('data', function (text) {
    setTimeout(function () {
        process.exit(0);
    }, parseInt(text, 10));
});