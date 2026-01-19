# React Custom Hook - Posts Management

โปรเจกต์สอนการสร้าง Custom Hook ใน React สำหรับจัดการข้อมูลโพสต์ (Posts) พร้อม REST API Backend

## 🚀 Features
- ✅ **READ Operations** - ดูรายการโพสต์ทั้งหมดและรายละเอียด
- ✅ React Custom Hook สำหรับ API calls
- ✅ React Router สำหรับ navigation
- ✅ Responsive UI ด้วย CSS
- ✅ Error Handling และ Loading states
- 🚧 **CREATE/UPDATE/DELETE** - Backend พร้อม แต่ Frontend ยังไม่เชื่อมต่อ

## 🛠️ Tech Stack

### Frontend
- React 18.2.0
- Vite 4.1.0
- React Router DOM 6.8.2
- Axios 1.3.4

### Backend
- Node.js + Express 4.17.3
- CORS enabled
- In-memory data storage

## 📦 Installation

### 1. Clone Repository
```bash
git clone <repository-url>
cd react-custom-hook-get-posts
```

### 2. Install Dependencies

**Server:**
```bash
cd server
npm install
```

**Client:**
```bash
cd client
npm install
```

## 🏃‍♂️ Running the Application

### 1. Start Server (Terminal 1)
```bash
cd server
npm start
```
Server จะทำงานที่ `http://localhost:4000`

### 2. Start Client (Terminal 2)
```bash
cd client
npm run dev
```
Client จะทำงานที่ `http://localhost:5173`

## 📁 Project Structure

```
react-custom-hook-get-posts/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable Components
│   │   ├── pages/         # Page Components
│   │   └── App.jsx        # Main App Component
│   └── package.json
├── server/                # Express Backend
│   ├── app.js            # Server Entry Point
│   └── package.json
└── README.md
```

## 🔧 Available Scripts

### Server
- `npm start` - เริ่ม server ด้วย nodemon

### Client
- `npm run dev` - เริ่ม development server
- `npm run build` - build สำหรับ production
- `npm run preview` - preview build result

## 📚 Learning Objectives

- การสร้าง Custom Hook ใน React
- API Integration ด้วย Axios
- State Management ใน React
- React Router สำหรับ SPA
- Error Handling และ Loading States
- RESTful API Design

## 🐛 Known Issues

- ✅ Custom Hook ได้ implement แล้ว
- ✅ READ operations ทำงานได้ปกติ
- ✅ CREATE/UPDATE/DELETE operations เชื่อมต่อแล้ว
- ✅ "Create Post" และ "Edit Post" buttons ทำงานแล้ว
- มี security vulnerabilities ใน dependencies (สามารถแก้ไขด้วย `npm audit fix`)

## 🎯 Current Status

### ✅ Completed
- useBlogPosts custom hook พร้อม getPostById
- HomePage และ ViewPostPage ใช้ custom hook
- Navigation และ data display ทำงานได้
- Likes bar UI enhancement
- ✅ **Full CRUD operations** - CREATE, UPDATE, DELETE
- ✅ **Form components** - CreatePostPage, EditPostPage
- ✅ **Button connections** - All navigation working

### 🎯 Project Status: FULLY COMPLETED 🎉
- All phases completed successfully
- Comprehensive testing completed
- Full documentation available
- Ready for production deployment

## 🤝 Contributing

1. Fork โปรเจกต์
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

ISC License
