module.exports = Object.freeze({
  TOKEN: '1407944483:AAGC4azqCbNLxnnkzSbpe6eljnnw4U65SQs',
  ARIA_SECRET: '123456',
  ARIA_DOWNLOAD_LOCATION: '/downloads)',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '0AKAwDp2jf5vcUk9PVA',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1304152521, 993876207],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001319419576, -1001352599350],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@RH_Arya_Bot"
  },
  IS_TEAM_DRIVE: false,
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "https://botmirror.relaxhub.ga/0:/" // add an extra / at the end, for example https://www.gdindex.url/
});
