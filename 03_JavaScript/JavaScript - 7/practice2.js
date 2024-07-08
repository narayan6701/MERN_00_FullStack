let id1 = setInterval
(
    function()
    {
        console.log("Hello World!");
    },2000
);

setTimeout
(
    function()
    {
        clearInterval(id1);
    },10000
);