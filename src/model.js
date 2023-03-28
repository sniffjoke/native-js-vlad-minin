import image from './assets/image.png'

const text = `Крутые видео и уроки по Javascript: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин. Тут ты найдешь исчерпыващую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!</a>`

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов на чистом JavaScript',
        options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5 rem'
            }
        }
    },
    {
        type: 'image',
        value: image,
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Это картинка'
        }
    },
    {
        type: 'columns',
        value: [
            'Приложение на чистом JavaScript, без использования библиотек',
            'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
        ],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'text',
        value: text,
        options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    }
]