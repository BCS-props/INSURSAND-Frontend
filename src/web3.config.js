export const GOVERNANCE_CA = "0x233D91d647a5681Beee37BbDee0326f179f37c32";
export const GOVERNANCE_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "P_number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "P_numbers",
        type: "uint256",
      },
    ],
    name: "closeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "_detail",
        type: "string",
      },
    ],
    name: "getProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotePower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "P_numbers",
        type: "uint256",
      },
    ],
    name: "getVotesAccept",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "P_numbers",
        type: "uint256",
      },
    ],
    name: "getVotesDeny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "P_numbers",
        type: "uint256",
      },
    ],
    name: "userVoteCheck",
    outputs: [
      {
        components: [
          {
            internalType: "enum governance.voteCheck",
            name: "voteChecks",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "count",
            type: "uint256",
          },
        ],
        internalType: "struct governance.myStatus",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "string",
        name: "subject",
        type: "string",
      },
      {
        internalType: "string",
        name: "detail",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "accept",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deny",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        internalType: "enum governance.voteResult",
        name: "voteResults",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
