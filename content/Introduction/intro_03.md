---
title: "Training Architecture"
date: 2022-11-03T10:57:46+01:00
weight: 5
---

# Optimized Training Architecture

![demo](/cp4waiops-training/pics/waiops_arch_dataflow.jpg)


For the this specific Demo environment:

* ELK is installed for you to kearn how to integrate it
* For Log Anomaly simulation we'll beusing pre-canned logs for the anomaly detection (inception)
* For Metrics, we'll be using pre-canned metric data for training and for the anomaly detection (inception)
* The Events will be created from pre-canned content that is injected into AIManager
* There are also pre-canned ServiceNow Incidents as we don’t do the live integration with SNOW for this training
* The Webpages that are reachable from the Events are static and hosted on my GitHub
* The same goes for ServiceNow Incident pages if you don’t integrate with live SNOW