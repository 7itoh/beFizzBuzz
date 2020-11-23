'use strict';

const mltWrapp = document.getElementById('mltWrapp');
const fzWrapp = document.getElementById('fzWrapp');
const fzTitle = document.getElementById('fzTitle');
const bzWrapp = document.getElementById('bzWrapp');
const bzTitle = document.getElementById('bzTitle');

mltWrapp.style.background = 'yellow';
fzWrapp.style.background = 'pink';
fzTitle.style.color = 'tomato';
bzWrapp.style.backgroundColor = 'skyblue';
bzTitle.style.color = 'white';

const onPress = () => {
    let min = document.getElementById('minNum').value;
    let max = document.getElementById('maxNum').value;
    console.log(min);
    console.log(max);

    let fzInput = document.getElementById('fzInput').value;
    let bzInput = document.getElementById('bzInput').value;
    let fbzResult = document.getElementById('fbzResult');

    let fbzCheck1 = /^\D+$/;             // 整数であることのチェック
    let fbzCheck2 = /^-?[0-9]+\.[0-9]+$/ // 小数点が含まれているかのチェック

    if (min >= max) {
        fbzResult.innerHTML = '';
        fbzResult.innerHTML = '倍数を[Min > Max]となるように入力してください';
    } else if (!fzInput || !bzInput || fbzCheck1.test(fzInput) || fbzCheck1.test(bzInput) || fbzCheck2.test(fzInput) || fbzCheck2.test(bzInput)) {
        fbzResult.innerHTML = '';
        fbzResult.innerHTML = '整数値を入力してください';
    } else {
        fbzResult.innerHTML = '';
        let val = '';

        for (let i = min; i <= max; i++) { 
            if (i % fzInput === 0 && i % bzInput === 0) {
                val = `FizzBuzz : ${i}`;
            } else if (i % fzInput === 0) {
                val = `Fizz : ${i}`;
            } else if (i % bzInput === 0) {
                val = `Buzz : ${i}`;
            } else { 
                val = '';
            }
            const li = document.createElement('li');
            fbzResult.appendChild(li);
            li.textContent = val;
        }
    }
}

const numClear = () => { 
    document.getElementById('minNum').value = ''
    document.getElementById('maxNum').value = ''
}

const onClear = () => {
    document.getElementById('fzInput').value = '';
    document.getElementById('bzInput').value = '';
    document.getElementById('fbzResult').innerHTML = '';
}
