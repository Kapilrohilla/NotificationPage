const mrkRead = document.getElementById('markRead');
let docCount = document.getElementById('count')
let notification = document.querySelectorAll('.notifi');

notification.forEach((a)=>{
    count = parseInt(docCount.innerHTML);
        a.addEventListener('click',()=>{
            if(a.classList.contains('unread')){
                a.classList.remove('unread');
                console.log('class femoved');
                count -= 1;
                if(count <= 0){
                    count=0;
                }
                docCount.innerHTML = count;
                
            }else{
                a.classList.add('unread');
                console.log('class added');
                count += 1;
                docCount.innerHTML = count
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

drkMode
const btn = document.getElementById('drkToggle').children[0];
btn.addEventListener('toggle',()=>{
    btn.children[0].style.display= "none";
    btn.children[1].style.display= "inline-block";
})