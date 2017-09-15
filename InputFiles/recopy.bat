@echo off
copy /y ..\..\..\..\..\spc\spfx-core\sp-application-base\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-component-base\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-core-library\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-extension-base\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-http\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-odata-types\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-page-context\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-core\sp-webpart-base\dist\*.api.json . 

copy /y ..\..\..\..\..\spc\spfx-libraries\sp-dialog\dist\*.api.json . 
copy /y ..\..\..\..\..\spc\spfx-libraries\sp-listview-extensibility\dist\*.api.json . 

pause
