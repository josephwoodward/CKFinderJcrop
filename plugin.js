CKFinder.addPlugin( 'cropresize', function( api ) {

    CKFinder.dialog.add( 'cropresize', function( api ) {

        var file = api.getSelectedFile();

        var fileUrl = file.getUrl();
        var fileName = file.name;
        var folderName = file.folder;

        /*alert( api.getSelectedFile().name );*/

        var dialogDefinition =
        {
            title : "Crop " + file.name,
            minWidth : 800,
            minHeight : 500,
            onCancel : function() {
                api.refreshOpenedFolder();
                return true;
            },
            onOk : function() {

                api.refreshOpenedFolder();
                return true;

                // "this" is now a CKFinder.dialog object.

                /*
                var value = this.getValueOf( 'tab1', 'textareaId' );
                if ( !value ) {
                    api.openMsgDialog( '', api.lang.dummy.typeText );
                    return false;
                } else {
                    alert( "You have entered: " + value );
                    return true;
                }*/
              },
            contents : [
                  {
                      id : 'tab1',
                      label : '',
                      title : 'Crop ' + fileName,
                      expand : true,
                      elements :
                      [
                          {
                              type : 'html',
                              html: '<iframe id="iframe_imageNotation" width="100%" style="height:100%" height="100%" src="' + CKFinder.getPluginPath('cropresize') + 'dialog.php?fileUrl=' + fileUrl + '&fileName=' + fileName + '&folderName=' + folderName + '"></iframe>'
                          }
                      ]
                  }
            ],
            buttons : [ CKFinder.dialog.okButton, CKFinder.dialog.cancelButton ]
        };

        return dialogDefinition;
    });

    api.addFileContextMenuOption( { label : 'Crop Image', command : "myCommand" } , function( api, file )
   	{

        if ( !file.isImage() ) {
           api.openMsgDialog("Image cropping", "This feature is only available for editing images.");
           return;
        }

        api.openDialog('cropresize');

    },
    function(file )
    {

    // Disable for files other than images.
    if ( !file.isImage() || !api.getSelectedFolder().type )
        return false;
    if ( file.folder.acl.fileDelete && file.folder.acl.fileUpload )
        return true;
    else
        return -1;

        /* api.connector.sendCommand( 'FileSize', { fileName : api.getSelectedFile().name }, function( xml ) {
            if ( xml.checkError() )
                return;

            var size = xml.selectSingleNode( 'Connector/FileSize/@size' );
            var msg = xml.selectSingleNode( 'Connector/MyMessage/@message' );
            api.openMsgDialog( "", "The exact size of a file is: " + size.value + " bytes");
            //api.openMsgDialog( "", "my message is : " + msg.value + "!");
        });*/

    });

});