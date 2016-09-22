$(function () {

  var isAjaxMocked = true;
  if (isAjaxMocked) {
    $.mockjax({
      url: '/api/getUserDetail',
      status: 200,
      responseTime: 750,
      responseText: [
          {
              "hex": "#EFDECD",
              "label": "中国",
              "rgb": "(239, 222, 205)"
          },
          {
              "hex": "#FFBCD9",
              "label": "Cotton Candy",
              "rgb": "(255, 188, 217)"
          },
          {
              "hex": "#CDA4DE",
              "label": "Wisteria",
              "rgb": "(205, 164, 222)"
          },
          {
              "hex": "#FCE883",
              "label": "端点公司",
              "rgb": "(252, 232, 131)"
          },
          {
              "hex": "#C5E384",
              "label": "SUN公司",
              "rgb": "(197, 227, 132)"
          },
          {
              "hex": "#FFAE42",
              "label": "中国人",
              "rgb": "(255, 174, 66)"
          }
      ]
    });
  }

  $('#nope').autocompleter({
        // marker for autocomplete matches
        highlightMatches: true,

        // object to local or url to remote search
        source: '/api/getUserDetail',

        // custom template
        template: '{{ label }} <span>({{ hex }})</span> {{ rgb }}',

        // show hint
        hint: true,

        // abort source if empty field
        empty: false,

        cache: false,

        // max results
        limit: 5,

        callback: function (value, index, selected) {
            if (selected) {
                $('.icon').css('background-color', selected.hex);
            }
        }
    });
});
