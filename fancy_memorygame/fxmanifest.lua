fx_version "adamant"

game "gta5"

server_scripts {
    "server.lua",
    "config.lua"
}

lua54 'yes'

client_scripts{
    "client.lua",
    "config.lua"
}

ui_page {
	'html/index.html'
}
files {
	'html/index.html',
	'html/css/style.css',
	'html/js/fivem.js',
	'html/img/*.png',
    'html/sounds/*.mp3'
}

shared_scripts {
    '@ox_lib/init.lua'
}