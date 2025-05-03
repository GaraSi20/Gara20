var APP_DATA = {
  "scenes": [
    {
      "id": "0-45",
      "name": "45",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7749768198295239,
          "pitch": 0.037998691317419286,
          "rotation": 6.283185307179586,
          "target": "1-48"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-48",
      "name": "48",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.111738090840177,
        "pitch": 0.14339023792276606,
        "fov": 1.4413225997054397
      },
      "linkHotspots": [
        {
          "yaw": -2.200452802158276,
          "pitch": 0.2949747045935993,
          "rotation": 6.283185307179586,
          "target": "0-45"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8946543595597527,
          "pitch": 0,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
