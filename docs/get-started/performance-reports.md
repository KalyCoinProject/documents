# Performance Reports

Our goal is to make a highly-performant, feature-rich and easy to setup and maintain blcokchain client software.

All tests were done using the [Kalychain Loadbot](../additional-features/stress-testing.md).

Every performance report you will find on this page is properly dated, environment clearly described and the testing method clearly explained.

## March 2nd 2022

### Summary

This test was done to measure the SC ERC20 and ERC721 token transfer functionality with heavy loads and speed of the transactions.

The goal was to check if everything is working as expected during heavy load with ERC20 and ERC721 token transfers. That was also the reason we’ve introduced gas metrics in the loadbot output, which show us if the blocks are filled with transactions properly.

All transactions were sent to the single node via GRPC API, and the receipts were received via JSON-RPC API. After all transactions were done, gas information was read from each block, using the eth\_getBlockByNumber JSON-RPC method.

Our aim was not to strive to reach a maximum possible TPS, since block gas limit & block time are set to sane values that don't consume much system resources, and would allow this to run on commodity hardware.

### Results ERC20

| Metric                     | Value      |
| -------------------------- | ---------- |
| Transaction type           | ERC20      |
| Transactions per second    | 65         |
| Transactions failed        | 0          |
| Transactions succeeded     | 5000       |
| ERC20 transaction run time | 76.681690s |
| SC Deploy time             | 4.048250s  |

### Results ERC721

| Metric                      | Value      |
| --------------------------- | ---------- |
| Transaction type            | ERC721     |
| Transactions per second     | 20         |
| Transactions failed         | 0          |
| Transactions succeeded      | 3888       |
| ERC721 transaction run time | 97.239920s |
| SC Deploy time              | 3.048970s  |

### Environment ERC20

<details>

<summary>Host Configuration</summary>

\


</details>

<details>

<summary>Blockchain Configuration</summary>

\


</details>

<details>

<summary>Loadbot Configuration</summary>

\


</details>

<details>

<summary>Loadbot log</summary>

```
[COUNT DATA]
Transactions submitted = 5000
Transactions failed    = 0

[APPROXIMATE TPS]
Approximate number of transactions per second = 65

[TURN AROUND DATA]
Average transaction turn around = 25.034950s
Fastest transaction turn around = 3.056460s
Slowest transaction turn around = 47.366220s
Total loadbot execution time    = 76.681690s

[CONTRACT DEPLOYMENT DATA]
Contract address     = 0x7224Dad537291bb6bA277d3e1cCD48cf87B208E7
Total execution time = 4.048250s
Blocks required      = 1

Block #557781 = 1 txns (1055769 gasUsed / 5242880 gasLimit) utilization = 20%

Average utilization across all blocks: 20%

[BLOCK DATA]
Blocks required = 29

Block #557783 = 178 txns (5212100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557785 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557786 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557787 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557788 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557789 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557791 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557792 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557793 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557794 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557795 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557797 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557798 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557799 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557800 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557801 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557803 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557804 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557805 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557806 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557807 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557809 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557810 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557811 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557812 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557813 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557815 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557816 = 178 txns (5197100 gasUsed / 5242880 gasLimit) utilization = 99%
Block #557817 = 16 txns (474800 gasUsed / 5242880 gasLimit) utilization   = 9%

Average utilization across all blocks: 95%
```

</details>

### Environment ERC721

<details>

<summary>Host Configuration</summary>

\


</details>

<details>

<summary>Blockchain Configuration</summary>

\


</details>

<details>

<summary>Loadbot Configuration</summary>

\


</details>

<details>

<summary>Loadbot log</summary>

```
[COUNT DATA]
Transactions submitted = 3888
Transactions failed    = 0

[APPROXIMATE TPS]
Approximate number of transactions per second = 20

[TURN AROUND DATA]
Average transaction turn around = 43.034620s
Fastest transaction turn around = 4.007210s
Slowest transaction turn around = 84.184340s
Total loadbot execution time    = 97.239920s

[CONTRACT DEPLOYMENT DATA]
Contract address     = 0x79D9167FcCC5087D28B2D0cDA27ffAA23A731F51
Total execution time = 3.048970s
Blocks required      = 1

Block #558955 = 1 txns (2528760 gasUsed / 5242880 gasLimit) utilization = 48%

Average utilization across all blocks: 48%

[BLOCK DATA]
Blocks required = 46

Block #558957 = 44 txns (5104824 gasUsed / 5242880 gasLimit) utilization = 97%
Block #558958 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558959 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558960 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558961 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558962 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558963 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558964 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558965 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558966 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558967 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558968 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558969 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558970 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558971 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558972 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558973 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558974 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558975 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558976 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558977 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558978 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558979 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558980 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558981 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558982 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558983 = 13 txns (1505298 gasUsed / 5242880 gasLimit) utilization = 28%
Block #558984 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558985 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558986 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558987 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558988 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558989 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558990 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558991 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558992 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558993 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558994 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558995 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558996 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558997 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558998 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #558999 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #559000 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #559001 = 45 txns (5189970 gasUsed / 5242880 gasLimit) utilization = 98%
Block #559002 = 8 txns (929568 gasUsed / 5242880 gasLimit) utilization   = 17%

Average utilization across all blocks: 94%
```

</details>

## January 21st 2022

### Summary

This test was done after the TxPool refactor which significantly improved performance (released in [v0.2.0](https://github.com/0xPolygon/polygon-edge/releases/v0.2.0)).

The goal was to setup a large network consisting of 30 actively participating validators in order to properly stress test the consensus and TxPool transaction gossiping as all transactions were sent to a single node's JSON-RPC.

Our aim was not to strive to reach a maximum possible TPS, as the network size negatively impacts the performance, and since block gas limit & block time are set to sane values that don't consume much system resources, and would allow this to run on commodity hardware.

### Results

| Metric                  | Value |
| ----------------------- | ----- |
| Transactions per second | 344   |
| Transactions failed     | 0     |
| Transactions succeeded  | 10000 |
| Total run time          | 30s   |

### Environment

<details>

<summary>Host Configuration</summary>

\


</details>

<details>

<summary>Blockchain Configuration</summary>

\


</details>

<details>

<summary>Loadbot Configuration</summary>

\


</details>
