var netscan = window.netscan();
netscan.setup({
  token: 'ldkdei3j5f8nsjalpriughdnsmse56',
  echoServer: 'check-connectivity.herokuapp.com',
  resultServer: 'http://www.netscan.co'
});


// start Scanning
netscan.start(function(err, result) {
  console.log(result);
});
