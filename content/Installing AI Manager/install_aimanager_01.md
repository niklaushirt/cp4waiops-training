---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 32
---

# Check if the AIManager Installation is ready

{{< task title="Verify that the AIManager Installation is ready" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli" >}}


Check that AIManager is running and that you can continue with the next chapter to install the third-party systems that will support your training.

{{< /task >}}



{{< expand "Solution" "⬇" >}}



## Check with the Command Line

Run the following:
	
```bash
while :; do clear; echo "Checking..."; echo "Exit with Ctrl-C"; echo "---------------"; echo "Not Ready: $(oc get po -n cp4waiops | grep -v Completed | grep -v Error |grep -v '0/' |wc -l| tr -d ' ')"; echo "Ready:     $(oc get po -n cp4waiops | grep -v Completed | grep -v Error |grep '0/' |wc -l| tr -d ' ')"; echo "---------------"; oc get po -n cp4waiops | grep -v Completed | grep -v Error |grep '0/'; sleep 5; done
```

This will list the Pods that are not Ready yet.

![image](/cp4waiops-training/pics/58_install_ok.png)


✅ And **when done** you should get only the numbers, about `Ready: 126` and `Not Ready: 0`.




## Check with your OpenShift Web Console

1. Select `Pods` and your `cp4waiops` Project
	
	![image](/cp4waiops-training/pics/03_fzth_aimanager_check.png)

1. Filter for the relevant statuses
	
	![image](/cp4waiops-training/pics/04_fzth_aimanager_check.png)
	
	The drop-down also shows you the number of Pods for the different statuses.
	

1. Sort by `Ready` column
	
	![image](/cp4waiops-training/pics/05_fzth_aimanager_check.png)

This allows you to follow along the progress of the installation.

✅ **When done** you should have about 126 Pods in Running status and all Pods should be `1/1, 2/2, 3/3, ...`

{{< /expand >}}

###

{{< hint type=caution  title="Important" >}}
**Installation takes up to 60 minutes**\
This takes some time depending on what region of ROKS you have chosen.\
❗ Wait for the installation to complete before continuing. \
The next step explains how to follow the installation progress.
{{< /hint >}}

###

{{< hint type=warning  title="Troubleshooting" >}}
**Topology-Search Pod not starting**\
If you have about 125 pods running and\
if the `aiops-topology-search-xxxx-xxxx` Pod is restarting (CrashLoopBackOff).\
🚀 Please execute the following:

```
oc patch deployment aiops-topology-search -n cp4waiops --patch-file "./ansible/roles/cp4waiops-ai-manager/templates/waiops/patches/aiops-topology-search-patch.yaml"
```
{{< /hint >}}

###

{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on Installing AIManager**\
Please continue to the next chapter to learn how to install the Training Resources.
{{< /hint >}}


