--[[

    💬 Export from K1Dev => discord:[ !🧠K1Dev#2935 || DiscordServer https://discord.gg/PpuRV5W6 ] 
	
    🐌 @Copyright K1Dev
    ☕ Thanks For Coffee Tips 

]]--


RegisterCommand((K1Dev['คำสั่ง']), function()
    SetDisplay(true)
end)

RegisterNUICallback("exit", function(data)
    SetDisplay(false)
end)

function SetDisplay(bool)
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

RegisterNUICallback("loaded", function(data)
    SendNUIMessage({
        type = "updateKeys",
        data = K1Dev['ปุ่ม']
    })
end)