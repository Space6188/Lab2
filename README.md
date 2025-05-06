````markdown
# Lab2: LinkedList & ArrayList & tests for them (TypeScript)

## Інструкція зі збірки та запуску тестів  

1. **Склонуйте репозиторій**  
   ```bash
   git clone https://github.com/Space6188/lab2-linked-list-js-ts.git
   cd lab2-linked-list-js-ts
````

2. **Встановіть залежності**

   ```bash
   npm install
   ```

3. **Компіляція TypeScript**

   ```bash
   npm run build
   ```

4. **Запуск Jest‑тестів**

   ```bash
   npm test
   ```

   * Якщо тести проходять — побачите “<span style="color:green">✓</span> All tests passed”.
   * Якщо є помилки — побачите повідомлення, в якому вкажеться, які саме тести впали.

5. **Запуск демонстрації**

   ```bash
   npm start
   ```

---

## Коміти із падінням CI

### 1. SHA: `f44b8068549842faa3cc26107125d98cfe935bcd`

**Налаштування тестів GitHub Actions, перша спроба**
**Error:**

```
Error: src/index.ts(1,28): error TS2307: Cannot find module './lists/linkedList' or its corresponding type declarations.  
Error: src/tests/LinkedList.test.ts(1,28): error TS2307: Cannot find module '../lists/linkedList.js' or its corresponding type declarations.  
Error: src/tests/LinkedList.test.ts(121,19): error TS7006: Parameter 'v' implicitly has an 'any' type.  
…  
Process completed with exit code 2.
```

**Проблема простими словами:**
Jest не міг знайти файли через неправильні шляхи та неявні типи в тестах.

---

### 2. SHA: `f158a8d14888e0807ad05d466a51fe4cefbdbccb`

**Тести впали через неявні типи у функції**
**Error:**

```
Error: src/index.ts(1,28): error TS2307: Cannot find module './lists/linkedList' …  
Error: src/tests/LinkedList.test.ts(1,28): error TS2307: Cannot find module '../lists/linkedList.js' …  
Process completed with exit code 2.
```

**Проблема:**
Невірні імпорти та відсутність декларацій .ts призвели до помилки компіляції.

---

### 3. SHA: `3a543dbb1a6af79933fa6e6d1b729bf5d4c6a69a`

**Типізація винесена в окрему папку, додано ArrayList, але тести впали**
**Error:**

```
Error: src/lists/ArrayList.ts(1,28): error TS2307: Cannot find module './ArrayListType.js' …  
Process completed with exit code 2.
```

**Проблема:**
Файл імпортувався з розширенням `.js` замість `.ts`, і Jest не розпізнавав модуль.

---

### 4. SHA: `fb6554ec60b61afa03e4b3aaad5568a3eebf2a8a`

**FAIL src/tests/ArrayList.test.ts › findLast**
**Error:**

```
Expected: -1  
Received: 3  
  103 | expect(list.findLast(1)).toBe(2);  
  104 | expect(list.findLast(2)).toBe(1);  
> 105 | expect(list.findLast(3)).toBe(-1);  
```

**Проблема:**
Метод `findLast` повертав неправильний індекс, коли елемент не знайдено.

---

## Висновки

Для цього невеликого проєкту unit‑тести були скоріше формальністю:

* У великих системах тести допомагають відловлювати помилки на етапі збірки, щоб не падати в runtime і не руйнувати продакшин.
* Для такої лабораторної роботи з невеликою кількістю методів вони не обов’язкові й додають додатковий час на підтримку.
* В майбутньому, коли проєкт зростатиме, наявність покриття тестами стане справді корисною.

