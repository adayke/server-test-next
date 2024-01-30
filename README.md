# Server Management Application

Этот проект представляет собой веб-приложение на основе React/Next.js, предназначенное для управления списком серверов клиентов. Данный проект является частью тестового задания. Приложение обеспечивает функциональность просмотра, выбора и редактирования деталей сервера.

## Features

- **List Display**: Отображает список серверов клиентов с деталями.
- **Select Server**: Пользователи могут выбрать сервер из списка для редактирования.
- **Edit Server**: Предоставляет возможность редактировать свойства, такие как имя сервера и тип сервера.

## Data Model Example

```json
[
  {
    "customer_id": "user1",
    "server_name": "server7",
    "server_type": "vds"
  },
  {
    "customer_id": "user5",
    "server_name": "server2",
    "server_type": "dedicated"
  },
  {
    "customer_id": "user3",
    "server_name": "server4",
    "server_type": "hosting"
  }
]
```

## Technologies Used

Framework: React with Next.js
Typescript: Utilized for static type-checking (optional)
UI Framework: Tailwind CSS (optional)
Styling: SCSS/LESS/Stylus for advanced styling (optional)
ES6+: Demonstrates usage of modern JavaScript features

## Setup and Installation

To set up this project locally, follow these steps:

## Clone the Repository:

git clone https://github.com/adayke/server-test-next.git
cd server-test-next

## Install Dependencies:

npm install

## Running the Application:

npm run dev

## Author

Adayke
