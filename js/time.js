    $(function(){


    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    document.querySelector(".today_date").innerHTML = year + "년 " + month + "월 " + date + "일 기준";
    document.querySelector(".today_date1").innerHTML = year + "년 " + month + "월 " + date + "일 기준";
    document.querySelector(".today_date2").innerHTML = year + "." + month + "." + date ;
});
