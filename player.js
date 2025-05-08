document.addEventListener('DOMContentLoaded', () => {
    const albums = [
        {
            name: 'Пора собирать щебень',
            icon: '/albums/album1.png',
            description: 'Дмитрий Мозжухин и Александр Романкин создавали экспериментальные альбомы в гаражных условиях, используя диктофон. Для записи был использован баян, который был куплен по объявлению в газете за 500 рублей. Однако на концертах его заменил более компактный детский аккордеон «Малыш»',
            songs: [
                {title: 'Добрый вечер', src: 'Sherben/song1.mp3'},
                {title: 'Двупалый человек', src: 'Sherben/song2.mp3'},
                {title: 'Мост', src: 'Sherben/song3.mp3'},
                {title: 'Следы', src: 'Sherben/song4.mp3'},
            ]
        },
        {
            name: 'Альбом, который не считается',
            icon: 'albums/album2.png',
            description: 'Альбом Дайте танк (!), который мало кто слушал. Занимателен, факт, что альбом практически никак не афишировался и не исполнялся на концертах. Большая часть - это скорее зарисовки, чем полноценные песни. Все написаны Дмитрием Мозжухиным, соответственно. Тогда группа терпела реформации, тогда же сменилось и название - "Give Us a Tank" на привычное русскоязычное.',
            songs: [
                {title: 'Как дела', src: 'DoesNotCount/Как дела.mp3'},
                {title: 'Царь горы', src: 'DoesNotCount/Царь горы.mp3'},
                {title: 'Love-love', src: 'DoesNotCount/Love-love.mp3'},
                {title: 'Клоун', src: 'DoesNotCount/Клоун.mp3'},
            ]
        },
        {
            name: 'Универсамка',
            icon: 'albums/album3.png',
            description: 'Третий альбом группы стал самым первым синтовым экспериментом, которые будут продолжаться на протяжении всей дальнейшей карьеры. И эксперимент крайне удачный.',
            songs: [
                {title: 'Гагарин', src: 'UniverSamka/Гагарин.mp3'},
                {title: 'Мишура', src: 'UniverSamka/Мишура.mp3'},
                {title: 'Санитарный день', src: 'UniverSamkac/Санитарный день.mp3'},
                {title: 'Чехов', src: 'UniverSamka/Чехов.mp3'},
            ]
        },
        {
            name: 'Сохранить как',
            icon: 'albums/album4.png',
            description: 'Танки тогда только начинали свой путь, нащупывая звучание, пытаясь укрепиться в том русском сегменте инди-андерграунда, и этот альбом выполняет свою функцию, но, к сожалению не более. Все, что было хорошо сделано в нём, будет сделано и сделано ещё лучше на следующих альбомах.',
            songs: [
                {title: 'Дядя', src: 'SaveAs/Дядя.mp3'},
                {title: 'Не плачь', src: 'SaveAs/Не плачь.mp3'},
                {title: 'Татария', src: 'SaveAs/Татария.mp3'},
                {title: 'Из земли', src: 'SaveAs/Из земли.mp3'},
            ]
        },
        {
            name: 'Интим',
            icon: 'albums/album6.png',
            description: 'В альбоме нет общего сюжета, но в первый, хоть и не в последний раз у альбома появляется единый лирический концепт, связывающий почти все треки, что очень круто. «Интим» и лирически, и музыкально звучит на несколько голов взрослее всего предыдущего творчества. Он четко выстроен, наконец-то осознано звучит, можно сказать, что группа начала выбиваться из андера и переходить в нечто большее. ',
            songs: [
                {title: 'Впереди', src: 'Intim/Впереди.mp3'},
                {title: 'Обиды', src: 'Intim/Обиды.mp3'},
                {title: 'Планетарий', src: 'Intim/Планетарий.mp3'},
                {title: 'Хомилия', src: 'Intim/Хомилия.mp3'},
            ]
        },
        {
            name: 'Глаза боятся',
            icon: 'albums/album5.png',
            description: 'В нём объединились синтовые эксперименты «Универсамки» и классический гаражный инди-рок группы. Мой любимый трек этой группы "Волна" спрятан именно в этом альбоме',
            songs: [
                {title: 'Волна', src: 'EyesAfraid/Волна.mp3'},
                {title: 'Вуаля', src: 'EyesAfraid/Вуаля.mp3'},
                {title: 'Смешно', src: 'EyesAfraid/Смешно.mp3'},
                {title: 'Эхо', src: 'EyesAfraid/Эхо.mp3'},
            ]
        },
        {
            name: 'Радио огонь',
            icon: 'albums/album8.png',
            description: 'Включения прежнего инди было минимально, а во всём остальном тут были полные эксперименты и новаторство относительно всего творчества группы. На альбоме есть синт-поп из 80-х, есть рэп, есть инди, да и вообще практически что угодно, что хочется найти любителю смешения синтовой музыки и инди-рока. Треки разнообразные, лирически стройные в плане своего концепта (как и музыкально, к слову). Группа просто решила сделать всё то, что хотела и реализовала это альбоме. ',
            songs: [
                {title: 'В гостях', src: 'FireRadio/В гостях.mp3'},
                {title: 'Гореть', src: 'FireRadio/Гореть.mp3'},
                {title: 'Утро', src: 'FireRadio/Утро.mp3'},
                {title: 'Молния', src: 'FireRadio/Молния.mp3'},
            ]
        },
        {
            name: 'См. рис 1',
            icon: 'albums/album7.png',
            description: 'Эта работа — самый хитовый альбом группы.Каждый трек с альбома — хит, который запоминается в голове шикарно написанными партиями, которые оседают в голове ещё надолго и не вылезают оттуда. Группа сделала тот альбом, к которому будешь возвращаться целиком. Не к отдельным трекам, а именно ко всему альбому, потому что каждый трек остается с тобой и запоминается. ',
            songs: [
                {title: 'Веселиться', src: 'WatchRis1/Веселиться.mp3'},
                {title: 'Друг', src: 'WatchRis1/Друг.mp3'},
                {title: 'Курьер', src: 'WatchRis1/Курьер.mp3'},
                {title: 'Спам', src: 'WatchRis1/Спам.mp3'},
            ]
        },
        {
            name: 'См. рис 2',
            icon: 'albums/album10.png',
            description: 'Это всё тот же стиль синтового инди, но на этот раз преобладает инди-рок и живой инструментал. Так же очень радует саксофон, который идеально вписывается в атмосферу альбома и дополняет общую музыкальную палитру. Это до одури атмосферная работа, которая работает очень глубоко и на нескольких уровнях. С точки зрения текста — это описание различных рефлексий и мнений относительно жизни нашей бренной, казалось бы — ни концепта, ни чего-то нового, но текст написан так живо, чувственно и профессионально, что он будто бы был создан, чтобы цепляться за сердца. ',
            songs: [
                {title: 'Джинн', src: 'WatchRis2/Джинн.mp3'},
                {title: 'Монополия', src: 'WatchRis2/Монополия.mp3'},
                {title: 'Три четверти', src: 'WatchRis2/Три четверти.mp3'},
                {title: 'ШУм', src: 'WatchRis2/Шум.mp3'},
            ]
        },
        {
            name: 'Человеко-часы',
            icon: 'albums/album12.png',
            description: 'Самая сильная его сторона — это дичайший профессионализм и проработанность. Это самый крутой альбом с точки зрения проработки и техники. Он сделан качественно, у него шикарно проработан текст, он — это то, как выглядит идеально выверенный и проработанный вариант дайте танк.',
            songs: [
                {title: 'Альтернатива', src: 'HumanWatch/Альтернатива.mp3'},
                {title: 'Люди', src: 'HumanWatch/Люди.mp3'},
                {title: 'Профессионал', src: 'HumanWatch/Профессионал.mp3'},
                {title: 'Шанс', src: 'HumanWatch/Шанс.mp3'},
            ]
        },
        {
            name: 'Слова-паразиты',
            icon: 'albums/album11.png',
            description: 'Альбом из одной песни, но какой. Это мюзикл и написан для постановки на сцене. За не столь тонкими метафорами скрывается множетсво идей, описаний людей. Этим и цепляет',
            songs: [
                {title: 'Слова-паразиты', src: 'ParasiteWords/Слова-паразиты(мюзикл).mp3'},
            ]
        },
        {
            name: 'Хрупко',
            icon: 'albums/album13.png',
            description: 'Последний на данный момент альбом группы. Появился как черт из табокерки. Ни анонсов, ни реверансов, ни прелюдий. Прекрасная работа, двигающая напраление группы чуть в сторону, не меняя общей идеи рефлексии.',
            songs: [
                {title: 'Конец', src: 'Fragile/Конец.mp3'},
                {title: 'М', src: 'Fragile/М.mp3'},
                {title: 'Пунктир', src: 'Fragile/Пунктир.mp3'},
                {title: 'Путь', src: 'Fragile/Путь.mp3'},
            ]
        },
    ];

    const playerElements = {
        coverage: document.querySelector(".coverage"),
        trackName: document.querySelector('.trackname'),
        albumListen: document.querySelector('.albumlisten span'),
        albumAbout: document.querySelector('.albumabout span'),
        progressBar: document.querySelector('.progressbar'),
        progressFilled: document.createElement('div'),
        changeButton: document.getElementById('change'),
        previousButton: document.getElementById('previous'),
        stopButton: document.getElementById('stop'),
        nextButton: document.getElementById('next')
    };

    // Состояние плеера
    const state = {
        currentAudio: new Audio(),
        currentAlbum: albums[0], // Исправлено на объект альбома
        currentTrackIndex: 0,     // Исправлен индекс
        isPlaying: false,
        previousSelections: []    // Для хранения истории выбора
    };

    // Вспомогательные функции
    function createElement(type, className, content) {
        const el = document.createElement(type);
        el.className = className;
        if (content) el.textContent = content;
        return el;
    }

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    // Обновление интерфейса
    function updatePlayerInfo() {
        const song = state.currentAlbum.songs[state.currentTrackIndex];
        playerElements.trackName.textContent = 
            `${song.title} ${formatTime(state.currentAudio.currentTime)}/${formatTime(state.currentAudio.duration)}`;
        
        playerElements.albumListen.textContent = `Альбом "${state.currentAlbum.name}"`;
        playerElements.albumAbout.textContent = state.currentAlbum.description;
    }

    // Логика плеера
    function playTrack(index) {
        state.currentTrackIndex = index;
        const song = state.currentAlbum.songs[index];
        
        state.currentAudio.src = song.src;
        state.currentAudio.play();
        state.isPlaying = true;
        
        // Обновляем иконку только при выборе трека
        playerElements.coverage.style.backgroundImage = `url(${state.currentAlbum.icon})`;
        updatePlayerInfo();
    }

    function showAlbums() {
        const modal = createElement('div', 'album-modal');
        
        // Добавляем кнопку закрытия
        const closeButton = createElement('button', 'modal-close', '×');
        closeButton.addEventListener('click', () => modal.remove());
        modal.appendChild(closeButton);
    
        albums.forEach(album => {
            const albumEl = createElement('div', 'album-item');
            
            // Создаем контейнер для иконки и названия
            const contentWrapper = document.createElement('div');
            contentWrapper.style.display = 'flex';
            contentWrapper.style.alignItems = 'center';
            contentWrapper.style.gap = '10px';
    
            // Добавляем иконку альбома
            const icon = document.createElement('img');
            icon.src = album.icon;
            icon.className = 'album-icon';
            
            // Добавляем название альбома
            const title = createElement('span', '', album.name);
    
            contentWrapper.appendChild(icon);
            contentWrapper.appendChild(title);
            albumEl.appendChild(contentWrapper);
    
            albumEl.addEventListener('click', () => {
                state.previousSelections.push({type: 'album', modal: modal});
                showSongs(album);
            });
            modal.appendChild(albumEl);
        });
        document.body.appendChild(modal);
    }

    function showSongs(album) {
        const modal = createElement('div', 'song-modal');
        
        // Добавляем кнопку возврата
        const backButton = createElement('button', 'modal-back', '← Назад');
        backButton.addEventListener('click', () => {
            modal.remove();
            const prev = state.previousSelections.pop();
            if(prev) document.body.appendChild(prev.modal);
        });
        modal.appendChild(backButton);

        // Добавляем кнопку закрытия
        const closeButton = createElement('button', 'modal-close', '×');
        closeButton.addEventListener('click', () => modal.remove());
        modal.appendChild(closeButton);

        album.songs.forEach((song, index) => {
            const songEl = createElement('div', 'song-item', song.title);
            songEl.addEventListener('click', () => {
                state.currentAlbum = album; // Устанавливаем альбом только при выборе трека
                playTrack(index);
                modal.remove();
            });
            modal.appendChild(songEl);
        });
        
        document.querySelector('.album-modal')?.remove();
        document.body.appendChild(modal);
        updatePlayerInfo();
    }


    // Обработчики событий
    playerElements.changeButton.addEventListener('click', showAlbums);
    
    playerElements.previousButton.addEventListener('click', () => {
        if (state.currentTrackIndex > 0) {
            playTrack(state.currentTrackIndex - 1);
        }
    });

    playerElements.nextButton.addEventListener('click', () => {
        if (state.currentTrackIndex < state.currentAlbum.songs.length - 1) {
            playTrack(state.currentTrackIndex + 1);
        }
    });

    playerElements.stopButton.addEventListener('click', () => {
        state.currentAudio.pause();
        state.currentAudio.currentTime = 0;
        state.isPlaying = false;
    });

    // Progress bar
    playerElements.progressFilled.className = 'progress-filled';
    playerElements.progressBar.appendChild(playerElements.progressFilled);

    playerElements.progressBar.addEventListener('click', (e) => {
        const rect = playerElements.progressBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        state.currentAudio.currentTime = pos * state.currentAudio.duration;
    });

    state.currentAudio.addEventListener('timeupdate', () => {
        const progress = (state.currentAudio.currentTime / state.currentAudio.duration) * 100;
        playerElements.progressFilled.style.width = `${progress}%`;
        updatePlayerInfo();
    });

    state.currentAudio.addEventListener('ended', () => {
        playerElements.nextButton.click();
    });

    // Инициализация первого альбома
    if (albums.length > 0) {
        state.currentAlbum = albums[0];
        updatePlayerInfo();
    }
});