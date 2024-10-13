export default [
  {
    "kind": "category",
    "name": "Minecraft",
    "colour": "255",
    "contents": [
      {
        "kind": "block",
        "type": "all_panel_move"
      },
      {
        "kind": "block",
        "type": "minecraft_connect"
      },
      {
        "kind": "block",
        "type": "minecraft_coordBlock"
      },
      {
        "kind": "block",
        "type": "minecraft_getServer"
      },
      {
        "kind": "block",
        "type": "minecraft_jsonParse"
      },
      {
        "kind": "block",
        "type": "minecraft_pause"
      }
    ]
  },
  {
    "kind": "category",
    "name": "Дрон",
    "colour": "RED",
    "contents": [
      {
        "kind": "block",
        "type": "minecraft_createDrone"
      },
      {
        "kind": "block",
        "type": "minecraft_build"
      },
      {
        "kind": "block",
        "type": "minecraft_moveDrone",
        "inputs": {
          "step": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "minecraft_botToPlayer"
      },
      {
        "kind": "block",
        "type": "minecraft_tpdrone",
        "inputs": {
          "tpdrone_x": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
          "tpdrone_y": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
          "tpdrone_z": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "minecraft_mineblock"
      },
      {
        "kind": "block",
        "type": "minecraft_movehand"
      },
      {
        "kind": "block",
        "type": "minecraft_setBlockData"
      },
      {
        "kind": "block",
        "type": "minecraft_text"
      },
      {
        "kind": "block",
        "type": "minecraft_playnote"
      }
    ]
  },
  {
    "kind": "category",
    "name": "Бот",
    "colour": "#ff6161",
    "contents": [
      {
        "kind": "block",
        "type": "minecraft_droneSputnik"
      },
      {
        "kind": "block",
        "type": "minecraft_tpBot"
      },
      {
        "kind": "block",
        "type": "minecraft_playerToBot"
      },
      {
        "kind": "block",
        "type": "minecraft_momentmove"
      },
      {
        "kind": "block",
        "type": "minecraft_sputnikCraft"
      },
      {
        "kind": "block",
        "type": "minecraft_sputnikmineblock"
      },
      {
        "kind": "block",
        "type": "minecraft_sputnikInvSlot"
      },
      {
        "kind": "block",
        "type": "minecraft_sputnikBuild"
      },
      {
        "kind": "block",
        "type": "minecraft_unSputnik"
      },
      {
        "kind": "block",
        "type": "minecraft_sputnikProg"
      },
      {
        "kind": "block",
        "type": "minecraft_progSputnikMove"
      },
      {
        "kind": "block",
        "type": "minecraft_progSputnikAtack"
      }
    ]
  },
  {
    "kind": "category",
    "name": "Игровой процесс",
    "colour": "359",
    "contents": [
      {
        "kind": "block",
        "type": "minecraft_summon"
      },
      {
        "kind": "block",
        "type": "minecraft_weather"
      },
      {
        "kind": "block",
        "type": "minecraft_time"
      }
    ]
  },
]
