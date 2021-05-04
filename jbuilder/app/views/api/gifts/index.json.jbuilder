json.array! @gifts do |gift| 
    # json.name guest.name
    # json.age guest.age
    # json.favorite_color guest.favorite_color

    json.extract! gift, :title

    # json.partial! 'api/guests/guest', guest: guest
end