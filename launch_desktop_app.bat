@echo off
title MandiRates and Vyapar Desktop Launcher
echo =========================================================
echo   Launching MandiRates and Vyapar Desktop Application
echo =========================================================

cd /d "%~dp0"

echo [*] Starting Local Web-Desktop App Server...
start /b py -3 run_server.py >nul 2>&1

echo [*] Opening Standalone Desktop App Window...
start msedge --app=http://localhost:8000 || start chrome --app=http://localhost:8000 || start http://localhost:8000

echo =========================================================
echo [!] Application launched successfully!
echo =========================================================
