const mrkRead = document.getElementById('markRead');
let docCount = document.getElementById('count')
let notification = document.querySelectorAll('.notifi');

notification.forEach((a)=>{
    // let time = a.children[a.children.length - 1].contains('time');
    // console.log(time)
    count = parseInt(docCount.innerHTML);
        a.addEventListener('click',()=>{
            if(a.classList.contains('unread')){
                a.classList.remove('unread');
                // console.log('class femoved');
                count -= 1;
                if(count <= 0){
                    count=0;
                }
                docCount.innerHTML = count;
                a.children[a.children.length - 1].remove();
                
            }else{
                a.classList.add('unread');
                count += 1;
                docCount.innerHTML = count;
                let newElement = document.createElement('span');
                newElement.classList.add('redMark');
                a.appendChild(newElement);
                
            }
        })
});         
mrkRead.addEventListener('click',()=>{
    notification.forEach((a)=>{
        a.classList.remove('unread');
        count = 0;
        docCount.innerHTML = 0;
        
    
    })
})
// red mark
