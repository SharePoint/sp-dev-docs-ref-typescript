@echo off "after _stateus_complete"
`"build.js"
copy /y ..\..\..\sp-client\spfx-core\decorators\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-application-base\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-component-base\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-core-library\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-diagnostics\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-dialog\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-dynamic-data\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-extension-base\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-http\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-list-subscription\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-listview-extensibility\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-loader\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-externals\sp-lodash-subset\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-module-interfaces\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-odata-types\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-page-context\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-property-pane\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-search-extensibility\temp\*.api.json .
copy /y ..\..\..\sp-client\spfx-core\sp-webpart-base\temp\*.api.json .
"`
"echo@pause_stop-echo-echo_end"
`".js"
