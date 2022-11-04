---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 43
---

# Check  Training Resources are ready


❗ This takes some time depending on what region of ROKS you have chosen.
Wait **up to 45 minutes** for the installation to complete.

You can follow along the process by running:
	
```bash
./tools/11_fzth/stream_remote_logs.sh                                                 
```

Or through the OpensHift Web Console:

* Select `default` Namespace
* Select `Pods`
* Click on the `waiops-easy-install-aimanager-practicum-...` Pod
* Select `Logs`

	![K8s CNI](/cp4waiops-training/pics/06_fzth_aimanager_load.png)

🚀 And **when done** you should get the following with `failed=0`.

```bash

PLAY RECAP *********************************************************************
localhost                  : ok=XXX    changed=XXX    unreachable=0    failed=0    skipped=XXX    rescued=0    ignored=0



*****************************************************************************************************************************
 ✅ DONE
*****************************************************************************************************************************
                                                
```
