// If you want to change a file name currently uploaded by input type=file
var blob = file.files[0].slice(0, file.files[0].size, 'image/png'); 
newFile = new File([blob], 'name.png', {type: 'image/png'});

// here file is the uploaded file
// File is Javascript file object
