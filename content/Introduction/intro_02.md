---
title: "Basic Architecture"
date: 2022-11-03T10:57:46+01:00
weight: 4
---
# Basic Architecture

The environement (Kubernetes, Applications, ...) create logs that are being fed into a Log Management Tool (ELK in this case).

![demo](/cp4waiops-training/pics/waiops_arch_overview.jpg)

1. External Systems generate Alerts and send them into the AIManager for Event Grouping.
1. At the same time AIManager ingests the raw logs coming from the Log Management Tool (ELK) and looks for anomalies in the stream based on the trained model.
2. It also ingests Metric Data and looks for anomalies
1. If it finds an anomaly (logs and/or metrics) it forwards it to the Event Grouping as well.
1. Out of this, AIManager creates a Story that is being enriched with Topology (Localization and Blast Radius) and with Similar Incidents that might help correct the problem.
1. The Story is then sent to Slack.
1. A Runbook is available to correct the problem but not launched automatically.