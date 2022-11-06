$(document).ready(function () {
  let userinput = $(".user-input");
  const qrcode = $("#qr-code");
  const box = $(".qr-code-box");
  const container = $(".container");

  $(".generate-btn").click(function () {
    if (!userinput.val() == "") {
      qrcode.attr(
        "src",
        `https://chart.apis.google.com/chart?cht=qr&chl=${userinput.val()}&chs=248`
      );
      box.css("visibility", "visible");
      userinput.css("top", 88);
      container.css("height", 450);
    }
  });
});
