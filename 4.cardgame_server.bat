set MAIN_JS=%~dp0\card_server\app.js
set CONFIG=%~dp0\configs_local2.js
call node.exe %MAIN_JS% %CONFIG%
pause