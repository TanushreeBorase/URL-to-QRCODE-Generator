// Get the URL you want to generate a QR code for
const url = "www.socialwinterofcode.com";

// Generate QR code
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200
});
