
    async function displayCommand(commandText){
        await sleep(100);
        var command = commandText;
        for (let i = 0; i < command.length; i++) {
            var temp = $(".command").text();
            $(".command").text(temp + command[i]);
            await sleep(30);
        }
    }
    async function displayElements(numberOfItems){
        for (let i = 1; i < numberOfItems; i++) {
            
            $(".to_hide:nth-child("+i+")").animate({opacity: 1}, 50);
            await sleep(100);
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }