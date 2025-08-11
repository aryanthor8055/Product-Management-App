# Product Management Dashboard

<img width="1896" height="894" alt="image" src="https://github.com/user-attachments/assets/48dfeadc-2c52-4b2b-bd75-9fa46230a872" />

Deploy Link: https://product-management-app-epri.vercel.app/

## 🚀 Features

### **Core Functionality**
✔️ **Add to Cart System**  
- Interactive cart badge in header  
- Slide-out sidebar with:  
  - Quantity controls (+/-)  
  - Real-time price calculation  
  - Item removal option  
- Session-persisted state (in-memory)  

✔️ **Advanced Product Table**  
| Column       | Features                  |
|--------------|---------------------------|
| ID           | Sortable                  |
| Image        | Thumbnail preview         |
| Name         | Searchable                |
| Category     | Filterable                |
| Price        | Sortable (asc/desc)       |
| Stock        | Low-stock highlighting    |
| Status       | Color-coded badges        |
| Actions      | Edit/Delete/View buttons  |

✔️ **Drag-and-Drop**  
- Reorder table columns via drag handle  
- Smooth CSS transitions  
- State preserved during reordering  

### **Dashboard Components**
📊 **Stats Overview Cards**  
- Total Products 
- Total Revenue (auto-calculated)  
- Low Stock Alert (<5 items)  
- Unique Categories Count  

🔍 **Search System**  
- Debounced 300ms search  
- Trie-based efficient searching  

📱 **Responsive Design**  
- Mobile-first approach  
- Collapsible sidebar on small screens  

## 🛠️ Tech Stack
- **Frontend**: React 18 (Hooks Only)  
- **Styling**: Tailwind CSS 3  
- **Build**: Vite  
- **Icons**: Heroicons  
- **State Management**: Context API + useReducer  

## 📦 Installation
```bash
# 1. Clone repository
git clone https://github.com/your-repo/product-dashboard.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
