# 🎯 Дипломная работа QA.GURU | JS + Playwright | Автоматизация тестирования 4 поток

## Содержание
- [Описание](#описание)
- [Технологический стек](#технологический-стек)
- [Запуск тестов](#запуск-тестов)
- [CI/CD и отчетность](#cicd-и-отчетность)
- [Уведомления](#уведомления)

## Описание
Дипломный проект, выполненный в рамках курса по автоматизации тестирования на JavaScript + Playwright. Проект включает UI и API тесты с интеграцией в CI/CD pipeline.

**Объекты тестирования:**
- **realworld.qa.guru** - веб-приложение для практики UI тестирования
- **apichallenges.eviltester.com** - RESTful API для отработки навыков API тестирования

## Технологический стек

![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1E?logo=javascript&logoColor=black)
![Playwright](https://img.shields.io/badge/-Playwright-%2345ba4b?logo=playwright&logoColor=white)
![Faker](https://img.shields.io/badge/-Faker-%2300AFF0?logo=faker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-%232088FF?logo=github-actions&logoColor=white)
![Allure](https://img.shields.io/badge/-Allure-%23FF6A00?logo=allure&logoColor=white)
![Allure TestOps](https://img.shields.io/badge/-Allure_TestOps-%2316A085?logo=allure&logoColor=white)
![Telegram](https://img.shields.io/badge/-Telegram-%2326A5E4?logo=telegram&logoColor=white)

## Запуск тестов

### Локальный запуск
```bash
# Клонирование репозитория
git clone https://github.com/olgamoiseeva1996/QA-GURU-PW-DIPLOM.git
cd QA-GURU-PW-DIPLOM

# Установка зависимостей
npm install

# Установка браузеров
npx playwright install --with-deps

# Запуск тестов
npm run test

# Генерация отчета
npx allure generate allure-results -o allure-report --clean
npx allure open allure-report
```
### Запуск в CI/CD
Push в main/master ветки

Pull Request в main/master

Ручной запуск через GitHub Actions

## CI/CD и отчетность

### 📊 Allure Report
![Allure Report](https://github.com/OlgaMoiseeva1996/QA-GURU-PW-DIPLOM/raw/main/media/screenshots/ReportAllure.png)

**Включает:**

Детальную статистику тестов

Историю запусков 

Скриншоты и видео падающих тестов

Логи выполнения

### 🔧 Allure TestOps
![Allure TestOps](https://github.com/OlgaMoiseeva1996/QA-GURU-PW-DIPLOM/raw/main/media/screenshots/TestOps.png)

## Уведомления

### 📱 Telegram
После каждого запуска тестов приходит уведомление с результатами:

<img src="https://github.com/OlgaMoiseeva1996/QA-GURU-PW-DIPLOM/raw/main/media/screenshots/Telegram.notification.png" width="400" />
