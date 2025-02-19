let birthYear = prompt("Введіть ваш рік народження:");
let city = prompt("В якому місті ви живете?");
let sport = prompt("Ваш улюблений вид спорту?");

if (birthYear === null || birthYear.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else if (city === null || city.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
} else if (sport === null || sport.trim() === "") {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
} else {
    let age = new Date().getFullYear() - parseInt(birthYear);
    
    let cityMessage = `Ти живеш у місті ${city}.`;
    let capitals = {
        "Київ": "України",
        "Вашингтон": "США",
        "Лондон": "Великобританії"
    };
    if (capitals[city]) {
        cityMessage = `Ти живеш у столиці ${capitals[city]}.`;
    }
    let champions = {
        "футбол": "Ліонель Мессі",
        "баскетбол": "Майкл Джордан",
        "бокс": "Майк Тайсон"
    };
    let sportMessage = "";
    if (champions[sport]) {
        sportMessage = `Круто! Хочеш стати ${champions[sport]}?`;
    } else {
        sportMessage = "Цікавий вибір спорту!";
    }
    console.log(`Ваш вік: ${age}\n${cityMessage}\n${sportMessage}`);
}
