@echo off
copy /y ..\..\..\spc2\spfx-core\sp-application-base\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-component-base\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-core-library\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-extension-base\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-http\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-odata-types\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-page-context\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\sp-webpart-base\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-core\decorators\dist\*.api.json . 

copy /y ..\..\..\spc2\spfx-libraries\sp-dialog\dist\*.api.json . 
copy /y ..\..\..\spc2\spfx-libraries\sp-listview-extensibility\dist\*.api.json . 

pause
