export default [
    {
        "kind": "category",
        "name": "Логика",
        "categorystyle": "logic_category",
        "contents": [
            {
                "kind": "block",
                "type": "controls_if"
            },
            {
                "kind": "block",
                "type": "logic_compare"
            },
            {
                "kind": "block",
                "type": "logic_operation"
            },
            {
                "kind": "block",
                "type": "logic_negate"
            },
            {
                "kind": "block",
                "type": "logic_boolean"
            }
        ]
    },
    {
        "kind": "category",
        "name": "Циклы",
        "colour": "120",
        "contents": [
            {
                "kind": "block",
                "type": "controls_repeat_ext"
            },
            {
                "kind": "block",
                "type": "controls_whileUntil"
            },
            {
                "kind": "block",
                "type": "controls_for",
                "inputs": {
                    "FROM": {
                        "block": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    },
                    "TO": {
                        "block": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 10
                            }
                        }
                    },
                    "BY": {
                        "block": {
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
                "type": "controls_forEach"
            },
            {
                "kind": "block",
                "type": "controls_flow_statements"
            }
        ]
    },
    {
        "kind": "category",
        "name": "Математика",
        "colour": "230",
        "contents": [
            {
                "kind": "block",
                "type": "math_number",
                "fields": {
                    "NUM": 42
                }
            },
            {
                "kind": "block",
                "type": "math_arithmetic",
                "fields": {
                    "OP": "ADD"
                },
                "inputs": {
                    "A": {
                        "shadow": {
                            "type": "math_number",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    },
                    "B": {
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
                "type": "math_single"
            },
            {
                "kind": "block",
                "type": "math_trig"
            },
            {
                "kind": "block",
                "type": "math_constant"
            },
            {
                "kind": "block",
                "type": "math_change"
            },
            {
                "kind": "block",
                "type": "math_round"
            },
            {
                "kind": "block",
                "type": "math_on_list"
            },
            {
                "kind": "block",
                "type": "math_modulo"
            },
            {
                "kind": "block",
                "type": "math_constrain"
            },
            {
                "kind": "block",
                "type": "math_random_int"
            },
            {
                "kind": "block",
                "type": "math_random_float"
            }
        ]
    },
    {
        "kind": "category",
        "name": "Текст",
        "colour": "160",
        "contents": [
            {
                "kind": "block",
                "type": "text"
            },
            {
                "kind": "block",
                "type": "text_join"
            },
            {
                "kind": "block",
                "type": "text_append"
            },
            {
                "kind": "block",
                "type": "text_length"
            },
            {
                "kind": "block",
                "type": "text_isEmpty"
            },
            {
                "kind": "block",
                "type": "text_indexOf"
            },
            {
                "kind": "block",
                "type": "text_charAt"
            },
            {
                "kind": "block",
                "type": "text_getSubstring"
            },
            {
                "kind": "block",
                "type": "text_changeCase"
            },
            {
                "kind": "block",
                "type": "text_trim"
            },
            {
                "kind": "block",
                "type": "text_print"
            },
            {
                "kind": "block",
                "type": "text_prompt_ext"
            }
        ]
    },
    {
        "kind": "category",
        "name": "Переменные",
        "custom": "VARIABLE",
        "colour": "330"
    },
    {
        "kind": "category",
        "name": "Функции",
        "custom": "PROCEDURE",
        "colour": "290"
    },
    {
        "kind": "category",
        "name": "Палитра",
        "custom": "COLOUR_PALETTE",
        "colour": "22"
    },
]