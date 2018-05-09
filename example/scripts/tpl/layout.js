define([
  "joy-runtime",
  "utils/li",
  "utils/l10n",
  "tpl/forms/input",
  "tpl/alert"
], function(joy, li, l10n, input, alert) {
  return function(data) {
    data = joy.o(data);
    return (
      " " +
      "\r\n" +
      "\r\n" +
      " " +
      "\r\n" +
      "\r\n\r\n<article>\r\n    <h1>" +
      joy.p(l10n("Hello, this is %s from %s", "Archy", data.name)) +
      "!</h1>\r\n    <hr />\r\n    <h2>" +
      joy.e(joy.p(l10n("Our staff"))) +
      ":</h2>\r\n    <ul>\r\n        " +
      joy.l(data.staff, function(employee, key) {
        return (
          "\r\n            " +
          joy.p(
            li({
              content:
                "\r\n                <b>" +
                joy.e(joy.p(key)) +
                "</b>\r\n                " +
                joy.p(input(employee.name)) +
                "<i>" +
                joy.e(joy.p(employee.age)) +
                "</i>\r\n            "
            })
          ) +
          "\r\n        "
        );
      }) +
      "\r\n    </ul>\r\n\r\n    " +
      joy.p(
        alert({
          content:
            "\r\n        " +
            "{" +
            '\r\n            "text": "Hi",\r\n            "color": "green",\r\n            "size": 30\r\n        ' +
            "}" +
            "\r\n    "
        })
      ) +
      "\r\n\r\n    " +
      joy.p(
        alert({
          text: "it's me again",
          color: "blue",
          size: 32,
          content: "abc"
        })
      ) +
      "\r\n\r\n    " +
      joy.e(joy.p(data.empty)) +
      "\r\n</article>\r\n"
    );
  };
});
