const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const mothlyBtn = document.querySelector('#monthly');

const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last');

function dailyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Day - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function weeklyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

function mothlyData(){
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}


dailyBtn.addEventListener('click', () => {
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyData()
})

mothlyBtn.addEventListener('click', () => {
    mothlyData()
})