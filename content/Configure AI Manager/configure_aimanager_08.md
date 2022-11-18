---
title: "Configure Applications"
date: 2022-11-03T10:57:46+01:00
weight: 58
---

# Create RobotShop Application


In this section you will connect to the existing Kubernetes Cluster and create an Applciation for RobotShop.

###

{{< task title="Create Kubernetes Connection (Observer)" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=connections-kubernetes" >}}

A Kubernetes connection provides data about workloads in a Kubernetes cluster and namespace that you choose.\
It loads baseline topology data, such as information about pods, worker nodes, and containers, as well as status from Kubernetes. \
Create a Kubernetes connection to create a Topology for the internal RoboShop application.

{{< /task >}}


{{< expand "Need Help?" "⬇" >}}


1. In the `AIManager` "Hamburger" Menu select `Define`/`Data and tool connections`
1. Click `Add connection`
1. Under `Kubernetes`, click on `Add connection`
1. Click `Connect`

1. 🔎 Get the data from your configuration file `MY_CONFIGURATION.txt` - section  `2.5 Configure Applications - RobotShop Kubernetes Observer` 

    ```bash
    ./tools/11_fzth/get_configuration_info.sh > MY_CONFIGURATION.txt
    ```

1. Fill out the first section of fields (Add connection):

	![image](/cp4waiops-training/pics/39_topo.png)

    ```yaml
	Name:                          	RobotShop
	Data center:                   	robot-shop
    ```

1. Click `Next`

1. Fill out the first section of fields (Set advanced options):

	![image](/cp4waiops-training/pics/40_topo.png)

    ```yaml
	Kubernetes master IP address:  	172.21.0.1
	Kubernetes API port:           	443
	Token:					from MY_CONFIGURATION.txt
	Trust all HTTPS certificates:  	true
	Correlate analytics events:		true
	Namespaces to observe:         	robot-shop
    ```

1. Click `Next`
1. Click `Done`

1. The Integration should show `Running` and eventually `Success`under Schedule
{{< /expand >}}


#



{{< task title="Configure RobotShop Application" link="ttps://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=applications-defining-editing" >}}


You define applications by adding Resource Groups, icons and tags, assigning business criticality levels, and setting service disruption costs.\
Create an application with all RobotShop related Resource Groups.

{{< /task >}}


{{< expand "Need Help?" "⬇" >}}


1. In the `AIManager` "Hamburger" Menu select `Operate`/`Resource management`
1. Select tab `Applications`
1. Click `Define Application`
1. Select the two Resource Group

	![image](/cp4waiops-training/pics/41_topo.png)

1. Click `Next`
1. Click `Next`

1. Enter Name `RobotShop`
1. Click on the heart to `Mark as favorite`
1. Enter `1000` into `Estimated cost per minute for service disruption`

	![image](/cp4waiops-training/pics/42_topo.png)

1. Click `Define Applications`

{{< /expand >}}
