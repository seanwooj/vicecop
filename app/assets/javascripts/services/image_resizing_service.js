window.app.factory('imageResizingService', [function() {
  var dataUriToBlob = function (dataUri, name) {
    // get filesize var
    var byteString;

    // find the filesize so that we can iterate through all the
    // individual bytes of data.
    if (dataUri.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataUri.split(',')[1]);
    } else {
      byteString = unescape(dataUri.split(',')[1]);
    }

    // get filetype
    var mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0];

    // get actual data
    var ia = new Uint8Array(byteString.length);

    // iterate through the actual data.
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    };

    // create the blob
    var blob = new Blob([ia], {type: mimeString});

    // add name to blob to make it more like a file
    blob.name = name;

    // return the blob object
    return blob;
  };

  return function(imageFile, callback) {
    // create the image element
    var img = document.createElement('img');

    // instantiate a filereader
    var reader = new FileReader();
    // save a reference to the imagefile name
    var name = imageFile.name;

    // have to make sure that these onload events
    // are nested, particularly in iOS, in which 
    // the src image in base64 takes a while to load
    // hence we need to wait a few seconds for the image to load
    // before we begin calculating width and heights
    reader.onload = function (readerEvent) {
      img.onload = function (imageEvent) {
        // create a canvas ewlement
        var canvas = document.createElement('canvas');

        // set all of the width and heights variables
        var maxWidth = 600;
        var maxHeight = 600;
        var width = img.width;
        var height = img.height;

        // set all the height and widths based on the
        // aspect ratio of the image
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        // set the canvas width and height
        canvas.width = width;
        canvas.height = height;

        // create a ctx
        var ctx = canvas.getContext('2d');
        // draw the image using the height and width
        ctx.drawImage(img, 0, 0, width, height);

        // create a dataURL with the canvas element
        // with the data from the image
        var dataUrl = canvas.toDataURL('image/jpeg');
        // create a blob with the data url
        var blob = dataUriToBlob(dataUrl, name);

        // run the callback
        // actually should add a check
        callback(blob);
      };

      // set img src
      img.src = readerEvent.target.result;
    }

    // read as dataURL and then run the onload callback
    reader.readAsDataURL(imageFile);
  };
}]);