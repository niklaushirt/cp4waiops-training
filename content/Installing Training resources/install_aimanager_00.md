---
title: "Training Resources"
date: 2022-11-03T10:57:46+01:00
weight: 41
---

# Installing Training resources

![ibm](/cp4waiops-training/pics/ibm/1_CXk3Ocs_Gizl684EP5YC7Q.png)


This will install resources that you will need for the configuration of AIManager in the next chapter.

Those are **assets that typically already exist at a customer**:

* OpenLDAP
* AWX (Open Source Ansible Tower) with preloaded Playbooks
* RobotShop Demo App
* Demo Service Account

This will also load training data for:

* **Log Anomalies**\
	You will integrate with your live ELK instance but you probably don't have 2-3 days to wait for ELK to collect enough logs.
	So we'll train on this pre-canned Log Data.
	
* **Metric Anomalies**\
	For this training we won't have a Metric provider (Instana, ...) so we'll train on pre-canned Metric Data.
	If you want you can always integrate an existing Metric Source on top of the provided training data.
	
* **Service Now** - Similar Incidents\
	For this training we won't have a Service Now Instance so we'll train on pre-canned SNOW Data.
	If you want you can always integrate an existing SNOW instance on top of the provided training data.
	You can find documentation [here](./INTEGRATION_SNOW.md)