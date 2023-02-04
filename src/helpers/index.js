 
   export const handlerCountCompleted = (array) =>{
        let counter = array.length
        if(counter ===0){
            return 0
        }
        array.forEach((el) =>{
            if(el.completed){
                --counter
            }
        })
        return Math.round(counter / array.length*100)
    }


    export const sortTaskByData = (array) => {
        return array.sort((a,b) => {
            const taskA = new Date(a.created);
            const taskB = new Date(b.created);
            if(taskA < taskB){
                return 1;
            } else if(taskA > taskB) {
                return -1;
            }
            return 0;
        })
    } /// => new []
    
    
    export const sortTaskByGroup = (array) => {
        const favorite = sortTaskByData(array.filter((item) => item.favorite && !item.completed));
        const defaultTask = sortTaskByData(array.filter((item) => !item.favorite && !item.completed));
        const completed = sortTaskByData(array.filter((item) => item.completed))
        const sortCompleted = [...completed.sort((taskA,taskB) => {
            if(taskA.favorite && !taskB.favotire){
                return -1;
            } else {
                return 1;
            }
    
            return 0;
        })]
       
        
        return [...favorite, ...defaultTask, ...sortCompleted];
    }
    
    
    
    