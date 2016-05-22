var itemslang = {
    "en": {
        "translation": {
        		"rarity-common": "Common Device",
            "type-placeable": "Placeable Item",
            "type-melle": "Melee Weapon",
            "damage": "Damage",
            "chopping-power": "Chopping Power",
            "player-damage": "Player Damage",
            "creature-damage": "Creature Damage",
            "equip-melee": "Equip this as a melee weapon",
            "03name": "Workbench",
            "03-desc": "(T) Turns to ash in 30 seconds when heated to 100 degrees.",
            "03-info": "Use this to craft more advanced items.",
            "89-name": "Flint Hatchet",
            "materials": "Materials",
            
        }
    },
        "br": {
        "translation": {
        		"rarity-common": "Comum",
            "type-placeable": "Item Colocável",
            "type-melle": "Arma Branca",
            "damage": "Dano",
            "chopping-power": "Poder de Corte",
            "player-damage": "Dano a Jogador",
            "creature-damage": "Dano a Criaturas",
            "equip-melee": "Pode ser equipado como arma branca",
            "03name": "Bancada",
            "03-desc": "(T) Se torna cinzas depois de 30 segundos quando aquecido a 100 graus.",
            "03-info": "Use isso para criar items mais avançados.",
            "89-name": "Machado de Pedra",
            "materials": "Materiais",
        }
    }
};

$(document).ready(function () {
    i18n.init({
        "lng": 'en',
        "resStore": itemslang,
        "fallbackLng" : 'en'
    }, function (t) {
        $(document).i18n();
    });

    $('.lang').click(function () {
        var lang = $(this).attr('data-lang');
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
    });
});