# Expense Sharing Application (Backend)

A simplified expense sharing backend application inspired by Splitwise, built as part of an Engineering Design Assignment.

This system allows users to create groups, add shared expenses, track balances, and settle dues with automatic balance simplification.

---

## 📌 Features

- Create users
- Create groups with multiple members
- Add shared expenses
- Track balances (who owes whom)
- Settle dues
- Automatic balance simplification
- Supports multiple split types:
  - Equal split
  - Exact amount split
  - Percentage split

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Architecture:** Layered (Routes → Controllers → Services → Models)
- **API Testing:** Postman

---

## 🧠 System Design

The application follows a clean layered architecture to ensure separation of concerns: routes → controllers → services → models

### Core Models

| Model | Description |
|-----|------------|
| User | Represents a system user |
| Group | Represents a group of users sharing expenses |
| Expense | Stores expense history |
| Balance | Stores simplified net balances |

Balances are always stored in **net form**, ensuring no duplicate or reverse entries.

---

## 📂 API Documentation

All APIs follow RESTful conventions and use JSON for request and response bodies.


### User APIs

#### Create User
**POST /users/create** : Creates a new user who can participate in groups and expenses.

### Group APIs

#### Create Group
**POST /groups/create** : Creates a group with multiple users.
Only group members are allowed to participate in expenses.

### Expenses APIs


### Balance APIs



