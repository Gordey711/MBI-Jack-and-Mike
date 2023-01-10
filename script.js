const personJack = {
    name: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70,
    BMI: function () {
        this.bmiPerson = this.weight / (this.height * this.height);
    }
};

const personMike = {
    name: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93,
    BMI: function () {
        this.bmiPerson = this.weight / (this.height * this.height);
    }
};

console.log(personJack.BMI());
console.log(personMike.BMI());

console.log(personJack.bmiPerson);
console.log(personMike.bmiPerson);

if (personJack.bmiPerson > personMike.bmiPerson) {
    console.log(`ИМТ у ${personJack.name} ${personJack.lastName} (${personJack.bmiPerson}) выше, чем у ${personMike.name} ${personMike.lastName} (${personMike.bmiPerson})!`);
} else if (personJack.bmiPerson < personMike.bmiPerson) {
    console.log(`ИМТ у ${personMike.name} ${personMike.lastName} (${personMike.bmiPerson}) выше, чем у ${personJack.name} ${personJack.lastName} (${personJack.bmiPerson})!`);
} else {
    console.log(`Произошла ошибка!`);
}