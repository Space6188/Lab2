Думал на протяжении секунды


```markdown
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

## Коміт із падінням CI

* SHA: `f44b8068549842faa3cc26107125d98cfe935bcd` — перший запуск GitHub Actions, де впали тести
* SHA: `f158a8d14888e0807ad05d466a51fe4cefbdbccb` — тест “Тести впали, була виявлена помилка в неявних типах…”

Посилання:

```
https://github.com/Space6188/lab2-linked-list-js-ts/commit/f44b8068549842faa3cc26107125d98cfe935bcd  
https://github.com/Space6188/lab2-linked-list-js-ts/commit/f158a8d14888e0807ad05d466a51fe4cefbdbccb  
```

## Висновки

Для цього невеликого проєкту unit‑тести були скоріше формальністю:

* У великих системах тести допомагають відловлювати помилки на етапі збірки, щоб не падати в runtime і не руйнувати продакшин.
* Для такої лабораторної роботи з невеликою кількістю методів вони не обов’язкові й додають додатковий час на підтримку.
* В майбутньому, коли проєкт зростатиме, наявність покриття тестами стане справді корисною.

