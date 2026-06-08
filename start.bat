@echo off
echo Installing Neurax AI dependencies...
cd /d "F:\Web Dev\My projects\neurax-ai"
call npm install
echo.
echo Done! Starting dev server...
call npm run dev
pause
