---
title: "Initialize ELK"
date: 2022-11-03T10:57:46+01:00
weight: 53
---

# Initialize ELK



1. In your OpenShift Console click on the Applications Menu
	
	![K8s CNI](/pics/14_elk.png)

1. Select **Logging**

1. Accept default values




1. Input `app*` for the index pattern
	
	![K8s CNI](/pics/15_elk.png)
	
1. Click `Next Step`

1. Select `@timestamp` for time filter
	
	![K8s CNI](/pics/16_elk.png)
	
1. Click `Create Index Pattern`

1. ELK is now configured. Verify that you have Logs coming in.
	
	![K8s CNI](/pics/17_elk.png)
	
	

	