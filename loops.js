// Задача 1: Столбец чисел от 1 до 100
function task1() {
	let output = ''
	for (let i = 1; i <= 100; i++) {
		output += i + '\n'
	}
	alert(formatOutput('Столбец чисел от 1 до 100', output))
}

// Задача 2: Столбец чисел от 11 до 33
function task2() {
	let output = ''
	for (let i = 11; i <= 33; i++) {
		output += i + '\n'
	}
	alert(formatOutput('Столбец чисел от 11 до 33', output))
}

// Задача 3: Столбец четных чисел от 0 до 100
function task3() {
	let output = ''
	for (let i = 0; i <= 100; i += 2) {
		output += i + '\n'
	}
	alert(formatOutput('Столбец четных чисел от 0 до 100', output))
}

// Задача 4: Сумма чисел от 1 до 100
function task4() {
	let sum = 0
	for (let i = 1; i <= 100; i++) {
		sum += i
	}
	alert(`Сумма чисел от 1 до 100: ${sum}`)
}

// Задача 5: Сумма первых 10 чисел
function task5() {
	let sum = 0
	let numbers = ''
	for (let i = 1; i <= 10; i++) {
		numbers += i
		sum += i
	}
	let average = sum / 10
	alert(
		`Первые 10 натуральных чисел: ${numbers}\nСумма: ${sum}\nСреднее значение: ${average}`
	)
}

// Задача 6: Квадраты чисел от 10 до 20
function task6() {
	let output = ''
	for (let i = 10; i <= 20; i++) {
		output += `${i}² = ${i * i}\n`
	}
	alert(formatOutput('Квадраты чисел от 10 до 20', output))
}

// Задача 7: Количество четных и нечетных чисел от 24 до 97
function task7() {
	let evenCount = 0
	let oddCount = 0
	for (let i = 24; i <= 97; i++) {
		if (i % 2 === 0) {
			evenCount++
		} else {
			oddCount++
		}
	}
	alert(`Четных чисел: ${evenCount}\nНечетных чисел: ${oddCount}`)
}

// Задача 8: Таблица умножения заданного числа
function task8() {
	let number = parseInt(prompt('Введите число (таблица для расчета):'))
	let output = ''
	for (let i = 1; i <= 10; i++) {
		output += `${number} x ${i} = ${number * i}\n`
	}
	alert(formatOutput(`Таблица умножения для числа ${number}`, output))
}

// Функция для форматирования вывода
function formatOutput(title, content) {
	return `${title}\n\n${content.trim().replace(/\n/g, '\n')}`
}
