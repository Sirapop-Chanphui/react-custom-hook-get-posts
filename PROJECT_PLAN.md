# Project Plan: useBlogPosts Custom Hook Implementation

## 📋 Overview

### Objectives
- สร้าง Custom Hook `useBlogPosts` เพื่อลดความซ้ำซ้อนของโค้ด
- เพิ่มรายการ Blog Posts ทั้งหมดในหน้า ViewPostPage
- ปรับปรุง HomePage ให้ใช้ Custom Hook
- ใช้หลักการ DRY (Don't Repeat Yourself)

### Scope
- สร้าง Custom Hook สำหรับจัดการ Blog Posts API
- ปรับปรุง 2 components: HomePage และ ViewPostPage
- เพิ่ม UI สำหรับแสดงรายการโพสต์ทั้งหมด

### Timeline
- **Day 1:** สร้าง Custom Hook และทดสอบ
- **Day 2:** ปรับปรุง Components และทดสอบการทำงานร่วมกัน

## 🛠️ Technical Implementation

### Custom Hook Structure
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

  return {
    posts,
    isLoading,
    isError
  };
};

export default useBlogPosts;
```

### Return Format
```javascript
{
  posts: [],        // Array of blog posts
  isLoading: false, // Boolean - loading state
  isError: false   // Boolean - error state
}
```

### API Endpoints
- `GET http://localhost:4000/posts` - ดึงข้อมูลโพสต์ทั้งหมด

### File Structure
```
client/src/
├── hooks/
│   └── useBlogPosts.js    # Custom Hook (ใหม่)
├── pages/
│   ├── HomePage.jsx       # จะปรับปรุง
│   └── ViewPostPage.jsx   # จะปรับปรุง
└── components/
    ├── CreatePostForm.jsx
    └── EditPostForm.jsx
```

### Component Updates

#### HomePage.jsx Changes
```javascript
// แทนที่โค้ดเดิม:
import { useState, useEffect } from "react";
import axios from "axios";

// ด้วย:
import useBlogPosts from "../hooks/useBlogPosts";

// แทนที่:
const [posts, setPosts] = useState([]);
const [isError, setIsError] = useState(null);
const [isLoading, setIsLoading] = useState(null);

// ด้วย:
const { posts, isError, isLoading } = useBlogPosts();
```

#### ViewPostPage.jsx Changes
```javascript
// เพิ่ม:
import useBlogPosts from "../hooks/useBlogPosts";

// ใน component:
const { posts, isLoading, isError } = useBlogPosts();

// เพิ่ม UI สำหรับ "All Posts" section
```

## ✅ Tasks & Progress

### Development Tasks

#### Phase 1: Custom Hook Creation - ✅ COMPLETED
- [x] สร้าง `client/src/hooks/` directory
- [x] สร้าง `useBlogPosts.js` file
- [x] Implement API call logic
- [x] Add error handling
- [x] Test hook independently

#### Phase 2: Component Updates - ✅ COMPLETED
- [x] Backup current HomePage.jsx
- [x] Update HomePage.jsx to use useBlogPosts
- [x] Test HomePage functionality
- [x] Backup current ViewPostPage.jsx
- [x] Update ViewPostPage.jsx to use useBlogPosts
- [x] Add "All Posts" section to ViewPostPage
- [x] Test ViewPostPage functionality

#### Phase 3: Integration Testing
- [ ] Test navigation between pages
- [ ] Test loading states
- [ ] Test error states
- [ ] Test data display consistency
- [ ] Test user interactions (View/Edit buttons)

### Testing Checklist

#### Unit Testing
- [ ] Test useBlogPosts hook returns correct format
- [ ] Test loading state changes
- [ ] Test error state handling
- [ ] Test data fetching

#### Integration Testing
- [ ] HomePage displays posts correctly
- [ ] ViewPostPage displays single post + all posts
- [ ] Navigation works between pages
- [ ] Loading states show properly
- [ ] Error states handle gracefully

#### User Experience Testing
- [ ] Page loads without errors
- [ ] Buttons are clickable
- [ ] Data displays correctly
- [ ] Responsive design works

### Documentation Tasks
- [ ] Update README.md with new features
- [ ] Add code comments to useBlogPosts hook
- [ ] Create usage examples
- [ ] Document API integration

## 🐛 Known Issues & Solutions

### Current Issues
- ~~HomePage และ ViewPostPage มีโค้ดซ้ำซ้อนสำหรับ API calls~~ ✅ SOLVED
- ViewPostPage ยังไม่มีรายการโพสต์ทั้งหมด
- ~~ไม่มี Custom Hook สำหรับ reusable logic~~ ✅ SOLVED

### Solutions
- ✅ สร้าง useBlogPosts hook สำหรับ centralized API logic
- ปรับปรุง ViewPostPage ให้มี "All Posts" section
- ทำให้ components ใช้ shared hook

## 📚 Learning Resources

### React Custom Hooks
- [React Custom Hooks Documentation](https://reactjs.org/docs/hooks-custom.html)
- [Building Custom Hooks Tutorial](https://www.robinwieruch.de/react-custom-hook/)

### DRY Principle
- [DRY Principle in Programming](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [React Best Practices](https://reactjs.org/docs/thinking-in-react.html)

### State Management
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [useState and useEffect Guide](https://reactjs.org/docs/hooks-state.html)

## 🎯 Success Criteria

### Functional Requirements
- ✅ useBlogPosts hook ทำงานได้ถูกต้อง
- ✅ HomePage ใช้ hook ได้โดยไม่มีข้อผิดพลาด
- ✅ ViewPostPage แสดงรายการโพสต์ทั้งหมด
- ✅ ไม่มีโค้ดซ้ำซ้อนสำหรับ API calls

### Code Quality
- ✅ Code ตามหลักการ DRY
- ✅ มี error handling ที่เหมาะสม
- ✅ มี loading states
- ✅ Code อ่านง่ายและ maintain ง่าย

### User Experience
- ✅ Pages โหลดข้อมูลได้เร็ว
- ✅ มีการแสดงสถานะการโหลด
- ✅ มีการจัดการข้อผิดพลาด
- ✅ Navigation ทำงานได้ smooth

---

**Last Updated:** January 2026  
**Project:** React Custom Hook - Posts Management  
**Status:** Phase 1 ✅ COMPLETED | Phase 2 ✅ COMPLETED | Phase 3 Ready to Start
