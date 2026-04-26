# 📝 Modern TodoList Fullstack
> **Fullstack Application** สำหรับจัดการสิ่งที่ต้องทำ พร้อมระบบสมาชิก (Auth) เชื่อมต่อข้อมูลแบบ Real-time ด้วย Supabase

[![Tech Stack](https://img.shields.io/badge/Stack-Fullstack-blue)](https://github.com/wrcpyp/todolist-fullstack-react-node)
[![Database](https://img.shields.io/badge/Database-Supabase-green)](https://supabase.com)

---

### ✨ Features
* 🔐 **Secure Authentication**: ระบบสมัครสมาชิกและเข้าสู่ระบบด้วย **JWT (JSON Web Token)**
* ⚡ **Full CRUD**: จัดการข้อมูล Todo (Create, Read, Update, Delete) ได้ครบวงจร
* 🗄️ **Cloud Database**: จัดเก็บข้อมูลบน **PostgreSQL** ผ่านทาง Supabase
* 🛡️ **Security Middleware**: ป้องกันเส้นทาง API (Protected Routes) ด้วย Middleware
* 🎨 **Responsive UI**: หน้าจอสวยงามและรองรับทุกอุปกรณ์ด้วย Tailwind CSS

---

### 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React (Vite), Axios, Tailwind CSS |
| **Backend** | Node.js, Express |
| **Database** | Supabase (PostgreSQL) |
| **Dev Tools** | Git, Postman, Nodemon |

---

### 📂 Project Structure
```text
.
├── todolist-api/       # Backend (Node.js/Express)
│   ├── config/         # Database connection
│   ├── controllers/    # Business logic (Auth & Todo)
│   ├── middleware/     # JWT Authentication middleware
│   └── server.js       # Entry point
└── [frontend-folder]   # โฟลเดอร์ React ของคุณ (ถ้ามี)
