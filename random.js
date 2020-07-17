let strings = ['Первая строка',
               'Другая строка',
               'Еще одна строка',
               'Заумная фраза здесь',
               'Совершенно случайная строка',
               'Буковки',
               'Циферки'
]

let btn = document.querySelector('.btn'),
    text = document.querySelector('.text');

btn.addEventListener('click', function() {
    text.textContent = getRandomString(strings);
});

function getRandomString(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
