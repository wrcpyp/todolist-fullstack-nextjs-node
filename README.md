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
└── [frontend-folder]   # โฟลเดอร์ React ของคุณ

### 📦 Installation & Setup

#### 1. Initial Step
```bash
git clone [https://github.com/wrcpyp/todolist-fullstack-react-node.git](https://github.com/wrcpyp/todolist-fullstack-react-node.git)
cd todolist-fullstack-react-node
#### 2. Backend Setup
cd todolist-api
npm install
# Setup Environment Variables
# สร้างไฟล์ .env แล้วใส่ค่าตามหัวข้อด้านล่าง
#### 3. Start Development
# รัน Server ด้วย Nodemon
npm run dev

### 🔑 Environment Variables
สร้างไฟล์ `.env` ไว้ที่โฟลเดอร์ `todolist-api/` และระบุค่าดังนี้:

| Variable | Description |
| :--- | :--- |
| `DB_URL` | PostgreSQL Connection String (จาก Supabase พอร์ต 5432) |
| `JWT_SECRET` | คีย์ลับสำหรับสร้างและตรวจสอบ Token |
| `PORT` | 8000 (หรือพอร์ตที่ต้องการรัน) |
