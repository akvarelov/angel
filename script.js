document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы экранов
    const welcomeScreen = document.getElementById('welcome-screen');
    const menuScreen = document.getElementById('menu-screen');
    const priceScreen = document.getElementById('price-screen');
    
    // Получаем кнопки
    const priceBtn = document.getElementById('price-btn');
    const projectBtn = document.getElementById('project-btn');
    const contactBtn = document.getElementById('contact-btn');
    const backBtn = document.getElementById('back-btn');
    const priceBackBtn = document.getElementById('price-back-btn');
    
    // Текст приветствия
    const welcomeText = document.getElementById('welcome-text');
    
    // Функция для переключения экранов
    function showScreen(screenToShow) {
        // Скрываем все экраны
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Показываем нужный экран
        screenToShow.classList.add('active');
    }
    
    // Автоматический переход от приветствия к меню через 3 секунды
    setTimeout(() => {
        // Анимация исчезновения приветствия
        welcomeText.style.opacity = '0';
        welcomeText.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            showScreen(menuScreen);
        }, 1000);
    }, 3000);
    
    // Обработчики для кнопок
    priceBtn.addEventListener('click', () => {
        showScreen(priceScreen);
    });
    
    projectBtn.addEventListener('click', () => {
        // Открываем ссылку на проект в новой вкладке
        window.open('https://t.me/Angelskiy_glazz', '_blank');
    });
    
    contactBtn.addEventListener('click', () => {
        // Открываем ссылку для связи в новой вкладке
        window.open('http://t.me/angel_angelskiy', '_blank');
    });
    
    backBtn.addEventListener('click', () => {
        showScreen(welcomeScreen);
        
        // Сброс приветствия для повторного показа
        welcomeText.style.opacity = '1';
        
        // Через 3 секунды снова переходим к меню
        setTimeout(() => {
            welcomeText.style.opacity = '0';
            setTimeout(() => {
                showScreen(menuScreen);
            }, 1000);
        }, 3000);
    });
    
    priceBackBtn.addEventListener('click', () => {
        showScreen(menuScreen);
    });
    
    // Добавляем эффект набора текста для приветствия (опционально)
    const originalText = welcomeText.textContent;
    welcomeText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            welcomeText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Запускаем эффект набора текста
    setTimeout(typeWriter, 500);
    
    // Добавляем случайные мерцания для глитч-эффекта
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(el => {
            el.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        });
    }, 100);
    
    // Добавляем эффект мигания для некоторых элементов
    setInterval(() => {
        const randomElement = document.querySelector('.specialty-title');
        if (randomElement && Math.random() > 0.7) {
            randomElement.style.color = Math.random() > 0.5 ? '#00ff00' : '#ff0000';
            
            setTimeout(() => {
                randomElement.style.color = '#ff0000';
            }, 100);
        }
    }, 500);
});
