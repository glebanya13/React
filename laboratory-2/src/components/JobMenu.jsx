export default function JobMenu({ selectedProfession }) {

    function renderMenu() {
        switch (selectedProfession) {
            case 'developer':
                return (
                    <div>
                        <p>Разработчик:</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Git</li>
                        </ul>
                    </div>
                );
            case 'designer':
                return (
                    <div>
                        <p>Дизайнер:</p>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Sketch</li>
                            <li>UI/UX Design</li>
                            <li>Prototyping</li>
                            <li>Color Theory</li>
                            <li>Typography</li>
                        </ul>
                    </div>
                );
            case 'teacher':
                return (
                    <div>
                        <p>Учитель:</p>
                        <ul>
                            <li>Педагогика</li>
                            <li>Методика преподавания</li>
                            <li>Управление классом</li>
                            <li>Планирование уроков</li>
                            <li>Оценивание</li>
                            <li>Коммуникация с родителями</li>
                            <li>Использование технологий в образовании</li>
                        </ul>
                    </div>
                );
            case 'doctor':
                return (
                    <div>
                        <p>Врач:</p>
                        <ul>
                            <li>Анатомия</li>
                            <li>Физиология</li>
                            <li>Диагностика</li>
                            <li>Лечение</li>
                            <li>Медицинская этика</li>
                            <li>Специализация (например, хирургия, терапия и др.)</li>
                            <li>Инструменты и оборудование</li>
                        </ul>
                    </div>
                );
            case 'engineer':
                return (
                    <div>
                        <p>Инженер:</p>
                        <ul>
                            <li>Математика и физика</li>
                            <li>Техническое черчение</li>
                            <li>Проектирование</li>
                            <li>Технические стандарты</li>
                            <li>Работа с CAD-программами</li>
                            <li>Тестирование и оптимизация</li>
                            <li>Материаловедение</li>
                        </ul>
                    </div>
                );
            default:
                return <p>Выберите профессию</p>;
        }
    };

    return (
        <div>
            <h2>Меню профессии</h2>
            {renderMenu()}
        </div>
    );
}
