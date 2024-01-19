# rep_diag_test
Проект React/Flask

## Структура
src/index.js - файл к которому подключен ситль index.css и при помощи него происходит рендер основного приложения
src/pages - папка внутри которой хранятся страницы приложения сделанные в виде const
src/components/Layout.jsx - файл в котором хранится хэдер для всех страниц
src/components/charts.jsx - файл в котором хранится config и data для таблиц(значения которые туда внесены только для проверки отображения ,не более)

Из charts, в котором лежат data и config для таблиц , происходит экспорт в Dashboardpage.jsx. Dashboardpage выводится в Outlet файла Layout.jsx, далее следует файл APP.jsx
из которого компонент APP (внутри него находится роуты, по которым определяется какой путь страницы и аутлет сдержащийся в нем) экспортируется в index.js .

В Dashboardpage данные с бэка мы получаем при помощи UseEffect и функции прописанной в нем.

