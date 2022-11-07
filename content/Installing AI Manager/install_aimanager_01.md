---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 32
---

# Check if the AIManager Installation is ready


{{< hint type=warning  title="Warning" >}}
**This takes up to 60 minutes**\
This takes some time depending on what region of ROKS you have chosen.\
❗ Wait for the installation to complete before continuing. \
The next step explains how to follow the installation progress.
{{< /hint >}}

## Check with the Command Line

Run the following:
	
```bash
while :; do clear; echo "Checking..."; echo "Exit with Ctrl-C"; oc get po -n cp4waiops | grep -v Completed | grep -v Error |grep "0/"; oc get po -n cp4waiops | grep -v Completed | grep -v Error |grep -v "0/" |wc -l| tr -d ' '; oc get po -n cp4waiops | grep -v Completed | grep -v Error |grep "0/" |wc -l| tr -d ' '; sleep 2; done
```

This will list the Pods that are not Ready yet.

🚀 And **when done** you should get only the numbers `129` and `0`.
	
	
## Check with your OpenShift Web Console

1. Select `Pods` and your `cp4waiops` Project
	
	![K8s CNI](/cp4waiops-training/pics/03_fzth_aimanager_check.png)

1. Filter for the relevant statuses
	
	![K8s CNI](/cp4waiops-training/pics/04_fzth_aimanager_check.png)
	
	The drop-down also shows you the number of Pods for the different statuses.
	

1. Sort by `Ready` column
	
	![K8s CNI](/cp4waiops-training/pics/05_fzth_aimanager_check.png)

This allows you to follow along the progress of the installation.

🚀 **When done** you should have 126 Pods in Running status and all Pods should be `1/1, 2/2, 3/3, ...`


{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on Installing AIManager**\
Please continue to the next chapter to learn how to install the Training Resources.
{{< /hint >}}