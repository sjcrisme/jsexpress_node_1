# jsexpress_node_1
Просмотрите разбор домашнего задания, который был показан на первой открытой лекции.
Пользуясь знаниями, которые у вас есть на данный момент, а так же видео, постарайтесь реализовать точно такое же приложение.

Цель домашнего задания.

— проверить текущие знания по стеку технологий;
— отработка навыков писать код на незнакомой технологии;
— умение анализировать информацию, по сути повторить увиденное.
Инструкция:

Скачайте заготовку в которой есть html шаблон проекта.
Вам необходимо реализовать простейшие приложения с использованием Node.js и Express.
Прежде всего, приложение должно уметь отдавать статические файлы.
Для этого, необходимо запустить сервер который умеет работать со статическими файлами, а именно возвращать на клиент HTML страницы, картинки, таблицы стилей и так далее.
Как результат, при переходе в браузере на это приложение вы должны видеть шаблон «главной» страницы из скачанной заготовки.
Сверху располагается меню из трёх пунктов: «HOME», «ABOUT», «SAMPLE POST», «CONTACT». Настроить меню таким образом что бы при нажатие на соответствующий пункт загружалась необходимая страница.
Тексты и всё остальное что отображается на страницах «HOME» и «ABOUT», является полностью статичным, то есть частью HTML шаблона
При переходе на страницу «SAMPLE POST», происходит обращение к backend на соответствующий endpoint, который должен выдать нам данные поста в виде JSON. Необходимый для этого JSON-файл, так же будет находится в заготовке.
Полученные данные необходимо отобразить на странице «SAMPLE POST» используя клиентский JS или JQuery.
На странице «CONTACT» у нас будет форма. При нажатии на кнопку отправить, необходимо собрать данные с формы, и отправить их на Backend обычным POST-запросом или AJAX-запросом.
На Backend реализовать простую проверку, что все полученные поля не пустые. Если это так, то отправить позитивный ответ. А если проверка не проходит, отправить об этом информацию.
На основе полученного ответа от Backend, в случае позитивного ответа (проверка на Backend проходит) перенаправить на страницу «HOME». Если проверка на Backend не проходит, сообщить на странице об этом любым способом.
Реальное сохранение данных в этом домашнем задании не предусмотрено