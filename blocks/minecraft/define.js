import * as Blockly from "blockly";



// ####################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################
Blockly.Blocks['all_panel_move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Двигать дрона")
        //////////////////////
        this.appendField("движение по оси z где \"1\" - вперед \"-1\" - назад \"0\" - без движения")
        this.appendValueInput("z");
        this.appendField("движение по оси x где \"1\" - вправо \"-1\" - влево \"0\" - без движения")
        this.appendValueInput("x");
        this.appendField("прыжок, где \"1\" - прыгнуть \"0\" - не прыгать")
        this.appendValueInput("jump");
        this.appendField("время указывается в секундах")
        this.appendValueInput("time");
        this.appendField("указать имя(по желанию) !только если в комнате игры есть реальный персонаж с аналогичным именем")
        this.appendValueInput("nickname");
        /////////////////////
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Панель управления дроном");
        this.setHelpUrl("");
    }
};

// ####################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################


Blockly.Blocks['minecraft_pause'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Пауза")
            .appendField(new Blockly.FieldNumber(100), "ms")
            .appendField("(мс)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Приостанавливает выполнение программы на указанное время");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_connect'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Инициализировать")
            .appendField("Личный мир")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "world")
            .appendField("мобы")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "mob");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip("Главный блок программы. Устанавливает соединение с сервером и настраивает начальные данные");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_createDrone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Создать дрона")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Создааёт дрона возле вас");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_build'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Строить")
            .appendField(new Blockly.FieldVariable('build_block'), "blocktype")
            .appendField("напр.")
            .appendField(new Blockly.FieldDropdown([["восток", "EAST"], ["север", "NORTH"], ["юг", "SOUTH"], ["запад", "WEST"], ["верх", "UP"], ["низ", "DOWN"]]), "dir");

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Строить");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_moveDrone'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Двигать дрона")
            .appendField(new Blockly.FieldDropdown([["вперёд", "front"], ["назад", "back"], ["лево", "left"], ["право", "right"], ["вверх", "up"], ["вниз", "down"]]), "Type")
            .appendField("шаг");
        this.appendValueInput("step") .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Двигать дрона в заданном направлении с заданным шагом");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_botToPlayer'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Телепортировать ")
            .appendField(new Blockly.FieldDropdown([["дрон к хозяину", "botToPlayer"], ["хозяина к дрону", "playerToBot"]]), "Type");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Телепортирует дрон к вам");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_tpdrone'] = {
    init: function () {
        this.appendDummyInput().appendField("Телепортировать дрон на");
        this.appendDummyInput().appendField("x:");
        this.appendValueInput("tpdrone_x") .setCheck("Number");
        this.appendDummyInput().appendField("y:");
        this.appendValueInput("tpdrone_y") .setCheck("Number");
        this.appendDummyInput().appendField("z:");
        this.appendValueInput("tpdrone_z") .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Телепортировать дрон *");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_summon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Создать")
            .appendField(new Blockly.FieldDropdown([["Курица", "Chicken"], ["Корова", "Cow"], ["Волк", "Wolf"], ["Свинья", "Pig"], ["Овца", "Sheep"], ["Кролик", "Rabbit"], ["Лошадь", "Horse"], ["Оцелот", "Ocelot"], ["Житель", "Villager"], ["Зомби", "Zombie"], ["Скелет", "Skeleton"], ["Крипер", "Creeper"], ["Паук", "Spider"]]), "Type");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(359);
        this.setTooltip("Призывает сущность");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_time'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Время в мире (час)")
            .appendField(new Blockly.FieldNumber(0), "time");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(359);
        this.setTooltip("Время на сервере");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_weather'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Погода на сервере")
            .appendField(new Blockly.FieldDropdown([["солнечная", "clear"], ["дождь", "rain"], ["буря", "thunder"]]), "Type")
            .appendField("мин. продолж.")
            .appendField(new Blockly.FieldNumber(0), "duration");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(359);
        this.setTooltip("Погода на сервере");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_text'] = {
    init: function () {
        this.appendDummyInput().appendField("Текст в чат");
        this.appendDummyInput()
            .appendField("цвет")
            .appendField(new Blockly.FieldDropdown([["зелёный", "green"], ["жёлтый", "yellow"], ["красный", "red"]]), "color");
        this.appendValueInput("mctext") .setCheck("String");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Текст в чат от лица дрона");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_mineblock'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Добыть блок");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Добывает блок на месте дрона в инвентарь игрока");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_craft'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Скрафтить предмет: ")
            .appendField(new Blockly.FieldDropdown([["Палка", "stick"], ["Доски", "oak_planks"], ["Деревянный меч", "wooden_sword"]]), "item")
            .appendField("Кол-во: ")
            .appendField(new Blockly.FieldNumber(1), "count");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip("Крафтит предмет из имеющихся вещей и помещает его в инвентарь");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['minecraft_playnote'] = {
    init: function () {
        this.appendDummyInput().appendField("Проигрывать. Октава");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "octave")
            .appendField("тон")
            .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"]]), "tone")
            .appendField("инструмент")
            .appendField(new Blockly.FieldDropdown([["Банджо", "BANJO"], ["Большой барабан", "BASS_DRUM"], ["Бас-гитара", "BASS_GUITAR"], ["Колокол", "BELL"], ["Бит", "BIT"], ["Звон", "CHIME"], ["Колокольчик", "COW_BELL"], ["Диджериду", "DIDGERIDOO"], ["Флейта", "FLUTE"], ["Гитара", "GUITAR"], ["Железный ксилофон", "IRON_XYLOPHONE"], ["Пианино", "PIANO"], ["Плинг", "PLING"], ["Малый барабан", "SNARE_DRUM"], ["Палочки", "STICKS"], ["Ксилофон", "XYLOPHONE"]]), "instrument");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Проигрывает возле дрона ноту с установленными параметрами");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_if'] = {
    init: function () {
        this.appendDummyInput().appendField("Если");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["Блок в дроне", "blockin"], ["Блок слева", "blockleft"], ["Блок справа", "blockright"], ["Блок сзади", "blockback"]]), "whatif");
        this.appendDummyInput().appendField("==")
            .appendField(new Blockly.FieldVariable('mc_val_if'), "valif");
        this.appendDummyInput().appendField("то");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["вперёд", "front"], ["назад", "back"], ["лево", "left"], ["право", "right"], ["Вверх", "up"], ["Вниз", "down"]]), "whatthen");
        this.appendDummyInput().appendField(new Blockly.FieldNumber(1), "valthen");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Условный блок Minecraft контролирующий движение");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_movehand'] = {
    init: function () {
        this.appendDummyInput().appendField("Двигать ");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["руками", "hand"], ["ногами", "leg"]]), "type");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["правой", "right"], ["левой", "left"]]), "what");
        this.appendDummyInput().appendField("x");
        this.appendValueInput("x") .setCheck("Number");
        this.appendDummyInput().appendField("y");
        this.appendValueInput("y") .setCheck("Number");
        this.appendDummyInput().appendField("z");
        this.appendValueInput("z") .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Двигает руками дрона в зависимости от заданных координат");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_getdroneblock'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("(async) Запрос данных с сервера в")
            .appendField(new Blockly.FieldVariable('response'), "response")
            .appendField(new Blockly.FieldDropdown([["У дрона", "drone"], ["У бота", "sputnik"], ["У игрока", "player"]]), "Type");
        this.appendStatementInput("otherCode")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip("Асинхронная функция. Берёт данные сервера на текущем шаге и обрабатывает их");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_getServer'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Запрос данных")
            .appendField(new Blockly.FieldDropdown([["У дрона", "drone"], ["У бота", "sputnik"], ["У игрока", "player"], ["Карта", "map"]], this.handleTypeSelection.bind(this)), "Type");
        this.appendValueInput("x").setCheck("Number");
        this.appendValueInput("y").setCheck("Number");
        this.appendValueInput("x").setCheck("Number");
        this.appendDummyInput()
            .appendField("и поместить в ")
            .appendField(new Blockly.FieldVariable('response'), "response");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    handleTypeSelection: function (newType) {
        // Avoid unnecessary updates if someone clicks the same field twice
        if(this.columnType !== newType) {
            // Update this.columnType to the new value
            this.columnType = newType;
            // Add or remove fields as appropriate
            this.updateShape();
        }
    },
    updateShape: function () {
        if(this.getInput('x'))
            this.removeInput('x');
        if(this.getInput('y'))
            this.removeInput('y');
        if(this.getInput('z'))
            this.removeInput('z');

        if (this.columnType==="map") {
            this.appendValueInput("x").setCheck("Number");
            this.appendValueInput("y").setCheck("Number");
            this.appendValueInput("z").setCheck("Number");
        }
        else {
            if(this.getInput('x'))
                this.removeInput('x');
            if(this.getInput('y'))
                this.removeInput('y');
            if(this.getInput('z'))
                this.removeInput('z');
        }
    },
    mutationToDom: function () { //Нужно при сохранении в XML
        var container = document.createElement('mutation');
        container.setAttribute('column_type', this.columnType);
        return container;
    },
    domToMutation: function (xmlElement) {
        var columnType = xmlElement.getAttribute('column_type');

        if(columnType && columnType !== 'undefined') {
            this.columnType = columnType;
        }
        this.updateShape();
    }
};

Blockly.Blocks['minecraft_setBlockData'] = {
    init: function() {
        this.appendDummyInput().appendField("Перенести данные блока");
        this.appendDummyInput().appendField(new Blockly.FieldVariable('block_data'), "blockData");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#cc0000");
        this.setTooltip("Из данных блока полностью воссаздаёт блок на месте дрона");
        this.setHelpUrl("");

    }
};

Blockly.Blocks['minecraft_jsonParse'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable('server_data'), "server_data")
            .appendField(" = ");
        this.appendDummyInput()
            .appendField("Ответ JSON:");
        this.appendValueInput("server_string");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["Дрон/бот","drone"], ["Игрок","player"], ["Блоки рядом","botNearBlock"], ["Блок на коорд.","block"], ["Сущность на коорд.","entity"], ["Инвентарь (для бота)","inventory"]], this.handleTypeSelection.bind(this)), "type");
        this.columnType = this.getFieldValue('type');
        this.updateShape();
        this.appendDummyInput() .appendField("Параметр:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(255);
        this.setTooltip("Разбор ответна от сервера на переменные,параметры: x,y,z,front,behind,in,left,right(такиеже с приставкой _data), block(x,y,z), чило (для радиуса мобов)");
        this.setHelpUrl("");
    },
    handleTypeSelection: function (newType) {
        // Avoid unnecessary updates if someone clicks the same field twice
        if(this.columnType !== newType) {
            // Update this.columnType to the new value
            this.columnType = newType;
            // Add or remove fields as appropriate
            this.updateShape();
        }
    },
    updateShape: function () {
        if(this.getInput('data'))
            this.removeInput('data');

        if (this.columnType==="drone") {
            this.appendDummyInput('data').appendField(new Blockly.FieldDropdown([["X","x"], ["Z","y"], ["Z","z"], ["Сердец (у бота)","hp"]]), "data");
        }
        else if(this.columnType==="player") {
            this.appendDummyInput('data').appendField(new Blockly.FieldDropdown([["X","x"], ["Z","y"], ["Z","z"], ["Имя","name"], ["Чат","chat"]]), "data");
        }
        else if(this.columnType==="botNearBlock") {
            this.appendDummyInput('data').appendField(new Blockly.FieldDropdown([["Впереди","front"], ["Слева", "left"], ["Справа","right"], ["Позади","behind"], ["В","in"]]), "data");
        }
        else if(this.columnType==="block") {
            if(this.getInput('data'))
                this.removeInput('data');
        }
        else if(this.columnType==="entity") {
            if(this.getInput('data'))
                this.removeInput('data');
        }
        else if(this.columnType==="botMap") {
            this.appendValueInput("data");
        }
        else if(this.columnType==="botNearEntity") {
            this.appendValueInput("data");
        }
        else if(this.columnType==="inventory") {
            this.appendValueInput("data").setCheck("Number");
        }
    },
    mutationToDom: function () { //Нужно при сохранении в XML
        var container = document.createElement('mutation');
        container.setAttribute('column_type', this.columnType);
        // ALWAYS return container; this will be the input for domToMutation.
        return container;
    },
    domToMutation: function (xmlElement) {
        var columnType = xmlElement.getAttribute('column_type');
        // If, for whatever reason, you try to save an undefined value in column_type, it will actually be saved as the string 'undefined'
        // If this is not an acceptable value, filter it out
        if(columnType && columnType !== 'undefined') {
            this.columnType = columnType;
        }
        // Run updateShape to append block values as needed
        this.updateShape();
    }
};

Blockly.Blocks['minecraft_coordBlock'] = {
    init: function() {
        this.appendDummyInput().appendField("Координаты X");
        this.appendValueInput("x").setCheck("Number");
        this.appendDummyInput().appendField("Y");
        this.appendValueInput("y").setCheck("Number");
        this.appendDummyInput().appendField("Z");
        this.appendValueInput("z").setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(255);
        this.setTooltip("Блок координат");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_droneSputnik'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Создать БОТ")
            .appendField(new Blockly.FieldDropdown([["Человек","PLAYER"], ["Зомби","ZOMBIE"], ["Житель","VILLAGER"], ["Корова","COW"], ["Ближайший моб","zaxvat"]]), "mob_type");
        this.appendDummyInput()
            .appendField("имя:");
        this.appendValueInput("mob_name");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Создаёт бота");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_momentmove'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Движение на шаг, напр.")
            .appendField(new Blockly.FieldDropdown([["x+1", "x+1"], ["x-1", "x-1"], ["z+1", "z+1"], ["z-1", "z-1"]]), "dir");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Освобождает спутника от контроля");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_sputnikCraft'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Скрафтить предмет: ")
            .appendField(new Blockly.FieldVariable('craft_block'), "item");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Крафтит предмет из инвентаря бота");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_sputnikmineblock'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Добыть блок впереди");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Добывает блок на месте дрона в инвентарь игрока");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_sputnikInvSlot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Положить в руку слот в инвентаре: ");
        this.appendValueInput("slot").setCheck("Number");;
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Крафтит предмет из инвентаря бота");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_sputnikBuild'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Строить блок из руки бота")
            .appendField("напр.")
            .appendField(new Blockly.FieldDropdown([["восток", "EAST"], ["север", "NORTH"], ["юг", "SOUTH"], ["запад", "WEST"]]), "dir");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Строить");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_unSputnik'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Освободить бота");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Освобождает спутника от контроля");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_sputnikProg'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Запрограммировать автономно.");
        this.appendDummyInput()
            .appendField("Скин по имени:");
        this.appendValueInput("mob_name");
        this.setInputsInline(true);
        this.appendStatementInput("otherCode")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff9494");
        this.setTooltip("Программируемый бот (для блоков [prog]). Команды выполняются только после завершения блока. Повторение зациклено.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_progSputnikMove'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[prog] Двигать БОТ за дроном")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "drone")
            .appendField("или на");
        this.appendDummyInput().appendField("x:");
        this.appendValueInput("x") .setCheck("Number");
        this.appendDummyInput().appendField("y:");
        this.appendValueInput("y") .setCheck("Number");
        this.appendDummyInput().appendField("z:");
        this.appendValueInput("z") .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff9494");
        this.setTooltip("Спутник начинает следить за дроном или пойдёт на координаты");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_progSputnikAtack'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[prog] Атаковать моба");
        this.appendValueInput("mob_type");
        this.appendDummyInput()
            .appendField("в радиусе");
        this.appendValueInput("radius").setCheck("Number");;
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff9494");
        this.setTooltip("Если бот в указанном радиусе найдёт указанного моба, он атакует его");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_tpBot'] = {
    init: function () {
        this.appendDummyInput().appendField("Телепортировать бот на");
        this.appendDummyInput().appendField("x:");
        this.appendValueInput("tpbot_x") .setCheck("Number");
        this.appendDummyInput().appendField("y:");
        this.appendValueInput("tpbot_y") .setCheck("Number");
        this.appendDummyInput().appendField("z:");
        this.appendValueInput("tpbot_z") .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Телепортировать бот на координаты");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['minecraft_playerToBot'] = {
    init: function () {
        this.appendDummyInput().appendField("Телепортировать игрока к боту");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff6161");
        this.setTooltip("Телепортирует вас к боту");
        this.setHelpUrl("");
    }
};
