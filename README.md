# E-commerce Demo Application

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/zydniyas/verdi-ecom-test.git
cd verdi-ecom-test
```

### 2. Backend Setup (Laravel)

```bash
# Navigate to backend directory
cd ecommerce-backend  # or your Laravel project directory

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 3. Database Configuration

**Create MySQL Database:**

```bash
mysql -u root -p
CREATE DATABASE ecommerce_demo;
exit
```

**Update `.env` file:**

```env
APP_NAME="E-commerce Demo"
APP_ENV=local
APP_KEY=base64:YOUR_GENERATED_KEY
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce_demo
DB_USERNAME=root
DB_PASSWORD=

# Add CORS settings for React app
SANCTUM_STATEFUL_DOMAINS=localhost:3000,localhost:5173
```

### 4. Run migrations

```bash
# Run migrations
php artisan migrate
```

### 5. Import Products from FakeStore API

```bash
# Import products (this will fetch from fakestoreapi.com)
php artisan import:products

# Start Laravel development server
php artisan serve
```

Your Laravel API will be available at: `http://localhost:8000`

### 6. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd ecommerce-frontend  # or your React project directory

# Install Node.js dependencies
npm install

# Create environment file for React
touch .env.local  # or .env
```

**Add to `.env.local`:**

```env
VITE_API_BASE_URL=http://localhost:8000/api
# or for Create React App:
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

```bash
# Start React development server
npm run dev  # for Vite
# or
npm start    # for Create React App
```

Your React app will be available at: `http://localhost:3000` or `http://localhost:5173`

## 📚 API Endpoints

### Authentication

- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout (requires token)
- `GET /api/user` - Get authenticated user (requires token)

### Products

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get single product

## 🔧 Development Commands

### Backend (Laravel):

```bash
# Run migrations
php artisan migrate

# Import/refresh products
php artisan import:products

# Clear cache
php artisan cache:clear

# Run tests
php artisan test
```

### Frontend (React):

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Reset Everything:

```bash
# Backend
php artisan migrate:fresh
php artisan import:products

# Frontend
rm -rf node_modules
npm install
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note:** This is a demo application for educational purposes. Do not use in production without proper security reviews and enhancements.

```

```
