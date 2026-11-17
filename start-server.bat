@echo off
title SWIS JEWELS Local Server
cd /d "%~dp0"
echo Starting SWIS JEWELS local server on http://localhost:8090/ ...
powershell -ExecutionPolicy Bypass -File server.ps1 -Port 8090
pause
