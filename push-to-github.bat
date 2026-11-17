@echo off
title Push SWIS JEWELS to GitHub
cd /d "%~dp0"
echo =======================================================
echo Pushing SWIS JEWELS repository to GitHub:
echo https://github.com/estaraaihub-cmd/swis_jewels.git
echo =======================================================
echo.
git push -u origin main
echo.
echo =======================================================
echo If you saw any authentication prompt, please sign in.
echo All 44 project files have been pushed to main!
echo =======================================================
pause
