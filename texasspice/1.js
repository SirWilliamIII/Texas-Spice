{
  "name": "Featured collection",
  "class": "index-section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Heading",
      "default": "Featured collection"
    },
    {
      "id": "collection",
      "type": "collection",
      "label": "Collection"
    },
    {
      "type": "select",
      "id": "grid",
      "label": "Products per row",
      "default": "3",
      "options": [
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    },
    {
      "type": "select",
      "id": "rows",
      "label": "Rows",
      "default": "2",
      "options": [
        {
          "value": "1",
          "label": "1"
        },
        {
          "value": "2",
          "label": "2"
        },
        {
          "value": "3",
          "label": "3"
        },
        {
          "value": "4",
          "label": "4"
        },
        {
          "value": "5",
          "label": "5"
        }
      ]
    },
    {
      "type": "checkbox",
      "id": "show_vendor",
      "label": "Show product vendors",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "show_view_all",
      "label": "Show 'View all' button",
      "default": false
    }
  ],
  "presets": [
    {
      "name": "Featured collection",
      "category": "Collection"
    }
  ]
}