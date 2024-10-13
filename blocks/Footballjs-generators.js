import x1blockly from '../../inc/X1Blockly'

import {javascriptGenerator} from "blockly/javascript";
import * as Blockly from "blockly";

const baseUrl = 'https://x1team.ru:8088/cmd?name=';
const jsonUrl = 'https://x1team.ru:8088/poll?name=';





// ####################################################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################################################
const url = 'https://webreqest.x1team.ru/api/football';
const timer = 'pause(100); \n'

javascriptGenerator['all_panel_move'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var text_nickname = block.getFieldValue('nickname') === 'TRUE';
    var time = block.getField('time');
    var z = block.getFieldValue('z');
    var x = block.getFieldValue('x');
    var jump = block.getFieldValue('jump');
    const timer = 'pause(' + time * 1000 +'); \n'
    var codeline = 
    url +
    `

    const data = {
        "nickname": "`+ text_nickname +`",
        "time": `+ time +`,
        "z": `+ z +`,
        "x": `+ x +`
        "jump": `+ jump +`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    ` + timer
    var code = codeline;
    return code;
};

javascriptGenerator['jump_move_jump1'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var text_nickname = block.getFieldValue('nickname') === 'TRUE';
    // var time = block.getFieldValue('time');
    const timer = 'pause(' + 100 +'); \n'
    var codeline = 
    url +
    `

    const data = {
        "nickname": "`+ text_nickname +`",
        "time": 0,
        "z": 0,
        "x": 0
        "jump": 1
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    `
    var code = codeline;
    return code;
};

javascriptGenerator['left_move__x_1'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var text_nickname = block.getFieldValue('nickname') === 'TRUE';
    var time = block.getFieldValue('time');
    const timer = 'pause(' + time * 1000 +'); \n'
    var codeline = 
    url +
    `

    const data = {
        "nickname": "`+ text_nickname +`",
        "time": `+ time +`,
        "z": 0,
        "x": -1,
        "jump": 0
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    ` + timer
    var code = codeline;
    return code;
};

javascriptGenerator['right_move__x1'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var text_nickname = block.getFieldValue('nickname') === 'TRUE';
    var time = block.getFieldValue('time');
    const timer = 'pause(' + time * 1000 +'); \n'
    var codeline = 
    url +
    `

    const data = {
        "nickname": "`+ text_nickname +`",
        "time": `+ time +`,
        "z": 0,
        "x": 1,
        "jump": 0
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    ` + timer
    var code = codeline;
    return code;
};


javascriptGenerator['forward_move__z1'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var text_nickname = block.getFieldValue('nickname') === 'TRUE';
    var time = block.getFieldValue('time');
    const timer = 'pause(' + time * 1000 +'); \n'
    var codeline = 
    url +
    `

    const data = {
        "nickname": "`+ text_nickname +`",
        "time": `+ time +`,
        "z": 1,
        "x": 0,
        "jump": 0
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    ` + timer
    var code = codeline;
    return code;
};

javascriptGenerator['back_move__z_1'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var text_nickname = block.getFieldValue('nickname') === 'TRUE';
    var time = block.getFieldValue('time');
    const timer = 'pause(' + time * 1000 +'); \n'
    var codeline = 
    url +
    `
    const data = {
        "nickname": "`+ text_nickname +`",
        "time": `+ time +`,
        "z": -1,
        "x": 0,
        "jump": 0
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    ` + timer
    var code = codeline;
    return code;
};
// ######################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################################################
// ####################################################################################################################################################################################################################################################





javascriptGenerator['minecraft_pause'] = function (block) {
    var number_ms = block.getFieldValue('ms');
    var code = 'pause('+number_ms+'); \n';
    return code;
};

javascriptGenerator['minecraft_connect'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var checkbox_world = block.getFieldValue('world') === 'TRUE';
    var checkbox_mob = block.getFieldValue('mob') === 'TRUE';

    var url = baseUrl + '/' + text_nickname + '/connect/' + checkbox_world + '/' + checkbox_mob;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_build'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var dir = block.getFieldValue('dir');
    var blocktype = javascriptGenerator.variableDB_.getName(block.getFieldValue('blocktype'), Blockly.VARIABLE_CATEGORY_NAME);

    var url = baseUrl + '/' + text_nickname + '/drone/build/creative/\'+' + blocktype + '+\'/'+dir;
    var code = timer+"xhr('"+url+"');\n";

    return code;
};

javascriptGenerator['minecraft_createDrone'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var url = baseUrl + '/' + text_nickname + '/drone/create';
    var code = timer+"xhr('"+url+"');\n";
    return code;
};


javascriptGenerator['minecraft_moveDrone'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var type = block.getFieldValue('Type');
    var step =  block.getField("step") ? String(Number(block.getFieldValue("step"))) : javascriptGenerator.valueToCode(block, "step", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    if(/^(0|-?[1-9]\d{0,5})$/.test(step) == false)
        step = '\'+'+ step + '+\'';
    var url = baseUrl + '/' + text_nickname + '/drone/move/' + type + '/' + step;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_botToPlayer'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var type = block.getFieldValue('Type');
    var url = baseUrl + '/' + text_nickname + '/drone/botToPlayer/' + type;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_tpdrone'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var number_x =  block.getField("tpdrone_x") ? String(Number(block.getFieldValue("tpdrone_x"))) : javascriptGenerator.valueToCode(block, "tpdrone_x", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var number_y =  block.getField("tpdrone_y") ? String(Number(block.getFieldValue("tpdrone_y"))) : javascriptGenerator.valueToCode(block, "tpdrone_y", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var number_z =  block.getField("tpdrone_z") ? String(Number(block.getFieldValue("tpdrone_z"))) : javascriptGenerator.valueToCode(block, "tpdrone_z", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    if(/^(0|-?[1-9]\d{0,5})$/.test(number_x) == false)
        number_x = '\'+'+ number_x + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(number_y) == false)
        number_y = '\'+'+ number_y + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(number_z) == false)
        number_z = '\'+'+ number_z + '+\'';

    var url = baseUrl + '/' + text_nickname + '/drone/tpbot/' + number_x + '/' + number_y + '/' + number_z;
    var code = timer+"xhr('"+url+"');\n";

    return code;
};

javascriptGenerator['minecraft_summon'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var type = block.getFieldValue('Type');

    var url = baseUrl + '/' + text_nickname + '/drone/summon/' + type;
    var code = timer+"xhr('"+url+"');\n";

    return code;
};


javascriptGenerator['minecraft_time'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var time = block.getFieldValue('time');

    var url = baseUrl + '/' + text_nickname + '/drone/setTime/' + time;
    var code = timer+"xhr('"+url+"');\n";

    return code;
};

javascriptGenerator['minecraft_weather'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var type = block.getFieldValue('Type');
    var duration = block.getFieldValue('duration');

    var url = baseUrl + '/' + text_nickname + '/drone/setWeather/' + type + '/' + duration;
    var code = timer+"xhr('"+url+"');\n";

    return code;
};

javascriptGenerator['minecraft_text'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var color = block.getFieldValue('color');
    var mtexts =  block.getField("mctext") ? String(Number(block.getFieldValue("mctext"))) : javascriptGenerator.valueToCode(block, "mctext", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    var url = baseUrl + '/' + text_nickname + '/drone/text/' + color + '/' + mtexts.replace("'","").replace("'","");
    var code = timer+"xhr('"+url+"');\n";

    return code;
};


javascriptGenerator['minecraft_mineblock'] = function (block) {
    var text_nickname = x1blockly.user.nickname;

    var url = baseUrl + '/' + text_nickname + '/drone/mine';
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_craft'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var item = block.getFieldValue('item');
    var count = block.getFieldValue('count');

    var url = baseUrl + '/' + text_nickname + '/drone/craft/' + item + '/'+ count;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_playnote'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var octave = block.getFieldValue('octave');
    var tone = block.getFieldValue('tone');
    var instr = block.getFieldValue('instrument');

    var url = baseUrl + '/' + text_nickname + '/drone/playNote/' + octave + '/'+ tone+ '/'+ instr;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_if'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var whatif = block.getFieldValue('whatif');
    var valif = javascriptGenerator.variableDB_.getName(block.getFieldValue('valif'), Blockly.VARIABLE_CATEGORY_NAME);
    var whatthen = block.getFieldValue('whatthen');
    var valthen = block.getFieldValue('valthen');

    var url =baseUrl + '/' + text_nickname + '/drone/if/' + whatif + '/\'+'+ valif+ '+\'/'+ whatthen + '/'+ valthen;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_movehand'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var number_x =  block.getField("x") ? String(Number(block.getFieldValue("x"))) : javascriptGenerator.valueToCode(block, "x", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var number_y =  block.getField("y") ? String(Number(block.getFieldValue("y"))) : javascriptGenerator.valueToCode(block, "y", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var number_z =  block.getField("z") ? String(Number(block.getFieldValue("z"))) : javascriptGenerator.valueToCode(block, "z", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var what = block.getFieldValue('what');
    var type = block.getFieldValue('type');

    if(/^(0|-?[1-9]\d{0,5})$/.test(number_x) == false)
        number_x = '\'+'+ number_x + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(number_y) == false)
        number_y = '\'+'+ number_y + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(number_z) == false)
        number_z = '\'+'+ number_z + '+\'';

    var url = baseUrl + '/' + text_nickname + '/drone/moveBotBody/' + type + '/' + what + '/' + number_x + '/' + number_y + '/' + number_z;
    var code = timer+"xhr('"+url+"');\n";

    return code;
};

javascriptGenerator['minecraft_getdroneblock'] = function (block) {
    var text_nickname = x1blockly.user.nickname;

    var otherCode = javascriptGenerator.statementToCode(block, 'otherCode');
    var response = javascriptGenerator.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
    var type = block.getFieldValue('Type');
    var url = jsonUrl + '/' + text_nickname + '/'+type
    var funcUpdate = "var updateFromServer = function (err, data) {if (err != null) "+response+" = 'error';\n else {\n  "+response+" = data;\n"+otherCode+"\n }\n};";
    var code = funcUpdate+"\n getJSON('"+text_nickname+"/"+type+"', updateFromServer);";
    return code;
};

javascriptGenerator['minecraft_setBlockData'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var blockData =  javascriptGenerator.variableDB_.getName(block.getFieldValue('blockData'), Blockly.VARIABLE_CATEGORY_NAME);

    var url = baseUrl + '/' + text_nickname + '/drone/setblockdata/\'+' + blockData + '.split("=").join("-")+\'';
    var code = timer+"xhr('"+url+"');\n";

    return code;
};

javascriptGenerator['minecraft_jsonParse'] = function (block) {
    var string = block.getField("string") ? String(Number(block.getFieldValue("server_string"))) : javascriptGenerator.valueToCode(block, "server_string", javascriptGenerator.ORDER_ASSIGNMENT) || "0";
    var type = block.getFieldValue('type');
    if(type==="drone" || type==="player" || type==="botNearBlock") {
        var data = block.getFieldValue('data');
    }
    else {
        var data =  block.getField("data") ? String(Number(block.getFieldValue("data"))) : javascriptGenerator.valueToCode(block, "data", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    }
    var server_data = javascriptGenerator.nameDB_.getName(block.getFieldValue('server_data'), Blockly.VARIABLE_CATEGORY_NAME);
    //data = data.replace("'","").replace("'","");
    //var code = server_data+'='+string+'.'+type+'.'+data+';';
    if(type==="block" || type==="entity")
        var code = server_data+'='+string+'[\''+type+'\'];\n';
    else
        var code = server_data+'='+string+'[\''+type+'\'][\''+data+'\'];\n';
    return code;
};

javascriptGenerator['minecraft_coordBlock'] = function (block) {
    var x =  block.getField("x") ? String(Number(block.getFieldValue("x"))) : javascriptGenerator.valueToCode(block, "x", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var y =  block.getField("y") ? String(Number(block.getFieldValue("y"))) : javascriptGenerator.valueToCode(block, "y", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var z =  block.getField("z") ? String(Number(block.getFieldValue("z"))) : javascriptGenerator.valueToCode(block, "z", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    if(/^(0|-?[1-9]\d{0,5})$/.test(x) == false)
        x = '\'+'+ x + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(y) == false)
        y = '\'+'+ y + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(z) == false)
        z = '\'+'+ z + '+\'';
    var code = '\'block('+x+' '+y+' '+z+')\'';
    return [code, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator['minecraft_droneSputnik'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var mob_type = block.getFieldValue('mob_type');

    var checkbox_zaxvat = "false";
    if(mob_type=="zaxvat")
        checkbox_zaxvat="true";

    var mob_name =  block.getField("mob_name") ? String(Number(block.getFieldValue("mob_name"))) : javascriptGenerator.valueToCode(block, "mob_name", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    var url = baseUrl + '/' + text_nickname + '/sputnik/create/' + mob_type + '/' + mob_name.split("'").join("") + '/' + checkbox_zaxvat;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_momentmove'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var dir = block.getFieldValue('dir');

    var url = baseUrl + '/' + text_nickname + '/sputnik/momentmove/'+dir;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_sputnikCraft'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var item = javascriptGenerator.variableDB_.getName(block.getFieldValue('item'), Blockly.VARIABLE_CATEGORY_NAME);

    var url = baseUrl + '/' + text_nickname + '/sputnik/craft/\'+' + item + '+\'/'
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_sputnikmineblock'] = function (block) {
    var text_nickname = x1blockly.user.nickname;

    var url = baseUrl + '/' + text_nickname + '/sputnik/mine';
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_sputnikInvSlot'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var slot =  block.getField("slot") ? String(Number(block.getFieldValue("slot"))) : javascriptGenerator.valueToCode(block, "slot", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    if(/^(0|-?[1-9]\d{0,5})$/.test(slot) == false)
        slot = '\'+'+ slot + '+\'';

    var url = baseUrl + '/' + text_nickname + '/sputnik/slotinhand/'+slot;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_sputnikBuild'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var dir = block.getFieldValue('dir');

    var url = baseUrl + '/' + text_nickname + '/sputnik/build/'+dir;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_unSputnik'] = function (block) {
    var text_nickname = x1blockly.user.nickname;

    var url = baseUrl + '/' + text_nickname + '/sputnik/unsputnik';
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_getServer'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var type = block.getFieldValue('Type');

    var response = javascriptGenerator.nameDB_.getName(block.getFieldValue('response'), Blockly.VARIABLE_CATEGORY_NAME);
    if(type=="map") {
        var x =  block.getField("x") ? String(Number(block.getFieldValue("x"))) : javascriptGenerator.valueToCode(block, "x", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
        var y =  block.getField("y") ? String(Number(block.getFieldValue("y"))) : javascriptGenerator.valueToCode(block, "y", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
        var z =  block.getField("z") ? String(Number(block.getFieldValue("z"))) : javascriptGenerator.valueToCode(block, "z", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
        var code = response+'=JSON.parse(getJSON("'+baseUrl + '/' + text_nickname + '/'+type+'/'+x+'/'+y+'/'+z+'"));';
    }
    else
        var code = response+'=JSON.parse(getJSON("'+baseUrl + '/' + text_nickname + '/'+type+'"));';
    return code;

};

javascriptGenerator['minecraft_sputnikProg'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var mob_type = block.getFieldValue('mob_type');
    var checkbox_zaxvat = block.getFieldValue('zaxvat') === 'TRUE';
    var otherCode = javascriptGenerator.statementToCode(block, 'otherCode');
    var mob_name =  block.getField("mob_name") ? String(Number(block.getFieldValue("mob_name"))) : javascriptGenerator.valueToCode(block, "mob_name", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    var url = baseUrl + '/' + text_nickname + '/sputnik/create/PLAYER/' + mob_name.split("'").join("") + '/false';
    var url2 = baseUrl + '/' + text_nickname + '/sputnik/unsputnik';

    var code1 = timer+"xhr('"+url+"');\n";
    var code2 = timer+"xhr('"+url2+"');\n";
    var code = code1+otherCode+'\n'+code2;
    return code;
};

javascriptGenerator['minecraft_progSputnikMove'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var checkbox_drone = block.getFieldValue('drone') === 'TRUE';
    var x =  block.getField("x") ? String(Number(block.getFieldValue("x"))) : javascriptGenerator.valueToCode(block, "x", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var y =  block.getField("y") ? String(Number(block.getFieldValue("y"))) : javascriptGenerator.valueToCode(block, "y", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var z =  block.getField("z") ? String(Number(block.getFieldValue("z"))) : javascriptGenerator.valueToCode(block, "z", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    if(/^(0|-?[1-9]\d{0,5})$/.test(x) == false)
        x = '\'+'+ x + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(y) == false)
        y = '\'+'+ y + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(z) == false)
        z = '\'+'+ z + '+\'';

    if(checkbox_drone==true) {
        x=0;
        y=0;
        z=0;
    }

    var url = baseUrl + '/' + text_nickname + '/sputnik/movesputnik/'+x+'/'+y+'/'+z+'/' + checkbox_drone;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_progSputnikAtack'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var mob_type =  block.getField("mob_type") ? String(Number(block.getFieldValue("mob_type"))) : javascriptGenerator.valueToCode(block, "mob_type", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var radius =  block.getField("radius") ? String(Number(block.getFieldValue("radius"))) : javascriptGenerator.valueToCode(block, "radius", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    if(/^(0|-?[1-9]\d{0,5})$/.test(radius) == false)
        radius = '\'+'+ radius + '+\'';

    var url = baseUrl + '/' + text_nickname + '/sputnik/sputnikatack/' + mob_type.split("'").join("") + '/' + radius;
    var code = timer+"xhr('"+url+"');\n";
    return code;
};

javascriptGenerator['minecraft_tpBot'] = function (block) {
    var text_nickname = x1blockly.user.nickname;
    var number_x =  block.getField("tpbot_x") ? String(Number(block.getFieldValue("tpdrone_x"))) : javascriptGenerator.valueToCode(block, "tpbot_x", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var number_y =  block.getField("tpbot_y") ? String(Number(block.getFieldValue("tpdrone_y"))) : javascriptGenerator.valueToCode(block, "tpbot_y", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;
    var number_z =  block.getField("tpbot_z") ? String(Number(block.getFieldValue("tpdrone_z"))) : javascriptGenerator.valueToCode(block, "tpbot_z", javascriptGenerator.ORDER_ASSIGNMENT) || "0"   ;

    if(/^(0|-?[1-9]\d{0,5})$/.test(number_x) == false)
        number_x = '\'+'+ number_x + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(number_y) == false)
        number_y = '\'+'+ number_y + '+\'';
    if(/^(0|-?[1-9]\d{0,5})$/.test(number_z) == false)
        number_z = '\'+'+ number_z + '+\'';

    var url = baseUrl + '/' + text_nickname + '/sputnik/tpbot/' + number_x + '/' + number_y + '/' + number_z;
    var code = timer+"xhr('"+url+"');\n";;

    return code;
};

javascriptGenerator['minecraft_playerToBot'] = function (block) {
    var text_nickname = x1blockly.user.nickname;

    var url = baseUrl + '/' + text_nickname + '/sputnik/playerToBot';
    var code = timer+"xhr('"+url+"');\n";
    return code;
};
