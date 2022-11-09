---
title: "Initialize ELK"
date: 2022-11-03T10:57:46+01:00
weight: 44
---

# Initial ELK Setup

{{< step title="Open ELK" >}}



1. In your OpenShift Console click on the Applications Menu
	
	![image](/cp4waiops-training/pics/14_elk.png)

1. Select **Logging**

{{< /step >}}
{{< step title="Initialize ELK" >}}



1. Click `Allow selected permissions`

1. Input `app*` for the index pattern
	
	![image](/cp4waiops-training/pics/15_elk.png)
	
1. Click `Next Step`

1. Select `@timestamp` for time filter
	
	![image](/cp4waiops-training/pics/16_elk.png)
	
1. Click `Create Index Pattern`

1. Click on `Discover`

1. ELK is now configured. Verify that you have Logs coming in.
	
	![image](/cp4waiops-training/pics/17_elk.png)
	
	

{{< /step >}}

{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on creating Training Resources**\
Please continue to the next chapter to learn how to Configure AIManager.
{{< /hint >}}