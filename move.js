function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;

            //inverted controls
        
            if(e.key === 'ArrowRight'){
                direction = 'west'
            }
            if(e.key === 'ArrowDown'){
                direction = 'north'
            }
            if(e.key === 'ArrowLeft'){
                direction = 'east'
            }
            if(e.key === 'ArrowUp'){
                direction = 'south'
            }

            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    
    


    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}

