# 🛒 RenykMart - E-Commerce Application

A modern e-commerce web application built with **Next.js 15** (App Router), featuring a responsive design, authentication system, and shopping cart functionality.

## 🌐 Live Demo

🔗 **[View Live Site](https://next-js-job-task-rageyfzss-ibrahim-ahmed-galibs-projects.vercel.app)**

## 📋 Features

### 1. Landing Page (7 Sections)
- **Banner** - Hero section with call-to-action
- **Categories** - Browse products by category
- **Products** - Featured products display
- **Deals** - Special offers and promotions
- **Features** - Why choose us (shipping, security, returns, support)
- **Testimonials** - Customer reviews
- **Newsletter** - Email subscription

### 2. Authentication
- Mock login with hardcoded credentials
- Credentials stored in cookies
- Protected routes for unauthenticated users
- Logout functionality

**Test Credentials:**
```
Email: test@test.com
Password: 123456
```

### 3. Products Page
- Publicly accessible
- Displays all products from JSON data
- Each product card shows: name, description, price, discount price, rating, stock status, and image
- Add to Cart functionality

### 4. Product Details Page
- Publicly accessible
- Shows full details of a single product
- Dynamic routing (`/products/[id]`)

### 5. Shopping Cart
- Add/Remove products
- Update quantity
- Cart persistence with LocalStorage
- Cart count in navbar
- Protected route (requires login)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Icons:** React Icons
- **Authentication:** Cookie-based (js-cookie)
- **State Management:** React Context API
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── page.jsx              # Home page
│   ├── layout.jsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── about/page.jsx        # About page
│   ├── contact/page.jsx      # Contact page
│   ├── login/page.jsx        # Login page
│   ├── cart/page.jsx         # Shopping cart
│   └── products/
│       ├── page.jsx          # Products listing
│       ├── loading.jsx       # Loading skeleton
│       └── [id]/page.jsx     # Product details
├── component/
│   ├── buttons/
│   │   ├── CartButton.jsx
│   │   └── NavLink.jsx
│   ├── card/
│   │   └── ProductCard.jsx
│   ├── home/
│   │   ├── Banner.jsx
│   │   ├── Categories.jsx
│   │   ├── Deals.jsx
│   │   ├── Features.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Products.jsx
│   │   └── Testimonials.jsx
│   ├── layouts/
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx
│   │   └── Navbar.jsx
│   └── skeleton/
│       └── ProductSkeleton.jsx
├── context/
│   └── CartContext.jsx       # Cart state management
├── data/
│   └── product.json          # Product data
└── actions/
    └── server/
        └── product.js        # Server actions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm / bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/galibhub/next-js-job-task.git
cd next-js-job-task
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Route Protection

| Route | Access |
|-------|--------|
| `/` | Public |
| `/products` | Public |
| `/products/[id]` | Public |
| `/about` | Public |
| `/contact` | Public |
| `/login` | Public |
| `/cart` | Protected (Login Required) |

## 📦 Deployment

Deployed on **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📝 API/Data Source

Products are fetched from local JSON file (`src/data/product.json`) containing 30 products across categories:
- Electronics
- Home & Living
- Fashion
- Daily Essentials
- Kids

## 👨‍💻 Author

**Ibrahim Ahmed Galib**

- GitHub: [@galibhub](https://github.com/galibhub)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).