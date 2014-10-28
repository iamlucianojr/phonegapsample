cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/jp.wizcorp.phonegap.plugin.localNotificationPlugin/www/phonegap/plugin/localNotification/localNotification.js",
        "id": "jp.wizcorp.phonegap.plugin.localNotificationPlugin.localNotificationPlugin",
        "clobbers": [
            "window.localNotification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "jp.wizcorp.phonegap.plugin.localNotificationPlugin": "2.0.0",
    "org.apache.cordova.vibration": "0.3.11"
}
// BOTTOM OF METADATA
});