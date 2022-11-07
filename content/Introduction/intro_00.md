---
title: "Introduction"
date: 2022-11-03T10:57:46+01:00
weight: 2
---

# Introduction

![demo](/cp4waiops-training/pics/front.png)


## Those are the Topics that you are going to work on during this Training

{{< expand "Introduction" "..." >}}
In this Training you will learn how to install IBM CloudPak for AIOps and how to configure some basic functionalities.

The idea is to provide you with an optimised way to learn CP4WAIOPS.

You will learn about the following topics:

- Installing `AI Manager` from scratch
- Integrate AI Manager with `OpenLDAP` for user management
- Integrate AI Manager with `ELK` for Log Anomalies
- Define and train `AI Models` for
  - Log Anomaly Detectiom
  - Metric Anomaly Detection
  - Event Grouping
  - Similar Incidents
  - Change Risk 
- Create `Policies` for Story creation and Runbook assignment
- Integrate AI Manager with `Ansible Tower` and create Runbooks in AI Manager
- Create a RobotShop Application `Topology`
- Integrate AI Manager with `Slack`
## In the end you will have a fully functioning demo environment.
{{< /expand >}}



{{< expand "Prerequisites" "..." >}}
In this chapter you will provision your `OpenShift Cluster` for the training.
{{< /expand >}}

{{< expand "Installing the Operator" "..." >}}
In this chapter you will prepare your Cluster for the installation of AI Manager

* Prepare your PC or Mac to run commands against your cluster
* Create the `Namespace`
* Create the IBM Operator `Catalog`
* Install the CP4WAIOPS `Operator`
{{< /expand >}}

{{< expand "Installing AI Manager" "..." >}}
IIn this chapter you will install `AI Manager` into your Cluster.
{{< /expand >}}

{{< expand "Installing Training resources" "..." >}}
In this chapter you will install resources that you will need for the configuration of AI Manager in the next chapter.

Those are assets that typically already exist at a customer:

* `OpenLDAP`
* `AWX` (Open Source Ansible Tower) with preloaded Playbooks
* `RobotShop` Demo App
* Demo Service Account

This will also load `Training Data` for:

* Log Anomalies

	You will integrate with your live ELK instance but you probably don't have 2-3 days to wait for ELK to collect enough logs.
	So we'll train on this pre-canned Log Data.
	
* Metric Anomalies

	For this training we won't have a Metric provider (Instana, ...) so we'll train on pre-canned Metric Data.
	If you want you can always integrate an existing Metric Source on top of the provided training data.
	
* Service Now - Similar Incidents

	For this training we won't have a Service Now Instance so we'll train on pre-canned SNOW Data.
	If you want you can always integrate an existing SNOW instance on top of the provided training data.
	You can find documentation [here](./INTEGRATION_SNOW.md)
{{< /expand >}}

{{< expand "Configure AI Manager" "..." >}}
In this chapter you will:

- Integrate AI Manager with `OpenLDAP` for user management
- Integrate AI Manager with `ELK` for Log Anomalies
- Create `Policies` for Story creation and Runbook assignment
- Integrate AI Manager with `Ansible Tower` and create Runbooks in AI Manager
- Create a RobotShop Application `Topology`

{{< /expand >}}

{{< expand "Train the Models" "..." >}}
In this chapter you will:

- Define and train `AI Models` for
  - Log Anomaly Detectiom
  - Metric Anomaly Detection
  - Event Grouping
  - Similar Incidents
  - Change Risk 

{{< /expand >}}

{{< expand "Test And Demo" "..." >}}
In this chapter you will verify that your environment if working properly by simulating a test incident.
{{< /expand >}}

{{< expand "Configure Slack (optional)" "..." >}}
In this chapter you will integrate AI Manager with `Slack`
{{< /expand >}}

{{< expand "Introduction" "..." >}}
In this Training you will learn how to install IBM CloudPak for Watson AIOps (CP4WAIOPS) and how to configure some basic functionalities.
The idea is to provide an optimised way for you to learn CP4WAIOPS.
## In the end you will have a fully functioning demo environment.
{{< /expand >}}

