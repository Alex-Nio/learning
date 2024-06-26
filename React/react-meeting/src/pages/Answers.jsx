import React, { useState } from 'react';
import { data as recruitmentData } from '../app/data/data';

const Answers = () => {
  const [data, setData] = useState(recruitmentData);

  const answers = data.map((item) => {
    return item.questions.filter((el) => el.answers);
  });

  return (
    <div>
      <ul className="questions-list">
        <li className="">
          1. **Общие вопросы:** - Расскажите немного о вашем опыте работы в
          качестве фронтенд-разработчика. С какими проектами вы работали? -
          Почему вы решили подать заявку на эту вакансию?
        </li>
        <li>
          *Опыт работы
          <br /> Если выделять последние три места работы: Студия разработки: Я
          работал в студии, которая разрабатывала проекты для малого и среднего
          бизнеса. В основном, мы занимались вёрсткой проектов и интеграцией
          вёрстки на различные CMS. Это дало мне прочные основы в HTML, CSS и
          JavaScript, а также опыт работы с различными системами управления
          контентом. Крупная финтех компания: После успешного прохождения
          собеседования, я присоединился к крупной финтех компании. Здесь я
          работал с современными стандартами JavaScript (ES6/7+) и старыми
          стандартами, такими как ES5. Мы использовали Jira для управления
          задачами и активно работали с фреймворками React и Vue.js. Этот опыт
          позволил мне глубже понять фронтенд-разработку в масштабных проектах и
          научил работать в команде над сложными задачами. Текущая позиция
          тимлида: В настоящее время я занимаю позицию тимлида. Мои обязанности
          включают административные задачи, такие как проведение звонков с
          командой из 4 разработчиков, проведение код-ревью и менторство. Помимо
          административных функций, я активно занимаюсь разработкой на Vue.js,
          улучшением и созданием архитектуры проектов, а также разработкой SPA
          приложений с нуля и доработкой существующих проектов. В свободное
          время я улучшаю свои навыки английского языка, изучаю React и
          TypeScript, чтобы быть в курсе современных технологий и улучшать свои
          профессиональные навыки. Этот разнообразный опыт помог мне развить
          широкий спектр навыков и углубить понимание различных аспектов
          фронтенд-разработки. * Почему эта вакансия Я решил подать заявку на
          эту вакансию, потому что стремлюсь к профессиональному развитию и хочу
          освоить новые технологии. Мне особенно интересна возможность работы с
          Vue.js и Nuxt, а также участие в создании SPA/PWA приложений. Ваша
          компания предлагает гибкие условия труда и поддержку менторства, что
          важно для меня, так как я хочу не только развиваться сам, но и
          помогать другим. Кроме того, мне интересно узнать, как меня оценивают
          на рынке как фронтенд-разработчика, и я уверен, что работа в вашей
          компании поможет мне оценить свои текущие навыки и понять, в каком
          направлении развиваться дальше.
        </li>
        <li>
          2. **JavaScript и TypeScript:** - Какой ваш опыт работы с JavaScript
          (ES6/7+)? Можете привести примеры, где вы использовали новые
          возможности языка? - Насколько хорошо вы знакомы с TypeScript? В каких
          проектах вы его использовали и каковы ваши впечатления?
        </li>
        <li>
          *JavaScript
          <br /> У меня большой опыт работы с JavaScript, включая его новые
          возможности, а также с более ранними версиями языка. В повседневной
          работе я регулярно использую функции ES6/7+, такие как стрелочные
          функции, деструктуризация, async/await и классы. Например, в одном из
          моих недавних проектов я активно использовал async/await для упрощения
          работы с асинхронными операциями, что значительно улучшило читаемость
          и поддерживаемость кода. В другом проекте я применил деструктуризацию
          для более удобного управления данными из API. Я также активно слежу за
          обновлениями стандартов JavaScript и изучаю, как новые функции влияют
          на производительность. В одном случае я использовал инструменты, такие
          как Chrome DevTools (Инструменты разработчика) и Babel (транспайлер
          кода), чтобы анализировать производительность и поведение кода при
          трансляции JavaScript в машинный код.
          <br />
          *TypeScript <br /> На данный момент в текущих проектах я не использую
          TypeScript, однако ранее у меня был опыт работы с этой технологией. Я
          знаком с основными концепциями и преимуществами TypeScript, такими как
          статическая типизация и улучшенная поддержка редакторов кода. Если
          потребуется, я готов быстро освежить свои знания и применить их на
          практике. У меня есть хорошая база знаний и навыков, которые позволят
          мне быстро адаптироваться и эффективно использовать TypeScript в новых
          проектах.
        </li>
        <li>
          3. **PWA/SPA приложения:** - Расскажите о своем опыте создания PWA или
          SPA приложений. Какие технологии и инструменты вы использовали? - С
          какими трудностями вы столкнулись при разработке PWA/SPA и как вы их
          преодолевали?
        </li>
        <li>
          *О PWA/SPA
          <br /> В основном при создании PWA или SPA приложений я использовал
          стек технологий MEVN, который включает в себя MongoDB, Express.js,
          Vue.js и Node.js.
          <br /> Vue.js:
          <br /> Для фронтенд-разработки я использовал как Vue 2, так и Vue 3.
          Vue.js предоставляет гибкость и возможности для создания реактивных
          интерфейсов. В одном из проектов, например, я использовал Vue 3 для
          создания интерактивного пользовательского интерфейса с использованием
          Composition API, что позволило улучшить структуру и повторное
          использование кода. Express.js: Для создания серверной части и API я
          использовал Express.js. Это легкий и гибкий фреймворк для Node.js,
          который позволяет быстро создавать серверные приложения. Я разработал
          несколько RESTful API, которые взаимодействуют с фронтендом,
          предоставляя данные и обеспечивая авторизацию и аутентификацию.
          Node.js: В качестве серверного окружения использовал Node.js, который
          позволяет работать с JavaScript на сервере. Это позволяет использовать
          один язык для разработки как фронтенда, так и бэкенда, что упрощает
          процесс разработки и поддержки приложений. MongoDB: В некоторых
          проектах использовал MongoDB для хранения данных, так как эта NoSQL
          база данных хорошо интегрируется с Node.js и Express.js, предоставляя
          гибкость в работе с данными. Например, в одном из последних проектов я
          разрабатывал SPA приложение для управления задачами. Я использовал Vue
          3 для создания интерактивного интерфейса, Express.js для создания
          RESTful API и Node.js для серверной логики. Это приложение
          обеспечивало высокую производительность и отличную пользовательскую
          функциональность, позволяя эффективно управлять задачами. Этот опыт
          позволил мне глубже понять различные аспекты создания SPA приложений и
          эффективно использовать современные технологии для решения задач.
          <br /> *Трудности PWA/SPA <br /> При разработке SPA приложений я
          сталкивался с различными трудностями, которые требовали внимательности
          и усидчивости. Вот несколько примеров и как я их преодолевал:
          Оптимизация производительности: Проблема: В одном из проектов
          столкнулся с медленной загрузкой страницы из-за большого объема
          данных, загружаемых сразу. Решение: Использовал ленивую загрузку
          компонентов (lazy loading) и пагинацию данных. Это позволило
          значительно уменьшить время загрузки и улучшить пользовательский опыт.
          Управление состоянием приложения: Проблема: В крупном SPA проекте
          управление состоянием становилось сложным и трудным для поддержки.
          Решение: Внедрил Vuex для централизованного управления состоянием. Это
          улучшило структуру кода и упростило управление состоянием, сделав его
          более предсказуемым и легче поддерживаемым. Кроссбраузерная
          совместимость: Проблема: Некоторые функции не работали одинаково во
          всех браузерах. Решение: Использовал полифиллы и библиотеки, такие как
          Babel, для обеспечения совместимости. Также регулярно тестировал
          приложение в различных браузерах и устройствах. Интеграция с RESTful
          API: Проблема: Были случаи, когда данные от API приходили с задержкой
          или в непредсказуемом формате. Решение: Использовал Axios для
          обработки запросов и внедрил обработку ошибок и повторные запросы при
          неудачных попытках. Также тесно сотрудничал с бэкенд-разработчиками
          для улучшения API. Для решения этих и других задач я активно искал
          информацию в документации, на форумах и технических блогах. Этот
          процесс позволил мне не только решить текущие проблемы, но и улучшить
          свои навыки и знания, что помогает мне быстрее справляться с новыми
          вызовами.
        </li>
        <li>
          4. **Vue.js и экосистема:** - Опишите свой опыт работы с Vue.js,
          особенно с Vue 3. Какие проекты вы реализовали с использованием этого
          фреймворка? - Какой у вас опыт работы с Nuxt 3? Если нет, готовы ли вы
          изучить эту технологию? - Как вы проводите код-ревью в проектах с
          Vue.js? Какие аспекты кода вы проверяете в первую очередь?
        </li>
        <li>
          *О Vue.js 3<br /> У меня значительный опыт работы с Vue.js, особенно с
          Vue 3 и его Composition API. Один из последних проектов, который я
          реализовал с использованием этого фреймворка: Проект: Административный
          личный кабинет Описание: Этот проект включал создание
          административного личного кабинета, подобного Bitrix 24, для трекинга
          задач, управления работой исполнителей и регулирования бюджета,
          выделенного на эти задачи. Технологии: Использовал Vue 3 с Composition
          API, что позволило создать более модульный и управляемый код. Также
          использовал Vuex для управления состоянием и Vue Router для
          организации маршрутизации в приложении. Основные функции: Трекинг
          задач: Реализовал функционал для создания, редактирования и удаления
          задач. Каждая задача имела различные состояния и приоритеты, что
          позволило эффективно управлять рабочим процессом. Управление
          исполнителями: Администраторы могли назначать задачи исполнителям,
          отслеживать их прогресс и производительность. Регулирование бюджета:
          Встроил систему для управления бюджетами проектов, что позволило
          контролировать расходы и эффективно распределять ресурсы. Преимущества
          использования Vue 3: Composition API: Позволило более гибко и повторно
          использовать логические блоки кода, улучшив модульность и
          читабельность приложения. Реактивность: Благодаря улучшенной системе
          реактивности Vue 3, удалось значительно повысить производительность
          приложения. Компонентный подход: Создал множество переиспользуемых
          компонентов, что ускорило разработку и облегчило поддержку проекта.
          Интеграция с API: Использовал Axios для взаимодействия с RESTful API,
          что обеспечило эффективное и надежное получение и отправку данных
          между клиентом и сервером. Тестирование: Внедрил модульные тесты с
          использованием Jest, чтобы обеспечить надежность и стабильность кода.
          Этот проект позволил мне глубже изучить и применить возможности Vue 3,
          и я готов использовать этот опыт для реализации новых задач и
          проектов. *О Nuxt 3<br /> У меня пока нет опыта работы с Nuxt 3, но я
          очень заинтересован в изучении этой технологии. Я активно слежу за
          развитием экосистемы Vue.js и понимаю, что Nuxt 3 предоставляет
          множество возможностей для серверного рендеринга, статической
          генерации сайтов и улучшенной разработки SPA. Я готов инвестировать
          время и усилия в освоение Nuxt 3, так как понимаю его значимость для
          современных веб-приложений. Я уже имею опыт работы с Vue.js и считаю,
          что это позволит мне быстро адаптироваться к Nuxt 3. Более того, я
          уверен, что освоение этого инструмента позволит мне внести еще больший
          вклад в проекты компании и повысить свою профессиональную
          квалификацию. *Про код-ревью При проведении код-ревью в проектах с
          Vue.js я уделяю внимание нескольким ключевым аспектам: Соблюдение
          стиля кода: Проверяю, что код соответствует установленным стандартам и
          рекомендациям по стилю кода. Это включает проверку отступов,
          использование однотипных кавычек, правильное именование переменных и
          функций. Архитектурные решения: Оцениваю архитектуру приложения и
          способы взаимодействия компонентов. Проверяю, что используемые
          паттерны (например, Composition API или опции Vue) соответствуют целям
          проекта и обеспечивают эффективное управление состоянием и логикой.
          Кроссбраузерная совместимость: Проверяю, что функциональность работает
          корректно в различных браузерах. Для этого часто использую
          инструменты, такие как Playwright, чтобы автоматизировать тестирование
          в различных окружениях. Производительность и оптимизация: Оцениваю код
          на наличие возможных узких мест и неэффективных решений. Проверяю, что
          компоненты и запросы данных оптимизированы для достижения высокой
          производительности и отзывчивости приложения. Безопасность: Проверяю,
          что используемые API и запросы защищены от потенциальных атак, таких
          как CSRF или XSS. Обеспечиваю правильное использование механизмов
          аутентификации и авторизации, таких как JWT. Кроме того, я стараюсь не
          только указывать на возможные проблемы, но и предлагать альтернативные
          решения и улучшения, чтобы поддерживать высокое качество кодовой базы
          и ускорять процесс разработки.
        </li>
        <li>
          5. **Тестирование:** - Какой у вас опыт написания тестов для
          компонентов и e2e тестов? Какие инструменты вы используете для этого?
          - Можете привести примеры, когда написание тестов помогло обнаружить и
          исправить ошибки в проекте?
        </li>
        <li>
          *О написании тестов На данный момент у меня нет опыта написания тестов
          для компонентов или e2e тестов. Однако я знаком с Jest и готов изучить
          эту технологию для эффективного тестирования Vue.js приложений. В
          предыдущих компаниях, где я работал, основное внимание уделялось
          статическому анализу кода с помощью инструментов eslint и prettier,
          что способствовало поддержанию единого стиля кода и обеспечению его
          качества. Я уверен, что введение тестирования компонентов и e2e тестов
          поможет не только выявлять потенциальные проблемы на ранних стадиях
          разработки, но и повысит уверенность в стабильности приложений.
          Готовность изучать новые инструменты и методики тестирования является
          частью моего профессионального роста, и я с нетерпением жду
          возможности внедрить их в работу.
        </li>
        <li>
          6. **HTML/CSS и адаптивная верстка:** - Расскажите о своем опыте
          адаптивной кроссбраузерной верстки. Какие методы и инструменты вы
          используете для обеспечения совместимости? - Как вы проверяете и
          исправляете проблемы кроссбраузерной совместимости?
        </li>
        <li>
          *Адаптивная кроссбраузерная верстка
          <br /> Я имею значительный опыт в разработке адаптивных и
          кроссбраузерных интерфейсов. В основе моего подхода лежит
          использование современных методик и инструментов для обеспечения
          однородного внешнего вида и функциональности в различных браузерах и
          на различных устройствах. Методы: Для создания адаптивных интерфейсов
          я применяю подход Mobile First, начиная с мобильной версии и
          постепенно переходя к настройке для планшетов и десктопов. Использую
          CSS Grid и Flexbox для создания гибких и масштабируемых макетов, что
          позволяет легко управлять расположением элементов в зависимости от
          размера экрана. Инструменты: Для обеспечения совместимости с
          различными браузерами я использую Autoprefixer, который автоматически
          добавляет вендорные префиксы к CSS свойствам. Это помогает избежать
          проблем с совместимостью CSS в старых версиях браузеров. Проверка и
          исправление проблем кроссбраузерной совместимости: Тестирование: После
          завершения верстки я тщательно тестирую интерфейс в различных
          браузерах, таких как Chrome, Firefox, Safari, Edge и IE (при
          необходимости). Это позволяет выявить и отладить любые отличия в
          отображении и поведении элементов. Исправление: При обнаружении
          проблем я анализирую их причины и применяю соответствующие правки в
          CSS и JavaScript коде. В случае необходимости использую полифиллы и
          альтернативные решения, чтобы обеспечить однородность работы
          функционала на всех целевых браузерах. Этот подход помогает мне
          создавать универсальные и доступные интерфейсы, которые работают
          корректно на всех типах устройств и в различных браузерах, обеспечивая
          приятный пользовательский опыт.
        </li>
        <li>
          7. **Безопасность и авторизация:** - Объясните ваше понимание
          технологий JWT и OAuth. Как вы их использовали в своих проектах? -
          Есть ли у вас опыт работы с Keycloak? Если да, расскажите подробнее.
        </li>
        <li>
          *Технологии JWT и OAuth:
          <br />
          JWT (JSON Web Token) - это компактный и самодостаточный способ
          передачи данных между сторонами в формате JSON. Он используется для
          безопасной передачи информации между клиентом и сервером в виде
          токена. Токен JWT состоит из трех частей: заголовка, полезной нагрузки
          (payload) и подписи. В заголовке указывается тип токена и алгоритм
          шифрования, в полезной нагрузке содержится информация (например,
          идентификатор пользователя или другие данные), а подпись обеспечивает
          целостность данных.
          <br />
          OAuth - это протокол авторизации, который позволяет веб-приложениям
          получать доступ к ресурсам от имени пользователя без необходимости
          передачи логина и пароля. OAuth предоставляет стандартизированный
          способ делегировать доступ третьим приложениям. Он обеспечивает
          разделение ролей между владельцем ресурса (пользователем), сервером,
          который выдает токены доступа, и клиентским приложением, которое
          запрашивает доступ. Использование в проектах: Я использовал JWT и
          OAuth в проектах для обеспечения безопасности и аутентификации
          пользователей. Например, в одном из проектов мы использовали JWT для
          передачи информации о пользователе между клиентской и серверной
          частями приложения. JWT использовался для аутентификации пользователей
          после успешного входа и авторизации для доступа к защищенным ресурсам
          на сервере. OAuth же применялся для взаимодействия с API сторонних
          сервисов, например, для доступа к данным пользователей из социальных
          сетей или других внешних ресурсов. *Опыт работы с Keycloak: У меня нет
          прямого опыта работы с Keycloak. Keycloak - это open-source инструмент
          для управления доступом и идентификации, который предоставляет функции
          одностроннего входа (Single Sign-On, SSO) и управления доступом для
          веб-приложений и услуг. Хотя я не работал непосредственно с Keycloak,
          я знаком с его функциональностью и использованием в крупных проектах
          для централизованного управления авторизацией и аутентификацией.
        </li>
        <li>
          8. **Работа с API:** - Как вы взаимодействуете с REST API в своих
          проектах? Можете описать процесс интеграции? - Использовали ли вы
          WebSockets? Если да, в каких случаях и как это улучшило
          функциональность приложения? *Взаимодействие с REST API в проектах: В
          проектах я активно использую REST API для обмена данными между
          клиентской и серверной частями приложений. Вот основные шаги и процесс
          интеграции: Изучение документации API: Начинаю с изучения документации
          API, чтобы понять доступные эндпоинты, поддерживаемые методы HTTP
          (GET, POST, PUT, DELETE) и структуру возвращаемых данных. Настройка
          HTTP запросов: Использую библиотеку Axios в Vue.js для создания HTTP
          запросов. Настройка запросов включает указание URL эндпоинтов,
          передачу параметров, заголовков и данных. Обработка ответов и ошибок:
          Обрабатываю полученные данные и ошибки. Проверяю статусы ответов (200
          OK, 400 Bad Request и т.д.) и возвращаемые коды ошибок для корректного
          отображения пользовательского интерфейса. Интеграция с Vuex (при
          необходимости): Если проект использует Vuex для управления состоянием,
          интегрирую полученные данные через мутации и действия Vuex для
          централизованного хранения и управления данными приложения.
          Тестирование и отладка: После интеграции провожу тестирование API,
          убеждаюсь в корректности работы запросов и обработки данных. Использую
          инструменты разработчика браузера для отладки и проверки передачи
          данных между клиентом и сервером. Применение современных методов
          передачи данных, таких как CRUD операции (Create, Read, Update,
          Delete), позволяет эффективно управлять данными в приложении и
          обеспечивать соответствие стандартам REST API для гибкой и
          масштабируемой архитектуры. *Web Sockets Я не использовал WebSockets в
          своих проектах, однако я знаком с их основными принципами и
          преимуществами. WebSockets представляют собой технологию, которая
          позволяет браузеру и серверу устанавливать постоянное двустороннее
          соединение через единичный сокет. Это отличается от традиционного
          HTTP-подхода, где каждый запрос и ответ являются отдельными событиями.
          Применение WebSockets полезно в следующих случаях: Реальное время:
          WebSockets подходят для приложений, требующих мгновенной доставки
          сообщений или обновлений без задержек, например, чаты, онлайн-игры,
          системы мониторинга и т.д. Стриминг данных: Приложения, работающие с
          потоковой передачей данных, такие как финансовые рынки,
          медиа-платформы или системы уведомлений, могут значительно выиграть от
          использования WebSockets для непрерывной передачи информации. Экономия
          ресурсов: В сравнении с периодическими опросами (polling) WebSockets
          уменьшают нагрузку на сервер и улучшают производительность приложения,
          предотвращая необходимость частых HTTP-запросов. Хотя у меня нет
          личного опыта работы с WebSockets, я готов изучить эту технологию и
          применить её в будущих проектах для улучшения функциональности и
          обеспечения лучшего пользовательского опыта. !9. **Инструменты и
          процессы:** - Как вы используете Git/Gitlab в своих проектах? Какие
          практики работы с версиями кода вы считаете лучшими? - Можете ли вы
          привести пример, когда ваша инициатива или самостоятельность привели к
          улучшению проекта? *Git Использование Git/Gitlab в проектах: Я активно
          использую Git и Gitlab для управления версиями кода и совместной
          работы над проектами. Вот основные практики, которые я считаю лучшими:
          Ветвление и слияние (Branching and Merging): Я использую ветвление для
          разработки новых функций или исправления ошибок, чтобы изолировать
          изменения от основной ветки разработки. После завершения работы ветви,
          провожу слияние изменений обратно в основную ветку. Коммиты с
          понятными сообщениями (Meaningful Commit Messages): Я придерживаюсь
          практики понятных и информативных сообщений коммитов, которые
          описывают суть изменений. Это помогает моим коллегам и будущим
          разработчикам быстро понять сделанные изменения. Pull Requests и Code
          Reviews: При необходимости, создаю Pull Requests (запросы на слияние),
          чтобы мои изменения были просмотрены другими членами команды. Я
          активно участвую в код-ревью, предоставляю обратную связь и помогаю
          улучшать качество кода команды. Использование веток для окружений
          (Environment Branches): Для проектов, требующих разработки и
          тестирования в различных средах (например, development, staging,
          production), я использую различные ветки для каждой из сред.
          Использование Gitlab CI/CD: Для автоматизации процесса сборки,
          тестирования и развертывания я использую Gitlab CI/CD. Это позволяет
          ускорить процесс разработки и обеспечить более надежное развертывание
          приложений. !10. **Рабочие условия и предпочтения:** *- Как вы
          относитесь к удаленной работе или гибридному графику? Есть ли у вас
          предпочтения по рабочему времени? Я положительно отношусь к удаленной
          работе, так как она предоставляет гибкость и возможность эффективно
          организовывать рабочее время. Что касается рабочего времени, я
          предпочитаю гибкий график, который позволяет мне адаптировать рабочие
          часы в зависимости от текущих задач и обязательств. Я готов уделять до
          50 часов в неделю на работу, включая возможные переработки, чтобы
          достичь поставленных целей и обеспечить качественное выполнение задач.
          Этот подход позволяет мне эффективно управлять своим рабочим временем,
          сохраняя баланс между профессиональной деятельностью и личными
          обязанностями. *- Что для вас важно в корпоративной культуре и
          условиях труда? Для меня важным аспектом корпоративной культуры и
          условий труда является всеобщая открытость и активное взаимодействие с
          коллегами. Я ценю открытый диалог, где сотрудники могут свободно
          обмениваться идеями, выражать свои мысли и предложения. Это
          способствует созданию атмосферы взаимного уважения и доверия, что в
          свою очередь повышает эффективность работы команды и достижение общих
          целей. Кроме того, для меня важна прозрачность в коммуникации и
          процессах, что способствует эффективной работе и совместному решению
          задач. Я готов активно вносить свой вклад в создание положительной
          корпоративной культуры и стремлюсь к сотрудничеству в команде,
          основанному на открытости и взаимопонимании.
        </li>
      </ul>
    </div>
  );
};

export default Answers;
