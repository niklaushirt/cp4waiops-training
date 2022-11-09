---
title: "Temporal Grouping"
date: 2022-11-03T10:57:46+01:00
weight: 65
---

# Define and run Temporal Grouping Training


{{< task title="Define and run Temporal Grouping Training" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=algorithms-temporal-grouping" >}}



This AI algorithm can start to discover groups after a pattern is learned, which might take hours or days. For example, if a problem occurs in the first and the fourth week of January and again in March, the algorithm learns to group the alerts that tend to co-occur when the problem happens.

In this section you will set up and run training for this AI algorithm to `learn patterns` in Event occurence and group patterns witt `temporal correlation`.
{{< /task >}}

{{< expand "Solution" "⬇" >}}




# Define Temporal Grouping Training


1. In the `AIManager` "Hamburger" Menu select `Operate`/`AI Model Management`
1. Under `Temporal Grouping`, click on `Set up training`
1. Click `Next`
1. Click `Next`
1. Click `Done`



# Run Temporal Grouping Training
1. Click on the three dots in the upper right corner of the `Temporal Grouping` card
1. Select `Start Training`
1. Status should say `In progress`
1. And eventually say `Deployed`

{{< /expand >}}

