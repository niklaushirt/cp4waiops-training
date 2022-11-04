---
title: "Preparing to run commands"
date: 2022-11-03T10:57:46+01:00
weight: 21
---

# Preparing to run commands


The official documentation can be found [here](https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli).


Befor continuing, you have to connect to your OpenShift Cluster.


1. Open your Openshift Web Console
1. Select `Copy Login Command`

	![K8s CNI](/cp4waiops-training/pics/01_fzth_ocp_connect.png)

1. Copy the `oc login ..` string

	![K8s CNI](/cp4waiops-training/pics/02_fzth_ocp_connect.png)

1. Open your terminal
1. Paste the `oc login ..` command from above
1. Clone the GitHub Repository into your directory of choice

	```
	git clone https://github.com/niklaushirt/cp4waiops-deployer.git
	

1. Go to the deployer directory

	```
	cd cp4waiops-deployer

	
Now you're good to start with the installation.