---
title: "Preparing to run commands"
date: 2022-11-03T10:57:46+01:00
weight: 21
---

# Preparing to run commands in your Terminal


{{< task title="Clone the Training Repository" link="" >}}
1. Open your terminal
1. Clone the GitHub Repository into your directory of choice

	```
	git clone https://github.com/niklaushirt/cp4waiops-deployer.git
	

1. Go to the deployer directory

	```
	cd cp4waiops-deployer


{{< /task >}}



{{< task title="Connect to your OpenShift Cluster" link="" >}}
Connect to your ROKS Openshift Cluster from your local Terminal. Get the `oc login` command from the OpenShift Web Console.
{{< /task >}}


{{< expand "Need Help?" "⬇" >}}

1. Open your Openshift Web Console
1. Select `Copy Login Command`

	![image](/cp4waiops-training/pics/01_fzth_ocp_connect.png)

1. Copy the `oc login ..` string

	![image](/cp4waiops-training/pics/02_fzth_ocp_connect.png)

1. Open your terminal
1. Paste the `oc login ..` command from above
	
Now you're good to start with the installation.
{{< /expand >}}