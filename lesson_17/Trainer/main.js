import Coach from './components/Coach.js';
import Team from './components/Team.js';
import HTMLRenderer from './components/HTMLRenderer.js';

// Создаём тренеров
const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

// Создаём команду тренеров
const team = new Team();
team.addCoach(coach1);
team.addCoach(coach2);

// Рендерим тренеров в HTML
HTMLRenderer.renderCoaches(team.getCoaches());