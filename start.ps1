# Quick Start - SSO ChatBot Application

Write-Host "🚀 Starting ChatBot Application with SSO..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in the correct directory
if (-not (Test-Path ".\package.json")) {
    Write-Host "❌ Error: Please run this script from the Frontend/Chatbot-frontend directory" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Checking dependencies..." -ForegroundColor Yellow
if (-not (Test-Path ".\node_modules")) {
    Write-Host "Installing npm packages..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "✅ Dependencies ready!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Before starting, ensure:" -ForegroundColor Yellow
Write-Host "   1. Backend is running at http://localhost:8000" -ForegroundColor White
Write-Host "   2. Database is configured and running" -ForegroundColor White
Write-Host "   3. Azure AD credentials are set in backend .env file" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Starting development server..." -ForegroundColor Cyan
Write-Host ""
Write-Host "📖 Documentation available in:" -ForegroundColor Yellow
Write-Host "   - SSO_IMPLEMENTATION.md (Implementation details)" -ForegroundColor White
Write-Host "   - TESTING_GUIDE.md (Testing instructions)" -ForegroundColor White
Write-Host "   - SSO_SUMMARY.md (Complete summary)" -ForegroundColor White
Write-Host ""

npm run dev
