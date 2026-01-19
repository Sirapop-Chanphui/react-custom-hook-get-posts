# Original Project Assignment

## 📋 Initial Requirements

### 🎯 Original Objectives
- สร้าง Custom Hook `useBlogPosts` เพื่อลดความซ้ำซ้อนของโค้ด
- เพิ่มรายการ Blog Posts ทั้งหมดในหน้า ViewPostPage
- ปรับปรุง HomePage ให้ใช้ Custom Hook
- ใช้หลักการ DRY (Don't Repeat Yourself)

### 🛠️ Original Scope
- สร้าง Custom Hook สำหรับจัดการ Blog Posts API
- ปรับปรุง 2 components: HomePage และ ViewPostPage
- เพิ่ม UI สำหรับแสดงรายการโพสต์ทั้งหมด

### 📊 Original Timeline
- **Session Time:** 13:00 - 17:00 (4 ชั่วโมง)
- **Day 1:** สร้าง Custom Hook และทดสอบ
- **Day 2:** ปรับปรุง Components และทดสอบการทำงานร่วมกัน

### 🎯 Expected Deliverables
- ✅ useBlogPosts hook ทำงานได้ถูกต้อง
- ✅ HomePage ใช้ hook ได้โดยไม่มีข้อผิดพลาด
- ✅ ViewPostPage แสดงรายการโพสต์ทั้งหมด
- ✅ ไม่มีโค้ดซ้ำซ้อนสำหรับ API calls

---

## 🏗️ Original Technical Implementation

### Custom Hook Structure (Original Plan)
**File:** `client/src/hooks/useBlogPosts.js`

```javascript
import { useState, useEffect } from 'react';
import axios from 'axios';

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPosts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, isLoading, isError };
};

export default useBlogPosts;
```

### Original Component Plans

#### HomePage.jsx (Original State)
```javascript
// BEFORE: Direct API calls
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  
  // Direct API calls here...
}

// AFTER: Use custom hook
import useBlogPosts from "../hooks/useBlogPosts";

function HomePage() {
  const { posts, isError, isLoading } = useBlogPosts();
  // Clean component...
}
```

#### ViewPostPage.jsx (Original State)
```javascript
// BEFORE: Hardcoded content + API calls
function ViewPostPage() {
  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        <h2>Post Title</h2>
        <p>Content</p>
      </div>
      {/* API calls for "All Posts" section */}
    </div>
  );
}

// AFTER: Use custom hook + dynamic content
function ViewPostPage() {
  const { posts } = useBlogPosts();
  // Dynamic content display...
}
```

---

## 🎯 Original Success Criteria

### Functional Requirements
- ✅ useBlogPosts hook ทำงานได้ถูกต้อง
- ✅ HomePage ใช้ hook ได้โดยไม่มีข้อผิดพลาด
- ✅ ViewPostPage แสดงรายการโพสต์ทั้งหมด
- ✅ ไม่มีโค้ดซ้ำซ้อนสำหรับ API calls

### Technical Requirements
- ✅ Custom Hook ใช้งานได้
- ✅ Components ใช้ hook ได้
- ✅ API integration ทำงานได้
- ✅ Error handling มีอยู่

### User Experience
- ✅ Pages โหลดข้อมูลได้เร็ว
- ✅ มีการแสดงสถานะการโหลด
- ✅ มีการจัดการข้อผิดพลาด
- ✅ Navigation ทำงานได้ smooth

---

## 🔧 Original Technical Stack

### Frontend
- React 18.2.0
- Vite 4.1.0
- React Router DOM 6.8.2
- Axios 1.3.4

### Backend
- Node.js + Express 4.17.3
- CORS enabled
- In-memory data storage

### API Endpoints (Original)
- `GET /posts` - ดู posts ทั้งหมด
- `GET /posts/:id` - ดู post ตาม ID

---

## 📊 Original Project Structure

```
react-custom-hook-get-posts/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── hooks/          # 🆕 Custom Hooks
│   │   │   └── useBlogPosts.js
│   │   ├── pages/          # Page Components
│   │   │   ├── HomePage.jsx
│   │   │   └── ViewPostPage.jsx
│   │   └── App.jsx         # Main App Component
│   └── package.json
├── server/                # Express Backend
│   ├── app.js            # Server Entry Point
│   └── package.json
└── PROJECT_PLAN.md        # 🆕 Project Documentation
```

---

## 🎯 Original Current Issues

### Problems to Solve
- HomePage และ ViewPostPage มีโค้ดซ้ำซ้อนสำหรับ API calls
- ViewPostPage ยังไม่มีรายการโพสต์ทั้งหมด
- ไม่มี Custom Hook สำหรับ reusable logic

### Expected Solutions
- สร้าง useBlogPosts hook สำหรับ centralized API logic
- ปรับปรุง ViewPostPage ให้มี "All Posts" section
- ทำให้ components ใช้ shared hook

---

## 📈 Original Assessment

### Complexity Level
- **Beginner to Intermediate** - เหมาะกับผู้เริ่มต้น React
- **Focus on Fundamentals** - Custom Hooks, API Integration
- **Real-world Application** - Blog management system

### Learning Objectives
- การสร้าง Custom Hook ใน React
- API Integration ด้วย Axios
- State Management ใน React
- React Router สำหรับ SPA
- Error Handling และ Loading States
- RESTful API Design

### Estimated Time Investment
- **Available Time:** 10:00 - 16:30 (6.5 ชั่วโมง)
- **Planned Duration:** 2 วัน (4-6 ชั่วโมง)
- **Focus Areas:** Hook development + Component integration
- **Testing Strategy:** Manual testing + Error simulation

---

**Created:** January 2026  
**Status:** Original Assignment Document  
**Purpose:** Historical reference for project evolution
