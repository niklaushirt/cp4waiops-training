---
title: "Configure Applications"
date: 2022-11-03T10:57:46+01:00
weight: 58
---

# Create Kubernetes Observer

1. In the `AI Manager` "Hamburger" Menu select `Define`/`Data and tool connections`
1. Click `Add connection`
1. Under `Kubernetes`, click on `Add connection`
1. Click `Connect`
1. 🔎 Get the data from your configuration info - section `2.5 Configure Applications - RobotShop Kubernetes Observer` 

    ```bash
    ./tools/11_fzth/get_configuration_info.sh
    ```


1. Fill out the first section of fields (Add connection):

	![K8s CNI](/cp4waiops-training/pics/39_topo.png)

    ```yaml
	Name:                          	RobotShop
	Data center:                   	robot-shop
    ```

1. Click `Next`

1. Fill out the first section of fields (Set advanced options):

	![K8s CNI](/cp4waiops-training/pics/40_topo.png)

    ```yaml
	Kubernetes master IP address:  	172.21.0.1
	Kubernetes API port:           	443
	Token:					from script
	Trust all HTTPS certificates:  	true
	Correlate analytics events:		true
	Namespaces to observe:         	robot-shop
    ```

1. Click `Next`
1. Click `Done`

1. The Integration should show `Running` and eventually `Success`under Schedule




# Configure Applications


1. In the `AI Manager` "Hamburger" Menu select `Operate`/`Resource management`
1. Select tab `Applications`
1. Click `Define Application`
1. Select the two Resource Group

	![K8s CNI](/cp4waiops-training/pics/41_topo.png)

1. Click `Next`
1. Click `Next`

1. Enter Name `RobotShop`
1. Click on the heart to `Mark as favorite`
1. Enter `1000` into `Estimated cost per minute for service disruption`

	![K8s CNI](/cp4waiops-training/pics/42_topo.png)

1. Click `Define Applications`


