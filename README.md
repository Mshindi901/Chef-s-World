# 👨‍🍳 Chef's World — Discover, Save & Savor Recipes Like Never Before 🍽️

Welcome to **Chef's World**, your ultimate digital kitchen companion!  
Built with the powerful **MERN Stack** (MongoDB, Express.js, React.js, Node.js) and integrated with the [MealDB API](https://www.themealdb.com), this full-stack application elevates recipe discovery and personal culinary experiences to a whole new level. 🚀

---

## 🌟 Why Chef's World Stands Out

Chef's World isn't just a recipe app — it's a personalized **culinary ecosystem**. Users can:
- 🔍 **Search meals** from a massive recipe database using MealDB
- 👨‍🍳 **Create accounts & log in securely**
- 💾 **Save favorite recipes** to their private cookbook
- 🎁 **Receive surprise daily recipe suggestions**
- 🧠 Enjoy **smooth, fast, and reactive UI/UX** powered by React
- 🔐 Experience full authentication + protected routes via JWT & middleware

---

## 🧪 Tech Stack

| Layer         | Technology           | Why It Matters |
|---------------|----------------------|----------------|
| 🧠 Frontend   | **React.js** + Context API | Lightning-fast UI & state management |
| 🌐 Backend    | **Node.js** + **Express.js** | RESTful API structure with modular control |
| 🛢️ Database  | **MongoDB** + **Mongoose** | Flexible document storage for users and favorites |
| 🔐 Auth       | **JWT** + Bcrypt.js | Secure login, protected routes, hashed passwords |
| 🌍 API        | **MealDB** | Instant access to thousands of recipes |
| 🎨 Styling    | **Tailwind CSS** | Modern, responsive design with utility classes |


## ✨ Key Features

✅ **Smart Recipe Search** — Find meals by name, ingredients, or category  
✅ **User Accounts** — Sign up/login with full auth flow  
✅ **Favorites System** — Save meals to your digital cookbook  
✅ **Daily Recipe Drops** — Get a new surprise meal every day  
✅ **Persistent User Data** — Stored securely in MongoDB  
✅ **Clean, Responsive Design** — Mobile-first and lightning fast  
✅ **Token-Based Authentication** — JWT-secured protected routes  
✅ **Componentized Architecture** — Scalable React structure  
✅ **Reusable Backend APIs** — Modular route and controller patterns

---

## 🔧 Local Setup

Follow these steps to run Chef's World locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/chefs-world.git

# 2. Install backend dependencies
cd chefs-world/backend
npm install

# 3. Create and configure your environment variables
touch .env

# Example .env
PORT=5000
JWT_SECRET=your_secret_key
MEALDB_API=https://www.themealdb.com/api/json/v1/1

# 4. Start the backend server
npm run dev

# 5. Open a new terminal for frontend
cd ../frontend
npm install

# 6. Start the React app
npm start
