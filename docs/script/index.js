function getBgURL(num) {
    return `https://peiseka.com/Upload/mihuan/thumb/mihuan${num}.jpg`
}
function changeBg() {
    
    const nums = [1,2,3,4,5,6,7,18,24,55,78]
    let index=0
    setInterval(() => {
        if (index===3) {
            index=0
        }else{

            index+=1;
        }
        document.body.style.backgroundImage = `url(${getBgURL(nums[index])})`
        
    }, 2500);
}

changeBg()
