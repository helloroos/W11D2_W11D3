json.extract! @party, :name

json.guests @party.guests do |guest|
    json.extract! guest, :name, :age, :favorite_color
    json.gifts guest.gifts do |gift|
        json.extract! gift, :title
    end
end