---
title: "Log Anomalies"
date: 2022-11-03T10:57:46+01:00
weight: 61
---

# Define and run LogAnomaly Training

{{< task title="Define and run LogAnomaly Training" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=algorithms-natural-language-log-anomaly-detection" >}}



In this section you will set up and run training for this AI algorithm to `detect unusual patterns in your logs` and notify you by generating an alert when they occur.

Set up and run training for Logs ingested `from March 3rd 2022 to March 4th 2022`

{{< /task >}}

{{< expand "Solution" "⬇" >}}


# Define Log Anomalies Training

1. In the `AIManager` "Hamburger" Menu select `Operate`/`AI Model Management`
1. Under `Log anomaly detection - natural language`, click on `Set up training`
1. Click `Next`
1. Under `Select data` check `Custom`
1. Select `Start date` as `March, 3rd 2022`
1. Select `End date` as `March, 4rd 2022`

	![image](/cp4waiops-training/pics/43_training.png)

1. Click `Next`
1. Click `Next`
1. Click `Next`
1. Under `Deployment type` check `On completion`
1. Click `Done`



# Run Log Anomalies Training
1. Click on the three dots in the upper right corner of the `Log anomaly detection - natural language` card

	![image](/cp4waiops-training/pics/44_training.png)


1. Select `Start Training`
1. Status should say `In progress`
1. And eventually say `Deployed`


{{< /expand >}}
