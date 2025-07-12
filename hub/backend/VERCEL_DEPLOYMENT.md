# AgriTech Backend - Vercel Deployment Guide

## Prerequisites
1. Vercel account (free tier available)
2. Git repository for your backend code
3. Vercel CLI installed (optional)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git repository**
   ```bash
   git add .
   git commit -m "Prepare backend for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Sign in with GitHub, GitLab, or Bitbucket
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**
   - In Vercel Dashboard → Project Settings → Environment Variables
   - Add the following variables:
     ```
     FLASK_CONFIG=production
     SECRET_KEY=your-super-secret-key-here
     GEMINI_API_KEY=your-gemini-api-key-here
     ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically detect the Python runtime and deploy

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from backend directory**
   ```bash
   cd backend
   vercel
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add FLASK_CONFIG production
   vercel env add SECRET_KEY your-super-secret-key-here
   vercel env add GEMINI_API_KEY your-gemini-api-key-here
   ```

## Important Notes

### Database
- The app uses SQLite stored in `/tmp/` directory on Vercel
- **Warning**: Data in `/tmp/` is ephemeral and will be lost between deployments
- For production, consider using:
  - PostgreSQL (Vercel Postgres)
  - MySQL (PlanetScale)
  - MongoDB (MongoDB Atlas)

### CORS
- The Flask app is configured with CORS to allow frontend connections
- Update CORS settings in `app.py` if needed for your frontend domain

### API Endpoints
After deployment, your API will be available at:
```
https://your-project-name.vercel.app/
```

Example endpoints:
- `GET /` - API status
- `POST /users/register` - User registration
- `POST /users/login` - User login
- `GET /products` - Get products
- `POST /ai/chat` - AI chat endpoint

### Environment Variables Required
- `FLASK_CONFIG=production`
- `SECRET_KEY` - For Flask sessions and security
- `GEMINI_API_KEY` - For AI features (if using Google Gemini)

### Frontend Configuration
Update your frontend API calls to point to the Vercel URL:
```javascript
const API_BASE_URL = 'https://your-backend.vercel.app';
```

## Troubleshooting

### Common Issues
1. **Import Errors**: Make sure all dependencies are in `requirements.txt`
2. **Database Errors**: Ensure database initialization runs on first request
3. **CORS Errors**: Check CORS configuration in Flask app
4. **Environment Variables**: Verify all required env vars are set in Vercel

### Logs
View deployment logs in Vercel Dashboard → Functions → View Function Logs

## File Structure for Vercel
```
backend/
├── api/
│   └── index.py          # Entry point for Vercel
├── modules/              # Your Flask blueprints
├── database/            # Database models and connection
├── app.py              # Flask app factory
├── config.py           # Configuration settings
├── requirements.txt    # Python dependencies
├── vercel.json        # Vercel configuration
├── runtime.txt        # Python version specification
└── .vercelignore      # Files to ignore during deployment
```

## Security Considerations
1. Always use environment variables for sensitive data
2. Set strong SECRET_KEY
3. Configure CORS properly for your frontend domain
4. Consider using a production database instead of SQLite
