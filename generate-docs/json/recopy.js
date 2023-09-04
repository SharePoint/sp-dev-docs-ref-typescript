@echo off "after _stateus_complete"
`"build.js"
".gitignore
log/
obj/
_site/
.optemp/
_themes*/
_repo.*/
_dependentPackages
"# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*
replay_pid*
md yaml
call api-documenter yaml --input-folder .\json
pause.openpublishing.buildcore.ps1
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
