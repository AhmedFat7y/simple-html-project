var graphData = {
  "nodes": [
    {
      "id": "1",
      "name": "Hello",
      "group": "1"
    },
    {
      "id": "2",
      "name": "Ask to buy mobile",
      "group": "2"
    },
    {
      "id": "3",
      "name": "Is Cash",
      "group": "3"
    },
    {
      "id": "4",
      "name": "Is minicash",
      "group": "3"
    },
    {
      "id": "5",
      "name": "Budget Inquiry",
      "group": "4"
    },
    {
      "id": "6",
      "name": "no minicash",
      "group": "4"
    },
    {
      "id": "7",
      "name": "minicash account",
      "group": "4"
    },
    {
      "id": "8",
      "name": "installment inquiry",
      "group": "5"
    },
    {
      "id": "9",
      "name": "minicash account number",
      "group": "5"
    },
    {
      "id": "10",
      "name": "installment duration inquiry",
      "group": "6"
    }
  ],
  "edges": [
    {
      "id": "e0",
      "source": "Hello",
      "target": "Ask to buy mobile"
    },
    {
      "id": "e1",
      "source": "Ask to buy mobile",
      "target": "Is Cash"
    },
    {
      "id": "e2",
      "source": "Is Cash",
      "target": "Budget Inquiry"
    },
    {
      "id": "e3",
      "source": "Ask to buy mobile",
      "target": "Is minicash"
    },
    {
      "id": "e4",
      "source": "Is minicash",
      "target": "minicash account"
    },
    {
      "id": "e5",
      "source": "Is minicash",
      "target": "no minicash"
    },
    {
      "id": "e6",
      "source": "no minicash",
      "target": "installment inquiry"
    },
    {
      "id": "e7",
      "source": "Is minicash",
      "target": "minicash account"
    },
    {
      "id": "e8",
      "source": "minicash account",
      "target": "minicash account number"
    },
    {
      "id": "e9",
      "source": "minicash account number",
      "target": "installment duration inquiry"
    },
    {
      "id": "e10",
      "source": "installment inquiry",
      "target": "installment duration inquiry"
    }
  ]
};

// contexts are the input ones
// affectedContexts are the output ones
var originalNodes = [
  {
    "id": "b7f65649-bf34-4676-a09b-afcf8001cf5b",
    "name": "0.1- Hello",
    "auto": true,
    "contexts": [],
    "userSays": [
      {
        "id": "57d6dcde-2502-47fb-b348-b97d00471900",
        "data": [
          {
            "text": "Hello"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "99d9db64-2720-479c-abcb-ae5dd1cc3dbb",
        "data": [
          {
            "text": "hi"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "491fe6d5-2abf-4190-b4d1-e17edd8ba98e",
        "data": [
          {
            "text": "yoo"
          }
        ],
        "isTemplate": false,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "say_hello",
        "affectedContexts": [],
        "parameters": [],
        "speech": "Hello sir, how can I help you?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "d8209a17-616c-459b-9d99-43af153f5577",
    "name": "0.2- Ask to buy mobile",
    "auto": true,
    "contexts": [],
    "userSays": [
      {
        "id": "5f2cb518-3678-4512-b282-f90654864f00",
        "data": [
          {
            "text": "I want to buy mobile"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "57a3206f-da48-4735-bd00-dbb9a9c4b3a6",
        "data": [
          {
            "text": "wanna buy a mobile"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "469e334d-0607-4d78-a069-93e3b3d7c570",
        "data": [
          {
            "text": "want a mobile"
          }
        ],
        "isTemplate": false,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_if_cash_or_minicash",
        "affectedContexts": [],
        "parameters": [],
        "speech": "Cash or mini-cash?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "ed93fa7a-6103-415b-a19a-ac7fdde33ab7",
    "name": "1.1 Is minicash",
    "auto": true,
    "contexts": [],
    "userSays": [
      {
        "id": "749fa4cd-3a6f-4b34-872a-eadd0858e928",
        "data": [
          {
            "text": "minicash"
          }
        ],
        "isTemplate": true,
        "count": 0
      },
      {
        "id": "18d5ee3f-3317-4fb3-9bed-a264778cca73",
        "data": [
          {
            "text": "mini cash"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "f7393e31-fa1d-4a51-870b-1a84b4666f7c",
        "data": [
          {
            "text": "mini-cash"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "ec333442-9924-47e2-a8c1-6cab452343fd",
        "data": [
          {
            "text": "mini_cash"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "07601e3d-fb53-4c83-9527-097175888e43",
        "data": [
          {
            "text": "mini"
          }
        ],
        "isTemplate": false,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_for_minicash_account",
        "affectedContexts": [
          {
            "name": "minicash_payment",
            "lifespan": 5
          }
        ],
        "parameters": [],
        "speech": "Do you have an account?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "6a13e1b7-1132-4857-a6b1-4b35d24b1159",
    "name": "1.1.1 minicash account",
    "auto": true,
    "contexts": [
      "minicash_payment"
    ],
    "userSays": [
      {
        "id": "7e6a45de-64cb-4b66-8ecd-c2d7ff7a5d58",
        "data": [
          {
            "text": "yes I have"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "3ef1c195-c757-47db-95d1-3c4a0513f167",
        "data": [
          {
            "text": "yes"
          }
        ],
        "isTemplate": false,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_for_nationa_id",
        "affectedContexts": [
          {
            "name": "minicash_national_id",
            "lifespan": 5
          }
        ],
        "parameters": [],
        "speech": "May I have your national Id number?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "637a89bc-9851-4e84-af2e-a93a3a2613e2",
    "name": "1.1.1.1 minicash account number",
    "auto": true,
    "contexts": [
      "minicash_national_id"
    ],
    "userSays": [
      {
        "id": "3269b8c7-f3e2-4e38-b0df-9b20e0a6aff8",
        "data": [
          {
            "text": "@sys.number-sequence:national_id"
          }
        ],
        "isTemplate": true,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_for_duration",
        "affectedContexts": [
          {
            "name": "installment_known",
            "lifespan": 5
          },
          {
            "name": "minicash_account",
            "lifespan": 5
          }
        ],
        "parameters": [
          {
            "dataType": "@sys.number-sequence",
            "name": "national_id",
            "value": "$national_id"
          }
        ],
        "speech": "Thank you, what\u0027s the duration?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "ce5ca3c7-54cb-44e8-ad48-e7e8e11eb314",
    "name": "1.1.2 no minicash",
    "auto": true,
    "contexts": [
      "minicash_payment"
    ],
    "userSays": [
      {
        "id": "3c262733-58cf-480a-8441-4d3f25b05a0f",
        "data": [
          {
            "text": "no"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "65b97e5c-c26c-4286-a9dd-c3fdc53ab349",
        "data": [
          {
            "text": "no I don\u0027t have"
          }
        ],
        "isTemplate": false,
        "count": 0
      },
      {
        "id": "c224b5bf-c89f-41db-b244-77b27508cebf",
        "data": [
          {
            "text": "nope"
          }
        ],
        "isTemplate": false,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_for_max_installment",
        "affectedContexts": [
          {
            "name": "no_account",
            "lifespan": 5
          }
        ],
        "parameters": [],
        "speech": "What\u0027s the max installment you can pay?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "5c59bad6-cb19-412e-aefd-0f01b6a630a3",
    "name": "1.1.2.1 installment inquiry",
    "auto": true,
    "contexts": [
      "no_account"
    ],
    "userSays": [
      {
        "id": "c7a994b6-1e21-4540-85f6-ddd28ed0bb79",
        "data": [
          {
            "text": "@sys.number:max_installment"
          }
        ],
        "isTemplate": true,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_for_duration",
        "affectedContexts": [
          {
            "name": "installment_known",
            "lifespan": 5
          }
        ],
        "parameters": [
          {
            "required": true,
            "dataType": "@sys.number",
            "name": "max_installment",
            "value": "$max_installment",
            "prompts": [
              "What\u0027s you max installment? (e.g. 1200 L.E) etc"
            ]
          }
        ],
        "speech": "Thank you, what\u0027s the duration?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "93024fdc-7279-44e5-b415-15695851d7d8",
    "name": "1.1.x.x.1 installment duration inquiry",
    "auto": true,
    "contexts": [
      "installment_known"
    ],
    "userSays": [
      {
        "id": "3e0caac3-bfc2-43cc-be55-5fbc26e7ef69",
        "data": [
          {
            "text": "for @sys.duration:installment_duration"
          }
        ],
        "isTemplate": true,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": true,
        "action": "end",
        "affectedContexts": [
          {
            "name": "budget_info",
            "lifespan": 5
          },
          {
            "name": "installment_payment",
            "lifespan": 5
          },
          {
            "name": "minicash_payment",
            "lifespan": 5
          },
          {
            "name": "installment_known",
            "lifespan": 5
          }
        ],
        "parameters": [
          {
            "required": false,
            "dataType": "@sys.duration",
            "name": "installment_duration",
            "value": "$installment_duration"
          }
        ],
        "speech": "Thank you Here are the products"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "605bec8a-98aa-42cc-8238-af1bfb0bb050",
    "name": "1.2 Is Cash",
    "auto": true,
    "contexts": [],
    "userSays": [
      {
        "id": "e215e913-99a5-4cb3-a988-5800a3609be7",
        "data": [
          {
            "text": "cash @sys.any:cash"
          }
        ],
        "isTemplate": true,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": false,
        "action": "ask_for_budget",
        "affectedContexts": [
          {
            "name": "cash_payment",
            "lifespan": 5
          }
        ],
        "parameters": [
          {
            "required": false,
            "dataType": "@sys.any",
            "name": "cash",
            "value": "$cash",
            "prompts": [],
            "defaultValue": "cash"
          }
        ],
        "speech": "ok so you what\u0027s your budget?"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  },
  {
    "id": "66b6f59c-9def-43ed-894e-5b8d11789786",
    "name": "1.2.1 Budget Inquiry",
    "auto": true,
    "contexts": [
      "cash_payment"
    ],
    "userSays": [
      {
        "id": "20326967-a85b-4a0f-ba9f-a4478c321e7b",
        "data": [
          {
            "text": "My budget is @sys.number:max"
          }
        ],
        "isTemplate": true,
        "count": 0
      },
      {
        "id": "1cbc5c2a-bc7f-47de-9087-8185d25676bc",
        "data": [
          {
            "text": "In range from @sys.number:min to @sys.number:max"
          }
        ],
        "isTemplate": true,
        "count": 0
      },
      {
        "id": "26d3372d-f950-4be8-a650-63be7408c4c3",
        "data": [
          {
            "text": "@sys.number:min - @sys.number:max"
          }
        ],
        "isTemplate": true,
        "count": 0
      },
      {
        "id": "947ce1bc-6da8-4ef6-9753-b32404b8a614",
        "data": [
          {
            "text": "@sys.number:max"
          }
        ],
        "isTemplate": true,
        "count": 0
      }
    ],
    "responses": [
      {
        "resetContexts": true,
        "action": "end",
        "affectedContexts": [
          {
            "name": "budget_info",
            "lifespan": 5
          },
          {
            "name": "cash_payment",
            "lifespan": 5
          }
        ],
        "parameters": [
          {
            "required": true,
            "dataType": "@sys.number",
            "name": "max",
            "value": "$max",
            "prompts": [
              "What\u0027s the maximum budget?"
            ]
          },
          {
            "dataType": "@sys.number",
            "name": "min",
            "value": "$min",
            "prompts": [],
            "defaultValue": "100"
          }
        ],
        "speech": "Ok here are the products within your budget!"
      }
    ],
    "state": "LEARNED",
    "priority": 500000,
    "webhookUsed": false,
    "fallbackIntent": false
  }
];
