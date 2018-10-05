@echo off
copy /y ..\..\..\sp-client\spfx-core\sp-application-base\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-component-base\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-core-library\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-extension-base\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-http\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-odata-types\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-page-context\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-webpart-base\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\decorators\dist\*.api.json . 

copy /y ..\..\..\sp-client\spfx-core\sp-dialog\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-listview-extensibility\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-dynamic-data\dist\*.api.json . 
copy /y ..\..\..\sp-client\spfx-core\sp-diagnostics\dist\*.api.json . 

pause
